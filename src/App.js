
import './index.css';
import React, { useState } from "react";
import DisplayCard from './components/displaycard';
import Records from './MOCK_DATA.json'
import ReadFull from "./components/readfull";
function App() {
  return (
    <div className="web-page">
      <div>
        {/* <div>
          <button onClick={openModal}>Open</button>
          <ReadFull isOpen={isOpen} setOpen={setIsOpen} />
        </div> */}
        <h2>News Articles</h2>
        <div className="checkbox-div">
          <input type="checkbox" className="rounded-checkbox" />
        </div>
        <button className="publish">Publish</button>
        <button className="delete">Delete</button>
        <input
          type="search"
          className="searchbar"
          placeholder="Search ..."
        ></input>
      </div>
      {Records.map((record) => {
        return <DisplayCard data={record}></DisplayCard>;
      })}
    </div>
  );
}

export default App;
