import { FC } from 'react';
import { Pokemon } from '../../pokemon-models';

interface CardProps {
  pokemon: Pokemon;
  index: number;
}
const Card: FC<CardProps> = ({ pokemon, index }) => {
  return (
    <article className="card_container">
      <div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${index}.gif`}
          alt={pokemon.name}
        />
      </div>
      <strong>{pokemon.name.toUpperCase()}</strong>
    </article>
  );
};

export default Card;
