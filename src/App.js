import React from 'react';
import './App.css';
import Footer from './components/home/footer/Footer';
import Header from './components/home/header/Header';
import Home from './components/home/Home';
import JobDetail from './components/home/jobDetail/JobDetail';
import SearchHeader from './components/home/searchHeader/SearchHead'



function App() {
  
  return (
    <div className="App">
      <Header />
      <SearchHeader />
      <Home />
      {/* <JobDetail /> */}
      <Footer />
    </div>
  );
}

export default App;
