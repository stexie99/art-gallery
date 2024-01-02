import React, { useEffect, useState } from 'react'

function Gallery(props){
    return (
    <>
        <div>
            <img src={props.objectImg} alt={props.title}/>
            <p>{props.artist}</p>
        </div>
    </>
    )
}
export default Gallery