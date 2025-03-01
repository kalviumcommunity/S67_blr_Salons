import React from "react";
import DisplayCard from "./DisplayCard";

const Cards = () => {
  return (
    <div className="p-6 flex flex-col gap-4">
      <DisplayCard title="Pall Salon" description="Implement authentication and cart API" location="" />
      <DisplayCard title="PK Salon" description="Create API docs and README" status="RR Nagar" />
    </div>
  );
};

export default Cards;