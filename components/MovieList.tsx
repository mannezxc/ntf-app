import { StickerResolvable } from 'discord.js'
import { FC } from 'react'
import MovieCard, { MovieType } from './MovieCard'



type MovieListProps = {
  title: string
  list: MovieType[]
}


const MovieList: FC<MovieListProps> = ({ title, list }) => {
  return <div className='pl-20'>
    <p className='font-bold text-[24px]'>{title}</p>

      <div className='flex gap-[10px] w-screen overflow-x-auto'>
        {list.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>

  </div>
}

export default MovieList