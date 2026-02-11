import api from '@/shared/api/axiosInstance';
import type { WorkspaceDto, WorkspaceResponse } from '../model/types';

export default class WorkspaceService {
  static async create(dto: WorkspaceDto): Promise<WorkspaceResponse> {
    return await api.post('/workspaces', dto);
  }
}
