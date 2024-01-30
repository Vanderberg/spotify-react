// import React, { Component } from 'react';

// class ArtistList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             numbers: [
//                 { "id": 1, "name": "Foo Fighters" },
//                 { "id": 2, "name": "Michael Jackson" },
//                 { "id": 3, "name": "Emicida" }
//             ]
//         };
//     }

//     render() {
//         return (
//             <div>
//                 <h2>Lista de Artistas</h2>
//                 <ul>
//                     {this.state.numbers.map(artist => (
//                         <li key={artist.id}>{artist.name}</li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     }
// }

// export default ArtistList;


import React, { useState } from 'react';

const ArtistList = () => {
    const [numbers, setNumbers] = useState([
        { "id": 1, "name": "Foo Fighters" },
        { "id": 2, "name": "Michael Jackson" },
        { "id": 3, "name": "Emicida" }
    ]);

    // Função para atualizar o estado mantendo numbers como um array
    const updateNumbers = (newNumbers) => {
        if (Array.isArray(newNumbers)) {
            setNumbers(newNumbers);
        }
    };

    // Exemplo de chamada para atualizar o estado
    // updateNumbers([ /* novo array de artistas */ ]);

    return (
        <div>
            <h2>Lista de Artistas usando useState</h2>
            <ul>
                {numbers.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ArtistList;
