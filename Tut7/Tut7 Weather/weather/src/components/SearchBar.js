import { useState } from 'react'

function SearchBar(props) {
    const [ innerSearch, setInnerSearch ] = useState('');
    return (
        <div>
            <h1>Search is: {innerSearch}</h1>
            <input
            aria-labelledby="search-button"
            name="search"
            id="search"
            type="search"
            value={innerSearch}
            onChange={(e) => setInnerSearch(e.target.value)}
            />
            <button
            id="search-button"
            type="button"
            onClick={() => props.onSubmit(innerSearch)}
            >
            Search
            </button>
        </div>
    );
}

export default SearchBar;