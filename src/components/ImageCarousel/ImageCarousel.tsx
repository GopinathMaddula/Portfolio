import { useEffect, useState } from "react";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import c1 from "../../assets/images/1.png";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import c2 from "../../assets/images/2.png";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import c3 from "../../assets/images/3.png";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import c4 from "../../assets/images/4.png";
// @ts-ignore: allow importing image asset without a module declaration (add a *.png d.ts later)
import c5 from "../../assets/images/5.png";

const images = [c1, c2, c3, c4, c5];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div style={{ width: "100%", position: "relative", overflow: "hidden" }}>
        {/* Sliding Wrapper */}
        <div
          style={{
            display: "flex",
            width: `${images.length * 100}%`,
            transform: `translateX(-${index * (100 / images.length)}%)`,
            transition: "transform 0.7s ease-in-out",
          }}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              style={{
                width: `${100 / images.length}%`,
                objectFit: "cover",
              }}
            />
          ))}
        </div>

        {/* Dots */}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "20px",
          }}
        >
          {images.map((_, i) => (
            <div
              key={i}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: i === index ? "#333" : "#ccc",
                transition: "0.3s",
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
