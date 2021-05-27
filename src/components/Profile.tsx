import { useSelector } from 'react-redux';
import { IState } from '../store';
import styles from '../styles/components/Profile.module.css';

function Profile() {
  const level = useSelector<IState, number>(state => state.challenges.level);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Lucas-Ribeiro-Rodrigues.png" alt="Lucas Rodrigues" />
      <div>
        <strong>Lucas Rodrigues</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}

export default Profile
