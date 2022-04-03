import backgroundImg from "./backgroundImg.png";
import { useContext, useState } from "react";
import JobContext from "../../../context/JobContext";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const jobCtx = useContext(JobContext);
  const { searchJobData } = jobCtx;

  function searchjobDataHandler(e) {
    e.preventDefault();
    if (searchValue) {
      navigate("/");
      searchJobData(searchValue);
      setSearchValue("");
    }
  }

  return (
    <div className="container">
      <section
        className="search-form"
        style={{
          backgroundImage: "url(" + backgroundImg + ")",
          backgroundColor: "#1E86FF",
        }}
      >
        <form onSubmit={searchjobDataHandler}>
          <span class="material-icons">work_outline</span>
          <input
            type="text"
            placeholder="Title, companies, expertise or benefits"
            id="search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </form>
      </section>
    </div>
  );
};

export default Search;
