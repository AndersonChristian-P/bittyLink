import React, { Component } from "react"

class ShortenerTool extends Component {
  constructor() {
    super()
    this.state = {
      longUrl: ""
    }
  }

  handleChange = event => {
    this.setState({
      longURL: event.target.value
    })
  }

  handleSubmit = () => {
    console.log("HERE IS YOUR SHORTENED URL")
  }

  render() {

    console.log(this.state.longUrl)

    return (
      <>
        <div>Shortener</div>
        <input
          type="text"
          placeholder="Shorten your link"
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Shorten</button>
      </>
    )
  }
}

export default ShortenerTool