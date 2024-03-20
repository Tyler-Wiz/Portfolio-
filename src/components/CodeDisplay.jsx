import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeDisplay = ({ code, language }) => {
  const customStyle = {
    lineHeight: "1.5",
    fontSize: "2rem",
    borderRadius: "5px",
    padding: "20px",
  };

  return (
    <SyntaxHighlighter
      language={language}
      style={solarizedlight}
      customStyle={customStyle}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeDisplay;
