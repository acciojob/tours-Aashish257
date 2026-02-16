import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour, refresh }) => {
  if (tours.length === 0) {
    return (
      <section>
        <div className="title">
          <h2>No more tours</h2>
        </div>
        <button className="btn" onClick={refresh}>
          Refresh
        </button>
      </section>
    );
  }

  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
      </div>
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
