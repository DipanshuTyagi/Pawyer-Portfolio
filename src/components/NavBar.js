import Dropdown from "./DropDown";
import React from "react";
import { useState } from "react";
import Button from "./Button";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

const NavBar = () => {
  const [selection, setSelection] = useState(null);
  const handleSelect = (option) => {
    setSelection(option);
  };
  const options = [
    { lable: "Real Estate Law ", value: "realestatelaw" },
    { lable: "Divorce Law", value: "divorcelaw" },
    { lable: "Injury Law ", value: "injurylaw" },
    { lable: "Civil Law ", value: "civillaw" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  let cls = "pl-0 ml-0 font-semibold my-7 min-[900px]: my-0 min-[900px]: ml-8";
  return (
    <div className="shadow min-[900px] w-full fixed top-0 left-0">
      <div className="min-[900px]:px-10 py-4 px-7 min-[900px]:flex items-center justify-between bg-white ">
        <div className="flex text-2xl cursor-pointer items-center gap-2">
          <span className="text-logo font-we">First Law</span>
        </div>

        {/* nav btn */}
        <div className="absolute right-8 top-7 cursor-pointer min-[900px]:hidden ">
          {isOpen ? (
            <RxCross1
              color="red"
              size={30}
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <HiMiniBars3BottomRight
              color="red"
              size={30}
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
        {/* nav links */}
        <ul
          className={`min-[900px]:flex gap-10 flex-wrap items-center min-[900px]:item-center   min-[900px]:pb-0 pb-12 absolute min-[900px]:static bg-white min-[900px]:z-auto z-[-1] left-0 w-full  min-[900px]:w-auto min-[900px]:pl-0 pl-9 transition-all min-[900px]:bg-white duration-500 ease-in 
          ${isOpen ? "top-12" : "top-[-400px]"}`}
        >
          <li className={cls}>
            <a href="">Home</a>
          </li>
          <li className={cls}>
            <a href="">About Us</a>
          </li>
          <li className={cls}>
            <a href="">Reviews</a>
          </li>
          <li className={cls}>
            <Dropdown
              options={options}
              value={selection}
              onChange={handleSelect}
            />
          </li>
          <li className={cls}>
            <Button className="bg-btn-color ml-0">Contact us</Button>
          </li>
        </ul>
      </div>
    </div>

    // <nav className="min-[900px]:flex flex-wrap justify-between mr-10 ml-10 items-center h-full">
    //   <div className="text-logo leading-logo-line-hight">First Law</div>

    //   <div className=""></div>
    //   <div className="min-[900px]:flex items-center gap-10">
    //     <a href="http://">Home</a>
    //     <a href="http://">About Us</a>
    //     <a href="http://">Reviews</a>
    //     <Dropdown
    //       options={options}
    //       value={selection}
    //       onChange={handleSelect}
    //       title={"Practice Areas"}
    //     />
    //     <Button className="w-24 bg-btn-color">Contact Us</Button>
    //   </div>

    //   <HiMiniBars3BottomRight size={40} color="#FF5E5B" className="" />
    // </nav>
  );
};

export default NavBar;
