import React, { Component } from "react"

class ShortenerTool extends Component {
  constructor() {
    super()
    this.state = {
      longUrl: ""
    }
  }

  // --METHODS-- //

  handleChange = event => {
    this.setState({
      longUrl: event.target.value
    })
  }

  handleSubmit = () => {
    this.setState({
      longUrl: ""
    })
  }

  render() {

    return (
      <div className="shortenerTool">
        <div className="shortenerTool__container">
          <input
            type="text"
            placeholder="Shorten your link"
            value={this.state.longUrl}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Shorten</button>
        </div>

        <div style={{ textAlign: "center", color: "white", marginTop: "2em", fontWeight: "700", textTransform: "uppercase" }}>copy tool goes here</div>

      </div>
    )
  }
}

export default ShortenerTool