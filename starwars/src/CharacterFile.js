import React from 'react';

const CharacterFile = ({info}) => {
    console.log(info);
    return (
            <tr>
                <th scope="row">{info.name}</th>
                <td>{info.gender}</td>
                <td>{info.height}</td>
                <td>{info.mass}</td>
                <td>{info.birth_year}</td>
                <td>{info.eye_color}</td>
                <td>{info.hair_color}</td>
                <td>{info.skin_color}</td>
           </tr>
    )
}

export default CharacterFile;