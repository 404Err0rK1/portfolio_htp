import { useEffect, useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Boo Food",
    img: "/foodtp.png",
    desc: {
      project_type: 'E-commerce Website',
      languages_and_frameworks: 'TypeScript, NextJS',
      key_features: 'User Registration, User Authentication, Content Management, Search Functionality, E-commerce Functionality,...',
      database: 'MongoDB, Firebase',
      achievements: 'Received high praise from the mentor within the company'
    },
  },
  {
    id: 2,
    title: "Graduation project",
    img: "/project-3.png",
    desc: {
      project_type: 'Web Application',
      languages_and_frameworks: 'HTML, CSS, JavaScript, Solidity, Remix-IDE, Metamask, Ganache',
      key_features: 'Manage uploaded files based on a blockchain platform, create a user with the admin role, upload file, verify file, delete file',
      database: 'IPFS',
      achievements: `My graduation project achieved a score of 9.5 and received high praise from the school's evaluation committee.`
    },
  },
  {
    id: 3,
    title: "Portfolio",
    img: "/Project-2.png",
    desc: {
      project_type: 'Portfolio Website',
      languages_and_frameworks: 'JavaScript, ReactJS',
      key_features: 'Introduce yourself, highlighting your skills, work experience, and personal projects.',
      database: '',
      achievements: 'Attracted over 400 views when the portfolio was publicly shared on social media platforms such as Facebook, Instagram,...'
    },
  },

];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <div className="listContainerItemDesc">
              <div className="itemDesc">
                <p className="nameDesc">
                  Project Type:
                </p>
                <p className="detailDesc">
                  {item.desc.project_type}
                </p>
              </div>
              <div className="itemDesc">
                <p className="nameDesc">
                  Languages and frameworks:
                </p>
                <p className="detailDesc">
                  {item.desc.languages_and_frameworks}
                </p>
              </div>
              <div className="itemDesc">
                <p className="nameDesc">
                  Key Features:
                </p>
                <p className="detailDesc">
                  {item.desc.key_features}
                </p>
              </div>
              {item.desc.database ?
                <div className="itemDesc">

                  <p className="nameDesc">
                    Database:
                  </p>
                  <p className="detailDesc">
                    {item.desc.database}
                  </p>
                </div>
                : null}

              <div className="itemDesc">
                <p className="nameDesc">
                  Achievements:
                </p>
                <p className="detailDesc">
                  {item.desc.achievements}
                </p>
              </div>
            </div>
            <button onClick={() => { console.log('htp'); }}>Link GitHub</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
