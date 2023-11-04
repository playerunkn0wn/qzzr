import {User} from "./user";
import {Question} from "./question";

export interface Game {
  id: string;
  players: User[];
  questions: Question[];
  duration: number;
  status: string;
  ratio: number;
}
