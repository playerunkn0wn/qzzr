export interface User {
  id: string;
  email: string;
  userName: string;
  tier: string;
  games?: []
  online: boolean;
  authenticated: boolean;
  reported: boolean;
}
