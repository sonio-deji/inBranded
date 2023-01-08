import { useSelector } from "react-redux";
import styled from "styled-components";
import Task from "./Task";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Tasks = ({ handleSearchBar, completedTasks }) => {
  const { projects } = useSelector((state) => state.tasks);
  function projectFilter() {
    if (handleSearchBar) {
      return projects.filter((project) =>
        project.title.includes(handleSearchBar)
      );
    } else if (completedTasks) {
      return projects
        .map((project) => {
          let tasks = project.tasks;
          if (completedTasks) {
            tasks = tasks.filter((task) => task.checked);
          }
          return { ...project, tasks };
        })
        .filter((project) => project.tasks.length > 0);
    }
    return projects;
  }
  return (
    <Container>
      {projectFilter()?.map((item) =>
        item.tasks?.map((task) => (
          <Task key={item.id} task={task} item={item} />
        ))
      )}
    </Container>
  );
};

export default Tasks;
