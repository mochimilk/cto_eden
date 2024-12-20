import * as React from "react";
import ReactMarkdown from 'react-markdown';
import content from '../Posts/GettingStarted.md';



const Content: React.FC = () => {
  return (
    <div className="content">
            {/* <ReactMarkdown>{content}</ReactMarkdown>; */}
    </div>
  )
};

export default Content;
