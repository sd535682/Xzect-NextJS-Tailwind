import React from "react";
import Banner from "./reusable/banner_type1";

const Banner1 = () => {
  return (
    <div>
      <Banner
        title="Providing Special Care For Your Pets!"
        description="We offer special services for special pets! Whether it's personalized grooming, tailored diets, or exclusive play areas, our dedicated care ensures every pet receives the attention they deserve. "
        button="View Our Services"
        image_path="/images/banner1.png"
      />
    </div>
  );
};

export default Banner1;
