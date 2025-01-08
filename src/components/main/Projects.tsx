/* tslint:disable */
"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "../sub/ProjectCard";
import ProjectTag from "../sub/ProjectTag";
import { motion, useInView } from "framer-motion";
import { projectsData, tags } from '../../constants'

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: boolean) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment     
    // @ts-ignore
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className='px-20' id="projects">
      <h1 className="justify-center text-center my-4 m-auto text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Projects
        </h1>
      <div className="text-white mt-10 md:flex md:flex-row justify-center items-center gap-5 py-6">
        {tags.map((tag)=> (
          <ProjectTag
            key={tag.name}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment     
            // @ts-ignore
            onClick={handleTagChange}
            name={tag.name}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment     
            // @ts-ignore
            isSelected={tag === tag.name}
          />
        ))}

      </div>
      <ul ref={ref} className="mt-10 grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
