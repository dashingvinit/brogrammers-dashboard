import { Link } from 'react-router-dom';
import LoginForm from '@/components/login-form';
import { GalleryVerticalEnd } from 'lucide-react';

function Auth() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10 rounded-2xl">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          to="https://edunexora.com"
          className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Edunexora <span className="text-xs text-muted-foreground">by Brogrammers</span>
        </Link>

        <LoginForm />
      </div>
    </div>
  );
}

export default Auth;
