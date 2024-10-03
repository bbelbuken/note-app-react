import React from "react";

/* const Header = (props) => {  1st Version (props) */ 
const Header = ({title}) => { /* 2nd Version (destructuring)  */

  return (
    <header> 
      {/* <h1>{props.title}</h1> */} {/* 1st version */}
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {  //if we dont put title in the component in app.js defaultprops title will be shown on the header.
  title: "Default Title"
}

export default Header;
