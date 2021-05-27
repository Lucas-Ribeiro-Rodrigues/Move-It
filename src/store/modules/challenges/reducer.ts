import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Challenge, ChallengeState } from './types';

const initialState: ChallengeState = {
  level: 1,
  currentExperience: 0, 
  challengesCompleted : 0,
  experienceToNextLevel: calculateExperienceToNextLevel(1),
  activeChallenge: null,
};

const challenge = createSlice({
  name: 'Challenge',
  initialState,
  reducers: {
    levelUp(state) {
      state.level++;
    },
    setActiveChallenge(state, action: PayloadAction<Challenge>) {
      state.activeChallenge = action.payload;
    },
    resetChallenge(state) {
      state.activeChallenge = null;
    },
    setCurrentExperience(state, action: PayloadAction<{ experience: number }>) {
      state.currentExperience = action.payload.experience;
    },
    completeActiveChallenge(state) {
      state.activeChallenge = null;
      state.challengesCompleted = state.challengesCompleted + 1;
    },
    resetActiveChallenge(state) {
      state.activeChallenge = null;
    },
    recalculateExperienceToNextLevel(state) {
      state.experienceToNextLevel = calculateExperienceToNextLevel(state.level);
    }
  }
});

function calculateExperienceToNextLevel(level: number): number {
  return Math.pow((level + 1) * 4, 2);
}

export const {
  levelUp,
  setActiveChallenge,
  resetChallenge,
  setCurrentExperience,
  completeActiveChallenge,
  resetActiveChallenge,
  recalculateExperienceToNextLevel
} = challenge.actions;

export default challenge.reducer;