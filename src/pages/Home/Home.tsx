import { useGetPokemons } from '../../features/pokemon-api';
import CardList from '../../features/components/CardList/CardList';

const Home = () => {
  const { data, isLoading } = useGetPokemons(0);

  if (!data)
    return (
      <>
        <img src="../../../asset/pngwing.com.png" alt="pikachu triste" />
        <p role="paragraph">Ups, ha habido un error</p>
      </>
    );
  if (isLoading)
    return (
      <>
        <img src="../../../public/asset/loading-mew.gif" alt="loading" />
        <p>Cargando...</p>
      </>
    );
  return (
    <section>
      <CardList pokemonList={data?.results} index={0} />
    </section>
  );
};

export default Home;
