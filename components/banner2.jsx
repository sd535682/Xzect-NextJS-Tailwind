import React from "react";
import Banner_Type_2 from "./reusable/banner_type_2";
import Banner2_cards from "./reusable/banner2_cards";

const Banner2 = () => {
  return (
    <Banner_Type_2
      title="What We Do?"
      div={
        <div>
          <div>
            <Banner2_cards />
          </div>
        </div>
      }
    />
  );
};

export default Banner2;
