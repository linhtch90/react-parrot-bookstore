import React from "react";

import "./HeaderBar.css";

class HeaderBar extends React.Component {
    render() {
        return(
            <div className="Header">
              <img className="HeaderLogo" src="https:bower.io/img/bower-logo.svg" alt="parrot-logo" />
              <span className="HeaderTitle">PARROT RESTAURANT</span>
            </div>
        );
    }
}

export default HeaderBar;
