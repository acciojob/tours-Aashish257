import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import toursData from "../data";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = () => {
    setLoading(true);
    // simulate fetch
    setTimeout(() => {
      setTours(toursData);
      setLoading(false);
    }, 800);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main id="main">
        <Loading />
      </main>
    );
  }

  return (
    <main id="main">
      <Tours tours={tours} removeTour={removeTour} refresh={fetchTours} />
    </main>
  );
};

export default App;
