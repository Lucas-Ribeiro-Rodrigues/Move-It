import { useSelector } from 'react-redux';
import { IState } from '../store';
import { Avatar, Container, DetailsContent, Icon, Level, Title } from '../styles/components/Profile.styles';

function Profile() {
  const level = useSelector<IState, number>(state => state.challenges.level);

  return (
    <Container>
      <Avatar src="https://github.com/Lucas-Ribeiro-Rodrigues.png" alt="Lucas Rodrigues" />
      <DetailsContent>
        <Title>Lucas Rodrigues</Title>
        <Level>
          <Icon src="icons/level.svg" alt="Level" />
          Level {level}
        </Level>
      </DetailsContent>
    </Container>
  )
}

export default Profile
