import { AppThunk } from '../..';
import challenges from '../../../../challenges.json';
import { completeActiveChallenge, levelUp, recalculateExperienceToNextLevel, resetActiveChallenge, setActiveChallenge, setCurrentExperience } from './reducer';
import { Challenge } from './types';


export const startNewChallenge = (): AppThunk => async dispatch => {
  if(Notification.permission === 'granted') {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = <Challenge>challenges[randomChallengeIndex];
      
    dispatch(setActiveChallenge(challenge));

    new Audio('/notification.mp3').play();

    new Notification('Novo desafio!!!', {
      body: `Valendo ${challenge.amount}`
    })
  }
}

export const completeChallenge = (): AppThunk => async (dispatch, getState) => {
  if (!getState().challenges.activeChallenge) {
    return;
  }

  const { amount } = getState().challenges.activeChallenge;

  let finalExperience = getState().challenges.currentExperience + amount;

  if (finalExperience >= getState().challenges.experienceToNextLevel) {
    finalExperience -= getState().challenges.experienceToNextLevel;
    dispatch(levelUp());
    dispatch(recalculateExperienceToNextLevel());
  }
  
  dispatch(completeActiveChallenge())
  dispatch(setCurrentExperience({experience: finalExperience}));
}

export const resetChallenge = (): AppThunk => async (dispatch) => {
  dispatch(resetActiveChallenge());
}