import React, { useState } from "react";

export default function Card(props) {
  const { title, description, image_url, hover_color } = props;
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const handleImageLoad = (event) => {
    const { naturalWidth, naturalHeight } = event.target;
    setDimensions({ width: naturalWidth, height: naturalHeight });
  };

  // Calculate w_size and h_size based on image dimensions
  const w_size = Math.round(dimensions.width / 120);
  const h_size = Math.round((dimensions.height / dimensions.width) * w_size);

  return (
    <div
      className={`card`}
      style={{
        backgroundImage: `url("${image_url}")`,
        gridColumn: `span ${w_size} / auto`,
        gridRow: `span ${h_size} / auto`,
      }}
    >
      <p className="title" style={{ padding: "20px" }}>
        {title}
      </p>
      <p
        style={{
          fontSize: "20px",
          position: "absolute",
          bottom: 0,
          right: 0,
          paddingRight: "20px",
        }}
      >
        {">"}
      </p>
      <div
        className="overlay"
        style={{
          ...hover_color,
          padding: "20px",
        }}
      >
        <p className="title">{title}</p>
        <p className="description">{description}</p>

        <p
          style={{
            fontSize: "20px",
            position: "absolute",
            bottom: 0,
            right: 0,
            paddingRight: "20px",
            color: hover_color.color,
          }}
        >
          {">"}
        </p>
      </div>
      {/* Hidden image to calculate dimensions */}
      <img
        src={image_url}
        alt={title}
        onLoad={handleImageLoad}
        style={{ display: "none" }}
      />
    </div>
  );
}
