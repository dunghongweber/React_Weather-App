import { useState } from "react";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(false);
  const [city, setCity] = useState("");

  const submitRequestToFetchAPI = (value) => {
    setIsLoading(true);
    setError(false);
    setData("");

    fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${value}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
          "x-rapidapi-key":
            "780ba50925msh2dd99a6feb4c4a3p1784d4jsn84fd417e50e6",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw Error("cannot fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(false);
        setCity(value);
      })
      .catch((err) => {
        // console.error(err);
        setIsLoading(false);
        setError(true);
      });
  };

  return { isLoading, error, data, submitRequestToFetchAPI, city };
};

export default useFetch;
