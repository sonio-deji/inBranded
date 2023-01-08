import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  min-width: 70vw;
  padding-top: 20px;
  overflow: scroll;
  height: 100%;
`;
const Wrapper = styled.div`
  border-bottom: 1px solid lightgray;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  font-size: 25px;
`;
const TaskContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Tasks = styled.li`
  margin-right: 150px;
  color: gray;
`;

const AllProjects = () => {
  const { projects } = useSelector((state) => state.tasks);
  return (
    <Container>
      {projects?.map((item) => (
        <Wrapper key={item.id}>
          <Title>{item.title}</Title>
          <TaskContainer>
            {item?.tasks?.map((task) => (
              <Tasks>{task.name}</Tasks>
            ))}
          </TaskContainer>
        </Wrapper>
      ))}
    </Container>
  );
};

export default AllProjects;
