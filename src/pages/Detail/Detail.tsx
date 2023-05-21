import { useParams } from 'react-router-dom';
import CardDetail from 'src/features/components/CardDetail/CardDetail';

const Detail = () => {
  const { id } = useParams();
  return <CardDetail pokemonId={id} />;
};

export default Detail;
