import { Routes, Route, Link } from "react-router-dom";
import { Home } from "pages/Home";
import { Movies } from "pages/Movies";



export const App = () => {
  return (
    <div>
      <ul>
        <li>
           <Link to="/" end>Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>  
        </li>
      </ul>  
      
      <Routes>
        <Route path="/" element={<Home />} />       
        <Route path="/movies" element={<Movies />} />         
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
