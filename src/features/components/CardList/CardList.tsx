import { FC } from 'react';
import { Pokemon } from '../../pokemon-models';
import Card from '../Card/Card';

interface CardListProps {
  pokemonList?: Pokemon[];
  index: number;
}
const CardList: FC<CardListProps> = ({ pokemonList, index }) => {
  return (
    <ul data-testid="pokemon-list" className="card_list_container">
      {pokemonList?.map((pokemon, i) => (
        <li key={pokemon.name}>
          <Card pokemon={pokemon} index={i + 1 + index} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
