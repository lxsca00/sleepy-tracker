import React from "react";
import style from "./SongChip.module.css"

const SongChip = ({song}) => {
    return(
        <div className={style.songChip}>
            <p>{song}</p>
        </div>
    )
}

export {SongChip}