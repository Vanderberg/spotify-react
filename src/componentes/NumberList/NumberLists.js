import React from 'react';

const NumberList = () => {
    const numbers = [1, 2, 3, 4, 5];

    return (
        <div>
            <h2>Lista de Números</h2>
            <ul>
                {numbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>
        </div>
    );
};

export default NumberList;