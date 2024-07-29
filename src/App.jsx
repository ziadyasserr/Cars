import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import CarDetails from './Components/CarDetails/CarDetails';
import MasterLayout from './Components/MasterLayout/MasterLayout';
import PopularCars from './Components/PopularCars/PopularCars';
import NotFound from './Components/NotFound/NotFound'; // Assuming you have a NotFound component

function App() {
  
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MasterLayout />,
      errorElement: <NotFound />, // Error handling element
    },
    {
      path: '/home',
      element: <MasterLayout />,
      errorElement: <NotFound />, // Error handling element
    },
    {
      path: '/popularcars',
      element: <PopularCars />,
      errorElement: <NotFound />, // Error handling element
    },
    {
      path: '/carDetails/:id',
      element: <CarDetails />,
      errorElement: <NotFound />, // Error handling element
    }
  ]);

  return (
    <RouterProvider router={routes} />
  );
}

export default App;