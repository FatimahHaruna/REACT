import { createRoot } from "react-dom/client"
import Hello from "./App"
import Name from "./jsxbasics"
import Sport from "./Radio"
import FavoriteColor from "./useState-hooks"
import SuspenseList from "./suspense"
import Timer from "./useEffect-hooks"
import Counter from "./useEffect-hooks"

const root = createRoot(document.getElementById("root"))

root.render(
  <>
    <Hello />
    <Name />
    <SuspenseList />
    <FavoriteColor />
    <Sport />
    <Timer />
    <Counter />
  </>
)