'use client';
import useAuthContext from '@/hooks/use-authentication';
import { useAuth } from '@/hooks/use-auth';

const Blogs = () => {
  const { currentUser, isSuperAdmin } = useAuthContext();
  return (
    <div>
      BLOGS Data
      {isSuperAdmin ? 'super_admin' : 'not'}
      <br />
      User-Data
      <br />
      {currentUser.name}-{currentUser.email}-{currentUser.role}
    </div>
  );
}

export default useAuth(Blogs, ["admin", "super_admin"])