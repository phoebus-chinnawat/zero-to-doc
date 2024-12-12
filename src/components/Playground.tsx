import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

import { CodePreview } from "docusaurus-plugin-code-preview";

export default function Playground(props) {
  // console.log('props', props.code.react())
  const src = useBaseUrl("code/example");
  return (
    <CodePreview
      {...props}
      viewport={{
        viewports: [{ name: "iOS", src: (baseUrl) => baseUrl }],
        defaultViewport: "iOS",
      }}
      title={"Live Code Block Example"}
      description='test'
      source={src}
      devicePreview

      output={{
        outputs: [
          {
            name: "JavaScript",
            value: "javascript",
          },
          {
            name: "React",
            value: "react",
          },
          {
            name: "Angular",
            value: "angular",
          },
          {
            name: "Vue",
            value: "vue",
          },
        ],
        // This is the default selected option in the rendered component
        defaultOutput: "react",
      }}
      code={{
        react: () => `this is a react code`,
        vue: () => `this is a vue code`,
        javascript: () => `this is a javacript code`,
        angular: () => `this is an angular code`,
      }}
    />
  );
  // return <div>{props.code.react()}</div>
}
