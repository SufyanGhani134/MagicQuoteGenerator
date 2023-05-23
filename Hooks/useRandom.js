import useFetch from "./useFetch";
import { useEffect, useState } from "react";

function useRandom() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [click, setClick] = useState(true);
  const { magicQuotes, error } = useFetch();

  useEffect(() => {
    if (magicQuotes && magicQuotes.length > 0) {
      let newRandomNumber = Math.floor(Math.random() * magicQuotes.length);
      setRandomNumber(newRandomNumber);
    }
  }, [click]);

  return { randomNumber, click, setClick };
}

export default useRandom;
