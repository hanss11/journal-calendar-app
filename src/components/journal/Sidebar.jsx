import React from "react";
import JournalEntries from "./JournalEntries";


const Sidebar = () => {
  return (
    <aside className="journal__sidebar">
      <div className="journal__sidebar-navbar">
        <h3 className="mt-5">
          <i className="far fa-moon"></i>
          <span> Hanss</span>
        </h3>
        <button className="btn">
            Log out
        </button>
      </div>
      <div className="journal__new-entry">
          <i className="far fa-calendar-plus fa-5x"></i>
          
      <span className="mt-5 text-center">New Entry</span>
      </div>

      <JournalEntries/>
      
    </aside>
  );
};

export default Sidebar;
