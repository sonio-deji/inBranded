import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { updateTask, deleteTask } from "../redux/taskReducer";
import { DeleteOutlineOutlined } from "@mui/icons-material";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CheckBox = styled.input`
  accent-color: black;
`;
const Left = styled.div`
  display: flex;
  gap: 10px;
`;
const Title = styled.span`
  font-size: 18px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Content = styled.span`
  font-size: 20px;
  color: gray;
`;

const Task = ({ task, item }) => {
  const dispatch = useDispatch();
  const handleChecked = (taskId) => {
    dispatch(updateTask({ taskId }));
  };
  const handleDelete = (taskId) => {
    dispatch(deleteTask({ taskId }));
  };
  return (
    <Container>
      <Left>
        <CheckBox
          type="checkbox"
          checked={task.checked}
          onChange={() => handleChecked(task.id)}
        />
        <Title>{item.title}</Title>
      </Left>
      <Right>
        <Content>{task.name}</Content>
        <DeleteOutlineOutlined
          style={{ color: "gray", cursor: "pointer" }}
          onClick={() => handleDelete(task.id)}
        />
      </Right>
    </Container>
  );
};

export default Task;
