import React from "react";

const Header = ({title = 'default title'}) => { 

  return (
    <header> 
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
