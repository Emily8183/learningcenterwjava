import markdownit from "markdown-it";
import { JSDOM } from "jsdom";
import path from "path";
import fs from "fs";

process.chdir("leetcode-study-notes");

// const result = md.render('# markdown-it rulezz!');

const md = new markdownit();
// const baseDir =
//   "C:/leetcode-study-notes/leetcode-study-notes";

const categories = fs
  .readdirSync(".") //"." means current directory
  .filter((category) => fs.statSync(category).isDirectory());

categories.forEach((category) => {
  const readmePath = path.join(category, "README.md");

  if (fs.existsSync(readmePath)) {
    const readmeContent = fs.readFileSync(readmePath, "utf-8"); //good for small file, or fs.readFile works better

    const htmlContent = md.render(readmeContent); //from Markdown to HTML by using markdownit

    const dom = new JSDOM(htmlContent); //parse htmlContent,解析成可操作的dom
    const document = dom.window.document;

    const tables = document.querySelectorAll("table"); //querySelector
    const parsedData = [];

    // const tableData = []; //整个表格的数据

    tables.forEach((table) => {
      const rows = table.querySelectorAll("tr"); //选择table的所有 <tr> 元素,每一行，存给rows,rows的type是List

      const headers = Array.from(rows[0].querySelectorAll("th")).map((th) =>
        th.textContent.trim()
      ); //表头

      for (let i = 1; i < rows.length - 1; i++) {
        const cells = Array.from(rows[i].querySelectorAll("td")).map((td) =>
          td.textContent.trim()
        );

        let rowData = {}; //create an object，表格单行的数据

        headers.forEach((header, index) => {
          rowData[header] = cells[index] || ""; // 处理可能的空单元格
        });

        parsedData.push(rowData); //把每一行加到表格数据中
      }
    });

    // 输出 JSON 结果
    const outputFilePath = `problems-${category}.json`;
    fs.writeFileSync(outputFilePath, JSON.stringify(parsedData, null, 2));
  }
});
