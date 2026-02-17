export const TaskStatus = {
  BACKLOG: 'BACKLOG',
  TODO: 'TODO',
  IN_PROGRESS: 'IN PROGRESS',
  DONE: 'DONE',
  CANCELED: 'CANCELED',
} as const;
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];
export const Priority = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  URGENT: 'URGENT',
} as const;

export type Priority = (typeof Priority)[keyof typeof Priority];

export interface Task {
  id: string;
  title: string;
  description: string | null;
  status: TaskStatus;
  priority: Priority;
  workspaceId: string;
  projectId: string;

  project?: {
    id: string;
    name: string;
  };

  authorId: string;
  author?: {
    id: string;
    name: string;
    email: string;
  };

  assigneeId: string | null;
  assignee?: {
    id: string;
    name: string;
    email: string;
  } | null;

  dueDate: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTaskDto {
  title: string;
  description?: string | null;
  status?: TaskStatus;
  priority?: Priority;
  projectId: string;
  assigneeId?: string | null;
  dueDate?: string | null;
}

export type UpdateTaskDto = Partial<Omit<CreateTaskDto, 'projectId'>>;
