import { useState, useEffect } from 'react';
const SERVER_URL = "http://4.237.58.241:3000"

function getIem(q) {
    return fetch(`${SERVER_URL}/user/login`)
        .then(r => r.json())
        .then(j => j.forecast.forecastday[0].hour)
        .then(hours => hours.map(hour => ({
            time: hour.time,
            text: hour.condition.text,
            temp: hour.temp_c,
            wind: hour.wind_kph
        })));
}

export function postLogin(email, password, setPassValid, setEmailValid, setLoginError) {
    fetch(`${SERVER_URL}/user/login`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: `${email}`, password: `${password}` }),
    })
    .then((res) => {
        if (res.status === 400) {
            setPassValid(false);
            setEmailValid(false);
            res.json().then((res) => {setLoginError(res.message)});
        }
        else if (res.status === 401) {
            setPassValid(false);
            setEmailValid(false);
            res.json().then((res) => {setLoginError(res.message)});
        }
        else {
            res.json().then((res) => {
                localStorage.setItem("token", res.token);
                console.log(res);
            })
        }
    })
    .catch((error) => {
        console.log(error);
    });
}
