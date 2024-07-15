import React from "react";
import Banner from "./reusable/banner_type1";

const Banner3 = () => {
  return (
    <div>
      <Banner
        title="Providing Special Care For Your Pets!"
        description="At our facility, we go above and beyond to cater to the unique needs of each pet. From luxurious spa treatments to customized exercise regimes, we prioritize their well-being and happiness."
        button="Explore more"
        image_path="/images/banner3.jpg"
      />
    </div>
  );
};

export default Banner3;
