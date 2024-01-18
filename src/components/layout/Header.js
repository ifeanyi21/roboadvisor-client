import React from "react";
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className="px-10">
      <div className="flex justify-between py-4 border-b items-center">
        <div className="md:text-3xl text-xl font-bold">Roboadvisior</div>
        <div className="flex gap-4">
          <Button
            title={"Log in"}
            className={"border border-black rounded-full px-4 py-2"}
          />
          <Button
            title={"Get Started"}
            className={
              "md:block hidden border border-black bg-black/90 text-white rounded-full px-4 py-2"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
