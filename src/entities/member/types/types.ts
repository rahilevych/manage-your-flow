import type { User } from '@/entities/session/model/types';

export interface Member {
  id: string;
  role: 'ADMIN' | 'MEMBER' | 'OWNER';
  userId: string;
  user: User;
  workspaceId: string;
}
