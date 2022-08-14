import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import IRoutes from "./types/routes.interface";
import MainLayout from "./layouts/MainLayout";

function App() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            {publicRoutes.map((route: IRoutes, index) => {
              const Page = route.component;
              const Layout = route.layout || MainLayout
              return (
                  <Route key={index} path={route.path} element={
                      <Layout>
                          <Page/>
                      </Layout>
                  }/>
              )
            })}
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
