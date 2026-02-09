import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { SettingsPage } from '@/pages/SettingsPage';
import { HomePage } from '@/pages/HomePage';
import { MembersPage } from '@/pages/MembersPage';
import { TasksPage } from '@/pages/TasksPage';
import { ProjectPage } from '@/pages/ProjectPage';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {' '}
        <Route path='/' element={<DashboardLayout />}>
          <Route index element={<HomePage />} />
          <Route path='members' element={<MembersPage />} />
          <Route path='tasks' element={<TasksPage />} />
          <Route path='settings' element={<SettingsPage />} />
          <Route path='projects' element={<ProjectPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
