import { createRoot } from "react-dom/client"
import Hello from "./App"
import Name from "./jsxbasics"
import List from "./list"
import Sport from "./radio"
import { Suspense } from "react"

const root = createRoot(document.getElementById("root"))

root.render(
  <>
    <Hello />
    <Name />
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <List />
      </Suspense>
    </div>
    <Sport />
  </>
)