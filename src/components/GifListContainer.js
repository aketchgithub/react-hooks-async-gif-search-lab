import React,{useEffect, useState} from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";


function GifListContainer(){
    const[gifList, setGifList] = useState();
    const[search, setSearch] = useState("")

 useEffect(() => {
    fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=tPoDe5JERws31iS8eywMoBuWX97gh8aH")
    .then(response=> response.json())
    .then((gifList)=> setGifList(gifList.data.slice(0,3)))
 
  
 }, [search])
 console.log(gifList)

 function submitHandler(e) {
    e.preventDefault()
 }

 return (
    <div>
        <GifSearch setSearch={setSearch} handler={submitHandler}/>
        <GifList gifList={gifList}/>
    </div>
 )
 
}

export default GifListContainer;