import Container from "../../components/Layout/Container";
import UserInfo from "../../components/Profile/UserInfo";
import UserProject from "../../components/Profile/UserProject";

function UserProfile() {
  return (
    <Container>
      <UserInfo />
      <UserProject />
    </Container>
  );
}

export default UserProfile;
