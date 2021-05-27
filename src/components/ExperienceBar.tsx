import { useSelector } from 'react-redux';
import { IState } from '../store';
import { ChallengeState } from '../store/modules/challenges/types';
import styles from '../styles/components/ExperienceBar.module.css';



export function ExperienceBar() {
	const { currentExperience, experienceToNextLevel } = useSelector<IState, ChallengeState>(state => state.challenges);

	const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

	return (
		<header className={styles.experienceBar}>
			<span>0 xp</span>
			<div>
				<div style={{ width: `${percentToNextLevel}%` }} />

				<span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
					{currentExperience} xp
				</span>
			</div>
			<span>{experienceToNextLevel} xp</span>
		</header>
	)
}
