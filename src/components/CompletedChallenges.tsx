import { useSelector } from 'react-redux';
import { IState } from '../store';
import { ChallengeState } from '../store/modules/challenges/types';
import styles from '../styles/components/CompletedChallenges.module.css';

function CompletedChallenges() {
  const { challengesCompleted } = useSelector<IState, ChallengeState>(state => state.challenges);

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  )
}

export default CompletedChallenges
