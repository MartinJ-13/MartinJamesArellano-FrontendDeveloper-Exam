import { HiUserCircle } from "react-icons/hi";
import { FaRegCalendarMinus } from "react-icons/fa";

import {GrDrag} from "react-icons/gr";
import Modal from "react-modal";
import {BsEyeFill} from "react-icons/bs";
import React, { useState } from "react";
import ReadFull from "./readfull";
function DisplayCard(props) {

  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);

  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div>
          <ReadFull isOpen={isOpen} setOpen={setIsOpen} content={props.data}/>
      </div>

      <div className="display-card">
        {/* first column: drag icon */}
        <div id="first-icon">
          <GrDrag size="2rem" />
        </div>
        {/* second column: checkbox */}
        <div>
          <div className="checkbox-div">
            <input type="checkbox" className="rounded-checkbox" />
          </div>
        </div>
        {/* third column: article details */}
        <div>
          {/* first row */}
          <div className="card-header">{props.data.title}</div>
          {/* second row */}
          <div className="card-details">
            {/* first column */}
            <div>
              <HiUserCircle className="icon" color="#12B880" size="1.8rem" />
            </div>
            {/* second column */}
            <div className="card-subheader">{props.data.author}</div>

            {/* third column */}

            <div>
              <FaRegCalendarMinus
                className="icon"
                color="#12B880"
                size="1.5rem"
              />
            </div>

            {/* fourth column: date */}
            <div className="card-subheader">{props.data.date}</div>
          </div>

          {/* third row: content */}
          <div className="article-content">
            <div className="article-body">{props.data.content}</div>
            <div id="read-div" onClick={openModal}>
              <BsEyeFill id="eye-icon" color="#4285F5" size="1.5rem" />
              <span id="read-full">{"  Read Full  "}</span>
            </div>
          </div>
        </div>

        {/* fourth column: categories */}
        <div className="categories">
          <button className="category">#Sports</button>
          <button className="category">#Worldwide</button>
          <button className="category">#Local</button>
        </div>
      </div>
    </>
  );
}

export default DisplayCard;
