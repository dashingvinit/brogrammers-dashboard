import { Users, Dealers } from '@/components/home';

function Home() {
  return (
    <div className="space-y-4 overflow-auto">
      <Dealers />
      <Users />
    </div>
  );
}

export default Home;
