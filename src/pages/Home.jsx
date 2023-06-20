// import { Loader } from 'components/Loader/Loader.styled';
// import { ThreeDots } from 'react-loader-spinner';
// import { ErrorMessage } from '../ErorrMessage';
import { Container } from '../App.styled';
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
    <Container>
      
        {/* <Loader>
          <ThreeDots color="#00BFFF" />
        </Loader> */}

      {products.map((product) => (
        <li key={product.id}>
          <Link to={`${product.id}`}>           
            <h2>{product.name}</h2>
          </Link>
        </li>
      ))}

       {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
    </Container>
  );
};

export default Home;