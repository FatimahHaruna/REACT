import { useState, createContext, useContext } from "react"

const UserContext = createContext()

function Component1() {
    const [user, setUser] = useState("John")

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <p>{`Hello ${user}`}</p>
            <Component2 />
        </UserContext.Provider>
    )
}

function Component2() {
    return (
        <>
            <p>Component 2</p>
            <Component3 />
        </>
    )
}

function Component3() {
    const user = useContext(UserContext)
    return (
        <p>{`Hello, ${user} again!`}</p>
    )
}

export default Component1