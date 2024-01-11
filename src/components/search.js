import React, { useState, useEffect } from "react";
import { Index } from "elasticlunr";
import { Link } from "gatsby";



// Search component
const Search = (props) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [index, setIndex] = useState(null);

  useEffect(() => {
    const getOrCreateIndex = () =>
      index
        ? index
        : Index.load(props.searchIndex);

    setIndex(getOrCreateIndex());
  }, [index, props.searchIndex]);

  const search = (evt) => {
    const searchTerm = evt.target.value;
    setQuery(searchTerm);

    if (index) {
      const searchResults = index
        .search(searchTerm, {})
        .map(({ ref }) => index.documentStore.getDoc(ref));

      setResults(searchResults);
    }
  };

  return (
    <div>
      <input type="text" value={query} onInput={search} />
      <ul>
        {results.map((page) => (
          <li key={page.id}>
            <Link to={"/portfolio/" + page.slug}>{page.namn}</Link>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
