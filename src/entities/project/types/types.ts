import type { Member } from '@/entities/member/types/types';

export interface ProjectDto {
  name: string;
  key: string;
  description?: string;
}
export type UpdateProject = Partial<Project>;

export interface Project {
  id: string;
  name: string;
  key: string;
  description: string | null;
  workspaceId: string;
  creatorId: string;
  members: Member[];
  creator?: Member;
  createdAt: string;
  updatedAt: string;
}
