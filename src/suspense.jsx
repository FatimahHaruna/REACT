import { Suspense, lazy } from "react"
const List = lazy(() => import("./list"))

function SuspenseList() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <List />
            </Suspense>
        </>
    )
}

export default SuspenseList