import { FC } from 'react'

export type MovieType = {
    id: number
    title: string
    description: string
    videoUrl: string
    thumbnailUrl: string
    genre: string
    duration: string
}

const MovieCard: FC<{ movie: MovieType }> = ({ movie }) => {
    return <div className=' w-[389px] h-[219px] object-cover flex-shrink-0  '>
        <img className='rounded-[5px] overflow-hidden h-full object-cover' src={movie.thumbnailUrl} alt="" />
    </div>
}

export default MovieCard