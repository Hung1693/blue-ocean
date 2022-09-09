import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { TestAPI } from "./components/TestAPI";
import UserDataProvider from "../src/context/UserDataContext";

function App() {

  return (
    <div className="App">
      <UserDataProvider>
        
        <TestAPI />
      </UserDataProvider>
    </div>
  );
}

export default App;
