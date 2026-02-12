export interface WorkspaceDto {
  name: string;
}
export interface Workspace {
  name: string;
  id: string;
  slug: string;
}
export type UpdateWorkspace = Partial<Workspace>;
