import React, { useState } from "react";
import Comptes from "./Comptes";


const Postes = ({ numero, name, comptes, id }) => {
  const [postesActive, setPostesActive] = useState(false);

  return (
    <div className="">
      <ul
        key={id}
        onClick={() => setPostesActive(!postesActive)}
        className="flex gap-3 bg-primaryLight border-b border-gray1 mb-1 p-1 "
      >
        <li className="pl-1 sm:pl-10 basis-1/6  flex items-center">
          <span className=" pl-5 pr-5 ">
            {postesActive ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            )}{" "}
          </span>{" "}
          <span>{numero}</span>
        </li>
        <li className="basis-3/4 sm:pl-7 lowercase ">{name}</li>


      </ul>


      {postesActive &&
        comptes &&
        comptes.map((item) => (
          <Comptes id={item.id} numero={item.numero} name={item.name.toLowerCase()} />
        ))}
    </div>
  );
};

export default Postes;
