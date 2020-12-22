import React, {useEffect, useState} from "react";
import axios from 'axios';
import Characters from "./Characters";
import Pagination from "./Pagination";

function Home() {

    const [characters, setCharacters] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [searchCategory, setSearchCategory] = useState("");
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [charactersPerPage] = useState(10);
  
    useEffect( () => {
      getAllCharacters();
    }, []);
  
    
    // Creating a function that gets all the data
    const getAllCharacters = async () => {
      setLoading(true);
      const response = await axios.get("https://www.breakingbadapi.com/api/characters");
      setCharacters(response.data);
      setSearchCategory("");
      setLoading(false);
    }
  
    // Creating a function that gets only one specific character searched by name
    const getSpecificCharacter = async (e) => {
      setLoading(true);
      e.preventDefault();
      const response = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${searchName}`);
      setCharacters(response.data);
      setSearchName("");
      setLoading(false);
    }
  
    // Creating a function that gets only specific Category
    const getSpecificCategory = async (e) => {
      setLoading(true);
      e.preventDefault();
      const response = await axios.get(`https://www.breakingbadapi.com/api/characters?category=${searchCategory}`);
      setCharacters(response.data);
      setSearchCategory("");
      setLoading(false);
    }
  
    // Logic for Pagination that will get current characters
    const indexOfLastCharacter = currentPage * charactersPerPage;
    const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
    const currentCharacter = characters.slice(indexOfFirstCharacter, indexOfLastCharacter)
  
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
  
    // Code for Search by name
    const updateSearchName = e => {
      setSearchName(e.target.value);
    }
    const updateSearchCategory = e => {
      setSearchCategory(e.target.value);
    }

    return (
        <div className="container mt-5">
        <h1 className="text-primary mb-3">The Breaking Bad Characters</h1>
        <form onSubmit={getSpecificCharacter}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search a character by name" value={searchName} onChange={updateSearchName}/>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
        <br />
        <form onSubmit={getSpecificCategory}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search a character by category" value={searchCategory} onChange={updateSearchCategory}/>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
        <br />
        <Characters characters={currentCharacter} loading={loading}/>
        <Pagination charactersPerPage={charactersPerPage} totalCharacters={characters.length} paginate={paginate} />
        </div>
    )
}

export default Home
