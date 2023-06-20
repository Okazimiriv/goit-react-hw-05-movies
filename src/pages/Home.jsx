// import { Loader } from 'components/Loader/Loader.styled';
// import { ThreeDots } from 'react-loader-spinner';
// import { ErrorMessage } from '../ErorrMessage';
import { Container} from "../App.styled";
// import * as ApiTrendings from '../utils/apiService';
import { getProducts } from "../faceApi";
import { Link } from "react-router-dom";



const Home = ({data}) => {
  // const [trendingMovie, setTrendingMovie] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //  
  // },[])   
  const products = getProducts();  

  return (
    <Container><h1>Trending today</h1>
    <ul>      
        {/* <Loader>
          <ThreeDots color="#00BFFF" />
        </Loader> */}

      {products.map((product) => (
        <li key={product.id}>
          <Link to={`/movies/${product.id}`}>           
            <h2>{product.name}</h2>
          </Link>
        </li>
      ))}

       {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
    </ul></Container>
    
  );
};

export default Home;