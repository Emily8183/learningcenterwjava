import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const DisplayGithubSolutions = ({ selectedProblems }) => {
  return (
    <div className="posts-container">
      {selectedProblems.map((postContent) => (
        // 回调函数这里要用圆括号或者在大括号中显式地 return 内容
        <div className="post" key={postContent.sha}>
          <h4>
            <b>Solution {postContent.name}</b>
          </h4>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {typeof postContent.content === "string"
              ? postContent.content
              : JSON.stringify(postContent.content)}
            {/* 确保 content 是字符串 */}
          </ReactMarkdown>
        </div>
      ))}
    </div>
  );
};

export default DisplayGithubSolutions;
