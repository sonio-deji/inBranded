import {
  AddOutlined,
  NotificationsNoneOutlined,
  SettingsOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Logo = styled.div`
  color: black;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;
const Middle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 890px) {
    display: none;
  }
`;
const Links = styled.span``;
const Option = styled.span`
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ImgContainer = styled.div``;
const Img = styled.img``;

const Header = ({ setHandleSearchBar }) => {
  return (
    <Container>
      <Left>
        <Logo>CBR</Logo>
        <InputContainer>
          <SearchOutlined />
          <Input
            placeholder="Search projects or tags"
            onChange={(e) => setHandleSearchBar(e.target.value)}
          />
        </InputContainer>
      </Left>
      <Middle>
        <Links>Projects and tags</Links>
        <Links>Members</Links>
        <Links>Performance</Links>
        <Links>Profile</Links>
      </Middle>
      <Right>
        <Option>
          Invite people <AddOutlined />{" "}
        </Option>
        <SettingsOutlined />
        <NotificationsNoneOutlined />
        <ImgContainer>
          <Img />
        </ImgContainer>
      </Right>
    </Container>
  );
};

export default Header;
