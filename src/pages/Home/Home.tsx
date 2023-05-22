import { useGetPokemons } from '../../services/pokemon-api';
import CardList from '../../features/components/CardList/CardList';
import { useState } from 'react';

const POKEMONS_PER_PAGE = 20;
const Home = () => {
  const [page, setpage] = useState(0);
  const { data } = useGetPokemons(page);

  if (!data)
    return (
      <>
        <img src="../../../asset/images/loading-mew.gif" alt="loading" />
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
          data-testid="previous"
          name="previous"
          onClick={() => {
            setpage(page - POKEMONS_PER_PAGE);
          }}
          disabled={data.previous === null}
        >
          <img src="../../../asset/images/previows.png" alt="previous-page" />
        </button>
        <strong>
          {`${Math.ceil((page + 1) / POKEMONS_PER_PAGE)} /
          ${Math.round(data.count / POKEMONS_PER_PAGE)}`}
        </strong>
        <button
          data-testid="next"
          name="next"
          onClick={() => {
            setpage(page + POKEMONS_PER_PAGE);
          }}
          disabled={data.next === null}
        >
          <img src="../../../asset/images/next.png" alt="next-page" />
        </button>
      </section>
    </>
  );
};

export default Home;
