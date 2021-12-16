import React, {useEffect} from 'react';
// import axios from 'axios';

const axios = require('axios').default;

const ShowJokeAxios = () => {

    useEffect(() => {
        axios.get('https://icanhazdadjoke.com/', {
            headers: {Accept: "application/json"}
        })
        .then( function (data) {

            document.querySelector("h3").textContent = data.joke
        
        });

    });

    return (
        <>
            <h3></h3>
        </>
    );

};

export default ShowJokeAxios;