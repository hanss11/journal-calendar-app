import React from "react";

const JournalEntry = ({ value }) => {
  console.log(value);
  return (
    <div className="journal__entry">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://www.w3schools.com/w3css/img_forest.jpg)",
        }}
      >
      </div>
        <div className="journal__entry-body">
          <p className="journal__entry-title">
            {value}
          </p>
          <p className="journal__entry-content">
              Texto de una nota para probar.</p>
        </div>
        <div className="journal__entry-date-box">
            <span >monday</span>
            <h4>28</h4>
        </div>
    </div>
  );
};

export default JournalEntry;
