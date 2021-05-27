export interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

export interface ChallengeState {
  level: number;
  currentExperience: number; 
  challengesCompleted : number;
  experienceToNextLevel : number;
  activeChallenge: Challenge;
}