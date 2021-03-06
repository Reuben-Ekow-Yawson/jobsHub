import Job from "./Job";
import Loading from "../loading/Loading"
import { useContext } from "react";
import JobContext from "../../../context/JobContext";
import Pagination from "../Pagination/Pagination";

const JobList = () => {
  const jobCtx = useContext(JobContext);
  const { jobs, currentPosts, loading, currentPage, jobsPerPage, filteredJobData } = jobCtx;

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="job-card-wrapper">
      <div className="job-card-list">
        {currentPosts.length > 0 &&
          currentPosts.map((job) => <Job job={job} key={job.id} />)}
      </div>

      <Pagination
        currentPosts={currentPosts}
        jobsPerPage={jobsPerPage}
        currentPage={currentPage}
        jobs={jobs}
        filteredJobData={filteredJobData}
      />
    </section>
  );
};

export default JobList;
