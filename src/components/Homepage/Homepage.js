import React from "react";

import HeaderBar from "../HeaderBar/HeaderBar.js";
import SearchBox from "../SearchBox/SearchBox.js";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <SearchBox />
      </div>
    );
  }
}

export default Homepage;
