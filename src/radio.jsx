import { useState } from 'react';

function Sport() {
    const [sport, setSport] = useState('Football');

    const handleChange = (event) => {
        setSport(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Your favorite sport is: ${sport}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>Select your favourite Sport!</p>
            <label>
                <input
                    type='radio'
                    name='sport'
                    value='Football'
                    checked={sport === 'Football'}
                    onChange={handleChange}
                />
                Football
            </label>
            <br/>
            <label>
                <input
                    type='radio'
                    name='sport'
                    value='Volleyball'
                    checked={sport === 'Volleyball'}
                    onChange={handleChange}
                />
                Volleyball
            </label>
            <br/>
            <label>
                <input
                    type='radio'
                    name='sport'
                    value='Basketball'
                    checked={sport === 'Basketball'}
                    onChange={handleChange}
                />
                Basketball
            </label>
            <br/>
            <label>
                <input
                    type='radio'
                    name='sport'
                    value='Hockey'
                    checked={sport === 'Hockey'}
                    onChange={handleChange}
                />
                Hockey
            </label>
            <br/>
            <label>
                <input
                    type='radio'
                    name='sport'
                    value='Badminton'
                    checked={sport === 'Badminton'}
                    onChange={handleChange}
                />
                Badminton
            </label>
            <br/>
            <button type='submit'>Submit</button>
        </form>
    )
};
export default Sport;