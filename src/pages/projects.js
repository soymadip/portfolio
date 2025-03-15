import React from "react";
import Layout from "@theme/Layout";
import ProjectCard from "@site/src/components/ProjectCard";

export default function Projects() {
  return (
    <Layout
      title="Projects"
      description="My Projects and Works"
    >
      <main>
        <ProjectCard showAll={true} />
      </main>
    </Layout>
  );
}
