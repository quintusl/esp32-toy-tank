import { useState } from 'react';
import { BlocklyWorkspace } from 'react-blockly';

const MY_TOOLBOX = {
    "kind": "categoryToolbox",
    "contents": [
      {
        "kind": "category",
        "name": "Core",
        "contents": [
          {
            "kind": "block",
            "type": "controls_if"
          },
          {
            "kind": "block",
            "type": "logic_compare"
          },
        ]
      }
    ]
  }

export function CodeBlock() {
  const [xml, setXml] = useState('');

  return (
    <BlocklyWorkspace
      className="w-[100vw] h-[100vh]" // you can use whatever classes are appropriate for your app's CSS
      toolboxConfiguration={MY_TOOLBOX} // this must be a JSON toolbox definition
      initialXml={xml}
      onXmlChange={setXml}
    />
  )
}