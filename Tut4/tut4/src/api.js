import { useState, useEffect } from "react";
const API_KEY = "BXRSB55AKYECE6FSCAFMHRMR4";
const QUERY = "Brisbane";

export default function useWeather() {
    const [ loading, setLoading ] = useState(true);
    const [ headlines, setHeadlines ] = useState([]);
    const [ error, setError] = useState(null);
    useEffect(
        // the effect
        () => {
            getForecastByQuery(QUERY)
            .then((headlines) => {
                setHeadlines(headlines); // first so everything is copied over to finish loading
            })
            .catch((e) => {
                setError(e);
            })
            .finally(() => {
                setLoading(false);
            })
        },
        [],
    );

    return {
        loading,
        headlines,
        error: null, // only null because we dont have any errors to handle yet
    };
}

/*
function getForecastByQuery(q) {
    const url = `https://api.weatherapi.com/v1/forecast.json?q=${q}&key=${API_KEY}`;
    return fetch(url)
        .then((res) => res.json()) // parse json
        .then((res) => res.forecast.forecastday[0].hour)
        .then((forecast) => ({
            time: forecast.time,
            text: forecast.condition.text,
            temp: forecast.temp_c,
            wind: forecast.wind_kph
        })
    );
}
*/

function getForecastByQuery(q) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${q}?key=${API_KEY}`;
    return fetch(url)
        .then((res) => res.json())
        .then((res) => res.days)
        .then((data) =>
            data.map((forecast) => ({
                icon: forecast.icon,
                time: forecast.datetime,
                text: forecast.description,
                temp: forecast.temp,
                wind: forecast.windspeed
            }))
        );
}