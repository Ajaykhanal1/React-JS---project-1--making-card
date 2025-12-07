import React from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {

  

  return (
    <div className="parent">
      <article className="card">
        
        <header className="card-header">
          <img
            src={props.brandLogo}
            alt={props.company}
          />

          <button className="save-btn">
            Save <Bookmark size={12} />
          </button>
        </header>

        <div className="card-body">
          <h3>
            {props.company} <span>{props.datePosted}</span>
          </h3>

          <h2>{props.post}</h2>

          <div className="tags">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>

        <footer className="card-footer">
          <div>
            <h3>{props.payPerHour}</h3>
            <p>{props.location}</p>
          </div>

          <button className="apply-btn">Apply now</button>
        </footer>

      </article>
    </div>
  );
};

export default Card;
