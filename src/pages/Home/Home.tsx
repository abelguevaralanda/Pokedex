import { useGetPokemons } from '../../features/pokemon-api';
import CardList from '../../features/components/CardList/CardList';
import { useState } from 'react';

const POKEMONS_PER_PAGE = 20;
const Home = () => {
  const [page, setpage] = useState(0);
  const { data } = useGetPokemons(page);

  if (!data)
    return (
      <>
        <img src="../../../asset/loading-mew.gif" alt="loading" />
        <p>Cargando...</p>
      </>
    );
  return (
    <>
      <section>
        <CardList pokemonList={data?.results} index={page} />
      </section>
      <section className="home_container">
        <button
          onClick={() => {
            setpage(page - POKEMONS_PER_PAGE);
          }}
          disabled={data.previous === null}
        >
          <img src="../../../asset/previows.png" alt="previous-page" />
        </button>
        <strong>
          {`${Math.ceil((page + 1) / POKEMONS_PER_PAGE)} /
          ${Math.round(data.count / POKEMONS_PER_PAGE)}`}
        </strong>
        <button
          onClick={() => {
            setpage(page + POKEMONS_PER_PAGE);
          }}
          disabled={data.next === null}
        >
          <img src="../../../asset/next.png" alt="next-page" />
        </button>
      </section>
    </>
  );
};

export default Home;
