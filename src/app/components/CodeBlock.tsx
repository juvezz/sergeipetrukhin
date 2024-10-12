// components/CodeBlock.tsx

"use client"; // Declare this as a Client Component

import React, { useState } from 'react';

interface CodeBlockProps {
  codeString: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ codeString }) => {
  const [showCopied, setShowCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setShowCopied(true);

    // Hide the copied message after a few seconds
    setTimeout(() => {
      setShowCopied(false);
    }, 2000);
  };

  return (
    <div className="relative bg-gray-100 dark:bg-gray-700 p-4 rounded-md shadow-md my-2">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-blue-500 text-white rounded-md px-2 py-1 text-sm"
      >
        Copy
      </button>
      
      {showCopied && (
        <span className="absolute top-2 right-16 text-green-500 text-sm">
          Copied!
        </span>
      )}

      <pre>
        <code>{codeString}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
