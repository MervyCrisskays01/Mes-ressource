import React, { useState } from "react";
import Postes from "./Postes";

const Rubriques = ({ numero, name, postes, id }) => {
  const [rubriqueActive, setRubriqueActive] = useState(false);

  return (
    <div className="">
      <ul
        key={id}
        onClick={() => setRubriqueActive(!rubriqueActive)}
        className="flex flex-row bg-gray1 p-1 text-base"
      >
        <li className="pl-1 sm:pl-10 basis-1/6  flex items-center">
          <span className=" pl-2 pr-5 ">
            {rubriqueActive ? (
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
        <li className="basis-3/4 sm:pl-5">{name}</li>
      </ul>

      {rubriqueActive &&
        postes &&
        postes.map((item) => (
          <Postes
            id={item.id}
            comptes={item.comptes}
            numero={item.numero}
            name={item.name.toLowerCase()}
          />
        ))}
    </div>
  );
};

export default Rubriques;
