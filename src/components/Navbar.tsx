import Link from "next/link";
import React from "react";

const Navbar = () => {
  return <div className="flex p-4 h-12 text-red-500 justify-between items-center border-b-2 border-b-red-500 ">
    <div className="text-lg">
        <Link href="/">Feast ON</Link>
    </div>
    <div>
    =
    </div>
  </div>;
};

export default Navbar;
