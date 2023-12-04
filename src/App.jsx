import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import React, { Component } from "react";

let secs = 0;

function myTimer() {
  const date = new Date();
  secs = secs + 1;

  document.getElementById("timer").innerHTML = secs;
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fullname: "Paul Ibrahim",
      bio: " is a boy",
      imgSrc:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fvectors%2Fboy-svg&psig=AOvVaw0GOZutEIfOUD00lI3iF2S1&ust=1701780720594000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMicva3p9YIDFQAAAAAdAAAAABAE",
      profession: "student",
      shows: true,
      display: "block",
    };
  }

  Toggle = () => {
    if (this.state.shows == true) {
      this.setState({ shows: false });
      this.setState({ display: "none" });
    } else {
      this.setState({ shows: true });
      this.setState({ display: "block" });
    }
    // alert(this.state.display);
  };

  render() {
    return (
      <>
        <button onClick={this.Toggle}>Toggle Show</button>
        <div style={{ display: this.state.display }}>
          <h2>{this.state.fullname}</h2>
          <h4>{this.state.bio}</h4>
          <h4>{this.state.profession}</h4>
          <h4>{this.state.shows}</h4>
          <div>
            <span id="timer"></span>.secs
          </div>
        </div>
      </>
    );
  }

  componentDidMount() {
    console.log("component did mount");
    setInterval(myTimer, 1000);
  }
}

// setTimeout(() => {
//   this.setState({favoritecolor: "yellow"})
// }, 1000)

export default App;
