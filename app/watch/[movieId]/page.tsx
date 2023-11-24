import { useRouter } from 'next/router';
import { FC } from 'react'

export default function Watch ({params}: {params: {movieId: string}}) {
    // const router = useRouter();
    // const {movieId} = router.query


    return <div>
        {params.movieId}
    </div>
}
