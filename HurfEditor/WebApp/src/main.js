//Basic and important IMPORTS:
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { basicSetup } from "codemirror";

//CODE SYNTAX FOR LANGUAGES:
import { html } from "@codemirror/lang-html";
import { javascript } from "@codemirror/lang-javascript";
import { css } from "@codemirror/lang-css";

//More imports:
import { colorPicker, wrapperClassName } from "@replit/codemirror-css-color-picker";
import { indentationMarkers } from "@replit/codemirror-indentation-markers";


//Unused imports, FOR NOW:
//import { keymap } from "@codemirror/view";
//import { defaultKeymap } from "@codemirror/commands";



// dynamically inject styles:
const style = document.createElement("style");
style.textContent = `
  .${wrapperClassName} {}
  .${wrapperClassName} input[type="color"] {}

`;
document.head.appendChild(style);






const state = EditorState.create({
  doc: `<!DOCTYPE html>
  <html>
  <head>
    <style>
      .box { color: #FF00FF; }
    </style>
  </head>
  <body>
  <script>
    function greet(name) {
      console.log("Hello " + name);
    }
    greet("Developer");
  </script>
  </body>
  </html>
  `,
  extensions: [
    basicSetup,
    html(),css(),javascript(),
    colorPicker,
    indentationMarkers({
      highlightActiveBlock: true,
      activeThickness:5,
      hideFirstIndent: false,
      markerType: "fullScope",
      thickness: 3,
      colors: {
        light: 'lightblue',
        dark: 'DarkBlue',
        activeLight: 'LightGreen',
        activeDark: 'DarkGreen',
      }
    })

  ]
});

const view = new EditorView({
  state,
  parent: document.getElementById("editor"),
});
