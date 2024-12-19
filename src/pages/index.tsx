import Layout from '../components/Layout';
import Login from '../components/Login';
import MovieList from '../components/MovieList';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Home: React.FC = () => {
    const username = useSelector((state: RootState) => state.user.username);
  return (
    <Layout>
      {username ? (
        <MovieList />
      ) : (
        <Login />
      )}
    </Layout>
  );
};

export default Home;