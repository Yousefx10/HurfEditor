import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import { basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";

const initialCode = `// Simple CodeMirror 6 Editor inside WinForms

function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet("Developer");
`;

new EditorView({
  state: EditorState.create({
    doc: initialCode,
    extensions: [
      basicSetup,
      keymap.of(defaultKeymap),
      javascript()
    ]
  }),
  parent: document.getElementById("editor"),
});
