import React, { useEffect, useState } from "react";
import "./Homepage.scss";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import Wrapper from "../../components/Wrapper/Wrapper";
import Footer from "../../components/Footer/Footer";
import { Spring } from "react-spring/renderprops";
import { Link as ScrollLink } from "react-scroll";
import { PUBLIC_URL } from "@env";

import Icon from "@mdi/react";
import {
  mdiLinkedin,
  mdiGithub,
  mdiGooglePlus,
  mdiGit,
  mdiReact,
  mdiSass,
  mdiBabel,
  mdiNodejs,
  mdiDatabase,
  mdiElephant,
} from "@mdi/js";
import Section from "../../components/Section/Section";
import Project from "../../components/Project/Project";
import { Project1 } from "../../components/Project/Data";
import Sensor from "../../components/Sensor/Sensor";
import Button from "../../components/Button/Button";
import { SubscribeIcon } from "../../components/Icons";
import {Link} from "react-router-dom";

export default function Homepage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [heroStyle, setHeroStyle] = useState({
    height: window.innerWidth > 768 ? 400 : 330,
  });
  const [textSizes, setTextSizes] = useState({
    headerSize: "1.5rem", // Default size for <h1>
    paragraphSize: "1rem", // Default size for <p>
  });

  // Effect hook to add and remove the window resize listener
  // useEffect(() => {
  //   const handleResize = () => {
  //     // Update the heroStyle state based on the window width
  //     setHeroStyle({
  //       height: window.innerWidth > 768 ? 400 : 330,
  //     });
  //     setTextSizes({
  //       headerSize: "2.1rem", // Larger screens get larger text
  //       paragraphSize: window.innerWidth > 768 ? "1.5rem" : "1rem",
  //     });
  //     setWindowWidth(window.innerWidth);
  //   };

  //   // Listen for window resize events
  //   window.addEventListener("resize", handleResize);

  //   // Cleanup the event listener on component unmount
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // Function to determine padding based on window width
  const getDynamicPadding = () => {
    if (windowWidth > 768) {
      // Example breakpoint for desktop
      return 76;
    } else {
      return 30; // Smaller padding for mobile and tablets
    }
  };

  const flexDirectionStyle = windowWidth > 768 ? "row" : "column";
  const subFlexStyle = (baseFlex) => (windowWidth > 768 ? baseFlex : 1);
  const iconSize =
    windowWidth > 768
      ? { width: 417, height: 321 }
      : { width: 200, height: 150 };

      console.log(PUBLIC_URL); // https://myapi.com
  return (
    <div style={{ width: "100%" }}>
      <Header />
      <HeroSection flex alignItemsCenter homepage style={heroStyle}>
        <Wrapper flex spaceBetween>
          <Spring
            from={{ opacity: 0, marginLeft: -300 }}
            to={{ opacity: 1, marginLeft: 0 }}
          >
            {(props) => (
              <div className="content flex align-left" style={props}>
                <h1 className="name" style={{ fontSize: "1.7rem" }}>
                  EDUARDO GUTIERREZ
                </h1>
                <p className="role" style={{ fontSize: "1.1rem" }}>
                  Full Stack Developer
                </p>
                <ul className="links flex">
                  <li>
                    <ScrollLink
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={300}
                      className="pointer"
                    >
                      View Projects
                    </ScrollLink>
                  </li>
                  <li>
                    <Link
                      target="__blank"
                      to={`${PUBLIC_URL==="/" ? "" : PUBLIC_URL}/resume.pdf`}
                    >
                      Go to Resume
                    </Link>
                  </li>
                </ul>
                <ul className="socials flex">
                  <li>
                    <Link
                      target="__blank"
                      to={{ pathname: "http://www.github.com/bigegu24" }}
                    >
                      <Icon path={mdiLinkedin} size={0.9} color="white" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="__blank"
                      to={{ pathname: "http://www.github.com/bigegu24" }}
                    >
                      <Icon path={mdiGithub} size={0.9} color="white" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="__blank"
                      to={{ pathname: "http://www.github.com/bigegu24" }}
                    >
                      <Icon path={mdiGooglePlus} size={0.9} color="white" />
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </Spring>
        </Wrapper>
      </HeroSection>
      <Section className="about-me" id="about-me">
        <Wrapper flex spaceBetween>
          <Sensor once={true} offset={{ top: 100 }} partialVisibility={true}>
            {({ isVisible }) => (
              <>
                <Spring to={{ opacity: isVisible ? 1 : 0 }}>
                  {({ opacity }) => (
                    <div
                      className="image"
                      style={{
                        backgroundImage: `url("${PUBLIC_URL==="/" ? "" : PUBLIC_URL}/images/gh-picture.png")`,
                        opacity,
                      }}
                    ></div>
                  )}
                </Spring>
                <Spring to={{ opacity: isVisible ? 1 : 0 }}>
                  {({ opacity }) => (
                    <div
                      className="content flex full-width"
                      style={{
                        opacity,
                        paddingBlock: getDynamicPadding(),
                        textAlign: "left", // Center text on mobile
                      }}
                    >
                      <h1>About Me</h1>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable.
                      </p>
                    </div>
                  )}
                </Spring>
              </>
            )}
          </Sensor>
        </Wrapper>
      </Section>
      <Section className="my-skills">
        <Wrapper flex contentCenter itemsCenter column>
          <Sensor once={true}>
            {({ isVisible }) => (
              <>
                <Spring delay={100} to={{ opacity: isVisible ? 1 : 0 }}>
                  {({ opacity }) => <h1 style={{ opacity }}>My Skills</h1>}
                </Spring>
                <ul className="badges flex">
                  <Spring delay={200} to={{ opacity: isVisible ? 1 : 0 }}>
                    {({ opacity }) => (
                      <li className="align-center relative" style={{ opacity }}>
                        <Icon path={mdiGit} size={1.5} color="#f34f29" />
                        <p>Git</p>
                      </li>
                    )}
                  </Spring>
                  <Spring delay={325} to={{ opacity: isVisible ? 1 : 0 }}>
                    {({ opacity }) => (
                      <li className="align-center relative" style={{ opacity }}>
                        <Icon path={mdiReact} size={1.5} color="#61dafb" />
                        <p>React</p>
                      </li>
                    )}
                  </Spring>
                  <Spring delay={450} to={{ opacity: isVisible ? 1 : 0 }}>
                    {({ opacity }) => (
                      <li className="align-center relative" style={{ opacity }}>
                        <Icon path={mdiReact} size={1.5} color="#e9e9e9" />
                        <p>React Native</p>
                      </li>
                    )}
                  </Spring>
                  <Spring delay={575} to={{ opacity: isVisible ? 1 : 0 }}>
                    {({ opacity }) => (
                      <li className="align-center relative" style={{ opacity }}>
                        <Icon path={mdiSass} size={1.5} color="#c69" />
                        <p>Sass</p>
                      </li>
                    )}
                  </Spring>
                  {/* <Spring delay={700} to={{ opacity: isVisible ? 1 : 0 }}>
                    {({ opacity }) => (
                      <li className="align-center relative" style={{ opacity }}>
                        <Icon path={mdiBabel} size={1.5} color="#fff" />
                        <p>Babel</p>
                      </li>
                    )}
                  </Spring> */}
                  <Spring delay={825} to={{ opacity: isVisible ? 1 : 0 }}>
                    {({ opacity }) => (
                      <li className="align-center relative" style={{ opacity }}>
                        <Icon path={mdiNodejs} size={1.5} color="#68a063" />
                        <p>Node</p>
                      </li>
                    )}
                  </Spring>
                  {/* <Spring delay={950} to={{ opacity: isVisible ? 1 : 0 }}>
                    {({ opacity }) => (
                      <li className="align-center relative" style={{ opacity }}>
                        <Icon path={mdiDatabase} size={1.5} color="#f29111" />
                        <p>MySQL</p>
                      </li>
                    )}
                  </Spring> */}
                  <Spring delay={950} to={{ opacity: isVisible ? 1 : 0 }}>
                    {({ opacity }) => (
                      <li className="align-center relative" style={{ opacity }}>
                        <Icon path={mdiElephant} size={1.5} color="#3573e6" />
                        <p>PostgresSQL</p>
                      </li>
                    )}
                  </Spring>
                </ul>
              </>
            )}
          </Sensor>
        </Wrapper>
      </Section>
      {/* Projects Section */}
      <Section className="projects" id="projects">
        <Wrapper flex contentCenter itemsCenter column>
          <Sensor once={true}>
            {({ isVisible }) => (
              <Spring delay={200} to={{ opacity: isVisible ? 1 : 0 }}>
                {({ opacity }) => (
                  <h1 className="section-title" style={{ opacity }}>
                    Projects
                  </h1>
                )}
              </Spring>
            )}
          </Sensor>
          <Sensor once={true} offset={{ top: -200 }} partialVisibility={true}>
            {({ isVisible }) => (
              <div className="container grid flex">
                <Spring
                  delay={150}
                  from={{ opacity: isVisible ? 1 : 0, marginLeft: -500 }}
                  to={{ opacity: isVisible ? 1 : 0, marginLeft: 0 }}
                >
                  {({ opacity }) => (
                    <span style={{ opacity }}>
                      <Project {...Project1} />
                    </span>
                  )}
                </Spring>
                <Spring
                  delay={350}
                  from={{ opacity: isVisible ? 1 : 0, marginLeft: -500 }}
                  to={{ opacity: isVisible ? 1 : 0, marginLeft: 0 }}
                >
                  {({ opacity }) => (
                    <span style={{ opacity }}>
                      <Project {...Project1} />
                    </span>
                  )}
                </Spring>
                <Spring
                  delay={550}
                  from={{ opacity: isVisible ? 1 : 0, marginLeft: -500 }}
                  to={{ opacity: isVisible ? 1 : 0, marginLeft: 0 }}
                >
                  {({ opacity }) => (
                    <span style={{ opacity }}>
                      <Project {...Project1} />
                    </span>
                  )}
                </Spring>
                <Spring
                  delay={550}
                  from={{ opacity: isVisible ? 1 : 0, marginLeft: -500 }}
                  to={{ opacity: isVisible ? 1 : 0, marginLeft: 0 }}
                >
                  {({ opacity }) => (
                    <span style={{ opacity }}>
                      <Project {...Project1} />
                    </span>
                  )}
                </Spring>
                <Spring
                  delay={550}
                  from={{ opacity: isVisible ? 1 : 0, marginLeft: -500 }}
                  to={{ opacity: isVisible ? 1 : 0, marginLeft: 0 }}
                >
                  {({ opacity }) => (
                    <span style={{ opacity }}>
                      <Project {...Project1} />
                    </span>
                  )}
                </Spring>
              </div>
            )}
          </Sensor>
        </Wrapper>
      </Section>
      <Section className="last-contact">
        <Wrapper
          flex
          contentCenter
          itemsCenter
          row
          spaceBetween
          style={{ flexDirection: flexDirectionStyle }}
        >
          <div style={{ flex: subFlexStyle(2) }}>
            <SubscribeIcon
              width={iconSize.width}
              height={iconSize.height}
              color={"#5996f7"}
            />
          </div>
          <div
            className="content"
            style={{
              display: "flex",
              alignItems: "center",
              flex: subFlexStyle(2),
              marginTop: windowWidth <= 768 ? 18 : 0,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: windowWidth <= 768 ? "center" : "left",
              }}
            >
              <h1 className="title">Get in touch</h1>
              <p className="description">Let's connect.</p>
              <Link to={`${PUBLIC_URL==="/" ? "" : PUBLIC_URL}/contact`}>
                <Button type="blue">Contact Me</Button>
              </Link>
            </div>
          </div>
        </Wrapper>
      </Section>
      <Footer />
    </div>
  );
}
