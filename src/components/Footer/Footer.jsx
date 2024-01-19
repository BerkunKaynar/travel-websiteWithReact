import React, { useEffect } from "react";
import "./footer.css";
import vide3 from "../../Assets/video3.mp4";
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={vide3} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email Address"
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdTravelExplore className="icon" /> B-K Travel
              </a>
            </div>
            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              beatae doloremque expedita aliquam dolores molestias nam saepe.
              Repudiandae, nam fuga! Molestiae, facere. Quas earum eius libero
              repellendus perspiciatis ea molestiae excepturi eum, omnis
              eligendi est nostrum doloremque culpa! Aut tenetur corrupti culpa
              labore, necessitatibus iste delectus veritatis unde voluptates
              beatae.
            </div>
            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>

          <div className="footerLinks grid">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">OUR AGENCY</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">Partners</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Booking
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup"
            >
              <span className="groupTitle">Last Minute</span>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Istanbul
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Paris
              </li>
              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rome
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE</small>
            <small> - </small>
            <small>COPYRIGHTS RESERVED - BERKUN KAYNAR 2024</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
