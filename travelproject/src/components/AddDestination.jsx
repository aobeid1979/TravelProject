import { useState } from "react";

function AddDestination() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleAddDestination = (e) => {
    e.preventDefault();
    console.log("City: ", city);
    console.log("Country: ", country);

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
            <button className="btn btn-success form-control">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddDestination;
