import { useQuery } from '@tanstack/react-query';
import axios from '../../utils/axios';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

const getUser = async () => {
  const { data } = await axios.get('/dealer/users');
  return data?.data;
};

function Users() {
  const { data, isLoading } = useQuery({ queryKey: ['users'], queryFn: getUser });

  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-bold mb-4">All Users</h2>
      <Card>
        <CardContent className="p-4 overflow-y-auto">
          {isLoading ? (
            <Skeleton className="h-40 w-full" />
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Plan</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.plan}</TableCell>
                    <TableCell>
                      <Badge variant={user?.status === 'active' ? 'success' : 'destructive'}>
                        {user?.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default Users;
