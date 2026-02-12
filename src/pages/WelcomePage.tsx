import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { Sparkles } from 'lucide-react';
import { useGetWokspaces } from '@/features/workspace/model/useGetWokspaces';
import { Loader } from '@/shared/ui/Loader';
import { AddWorkspaceButton } from '@/entities/workspace/ui/workspace-wellcome/AddWorkspaceButton';
import { WorkspaceCard } from '@/entities/workspace/ui/workspace-wellcome/WorkspaceCard';
import { Link } from 'react-router';

export const WelcomePage = () => {
  const { data: workspaces = [], isPending } = useGetWokspaces();

  if (isPending) return <Loader />;

  return (
    <div className='flex h-screen w-full items-center justify-center bg-slate-50/50 px-4 py-10'>
      <Card className='w-full max-w-2xl border-none shadow-xl bg-white overflow-hidden'>
        <CardHeader className='text-center border-b bg-white/50 backdrop-blur-sm sticky top-0 z-20'>
          <div className='mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 rotate-3'>
            <Sparkles className='h-8 w-8 text-primary' />
          </div>
          <CardTitle className='text-3xl font-bold tracking-tight text-slate-900'>
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

        <div className='border-t p-4 bg-slate-50/50 text-center'>
          <p className='text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold'>
            DevFlow
          </p>
        </div>
      </Card>
    </div>
  );
};
