import { EastOutlined } from "@mui/icons-material";
import styled from "styled-components";
const Container = styled.div`
  padding: 30px;
  cursor: pointer;
  :nth-child(odd) {
    border-right: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
  }
  :nth-child(even) {
    border-bottom: 1px solid lightgray;
  }
`;
const ImgContainer = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 20px;
  margin-top: 30px;
`;
const Img = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  :nth-child(1) {
    position: absolute;
    left: 20px;
  }
  :nth-child(2) {
    position: absolute;
    left: 40px;
  }
`;
const ProjectTitle = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 500;
`;
const TaskNumber = styled.p`
  font-size: 13px;
  color: gray;
  display: flex;
  gap: 10px;
  align-items: center;
`;
const Project = ({ item }) => {
  return (
    <Container>
      <ImgContainer>
        <Img src="/src/assets/img1.jpg" alt="" />
        <Img src="/src/assets/img2.jpg" alt="" />
        <Img src="/src/assets/img3.jpg" alt="" />
      </ImgContainer>
      <ProjectTitle>{item.title}</ProjectTitle>
      <TaskNumber>
        {item?.tasks?.length} tasks open <EastOutlined fontSize="small" />
      </TaskNumber>
    </Container>
  );
};

export default Project;
