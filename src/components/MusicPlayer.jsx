import { useEffect, useRef, useState } from "react";
import noEnemiesSong from "./../assets/aruarian dance.mp3";
import playIcon from "./../assets/play.png";
import pauseIcon from "./../assets/pause.png";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const musicRef = useRef(null);

  useEffect(() => {
    musicRef.current.play().catch((error) => {
      // Autoplay was prevented
      console.log("Autoplay prevented");
      setIsPlaying(false);
    });
  }, []);

  const handleMusic = () => {
    if (musicRef.current.paused) {
      musicRef.current.play();
      setIsPlaying(true);
    } else {
      musicRef.current.pause();
      setIsPlaying(false);
    }
  };
  return (
    <div className="flex justify-center items-center gap-2 py-3 ">
      <audio src={noEnemiesSong} ref={musicRef}></audio>
      <button onClick={handleMusic} className="bg-[#8BB082] rounded-full p-2">
        {isPlaying ? (
          <img src={pauseIcon} className="w-6" />
        ) : (
          <img src={playIcon} className="w-6" />
        )}
      </button>
      <p className="text-xl font-medium">"no one has any enemies"</p>
    </div>
  );
};

export default MusicPlayer;
