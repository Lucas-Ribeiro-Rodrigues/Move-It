import { useSelector } from 'react-redux';
import { IState } from '../store';
import { ChallengeState } from '../store/modules/challenges/types';
import { Container, TextLabel, TextValue } from '../styles/components/CompletedChallenges.styles';

function CompletedChallenges() {
  const { challengesCompleted } = useSelector<IState, ChallengeState>(state => state.challenges);

  return (
    <Container>
      <TextLabel>Desafios completos</TextLabel>
      <TextValue>{challengesCompleted}</TextValue>
    </Container>
  )
}

export default CompletedChallenges
