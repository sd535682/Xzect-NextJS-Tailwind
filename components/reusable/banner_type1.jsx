const Banner = ({ title, description, button, image_path }) => {
  return (
    <div className="grid_row">
      <div className="title_subtitle">
        <h1 className="head_title">{title}</h1>
        <p>{description}</p>
        <a href="#" className="custom-button">
          {button}
        </a>
      </div>
      <div className="banner_image">
        <img src={image_path} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
