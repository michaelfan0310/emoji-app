import React from "react";
import './Entry.css';

function Entry(props) {
  return (
    <div>
      <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emoji}
            </span>
            <span className="lable">{props.name}</span>
          </dt>
          <dd>{props.meaning}</dd>
        </div>
      </dl>
    </div>
  );
}

export default Entry;
