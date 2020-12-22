import React, {useEffect, useState} from "react";
import "./characterPage.css"
import axios from 'axios';

function CharacterPage({ match }) {
    const [character, setCharacter] = useState({});
    const [quotes, setQuotes] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getSpecificCharacter();
    }, []);
    
    // Creating a function that gets only one specific character searched by id
    const getSpecificCharacter = async () => {
        setLoading(true);
        const response = await axios.get(`https://www.breakingbadapi.com/api/characters/${match.params.id}`);
        const res = await axios.get(`https://www.breakingbadapi.com/api/quotes/${match.params.id}`);
        setCharacter(response.data[0]);
        setQuotes(res.data[0]);
        setLoading(false);
      } 
    
    if(loading) {
        return(
            <h1>Loading...</h1>
    )}
    return (
        <div className="character__card">
        <div className="character__cardLeft">
            <img className="character__image" src={character.img} alt="Character Image"/>
        </div>
        <div className="character__cardRight">
        <h1 className="character__name">{character.name}</h1>
        <table className="table">
            <tbody>
                <tr>
                <th scope="row">Birthday</th>
                <td>{character.birthday}</td>
                </tr>
                <tr>
                <th scope="row">Occupation</th>
                <td>{character.occupation}</td>
                </tr>
                <tr>
                <th scope="row">Status</th>
                <td colSpan="2">{character.status}</td>
                </tr>
                <tr>
                <th scope="row">Nickname</th>
                <td colSpan="2">{character.nickname}</td>
                </tr>
                <tr>
                <th scope="row">Portrayed</th>
                <td colSpan="2">{character.portrayed}</td>
                </tr>
                <tr>
                <th scope="row">Appearance</th>
                <td colSpan="2">{character.appearance}</td>
                </tr>
                <tr>
                <th scope="row">Quotes</th>
                <td colSpan="2">{quotes?.quote}</td>
                </tr>
            </tbody>
        </table>
        <a href="/">Go Back</a>
        </div>
        </div>
    )
}

export default CharacterPage
