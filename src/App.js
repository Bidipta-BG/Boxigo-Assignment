import React from 'react'
import Layout from './Components/Layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyMoves from './Pages/MyMoves';
import MyProfile from './Pages/MyProfile';
import GetQuotes from './Pages/GetQuotes';
import Logout from './Pages/Logout';


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/mymoves" element={<MyMoves />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/getquotes" element={<GetQuotes />} />
          <Route path="/" element={<Logout />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App