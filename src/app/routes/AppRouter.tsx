import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import { DashboardLayout } from '../layouts/DashboardLayout';
import { SettingsPage } from '@/pages/SettingsPage';
import { HomePage } from '@/pages/HomePage';
import { MembersPage } from '@/pages/MembersPage';
import { TasksPage } from '@/pages/TasksPage';
import { ProjectPage } from '@/pages/ProjectPage';
import { AuthLayout } from '../layouts/AuthLayout';
import { LoginPage } from '@/pages/LoginPage';
import { RegisterPage } from '@/pages/RegisterPage';
import { ProtectedRoute } from './ProtectedRoute';
import { GuestRoute } from './GuestRoute';
import { WelcomePage } from '@/pages/WelcomePage';
import { LandingPage } from '@/pages/LandingPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<ProtectedRoute />}>
        <Route path='welcome' element={<WelcomePage />} />

        <Route path='dashboard/:id' element={<DashboardLayout />}>
          <Route
            index
            element={<HomePage />}
            handle={{
              title: 'Home',
              description: 'Overview of your workspace',
            }}
          />
          <Route
            path='members'
            element={<MembersPage />}
            handle={{ title: 'Members', description: 'Manage team access' }}
          />
          <Route
            path='tasks'
            element={<TasksPage />}
            handle={{ title: 'Tasks', description: 'Track your project tasks' }}
          />
          <Route
            path='settings'
            element={<SettingsPage />}
            handle={{
              title: 'Settings',
              description: 'Workspace configurations',
            }}
          />
          <Route
            path='projects'
            element={<ProjectPage />}
            handle={{ title: 'Projects', description: 'Active project list' }}
          />
        </Route>
      </Route>

      <Route element={<GuestRoute />}>
        <Route path='auth' element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
        </Route>
      </Route>
      <Route path='/' element={<LandingPage />}></Route>
      <Route path='*' element={<Navigate to='/' replace />} />
    </Route>,
  ),
);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
