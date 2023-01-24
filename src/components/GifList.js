import React from "react";

function GifList({dataFetch}) {

    const returnedImages = dataFetch &&
    dataFetch.map((data, index) =>(
        <li key={index}>
            <img src={data.images.original.url} />
        </li>
    ));
    return <ul>{returnedImages}</ul>
}
export default GifList;