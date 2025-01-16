import React, { useState } from 'react';
import LeftMenu from './components/LeftMenu';
import MainContent, { content } from './components/MainContent';
import RightPanel from './components/RightPanel';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  const [selectedContentIndex, setSelectedContentIndex] = useState(0);

  const handleContentClick = (index) => {
    setSelectedContentIndex(index);
  };

  return (
    <>
    <Navbar></Navbar>
    <div className="flex">
      <LeftMenu content={content} onContentClick={handleContentClick} />
      <MainContent selectedContentIndex={selectedContentIndex} />
      <RightPanel></RightPanel>
    </div>
    <Footer></Footer>
    </>
  );
}

export default App;
