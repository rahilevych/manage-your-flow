import api from '@/shared/api/axiosInstance';
import type { UpdateWorkspace, Workspace, WorkspaceDto } from '../model/types';

export default class WorkspaceService {
  static async create(dto: WorkspaceDto): Promise<Workspace> {
    return await api.post('/workspaces', dto);
  }
  static async getAll(): Promise<Workspace[]> {
    return await api.get('/workspaces');
  }
  static async get(id: string): Promise<Workspace> {
    return await api.get(`/workspaces/${id}`);
  }
  static async delete(id: string): Promise<Workspace> {
    return await api.delete(`/workspaces/${id}`);
  }
  static async update(data: {
    id: string;
    dto: UpdateWorkspace;
  }): Promise<Workspace> {
    return await api.patch(`/workspaces/${data.id}`, data.dto);
  }
}
