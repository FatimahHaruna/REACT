
function List() {
    const names = ["Alice", "Bob", "Charlie", "David"];
    return (
        <>
            <h1>List of Students:</h1>
            <ul>
                {names.map((name, index) => 
                <li key={index}>{name}</li>)}
            </ul>
        </>
    )
}

export default List;