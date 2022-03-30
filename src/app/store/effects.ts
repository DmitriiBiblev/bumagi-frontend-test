import { AuthEffects } from '../auth/store';
import { UsersEffects } from '../home/store/effects/users.effects';

export const rootEffects = [
  AuthEffects,
  UsersEffects,
];
