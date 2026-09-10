import { createRoot } from "react-dom/client"
import Hello from "./App"
import Name from "./jsxbasics"
import Sport from "./Radio"
import FavoriteColor from "./Hooks"
import SuspenseList from "./suspense"

const root = createRoot(document.getElementById("root"))

root.render(
  <>
    <Hello />
    <Name />
    <SuspenseList />
    <FavoriteColor />
    <Sport />
  </>
)