import React, {useState, useEffect}  from 'react';
import Axios from 'axios';
import { Table } from 'reactstrap';
import CharacterFile from './CharacterFile.js';

const Character = () => {

    const [characterInfo, setCharacterInfo] = useState([]);

    useEffect(() => {
        Axios
            .get("https://swapi.dev/api/people")
            .then(response => {setCharacterInfo(response.data.results);})
            .catch(error => {console.log(error);});
    }, []);

    console.log(characterInfo);

    return (
        <div className="characterCreate">
            <Table size="sm">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Height</th>
                    <th>Mass</th>
                    <th>BirthYear</th>
                    <th>Eye Color</th>
                    <th>Hair Color</th>
                    <th>Skin Color</th>
                </tr>
                </thead>
                <tbody>
                {characterInfo.map(e => {
                return <CharacterFile info={e} />
                })}
                </tbody>
            </Table>
         </div>
      )
}

export default Character;