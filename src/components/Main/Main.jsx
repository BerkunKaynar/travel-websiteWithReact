import React, { useEffect } from "react";
import "./main.css";
import img from "../../Assets/img.jpg";
import img1 from "../../Assets/img1.jpg";
import img3 from "../../Assets/img3.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bahamas",
    location: "Bahamas",
    grade: "Cultural Relax",
    fees: "$700",
    description:
      "Escape to the Bahamas, where turquoise waters and white-sand beaches create a paradise worth exploring. Embrace the vibrant culture, indulge in tropical delights, and let the beauty of the Bahamas inspire your next getaway.",
  },
  {
    id: 2,
    imgSrc: img1,
    destTitle: "Maldives",
    location: "Maldives",
    grade: "Cultural Relax",
    fees: "$1100",
    description:
      "The Maldives: A paradise of white sands, turquoise waters, and coral wonders. Escape to this idyllic haven where every moment paints a picture of pure bliss.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Bodrum",
    location: "Muğla",
    grade: "Cultural Relax",
    fees: "$1700",
    description:
      "Aegean bliss with turquoise seas, charming streets, and unforgettable moments",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS <LuClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
