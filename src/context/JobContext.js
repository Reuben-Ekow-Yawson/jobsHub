import axios from "axios";
import { createContext, useEffect, useState } from "react";
const JobContext = createContext();

export const JobContextProvider = ({ children }) => {
  const [jobs, setJobs] = useState({});
  const [loading, setLoading] = useState(false);
  const [locations, setLocations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [defaultCount] = useState(5);
  const [jobsPerPage] = useState(defaultCount);
  const [currentPosts, setCurrentPosts] = useState(0);
  const [filteredJobData, setFilteredJobData] = useState({});

  const url = `https://remotive.com/api/remote-jobs`;


    /* fetch job data */
    const fetchJobData = (currentPage) => {};

  useEffect(() => {
    // fetchJobData(currentPage);

    axios
      .get(url)
      .then((res) => {
        setLoading(true);
        const { data } = res;
        const allData = data.jobs.filter((jobs) => {
          return (
            jobs.candidate_required_location
          );
        });
        const oneMonthData = allData
          .filter((job) => {
            return (
              new Date(job.publication_date).getFullYear() ===
              new Date().getFullYear()
            );
          })
          .filter((job) => {
            return (
              new Date(job.publication_date).getMonth() ===
              new Date().getMonth()
            );
          });
        // console.log(oneMonthData);
        setJobs(oneMonthData);
        setFilteredJobData(oneMonthData);

        const allLocations = oneMonthData.map((job) => {
          return job.candidate_required_location;
        });

        /* GET CURRENT POSTS */
        const indexOfLastPost = currentPage * jobsPerPage;
        const indexOfFirstPost = indexOfLastPost - jobsPerPage;
        setCurrentPosts(oneMonthData.slice(indexOfFirstPost, indexOfLastPost));

        setLocations(
          allLocations
            .filter((location, index) => {
              return allLocations.indexOf(location) === index;
            })
            .sort()
        );
        setLoading(false);
      })
      .catch((err) => console.log(err));
  },[currentPage, jobsPerPage, url]);



  /* GET CURRENT POSTS */
  const getCurrrentPosts = (filteredData) => {
    const indexOfLastPost = currentPage * jobsPerPage;
    const indexOfFirstPost = indexOfLastPost - jobsPerPage;
    setCurrentPosts(filteredData.slice(indexOfFirstPost, indexOfLastPost));
  };

  /* search job data */
  const searchJobData = (searchValue) => {
    setLoading(true);
    setTimeout(() => {
      const filteredData = jobs.filter((job) => {
        let title = job.title.toLowerCase();
        let company_name = job.company_name.toLowerCase();
        let search = searchValue.toLowerCase();
        if (title.indexOf(search) > -1) {
          return job.title;
        } else if (company_name.indexOf(search) > -1) {
          return job.company_name;
        } else {
          return false;
        }
      });

      // console.log(filteredData);
      setFilteredJobData(filteredData);
      setCurrentPosts(filteredData);
      getCurrrentPosts(filteredData);
      setLoading(false);
    }, 100);
  };

  /* filter full time jobs */
  const filterFullTimeJob = (isChecked) => {
    setLoading(true);
    if (isChecked) {
      setTimeout(() => {
        const filteredData = jobs.filter((job) => {
          return job.job_type === "full_time";
        });
        setFilteredJobData(filteredData);
        setCurrentPosts(filteredData);
        getCurrrentPosts(filteredData);
        setLoading(false);
      }, 100);
    } else {
      setCurrentPosts(jobs);
      setFilteredJobData(jobs);
      getCurrrentPosts(jobs);
      setLoading(false);
    }
  };

  /* filter Data with radio */
  const locationFilterData = (location) => {
    setLoading(true);

    setTimeout(() => {
      if (location === "All") {
        fetchJobData(currentPage);
      } else {
        const filteredData = jobs.filter((job) => {
          return job.candidate_required_location === location;
        });
        setFilteredJobData(filteredData);
        setCurrentPosts(filteredData);
        getCurrrentPosts(filteredData);
        setLoading(false);
      }
    }, 100);
  };

  /* PAGINATION */
  const paginate = (pageNum) => {
    setCurrentPage(pageNum);
    setTimeout(() => {
      getCurrrentPosts(filteredJobData);
    }, 50);
  };

  const prevPaginate = () => {
    setCurrentPage(currentPage - 1);
    setTimeout(() => {
      getCurrrentPosts(filteredJobData);
    }, 50);
  };

  const nextPaginate = () => {
    setCurrentPage(currentPage + 1);
    setTimeout(() => {
      getCurrrentPosts(filteredJobData);
    }, 50);
  };

  return (
    <JobContext.Provider
      value={{
        loading,
        currentPosts,
        jobs,
        jobsPerPage,
        currentPage,
        locations,
        filteredJobData,
        searchJobData,
        filterFullTimeJob,
        locationFilterData,
        paginate,
        prevPaginate,
        nextPaginate,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobContext;
