// "use client";

// import { useEffect, useRef } from "react";
// import Prism from "prismjs";
// import "prismjs/components/prism-typescript";
// import "prismjs/components/prism-tsx";
// import "prismjs/components/prism-bash";
// // @ts-ignore: side-effect import for prism theme stylesheet
// import "prismjs/themes/prism-tomorrow.css";
// import { CopyButton } from "./copy-button";
// import { cn } from "@/lib/utils";

// interface CodeBlockProps {
//   code: string;
//   language?: string;
//   className?: string;
//   showCopy?: boolean;
// }

// export function CodeBlock({
//   code,
//   language = "tsx",
//   className,
//   showCopy = true,
// }: CodeBlockProps) {
//   const codeRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     if (codeRef.current) {
//       Prism.highlightElement(codeRef.current);
//     }
//   }, [code]);

//   return (
//     <div className={cn("relative rounded-lg border border-border", className)}>
//       {showCopy && (
//         <div className="absolute right-3 top-3 z-10">
//           <CopyButton code={code} />
//         </div>
//       )}
//       <div className="overflow-x-auto rounded-lg bg-[#1d1f21] p-4 dark:bg-card">
//         <pre className="!m-0 !bg-transparent !p-0">
//           <code
//             ref={codeRef}
//             className={`language-${language} !text-sm !leading-relaxed`}
//           >
//             {code}
//           </code>
//         </pre>
//       </div>
//     </div>
//   );
// }



"use client";

import { CopyButton } from "./copy-button";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  showCopy?: boolean;
}

export function CodeBlock({
  code,
  language = "tsx",
  className,
  showCopy = true,
}: CodeBlockProps) {
  return (
    <div className={cn("relative rounded-lg border border-border", className)}>
      {showCopy && (
        <div className="absolute right-3 top-3 z-10">
          <CopyButton code={code} />
        </div>
      )}
      <div className="overflow-x-auto rounded-lg bg-[#1d1f21] p-4">
        <pre className="!m-0 !bg-transparent !p-0 text-sm leading-relaxed text-gray-100">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}