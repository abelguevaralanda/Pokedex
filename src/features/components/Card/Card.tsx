import { FC } from 'react';
import { Pokemon } from '../../pokemon-models';
import { Link } from 'react-router-dom';

interface CardProps {
  pokemon: Pokemon;
  index: number;
}
const Card: FC<CardProps> = ({ pokemon, index }) => {
  return (
    <Link to={`/detail/${index}`}>
      <article className="card_container">
        <div>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${index}.gif`}
            alt={pokemon.name}
          />
        </div>
        <strong>{pokemon.name.toUpperCase()}</strong>
      </article>
    </Link>
  );
};

export default Card;
