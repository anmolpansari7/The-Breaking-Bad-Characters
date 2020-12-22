import React from 'react';
import {Link} from 'react-router-dom';

// Destructuring
function Characters({ characters, loading}) {

    if(loading) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
        <table className="table table-hover">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Occupation</th>
                <th scope="col">Date of Birth</th>
                <th scope="col">Status</th>
            </tr>
        </thead>      
        <tbody>
            {characters.map(character => (              
                <tr key={character.char_id}>
                <td><Link to={`/about/${character.char_id}`} style={{ textDecoration: 'none'}}>{character.name}</Link></td>
                <td>{character.occupation[0]}</td>
                <td>{character.birthday}</td>
                <td>{character.status}</td>
                </tr>
            ))}
        </tbody>
        </table>       
        </div>  
    )
}

export default Characters
