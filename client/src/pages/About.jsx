import React from "react";

function About() {
  return (
    <div className="section">
      <div className="section-heading">
        <h2>About StayFinder</h2>
        <p>Making accommodation search simple and convenient.</p>
      </div>

      <div className="empty-state">
        <h3>What is StayFinder?</h3>

        <p>
          StayFinder is a smart PG and room-finding platform
          designed for students and working professionals.
        </p>

        <br />

        <p>
          Users can search for accommodations based on location,
          budget, room type, and available facilities.
        </p>

        <br />

        <p>
          StayFinder also allows users to compare different
          accommodations before making their choice.
        </p>
      </div>
    </div>
  );
}

export default About;