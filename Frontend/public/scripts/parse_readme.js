import markdownit from "markdown-it";
import { JSDOM } from "jsdom";
import fs from "fs";

// const result = md.render('# markdown-it rulezz!');

const md = new markdownit();

const readmeContent = fs.readFileSync("README.md", "utf-8"); //good for small file, or fs.readFile works better

const htmlContent = md.render(readmeContent); //from Markdown to HTML by using markdownit

const dom = new JSDOM(htmlContent); //parse htmlContent,解析成可操作的dom
const document = dom.window.document;

const tables = document.querySelectorAll("table"); //querySelector
const parsedData = [];

const tableData = []; //整个表格的数据

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

    tableData.push(rowData); //把每一行加到表格数据中
  }
});

parsedData.push(tableData);

// 输出 JSON 结果
console.log(JSON.stringify(parsedData, null, 2)); //value, replacer, space
