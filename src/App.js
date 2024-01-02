import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/HeaderComponents/Header';
import Home from './pages/Home';
import Client from './pages/Client';
import NotFound from './pages/NotFound';
import { onContentLoaded } from './utiles/utiles';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
  Outlet
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root></Root>}>
            <Route index  element={<Home></Home>}></Route>
            <Route path='/client' element={<Client></Client>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
        </Route>

      )
  );
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  );
}
function Root(){
  return (
    <>
      <Header/>
      <Outlet></Outlet>
      <Footer/>
    </>
    )
}
export default App;
