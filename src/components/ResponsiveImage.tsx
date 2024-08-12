import { useState, useEffect } from "react";
import { ImageModel } from "../interfaces/ImageModel";

interface ResponsiveImageProps {
    source: ImageModel;
    className?: string; // Add the optional className prop
  }

const ResponsiveImage:  React.FC<ResponsiveImageProps> = ({ source, className }) => {
  const [imageUrl, setImageUrl] = useState(source.mobile);

  const handleResize = () => {
    const windowWidth = window.innerWidth;
    let newImageUrl;
    if (windowWidth < 768) {
      newImageUrl = source.mobile;
    } else if (windowWidth < 1024) {
      newImageUrl = source.tablet;
    } else {
      newImageUrl = source.desktop;
    }
    setImageUrl(newImageUrl);
  };

  useEffect(() => {
    handleResize();
    // window.addEventListener("resize", handleResize);

    // Cleanup function to prevent memory leaks
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <img
      src={imageUrl ? `/images/${imageUrl}` : ""}
      alt="Not found"
      className={`${className}`}
    />
  );
};

export default ResponsiveImage;
