//import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"
function Card({ data,references }) {
  return (
    <motion.div drag dragConstraints={references} whileDrag={{scale:1.2}} dragElastic={0.2} className="relative flex-shrink-0 w-60 h-72 bg-zinc-700 rounded-[45px] text-white py-10 px-8 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm mt-5 leading-tight font-semibold">{data.desc}</p>

      <div className="bottom-0 absolute footer w-full  bg-zinc-700 left-0  text-white">
        <div className="flex items-center justify-between mb-5 px-5 ">
          <h5>{data.filesize}</h5>
          <span className="w-6 h-6 bg-zinc-200 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoIosClose />
            ) : (
              <IoMdDownload size="1em" color="black" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full color-white py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex justify-center items-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
