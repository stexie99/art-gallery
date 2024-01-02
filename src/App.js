import logo from './logo.svg'
import Gallery from './views/Gallery'
import Button from './views/Button'
import React, { useState, useEffect } from 'react'

function App() {
  let [artId, setArtId] = useState(12720)
  let [data, setData] = useState({})

  useEffect(() => {
      document.title='Welcome to Artworld'
      fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then(response => response.json())
      .then(resData => setData(resData))
  }, [artId])

  const handleIterate = (e) => {
      setArtId(artId + Number(e.target.value))
  }

  return (
    <>
      <div>
        <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
        <Button handleIterate = {handleIterate} />
      </div>
    </>
  )
}

export default App;
