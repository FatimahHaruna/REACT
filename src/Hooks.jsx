import { useState } from 'react';

function FavoriteColor() {
    const [color, setColor] = useState("Red");

    return (
        <>
            <h5>My favourite color is {color}</h5>
            <button type='button' onClick={() => setColor('Yellow')}>Yellow</button>
            <button type='button' onClick={() => setColor('Purple')}>Purple</button>
            <button type='button' onClick={() => setColor('Pink')}>Pink</button>
            <button type='button' onClick={() => setColor('Black')}>Black</button>
            <button type='button' onClick={() => setColor('Green')}>Green</button>
        </>
    )
}

export default FavoriteColor;