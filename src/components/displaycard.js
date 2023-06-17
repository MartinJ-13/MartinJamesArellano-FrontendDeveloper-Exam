import { HiUserCircle } from "react-icons/hi";
import { FaRegCalendarMinus } from "react-icons/fa";
import {GrDrag} from "react-icons/gr";
import {BsEyeFill} from "react-icons/bs";
function DisplayCard(props) {
  return (
    <>
      <div className="display-card">
        {/* first column */}
        <div id="first-icon">
          <GrDrag size="2rem" />
        </div>
        {/* second column */}
        <div>
          <div className="checkbox-div">
            <input type="checkbox" className="rounded-checkbox" />
          </div>
        </div>
        {/* third column */}
        <div>
          {/* first row */}
          <div className="card-header">
            {"fringilla rhoncus mauris enim leo rhoncus sed vestibulum"}
          </div>
          {/* second row */}
          <div className="card-details">
            {/* first column */}
            <div>
              <HiUserCircle className="icon" color="#12B880" size="2rem" />
            </div>
            {/* second column */}
            <div className="card-subheader">{"Barnaby Wilbud"}</div>

            {/* third column */}

            <div>
              <FaRegCalendarMinus
                className="icon"
                color="#12B880"
                size="1.7rem"
              />
            </div>

            {/* fourth column */}
            <div className="card-subheader">{"27/03/2022"}</div>
          </div>

          {/* third row */}
          <div>
            <div className="article-body">
              {
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              }
            </div>

            <div id="read-div">
              <BsEyeFill id="eye-icon" color="#4285F5" size="1.5rem" />
              <span id="read-full">{"  Read Full  "}</span>
            </div>

          </div>
        </div>

        {/* fourth column */}
      </div>
    </>
  );
}

export default DisplayCard;
