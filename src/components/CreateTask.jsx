import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProject, addTask, addTaskToProject } from "../redux/taskReducer";
const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.7);
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 50%;
  border-radius: 8px;
  background-color: white;
  padding: 20px;
`;
const TitleInput = styled.input`
  outline: none;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid lightgray;
`;
const TextArea = styled.textarea`
  outline: none;
  padding: 10px;
  border-radius: 5px;
  height: 120px;
  border: 1px solid lightgray;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  width: 50%;
  background-color: ${(props) =>
    props.type === "submit" ? "rgba(49, 130, 206)" : "rgba(229, 62, 62)"};
  border: none;
  color: white;
`;

const CreateTask = ({ setTaskModal, taskSelector }) => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");
  const [title, setTitle] = useState("");

  //generate random id
  const generateId = () => {
    return Math.random();
  };
  const generateTaskId = () => {
    return Math.random();
  };
  const taskId = generateTaskId();
  const id = generateId();
  const handleSubmit = () => {
    dispatch(addProject({ id, title, id, taskName, taskId }));
    setTaskModal(false);
  };
  const handleTaskTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleCreateTask = (e) => {
    setTaskName(e.target.value);
  };
  return (
    <Container onClick={() => setTaskModal(false)}>
      <Wrapper>
        <Content onClick={(e) => e.stopPropagation()}>
          <TitleInput placeholder="project name" onChange={handleTaskTitle} />
          <TextArea
            placeholder="create task"
            onChange={handleCreateTask}
          ></TextArea>
          <ButtonContainer>
            <Button type="submit" onClick={handleSubmit}>
              Submit
            </Button>
            <Button onClick={() => setTaskModal(false)}>close</Button>
          </ButtonContainer>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default CreateTask;
