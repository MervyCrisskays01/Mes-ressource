import React, { useState } from "react";
import Rubriques from "./Rubriques";

const Classes = ({ rubriques, name, numero, id }) => {
  const [classActive, setClassActive] = useState(false);
  return (
    <>
      <ul
        onClick={() => setClassActive(!classActive)}
        key={id}
        className="flex flex-row   p-2 shadow"
      >
        <li className=" basis-1/6  flex items-center">
          <span className="sm:pl-2 pr-5 font-bold">
            {classActive ? (
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
            )}
          </span>{" "}
          <span>{numero}</span>
        </li>
        <li className="basis-3/4 capitalize">{name} </li>
      </ul>
      {classActive &&
        rubriques &&
        rubriques.map((item) => (
          <Rubriques
            name={item.name.toLowerCase()}
            numero={item.numero}
            id={item.id}
            postes={item.postes}
          />
        ))}
    </>
  );
};

export default Classes;
