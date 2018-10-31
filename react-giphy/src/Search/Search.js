import React from 'react';

const Search = (props) => {
    return (
        <div>
            <h2>Search: </h2>
            <form onSubmit={props.handleSubmit}>
                <input type="text" name="query" onChange={props.handleInput} value={props.query} placeholder="search" />
                <button type="submit" value="Submit">Search</button>
            </form>
        </div>
    )
}

export default Search;