import { useState } from "react";
import { useAddDestinationMutation } from "../api/destinationApi";

function AddDestination() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [addDestinationMutation, result] = useAddDestinationMutation();

  const handleAddDestination = (e) => {
    e.preventDefault();
    console.log("City: ", city);
    console.log("Country: ", country);

    addDestinationMutation({
      id: Math.random() * 100,
      city: city,
      country: country,
      daysNeeded: parseInt(Math.random() * 10) + 1,
    });

    setCity("");
    setCountry("");
  };
  return (
    <div className="py-4 border">
      <form onSubmit={handleAddDestination}>
        <div className="row col-10 offset-1">
          <h4>Enter a new Destination</h4>
          <div className="col-5 p-1">
            <input
              type="text"
              className="form-control"
              placeholder="Enter city..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="col-5 p-1">
            <input
              type="text"
              className="form-control"
              placeholder="Enter country..."
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="col-2 p-1">
            <button
              onClick={() =>
                addDestinationMutation({
                  city,
                  country,
                })
              }
              className="btn btn-success form-control"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddDestination;
