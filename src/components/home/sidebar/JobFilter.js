import { useContext, useState } from "react";
import JobContext from "../../../context/JobContext";
import { MdError } from "react-icons/md";
import './jobFilter.css'

const JobFilter = () => {
  const [error, setError] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [checkedState, setCheckedState] = useState(false);
  const jobCtx = useContext(JobContext);
  const { locations, locationFilterData, filterFullTimeJob } = jobCtx;

  let newLocation = locations.slice(0, 4);

  /* full time filter */
  function fullTimeJobHanlder() {
    setIsChecked(!isChecked);
    filterFullTimeJob(!isChecked);
  }

  /* search filter */
  function searchLocationFilter(e) {
    e.preventDefault();

    if (searchInput) {
      if (
        locations.join(",").toLowerCase().indexOf(searchInput.toLowerCase()) >
        -1
      ) {
        setError(false);
        locations.forEach((location) => {
          if (location.toLowerCase().indexOf(searchInput.toLowerCase()) > -1) {
            locationFilterData(location);
            return location;
          }
        });
      } else {
        setError(true);
      }
    }

    setIsChecked(false);
    setSearchInput("");
  }

  /* radio filter */
  function radioLocationFilter(location, index) {
    setCheckedState(index);
    locationFilterData(location);
    setIsChecked(false);
  }

  return (
    <aside className="job-filter">
      <form className="ft-check-form">
        <input
          type="checkbox"
          name="ft-check"
          id="ft-check"
          checked={isChecked}
          onChange={() => fullTimeJobHanlder()}
        />
        <label htmlFor="ft-check">Full time</label>
      </form>

      <form className="location-form" onSubmit={searchLocationFilter}>
        <h3>LOCATION</h3>

        <div className={`search-location-group`}>
          <span className="material-icons">public</span>
          <input
            type="text"
            placeholder="City, state, zip code or country"
            value={searchInput}
            list="location-list"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <datalist id="location-list">
            {locations.map((location, index) => (
              <option key={index} value={location} />
            ))}
          </datalist>
          {error && <MdError className="error" />}
        </div>

        <ul className="location-list">
          
          {newLocation.map((location, index) => (
              <li
                className="location-list-item"
                key={location.toLowerCase().split(" ").join("-")}
              >
                <input
                  type="radio"
                  value={location}
                  name="location"
                  id={location.toLowerCase().split(" ").join("-")}
                  checked={checkedState[index]}
                  onChange={() => radioLocationFilter(location, index)}
                />
                <label htmlFor={location.toLowerCase().split(" ").join("-")}>
                  {location}
                </label>
              </li>
            ))}
        </ul>
      </form>
    </aside>
  );
};

export default JobFilter;
