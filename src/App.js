
import './index.css';
import React, { useState, useEffect } from "react";
import DisplayCard from './components/displaycard';
import Records from './MOCK_DATA.json'


function App() {

    const [checkedBoxes, setCheckedBoxes] = useState([]);
    const [articleRecords, setRecords] = useState(Records);
    const [tempArray, setTempArray] = useState();




  	function removeItem() {
      const updatedArticleRecords = articleRecords.filter(
        (article) => !checkedBoxes.some((check) => check.id === article.id)
      );

      setRecords(updatedArticleRecords);
      setCheckedBoxes([]);

      // Uncheck all checkboxes in the DOM
      const checkboxes = document.querySelectorAll(".rounded-checkbox");
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
    }

    function selectAll(event){
        const checked = event.target.checked;
        const checkboxes = document.querySelectorAll(".rounded-checkbox");
        checkboxes.forEach((checkbox) => {
        checkbox.checked = checked;
        });
    }
    
    function handleCheckboxChange(event, articles){
      const checked = event.target.checked;
      const newCheckedBoxes = [...checkedBoxes];

      if (checked) {
        newCheckedBoxes.push(articles);
      } else {
        const articleIndex = newCheckedBoxes.findIndex(
          (article) => article.itemID === articles.id
        );
        if (articleIndex >= 0) {
          newCheckedBoxes.splice(articleIndex, 1);
        }
      }
      setCheckedBoxes(newCheckedBoxes);
    };

  return (
    <div className="web-page">
      <div>
        {/* <div>
          <button onClick={openModal}>Open</button>
          <ReadFull isOpen={isOpen} setOpen={setIsOpen} />
        </div> */}
        <h2>News Articles</h2>
        <div className="checkbox-div">
          <input type="checkbox" className="rounded-checkbox" onChange={(e) => selectAll(e)} />
        </div>
        <button className="publish">Publish</button>
        <button className="delete" onClick={removeItem}>Delete</button>
        <input
          type="search"
          className="searchbar"
          placeholder="Search ..."
        ></input>
      </div>
      {articleRecords.map((record) => {
        return (
          <DisplayCard
            data={record}
            handleCheckboxChange={handleCheckboxChange}
            checked={false}
          ></DisplayCard>
        );
      })}
    </div>
  );
}

export default App;
