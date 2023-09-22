import React from "react";
import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panal from "./Panal";

const Dropdown = ({ options, value, onChange, title, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  // click on the body and close the selection option

  useEffect(() => {
    const handle = (e) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handle, true);

    return () => {
      document.removeEventListener("click", handle);
    };
  }, []);

  // click and open -----------------------------------

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    // onChange(option);
  };
  // Render option -----------------------------------
  const renderitem = options.map((option) => {
    return (
      <Panal
        className=" hover:bg-blue-100 rounded cursor-pointer p-1 "
        key={option.value}
      >
        {option.lable}
      </Panal>
    );
  });
  //-------------------------------------------------
  return (
    <div ref={divEl} className="w-48 relative">
      <Panal
        className=" flex items-center cursor-pointer gap-5 bg-white"
        {...rest}
        onClick={handleClick}
      >
        {value?.target.outerText || "Practice Areas"}
        <GoChevronDown />
      </Panal>
      {/* <GoChevronDown onClick={handleClick} /> */}

      {isOpen && (
        <Panal
          className="absolute top-full border rounded bg-white "
          style={{ background: "white" }}
          onClick={(option) => handleOptionClick(option)}
        >
          {renderitem}
        </Panal>
      )}
    </div>
  );
};

export default Dropdown;
