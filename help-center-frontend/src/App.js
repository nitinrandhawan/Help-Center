import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';  // Main page with help options
import SubmitRequest from './components/SumbitRequest.jsx'; // Submit request form
import Footer from './components/Footer.jsx';
import { Toaster,toast } from 'react-hot-toast';


export const CardContext=createContext({})
const App = () => {
  const [requestData, setRequestData] = useState(null);
const [options, setoptions] = useState('')
  useEffect(()=>{
    if(requestData){
      setTimeout(() => {
        toast.success('Card Created Successfully')
        
      }, 500);
    }
},[requestData])

  return (
    <CardContext.Provider value={{options,setoptions}}>
          <Router>
      <div className="min-h-screen flex flex-col">
        <Toaster/>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home requestData={requestData}/>} />
            <Route path="/submit-request" element={<SubmitRequest setRequestData={setRequestData}/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </CardContext.Provider>

  );
};

export default App;
