import { useState } from "react";

function useSearch(searchArr) {
  const [searchResult, setSearchResult] = useState("");
  let searchedQuote = [];

  const searchMagicQuoteByAuthor = (searchQuote) => {
    if (searchQuote.trim() === "") {
      setSearchResult([]);
      return;
    }
    searchArr.forEach((searchItem) => {
      if (
        new RegExp(searchQuote.toLowerCase()).test(
          searchItem.author.toLowerCase()
        )
      ) {
        searchedQuote.push(searchItem);
      }
    });
    setSearchResult(searchedQuote);
  };

  const searchMagicQuoteByText = (searchQuote) => {
    if (searchQuote.trim() === "") {
      setSearchResult([]);
      return;
    }
    const searchedQuote = searchArr.filter((searchArr) =>
      searchArr.text.toLowerCase().startsWith(searchQuote.trim().toLowerCase())
    );
    setSearchResult(searchedQuote);
  };

  return { searchMagicQuoteByAuthor, searchMagicQuoteByText, searchResult };
}

export default useSearch;
