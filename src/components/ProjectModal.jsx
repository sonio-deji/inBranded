import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from "../redux/taskReducer";

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 100vh;
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
const Content = styled.div``;
const Input = styled.input`
  outline: none;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid lightgray;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
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

const ProjectModal = ({ setProjectModal }) => {
  return (
    <Container onClick={() => setProjectModal(false)}>
      <Wrapper>
        <Content onClick={(e) => e.stopPropagation()}>
          <Input
            name="project"
            placeholder="create a projects"
            onChange={handleChange}
          />
          <ButtonContainer>
            <Button onClick={handleSubmit} type="submit">
              Submit
            </Button>
            <Button onClick={() => setProjectModal(false)}>close</Button>
          </ButtonContainer>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default ProjectModal;
