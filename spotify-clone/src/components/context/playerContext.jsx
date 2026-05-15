import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../../assets/assets";

export const playerContext = createContext();
const PlayerContextProvider = (props) =>{

const audioRef = useRef();
const seekBg = useRef();
const seekBar = useRef();

const [track,setTrack]=useState(songsData[2]);
const [playStatus,setPlayStatus]=useState(false);


const [time , setTime]= useState({
    currentTime :{
        second :" --",
        minute :"-- "
    },
    totalTime:{
        second :" --",
        minute:"-- "
    }
});

useEffect(() => {
  const audio = audioRef.current;

  if (!audio) return;

  const update = () => {

    if (!audio.duration || !seekBar.current) return;

    const progress =
      (audio.currentTime / audio.duration) * 100;

    seekBar.current.style.width = progress + "%";

    setTime({
      currentTime: {
        second: Math.floor(audio.currentTime % 60),
        minute: Math.floor(audio.currentTime / 60),
      },
      totalTime: {
        second: Math.floor(audio.duration % 60),
        minute: Math.floor(audio.duration / 60),
      },
    });
  };

  audio.addEventListener("timeupdate", update);

  return () => {
    audio.removeEventListener("timeupdate", update);
  };
}, []);

const play =()=>{
    audioRef.current.play();
    setPlayStatus(true);
}
const pause=()=>{
    audioRef.current.pause();
    setPlayStatus(false);
}

const playWithId = async (id) => {
    await setTrack(songsData[id])
    await audioRef.current.play();
    setPlayStatus(true)
}

const before =async () =>{
    if(track.id>0){
        await setTrack(songsData[track.id-1])
        await audioRef.current.play();
        setPlayStatus(true);
    }
}

const after =async () =>{
    if(track.id<songsData.length-1){
        await setTrack(songsData[track.id+1])
        await audioRef.current.play();
        setPlayStatus(true);
    }
}

const seeBgClik = (e) => {
  const audio = audioRef.current;

  if (!audio || !audio.duration || !seekBg.current) return;

  const rect = seekBg.current.getBoundingClientRect();
  const clickX = e.clientX - rect.left;

  const newTime = (clickX / rect.width) * audio.duration;

  audio.currentTime = newTime;
};

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track,
        playStatus,
        time,
        setTrack,
    
        setPlayStatus,
        setTime,
        play,
        pause,
        playWithId,
        after,
        before,
        seeBgClik
    };

    return (
        <playerContext.Provider value={contextValue}>
            {props.children}
        </playerContext.Provider>

    )

}
export default PlayerContextProvider;