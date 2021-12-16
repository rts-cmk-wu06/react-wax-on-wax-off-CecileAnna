import React, {useEffect} from 'react';

const ShowJoke = () => {

    useEffect(() => {
        fetch('https://icanhazdadjoke.com/', {
            headers: {Accept: "application/json"}
        })
        .then((response) => response.json())
        .then((data) => document.querySelector("p").textContent = data.joke);

    });

    return (
        <>
            <p></p>
        </>
    );

};

export default ShowJoke;