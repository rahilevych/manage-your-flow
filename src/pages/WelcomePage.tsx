import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { useGetWokspaces } from '@/features/workspace/model/useGetWokspaces';
import { Loader } from '@/shared/ui/Loader';
import { AddWorkspaceButton } from '@/entities/workspace/ui/workspace-wellcome/AddWorkspaceButton';
import { WorkspaceCard } from '@/entities/workspace/ui/workspace-wellcome/WorkspaceCard';
import { Link } from 'react-router';
import { Logo } from '@/shared/ui/custom/Logo';

export const WelcomePage = () => {
  const { data: workspaces = [], isPending } = useGetWokspaces();

  if (isPending) return <Loader />;

  return (
    <div className='min-h-screen selection:bg-primary/10'>
      <main className='flex h-screen w-full items-center justify-center bg-slate-50/50 px-4 py-10'>
        <Card className='w-full max-w-2xl border-none shadow-xl bg-white overflow-hidden'>
          <CardHeader className=' flex flex-col items-center text-center border-b '>
            <div className='self-start mb-5'>
              {' '}
              <Logo />
            </div>

            <CardTitle className='text-3xl font-bold tracking-tight '>
              Welcome to DevFlow
            </CardTitle>
            <CardDescription className='text-lg mt-2'>
              {workspaces.length > 0
                ? 'Choose a workspace to continue your work'
                : 'Create your first workspace to get started'}
            </CardDescription>
          </CardHeader>

          <CardContent className='py-8 max-h-[450px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent'>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-8'>
              <AddWorkspaceButton />
              {workspaces.map((workspace) => (
                <Link key={workspace.id} to={`/dashboard/${workspace.id}`}>
                  <WorkspaceCard workspace={workspace} />
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};
