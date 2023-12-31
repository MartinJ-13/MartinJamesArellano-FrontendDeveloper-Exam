
import './index.css';
import React, { useState } from "react";
import DisplayCard from './components/displaycard';
import Records from './MOCK_DATA.json'


function App() {
  const [checkedBoxes, setCheckedBoxes] = useState([]); //Array that stores the checked articles
  const [articleRecords, setRecords] = useState(Records); //Mock Data

  // removeItem(): Deletes checked items
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
      checkbox.value = false;
    });
  }

  // selectAll(): Checks all the items when the primary check box is checked
  function selectAll(event) {
    const checked = event.target.checked;
    const newCheckedBoxes = [...checkedBoxes];

    if (checked) {
      articleRecords.forEach((record) => {
        newCheckedBoxes.push(record);
        setCheckedBoxes(newCheckedBoxes);
      });
    } else {
      setCheckedBoxes([]);
    }
    const checkboxes = document.querySelectorAll(".rounded-checkbox");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = checked;
    });
  }

  // handleCheckboxChange(): Handles the selecting of articles
  function handleCheckboxChange(event, articles) {
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
  }

  return (
    <div className="web-page">
      <div>
        <h2>News Articles</h2>
        <div className="checkbox-div">
          <input
            type="checkbox"
            className="rounded-checkbox"
            onChange={(e) => selectAll(e)}
          />
        </div>
        <button className="publish">Publish</button>
        <button className="delete" onClick={removeItem}>
          Delete
        </button>
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
          ></DisplayCard>
        );
      })}
    </div>
  );
}

export default App;
