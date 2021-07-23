// imports...........................
import Navbar from "../components/Navbar";
import Body from "./components/Body";
import "./style.css";
import { FC } from "react";

const index: FC = () => {
  return (
    <div>
      <Navbar />
      <Body />
    </div>
  );
};

export default index;
