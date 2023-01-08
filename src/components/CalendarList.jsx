import styled from "styled-components";
import { dates } from "../tempData";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;

  border-bottom: 1px solid lightgray;
  :nth-child(1) {
    border-bottom: 1px solid black;
  }
`;
const Right = styled.div``;
const Left = styled.div`
  font-weight: 700;
  font-size: 70px;
`;
const Month = styled.p`
  color: gray;
  font-size: 17px;
`;
const WeekDay = styled.p`
  font-size: 23px;
`;

const CalendarList = () => {
  return (
    <Container>
      {dates.map((date) => (
        <Wrapper key={date.id}>
          <Left>{date.day}</Left>
          <Right>
            <Month>{date.month}</Month>
            <WeekDay>{date.weekDay}</WeekDay>
          </Right>
        </Wrapper>
      ))}
    </Container>
  );
};

export default CalendarList;
