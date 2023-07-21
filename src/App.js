import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import ResultPage from './components/ResultPage';
import Lucky from './components/Lucky';

function App() {
 
  return (
    <>   
          <RouterProvider router={appRouter} />
      </>
  );
}

const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/results',
    element:<ResultPage/>

  },
  {
    path:"/lucky",
    element:<Lucky/>
  }
])


export default App;
