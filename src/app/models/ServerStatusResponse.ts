import { Players } from './Players';

export interface ServerStatusResponse {
    players: Players;
    version: string;
    online: boolean;
}