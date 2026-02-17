import api from '@/shared/api/axiosInstance';
import type { CreateTaskDto, Task, UpdateTaskDto } from '../model/type';

export default class TasksService {
  static async create(
    dto: CreateTaskDto,
    workspaceId: string,
    projectId: string,
  ): Promise<Task> {
    return await api.post(
      `/workspaces/${workspaceId}/projects/${projectId}/tasks`,
      dto,
    );
  }
  static async getAll(workspaceId: string, projectId: string): Promise<Task[]> {
    return await api.get(
      `/workspaces/${workspaceId}/projects/${projectId}/tasks`,
    );
  }
  static async get(
    workspaceId: string,
    projectId: string,
    taskId: string,
  ): Promise<Task> {
    return await api.get(
      `/workspaces/${workspaceId}/projects/${projectId}/tasks/${taskId}`,
    );
  }
  static async delete(data: {
    workspaceId: string;
    projectId: string;
    taskId: string;
  }): Promise<Task> {
    return await api.delete(
      `/workspaces/${data.workspaceId}/projects/${data.projectId}/tasks/${data.taskId}`,
    );
  }
  static async deleteMany(data: {
    workspaceId: string;
    projectId: string;

    taskIds: string[];
  }): Promise<{ count: number }> {
    return await api.delete(
      `/workspaces/${data.workspaceId}/projects/${data.projectId}/tasks`,
      { data: { ids: data.taskIds } },
    );
  }
  static async update(data: {
    workspaceId: string;
    projectId: string;
    taskId: string;
    dto: UpdateTaskDto;
  }): Promise<Task> {
    return await api.patch(
      `/workspaces/${data.workspaceId}/projects/${data.projectId}/${data.taskId}`,
      data.dto,
    );
  }
}
