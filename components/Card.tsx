import React from "react";
import axios from "axios";

interface CardProps {
  id: string;
  displayName: string;
  link: string;
}

export default function Card({ id, displayName, link }: CardProps) {
  const deleteResource = async (id: string) => {
    const response = axios.delete(`http://localhost:3000/api/resources/${id}`);
    console.log(response);
  };

  return (
    <>
      <div className='bg-white rounded shadow py-6 px-12 m-3 hover:shadow-lg flex flex-row justify-between'>
        <a href={link} className='hover:text-blue-500 cursor-pointer w-4/5'>
          {displayName}
        </a>
        <div className='flex flex-col justify-evenly'>
          <button className='bg-red-400 px-4 py-2 rounded text-white font-bold'>
            Delete
          </button>
          <button className='bg-yellow-400 px-4 py-2 rounded text-white font-bold'>
            Edit
          </button>
        </div>
      </div>
    </>
  );
}
