import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Dream",
    description:
      "Full stack vacation home rental app in React, with redux integration via express middleware️",
    getImageSrc: () => require("../images/photo2.jpg"),
    demo: "https://dream-one-nu.vercel.app/",
  },
  {
    title: "Artify",
    description:
      "MERN Full Stack Next.js 14 Art Marketplace with Stripe, Next Auth, React, MongoDB, Sass",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            demo={project.demo}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
