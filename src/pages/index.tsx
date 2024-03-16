'use client'

import { useState } from "react";
import UploadPage from "./upload";
import MapPage from "./map";



export default function Home() {
  const [currentContent, setContent] = useState('home')
  return (
    <main className="main-wrapper">
      <div className="sidebar">
        <h2>M E N U</h2>
        <button
          onClick={() =>{
            return setContent('Upload Page');
          }} 
          className="sidebar-item">
          Upload Page
        </button>
        <button
          onClick={() =>setContent('View Map')} 
          className="sidebar-item">
          View Map
        </button>
      </div>
      <div className="main-content">
        { 
          currentContent === 'Upload Page' && (
            <UploadPage/>
          )
        }
        { 
          currentContent === 'View Map' && (
            // <p>Not yet Implemented</p>
            <MapPage/>
          )
        }
      </div>
    </main>
  );
}
