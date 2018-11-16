import React from 'react';

const Results = (props) => {
    const gyphs = props.results.map((result, i) => {
        console.log(result.source,)

    return(
        <img
            alt="giphyImg"
            key={i}
            src={result.images.downsized.url}
            style={{
                width: '200px',
                height: '200px'
            }}
        />
    )})
    return(
        <div>
            <h5>These are your Gifs</h5>
            <ul>{gyphs}</ul>
        </div>
    )
}

export default Results;