import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Navbar from "./pages/Navbar";
import Quotes from "./pages/Quotes";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="/char/:char_id" element={<Detail />} />
      <Route path="/quotes" element={<Quotes />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
