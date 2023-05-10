'use client';
import useAuthContext from '@/hooks/use-authentication';
import { useAuth } from '@/hooks/use-auth';

const Contact = () => {
  const { currentUser } = useAuthContext();
  return (
    <div>
      Contact Data
      <br />
      User-Data
      <br />
      {currentUser.name}-{currentUser.email}-{currentUser.role}
    </div>
  );
}

export default useAuth(Contact, ["all"])