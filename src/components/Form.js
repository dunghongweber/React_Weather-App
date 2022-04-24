import { useState } from "react";

const Form = ({ handleSearch, isLoading }) => {
  const [searchInput, setSearchInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!searchInput || searchInput === "") return;
    handleSearch(searchInput);
  };

  return (
    <form onSubmit={onSubmit} className="text-center">
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="City name"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              className="btn btn-primary"
              type="submit"
              id="button-addon2"
              disabled={!isLoading}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
