import api from '@/shared/api/axiosInstance';
import type { Project, ProjectDto, UpdateProject } from '../types/types';

export default class ProjectService {
  static async create(dto: ProjectDto, workspaceId: string): Promise<Project> {
    return await api.post(`/workspaces/${workspaceId}/projects`, dto);
  }
  static async getAll(workspaceId: string): Promise<Project[]> {
    return await api.get(`/workspaces/${workspaceId}/projects`);
  }
  static async get(workspaceId: string, projectId: string): Promise<Project> {
    return await api.get(`/workspaces/${workspaceId}/projects/${projectId}`);
  }
  static async delete(data: {
    workspaceId: string;
    projectId: string;
  }): Promise<Project> {
    return await api.delete(
      `/workspaces/${data.workspaceId}/projects/${data.projectId}`,
    );
  }
  static async update(data: {
    workspaceId: string;
    projectId: string;
    dto: UpdateProject;
  }): Promise<Project> {
    return await api.patch(
      `/workspaces/${data.workspaceId}/projects/${data.projectId}`,
      data.dto,
    );
  }
}
