import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";
import Navbar from "@/components/Navbar";
import movieList from '@/movies.json';

export default function Home() {

  return <>
    <video
      className="w-screen h-screen object-cover absolute top-0 left-0 -z-10"
      autoPlay
      muted
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4">
    </video>
    <Navbar />
    <Billboard />
    <MovieList title="Popular on Netflix" list={movieList} />
  </>
}
