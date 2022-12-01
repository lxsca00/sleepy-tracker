import React from "react";
import { NavBar } from "../../components/NavBar";
import { SongChip } from "../../components/SongChip";
import style from "./Playlist.module.css";

const Playlist = () => {
  const songs = ["Waves", "Rain", "Classic", "Forest"];

  return (
    <section className={style.playlist}>
      <h3>This is playlist page</h3>
      <div className={style.songsContainer}>
        {songs.map((song, index) => (
          <SongChip key={index} song={song} />
        ))}
      </div>

      <NavBar />
    </section>
  );
};

export { Playlist };
