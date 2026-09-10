import { useState, useEffect } from "react"
//useEffect is a hook that allows you to perform side effects in your components.
// It takes two arguments: a function that contains the side effect code, 
// and an array of dependencies that determine when the effect should run.
//useEffect(<function>, <dependencies>) - second variable is optional. 
// If the array is empty, the effect will only run once, after the initial render. 
// If the array contains variables, the effect will run whenever those variables change.

function Timer() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000);
    })

    return (
        <h4>Count: {count}</h4>
    )
}

export default Timer