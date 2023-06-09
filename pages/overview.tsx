import Link from "next/link";
import PageTemplate from "../templates/page.template";
import { motion } from "framer-motion";
import { container, text_reveal } from "../utils/Animation";
import { Frame } from "../components";
import SeoTags from "../components/SeoTags";

const Overview = () => {
  const overviews = [
    {
      content: {
        title: "About Me",
        link: "https://bobi-gunardi-portofolio.jimdosite.com/",
        status: "",
        description: "Bobi Gunardi",
        stacks: [
          "Microservices",
          "PHP(Laravel, CI, Lumen,Native)",
          "GO",
          "Python (Flask)",
          "NextJs",
          "Node.js(Express)",
          "PostgresQL",
          "MySQL",
          "MongoDB",
          "Graphql",
        ],
      },
    },
  ];

  const overviewList = overviews.map((project, index) => (
    <div className="overflow-hidden mt-10" key={index}>
      <Link href={project.content.link}>
        <a target="_blank" rel="noreferrer noopener">
          <motion.div
            className="flex flex-col transform duration-700 hover:scale-155 hover:text-third"
            variants={text_reveal}
          >
            <div className="mr-2 flex">
              <h1 className="mr-3">{project.content.title}</h1>
              <div>{project.content.status}</div>
            </div>
            <h3 className="text-xl mb-2">{project.content.description}</h3>
            <div className="flex flex-wrap w-80">
              {project.content.stacks.map((stack, key) => (
                <div
                  key={key}
                  className="mr-1 text-gray-400 bg-transparent px-1 my-1 rounded-md"
                >
                  {stack}
                </div>
              ))}
            </div>
          </motion.div>
        </a>
      </Link>
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
        <motion.div variants={container} className="md:w-1/2 lg:pl-36 z-20">
          {overviewList}
        </motion.div>
        <div className="md:static fixed md:block w-1/2">
          <Frame radius="rounded-full " />
        </div>
      </motion.div>
    </>
  );
};

export default Overview;

Overview.Template = PageTemplate;
