import React, { useState } from "react";
import { gallery } from "../Data/galleryData";

export default function ImageGallery() {
  let [mainSrc, setMainSrc] = useState(gallery[0]);
  let [color,setColor]=useState(false)
  return (
    <>

        <div className=
        {
            `w-[250px] 
            h-[250px] 
            border-1 
            ${color ? "bg-yellow-500" : "" }  `
        }></div>
        <button onClick={()=>setColor(true)}>On</button> | 
        <button onClick={()=>setColor(false)}> Off </button>

        
      <div className="max-w-[700px] mx-auto mb-10">
        <img src={mainSrc} alt="" />
        <div className="grid grid-cols-4 gap-3">
          {gallery.map((src, index) => {
            return (
              <img
                onClick={() => setMainSrc(src)}
                key={index}
                src={src}
                alt=""
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
