import { DocumentData } from "firebase/firestore";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";
import { baseW500Url } from "../constants/movie";
import { Movie } from "../typings";

interface Props {
  // When Using Firebase
  // movie: Movie | DocumentData;
  movie: Movie;
}

const Thumbnail = ({ movie }: Props) => {
  const [showModal, setShowModal] = useRecoilState<boolean>(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState<
    Movie | DocumentData | null
  >(movieState);

  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200
      ease-out md:-36 md:min-w-[260px] md:hover:scale-105"
      onClick={() => {
        setCurrentMovie(movie);
        setShowModal(true);
      }}
    >
      <Image
        src={`${baseW500Url}${movie.backdrop_path || movie.poster_path}`}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="rounded-sm object-cover md:rounded"
      />
    </div>
  );
};

export default Thumbnail;
