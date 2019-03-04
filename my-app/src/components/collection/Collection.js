import * as React from "react"
import Items from "../items/Item"
import "./Collection.css"

class Collection extends React.Component {
  render() {
    return (
      <div className="main">
      <div className="header">
        <p>Amy's Travel Destinations</p>
        <hr></hr>
      </div>
      <Items />
      </div>
    )
  }
}

export default Collection