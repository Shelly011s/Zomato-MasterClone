import React from "react";
import { useParams } from "react-router-dom";

//Components
import Delivery from "./Delivery";
import DineOut from "./DiningOut";

const Master = () => {
  const { type } = useParams();

  return (<>
    <div className="m-4">
    {type === "delivery" && <Delivery /> }
    </div>
    <div className="m-4">
    {type === "dining" && <DineOut /> }
    </div>
    </>);
};

export default Master;
