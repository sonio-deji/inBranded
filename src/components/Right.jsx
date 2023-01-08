import { AddOutlined, ListOutlined } from "@mui/icons-material";
import styled from "styled-components";
import CalendarList from "./CalendarList";
import Tasks from "./Tasks";

const Container = styled.div`
  padding: 20px;
  display: flex;
  gap: 10px;
  height: 87vh;
  min-width: 70vw;
  @media (max-width: 890px) {
    min-width: 62vw;
  }
`;
const Main = styled.div`
  flex: 4;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Tags = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;
`;
const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;

  :nth-child(3) {
    background-color: tomato;
    color: white;
  }
`;
const AllTask = styled.div`
  font-size: 30px;
  font-weight: 600;
`;
const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const NewTask = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Filter = styled.div``;
const Checkbox = styled.input``;

const CalendarContainer = styled.div`
  flex: 1;
  @media (max-width: 890px) {
    display: none;
  }
`;
const Calendar = styled.div`
  font-size: 25px;
  font-weight: 500;
`;
const TaskContainers = styled.div`
  margin-top: 30px;
`;
const GraphContainer = styled.canvas``;
const Right = ({
  setTaskModal,
  taskModal,
  handleSearchBar,
  completedTasks,
  setCompletedTasks,
}) => {
  return (
    <Container>
      <Main>
        <Top>
          <AllTask>All tasks for today</AllTask>
          <Actions>
            <NewTask onClick={() => setTaskModal(!taskModal)}>
              New tasks <AddOutlined />{" "}
            </NewTask>
            <ListOutlined />
            <Filter>
              {" "}
              completed
              <Checkbox
                type="checkbox"
                checked={completedTasks}
                onChange={(e) => setCompletedTasks(e.target.checked)}
              />
            </Filter>
          </Actions>
        </Top>
        <Tags>
          <Button>#posters</Button>
          <Button>#ideas</Button>
          <Button>#figmaplugins</Button>
        </Tags>
        <TaskContainers>
          <Tasks
            handleSearchBar={handleSearchBar}
            completedTasks={completedTasks}
          />
        </TaskContainers>
        <GraphContainer></GraphContainer>
      </Main>
      <CalendarContainer>
        <Calendar>Calendar</Calendar>
        <CalendarList />
      </CalendarContainer>
    </Container>
  );
};

export default Right;
