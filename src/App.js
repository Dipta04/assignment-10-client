import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Route/Route';
import { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from './Contexts/AuthProvider/AuthProvider';


function App() {
  const {theme} = useContext(AuthContext);
  return (
    <div className={`App${theme}`}>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
