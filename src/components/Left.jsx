import { AddOutlined, EastOutlined } from "@mui/icons-material";
import styled from "styled-components";
import Projects from "./Projects";

const Container = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
`;
const Wrapper = styled.div``;
const Top = styled.div`
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  padding: 50px;
`;
const Project = styled.span`
  display: flex;
  align-items: center;
  font-size: 30px;
  gap: 5px;
  cursor: pointer;
`;
const AllProject = styled.span`
  display: flex;
  align-items: center;
  font-size: 15px;
  cursor: pointer;
  gap: 10px;
`;
const Middle = styled.div``;
const Bottom = styled.div`
  border-bottom: 1px solid gray;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Tag = styled.span`
  font-size: 30px;
  font-weight: 600;
`;
const AllTags = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const TagContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  @media (min-width: 890x) {
    padding: 80px;
  }
`;
const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  :nth-child(2) {
    background-color: lightyellow;
  }
  :nth-child(3) {
    background-color: tomato;
  }
  :nth-child(5) {
    background-color: tomato;
  }
  :nth-child(7) {
    background-color: lightyellow;
  }
`;

const Left = ({
  projectModal,
  setProjectModal,
  handleAllProjects,
  handleSelector,
}) => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Project onClick={() => setProjectModal(!projectModal)}>
            Projects <AddOutlined />
          </Project>
          <AllProject onClick={handleAllProjects}>
            All projects <EastOutlined />
          </AllProject>
        </Top>
        <Middle>
          <Projects handleSelector={handleSelector} />
        </Middle>
        <Bottom>
          <Tag>Tags</Tag>
          <AllTags>
            All Tags <EastOutlined fontSize="small" />{" "}
          </AllTags>
        </Bottom>
      </Wrapper>
      <TagContainer>
        <Button>#uiuxdesgin</Button>
        <Button>#posters</Button>
        <Button>#ideas</Button>
        <Button>#userflow</Button>
        <Button>#graphicsdesign</Button>
        <Button>#visualdesign</Button>
        <Button>#plugins</Button>
      </TagContainer>
    </Container>
  );
};

export default Left;
