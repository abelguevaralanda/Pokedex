import { FC } from 'react';
import { Pokemon } from '../../pokemon-models';
import Card from '../Card/Card';

interface CardListProps {
  pokemonList?: Pokemon[];
  index: number;
}
const CardList: FC<CardListProps> = ({ pokemonList }) => {
  return (
    <ul data-testid="pokemon-list" className="card_list_container">
      {pokemonList?.map((pokemon, index) => (
        <li key={pokemon.name}>
          <Card pokemon={pokemon} index={index + 1} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
