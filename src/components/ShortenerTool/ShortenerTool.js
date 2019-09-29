import React, { useState } from "react"


const ShortenerTool = () => {

  // --STATE-- //
  const [longUrl, setLongUrl] = useState("")

  // --METHODS-- //
  const updateField = event => {
    setLongUrl(event.target.value)
  }

  const handleSubmit = () => {
    setLongUrl("")
  }

  // --JSX-- //
  return (
    <div className="shortenerTool">

      <div className="shortenerTool__container">
        <input
          type="text"
          placeholder="Shorten your link"
          value={longUrl}
          onChange={updateField}
        />
        <button onClick={handleSubmit}>Shorten</button>
      </div>

      <div style={{
        textAlign: "center",
        color: "white",
        marginTop: "2em",
        fontWeight: "700",
        textTransform: "uppercase"
      }}>copy tool goes here</div>

    </div>
  )
}


export default ShortenerTool