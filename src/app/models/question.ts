export interface Question {
  id: string;
  question: string;
  possibleChoice: string[];
  correctChoice: string;
  timer: number;
  verified: boolean;
  userId: string;
  reported: boolean;
}
