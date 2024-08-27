import React,{ useRef } from 'react'

import Card from "./Card";


function Foreground() {
  // const data = [
  //     {
  //         icon,desc,filesize, closed or download , tagdetails,
  //     }
  // ]
  const ref = useRef(null);
  const data = [
    {
      desc: "This is background content for the card.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is background content for the card.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is background content for the card.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 p-5 flex-wrap">
      {data.map((item, index) => (
        <Card key={index} data={item} references={ref} />
      ))}
    </div>
  );
}

export default Foreground;
