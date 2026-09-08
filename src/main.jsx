import { createRoot } from "react-dom/client"
import Hello from "./App"
import Sport from "./radio"

const root = createRoot(document.getElementById("root"))

root.render(
  <>
    <Hello />
    <Sport />
  </>
)