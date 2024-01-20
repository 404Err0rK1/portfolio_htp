import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I am dedicated to cultivating the essential skills required for a web developer
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "greenyellow" }}>My Skills</motion.b>
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Front-end Programming Languages</h2>
          <div className="listSkill">
            <li className="item_skill">HTML</li>
            <li className="item_skill">CSS/SCSS</li>
            <li className="item_skill">JavaScript</li>
            <li className="item_skill">TypeScript</li>
          </div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Front-end Libraries and Frameworks</h2>
          <div className="listSkill">
            <li className="item_skill">ReactJS</li>
            <li className="item_skill">NextJS</li>
            <li className="item_skill">VueJS</li>
            <li className="item_skill">Bootstrap</li>
            <li className="item_skill">Tailwind CSS</li>
          </div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Responsive Web Design</h2>
          <div className="listSkill">
            <li className="item_skill">Media queries</li>
            <li className="item_skill">Flexbox</li>
            <li className="item_skill">Grid layout</li>
          </div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Back-end Development</h2>
          <div className="listSkill">
            <li className="item_skill">NodeJS</li>
            <li className="item_skill">ExpressJS</li>
          </div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Databases</h2>
          <div className="listSkill">
            <li className="item_skill">MongoDB</li>
            <li className="item_skill">Firebase</li>
          </div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Version Control Tools, Development Tools and Environments</h2>
          <div className="listSkill">
            <li className="item_skill">Git</li>
            <li className="item_skill">GitHub</li>
            <li className="item_skill">Visual Studio Code</li>
            <li className="item_skill">Docker</li>
            <li className="item_skill">npm (Node Package Manager)</li>
          </div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Effective Software Development Processes</h2>
          <div className="listSkill">
            <li className="item_skill">Agile</li>
            <li className="item_skill">Scrum</li>
          </div>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default Services;
