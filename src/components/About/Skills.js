import React from "react";
import { useSelector } from 'react-redux';
import { Container } from "react-bootstrap";
import SkillStack from "./skillStack";

function Skills() {
  const tools = useSelector((state) => state.toolsData.tools);
  const techs = useSelector((state) => state.techsData.techs);
  return (
    <section id="skills">
    <Container fluid className="about-section">
      <Container>
        <div>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <SkillStack skillData={techs} />
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I Use
          </h1>
          <SkillStack skillData={tools} />
        </div>
      </Container>
    </Container>
    </section>
  );
}

export default Skills;
