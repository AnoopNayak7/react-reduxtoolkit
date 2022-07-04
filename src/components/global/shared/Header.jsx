import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <div className="bg-primary">
      <Container>
        <div className="flex justify-between text-white">
          <div className="text-xl">Movies<span className="text-secondary text-2xl"> .</span></div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
