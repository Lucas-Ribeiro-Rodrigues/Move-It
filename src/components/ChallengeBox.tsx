import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CountdownContext } from '../contexts/CountdownContext';
import { IState } from '../store';
import { completeChallenge, resetChallenge } from '../store/modules/challenges/actions';
import { ChallengeState } from '../store/modules/challenges/types';
import styles from '../styles/components/ChallengeBox.module.css';



function ChallengeBox() {
  const dispatch = useDispatch();
  const { activeChallenge } = useSelector<IState, ChallengeState>(state => state.challenges);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    dispatch(completeChallenge());
    resetCountdown();
  }

  function handleChallengeFailed() {
    dispatch(resetChallenge());
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`}/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>

            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
        <strong>Finalize um ciclo para receber um desafio</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level up"/>
          Avance de level completando desafios.
        </p>
      </div>
      ) }
    </div>
  )
}

export default ChallengeBox
