import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import IRoutes from "./types/routes.interface";
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            {publicRoutes.map((route: IRoutes, index) => {
              const Page = route.component;
              return (
                  <Route key={index} element={<Page/>}/>
              )
            })}
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
