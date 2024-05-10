import axios from "axios";
import { useState } from "react";

const useFetch = (url) => {
  const [response, setResponse] = useState();
  const [hasError, setHasError] = useState(false);

  const getLocation = () => {
    axios.get(url)
      .then(res => {
        console.log("https://rickandmortyapi.com/api/location/", res.data)
        setResponse(res.data)
        setHasError(false)
      })
      .catch(err => {
        console.log(err)
        setHasError(true)
      })
  }

  const getResident = () => {
    axios.get(url)
      .then(res => {
        console.log("https://rickandmortyapi.com/api/location/", res.data)
        setResponse(res.data)
        setHasError(false)
      })
      .catch(err => {
        console.log(err)
        setHasError(true)
      })
  }

  return { response, getLocation, getResident, hasError };
}

export default useFetch;
