import SeoTags from "../components/SeoTags";
import PageTemplate from "../templates/page.template";
import { motion } from "framer-motion";
import { container, text_reveal, text_reveal_fade } from "../utils/Animation";
import { Frame } from "../components";

const About = () => {
  const texts = [{ content: "Backend Developer" }];

  const textList = texts.map((text, index) => (
    <div className="overflow-hidden" key={index}>
      <motion.div
        style={{ fontSize: "5rem" }}
        className="mb-8 gradient-text"
        variants={text_reveal}
      >
        {text.content}
      </motion.div>
    </div>
  ));

  return (
    <>
      <SeoTags />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex"
      >
        <motion.div variants={container} className="md:w-1/2 lg:pl-36">
          {textList}
          <motion.p
            variants={text_reveal_fade}
            style={{ lineHeight: "2.1rem", fontSize: "17px" }}
          >
           Highly skilled Backend Developer with a passion for creating efficient and scalable web applications. Proficient in PHP (Laravel, Lumen, CI), Golang (Gin), Python (Flask), and experienced in working with various databases such as MySQL, MongoDB, Postgres, and MariaDB. Strong knowledge of Linux, Docker, Redis, and GraphQL. .{" "}
            <span className="gradient-text">
            Committed to delivering high-quality code and optimizing database performance for optimal user experience
            </span>{" "}
          </motion.p>
        </motion.div>
        <div className="md:static fixed md:block w-1/2">
          <Frame radius="rounded-md" />
        </div>
      </motion.div>
    </>
  );
};

export default About;

About.Template = PageTemplate;
