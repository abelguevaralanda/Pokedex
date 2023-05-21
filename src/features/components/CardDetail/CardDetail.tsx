import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useGetByIDPokemon } from 'src/services/pokemon-api';

interface CardDetailProps {
  pokemonId?: string;
}
const CardDetail: FC<CardDetailProps> = ({ pokemonId }) => {
  const { data } = useGetByIDPokemon(pokemonId);
  const typeName = data?.types.map(
    (item, index) => index === 0 && item.type.name.toUpperCase(),
  );
  const ability = data?.abilities.map(
    (item, index) => index === 0 && item.ability.name.toUpperCase(),
  );

  if (!data)
    return (
      <>
        <img src="../../../asset/images/loading-mew.gif" alt="loading" />
        <p>Cargando...</p>
      </>
    );
  return (
    <section className="card_detail_container">
      <div className="detail__container">
        <Link className="detail__home" to={'/'}>
          <img src="../../../../asset/images/previows.png" alt="back-home" />
        </Link>
        <img
          src={
            data?.sprites.versions['generation-v']['black-white'].animated
              .front_default
          }
          alt={data?.name}
        />
        <article>
          <strong data-testid="pokemon-name">{data?.name.toUpperCase()}</strong>
          <div>
            <span>Weight: {data?.weight}</span>
            <span>Heigth: {data?.height}</span>
          </div>
          <p>Ability: {ability}</p>
          <p>Type: {typeName}</p>
        </article>
      </div>
    </section>
  );
};

export default CardDetail;
