import styled from "styled-components";
import Project from "./Project";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Projects = ({ handleSelector }) => {
  const { projects } = useSelector((state) => state.tasks);
  return (
    <Container>
      {projects?.slice(0, 4).map((item) => (
        <Project handleSelector={handleSelector} item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Projects;
