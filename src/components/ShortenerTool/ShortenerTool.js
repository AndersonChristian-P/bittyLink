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
      longUrl: event.target.value
    })
  }

  handleSubmit = () => {
    console.log(`HERE IS YOUR SHORTENED URL`)
    // code will go here to send the long URL to the server side where it will be shortened and then returned
    this.setState({
      longUrl: ""
    })
  }

  render() {

    console.log(this.state.longUrl)

    return (
      <>
        <div>Shortener</div>
        <input
          type="text"
          placeholder="Shorten your link"
          value={this.state.longUrl}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Shorten</button>
      </>
    )
  }
}

export default ShortenerTool