import { useEffect, useState } from "react";

const URL = "https://type.fit/api/quotes";

function useFetch() {
  const [magicQuotes, setMagicQuotes] = useState("Magic Quote");
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  async function getData() {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      data.forEach((obj) => {
        if (obj.author == null) {
          obj.author = "Anonymous";
        }
      });
      localStorage.setItem("magicQuotes", JSON.stringify(data));
      setMagicQuotes(JSON.parse(localStorage.getItem("magicQuotes")));
    } catch (error) {
      setError(error.message);
    }
  }
  useEffect(() => {
    setIsLoading(true);
    const storedQuotes = JSON.parse(localStorage.getItem("magicQuotes"));
    if (storedQuotes) {
      setMagicQuotes(storedQuotes);
    } else {
      getData();
    }
    setIsLoading(false);
  }, [URL]);
  return { magicQuotes, error, isLoading };
}
export default useFetch;
