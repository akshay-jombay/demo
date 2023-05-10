'use client';
console.log("call Post")

// import data from '../../data/coffee-stores.json'
import useAuthContext from '@/hooks/use-authentication';
import { useAuth } from '@/hooks/use-auth';


const Posts = () => {
  const { currentUser } = useAuthContext();
  return (
    <div>
      POSTS Data
      <br />
      User-Data
      <br />
      {currentUser.name}-{currentUser.email}-{currentUser.role}
    </div>
  );
}

export default useAuth(Posts, ["admin"])