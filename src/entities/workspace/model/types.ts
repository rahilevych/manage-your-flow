export interface WorkspaceDto {
  name: string;
}
export interface Workspace {
  id: string;
  name: string;
  slug: string;

  _count?: {
    projects: number;
    members: number;
    tasks: number;
  };
}
export type UpdateWorkspace = Partial<Workspace>;
