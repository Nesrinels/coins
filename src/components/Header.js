import React from 'react';
import { useEffect, useState } from "react";

const Header = () => {
    const [search, setSearch] = useState("");
  return (
    <header>
      <h1>Crypto Tracker</h1>
      <input type="text"
     placeholder="Search..." 
     onChange={(e) => {
        setSearch(e.target.value);
    }}
    />
    </header>
     
  );
};
export default Header;