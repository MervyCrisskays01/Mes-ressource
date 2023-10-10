import React from "react";

const Comptes = ({ numero, name, id }) => {
  return (
    <div className="">
      <ul
        key={id}
        className="flex  bg-white border-b border-gray1  shadow-md "
      >
        <li className=" sm:pl-28 basis-1/6 flex items-center">
          {numero}
        </li>
        <li className="basis-3/4  md:pl-12">
          {name}
        </li>
      </ul>

    </div>
  );
};

export default Comptes;
