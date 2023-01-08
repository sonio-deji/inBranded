import styled from "styled-components";
import CreateTask from "./components/CreateTask";
import Header from "./components/Header";
import Left from "./components/Left";
import Right from "./components/Right";
import { useState } from "react";
import AllProjects from "./components/AllProjects";
import { useSelector } from "react-redux";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;
const Content = styled.div`
  display: flex;
  margin-top: 50px;
  border-top: 1px solid lightgray;
`;
const RightContainer = styled.div`
  display: flex;
  overflow: hidden;
  flex: 2;
  border-left: 1px solid lightgray;
`;
const RightWrapper = styled.div`
  transition: transform 1s ease-in-out;
`;
const AllProjectWrapper = styled.div`
  transition: transform 1s ease-in-out;
`;

function App() {
  const [taskModal, setTaskModal] = useState(false);
  const [projectModal, setProjectModal] = useState(false);
  const [handleSearchBar, setHandleSearchBar] = useState("");
  const [completedTasks, setCompletedTasks] = useState(null);

  const [slider, setSlider] = useState(0);

  //handles slider to view all projects
  const handleAllProjects = () => {
    if (slider === 0) {
      setSlider(slider + 1);
    } else {
      setSlider(0);
    }
  };
  return (
    <Container>
      <Header setHandleSearchBar={setHandleSearchBar} />
      <Content>
        <Left
          projectModal={projectModal}
          setProjectModal={setProjectModal}
          handleAllProjects={handleAllProjects}
        />
        <RightContainer>
          <RightWrapper style={{ transform: `translateX(${slider * -100}%)` }}>
            <Right
              setTaskModal={setTaskModal}
              taskModal={taskModal}
              handleSearchBar={handleSearchBar}
              completedTasks={completedTasks}
              setCompletedTasks={setCompletedTasks}
            />
          </RightWrapper>
          <AllProjectWrapper
            style={{ transform: `translateX(${slider * -100}%)` }}
          >
            <AllProjects />
          </AllProjectWrapper>
        </RightContainer>
      </Content>
      {taskModal && (
        <CreateTask taskModal={taskModal} setTaskModal={setTaskModal} />
      )}
    </Container>
  );
}

export default App;
