import Footer from './components/home/footer/Footer';
import Header from './components/home/header/Header';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./components/home/searchHeader/Search";
import JobList from "./components/home/jobsContainer/JobList";
import JobDescription from "./components/home/jobDetail/JobDescription";
import JobFilter from "./components/home/sidebar/JobFilter";

import { JobContextProvider } from "./context/JobContext";
import './App.css'


function App() {
  
  return (
    <JobContextProvider>
    <Router>
      {/* HEADER */}
      <Header />

      {/* SEARCH FORM */}
      <Search />

      <main>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <JobFilter />
                  <JobList />
                </>
              }
            />
            <Route path="/:jobDetailUrl" element={<JobDescription />} />
          </Routes>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </Router>
  </JobContextProvider>

  );
}

export default App;
