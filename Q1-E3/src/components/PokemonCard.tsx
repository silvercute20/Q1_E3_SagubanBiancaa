import type { Pokemon } from '../types'
 
interface PokemonCardProps {
  pokemon: Pokemon
}
 
export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
<div style={{ border: '1px solid gray', padding: '20px', marginTop: '20px' }}>
<h2>{pokemon.name}</h2>
<img src={pokemon.imageUrl} alt={pokemon.name} />
<p>ID: {pokemon.id}</p>
<p>Height: {pokemon.height}</p>
<p>Weight: {pokemon.weight}</p>
</div>
  )
}