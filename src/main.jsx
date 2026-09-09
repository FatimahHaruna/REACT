import { createRoot } from "react-dom/client"
import Hello from "./App"
import Name from "./jsxbasics"
import Sport from "./radio"

const root = createRoot(document.getElementById("root"))

root.render(
  <>
    <Name />
    <Hello />
    <Sport />
  </>
)