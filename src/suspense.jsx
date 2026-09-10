import { Suspense, lazy } from "react"
const List = lazy(() => import("./List"))

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