import { useSelector } from 'react-redux';
import { IState } from '../store';
import { ChallengeState } from '../store/modules/challenges/types';
import styles from '../styles/components/LevelUpModal.module.css';

function LevelUpModal() {
  const { level } = useSelector<IState, ChallengeState>(state => state.challenges);
  // , closeLevelUpModal
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>
        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal"/>
        </button>
      </div>
    </div>
  )
}

export default LevelUpModal
