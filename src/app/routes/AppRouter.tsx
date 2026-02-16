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
import { ProjectsPage } from '@/pages/ProjectsPage';
import { AuthLayout } from '../layouts/AuthLayout';
import { LoginPage } from '@/pages/LoginPage';
import { RegisterPage } from '@/pages/RegisterPage';
import { ProtectedRoute } from './ProtectedRoute';
import { GuestRoute } from './GuestRoute';
import { WelcomePage } from '@/pages/WelcomePage';
import { LandingPage } from '@/pages/landing/LandingPage';
import { ProjectPage } from '@/pages/ProjectPage';

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
            }}
          />
          <Route
            path='members'
            element={<MembersPage />}
            handle={{ title: 'Members' }}
          />
          <Route
            path='tasks'
            element={<TasksPage />}
            handle={{ title: 'Tasks' }}
          />
          <Route
            path='settings'
            element={<SettingsPage />}
            handle={{
              title: 'Settings',
            }}
          />
          <Route
            path='projects'
            element={<ProjectsPage />}
            handle={{ title: 'Projects' }}
          />
          <Route
            path='projects/:projectId'
            element={<ProjectPage />}
            handle={{
              title: 'Projects',
            }}
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
