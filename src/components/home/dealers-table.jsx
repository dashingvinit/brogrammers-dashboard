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

const getDealers = async () => {
  const { data } = await axios.get('/dealer/dealers');
  return data?.data;
};

function Dealers() {
  const { data, isLoading } = useQuery({ queryKey: ['dealers'], queryFn: getDealers });

  return (
    <div className="container mx-auto">
      <h2 className="text-xl font-bold mb-4">All Dealers</h2>
      <Card>
        <CardContent className="p-4 overflow-y-auto">
          {isLoading ? (
            <Skeleton className="h-40 w-full" />
          ) : (
            <Table className="p-4 overflow-y-auto">
              <TableHeader>
                <TableRow>
                  <TableHead>Ref No</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data?.map((dealer) => (
                  <TableRow key={dealer._id}>
                    <TableCell>{dealer.ref_no}</TableCell>
                    <TableCell>{dealer.name}</TableCell>
                    <TableCell>{dealer.email}</TableCell>
                    <TableCell>{dealer.phone}</TableCell>
                    <TableCell>{dealer.address}</TableCell>
                    <TableCell>
                      <Badge variant={dealer.status === 'active' ? 'success' : 'destructive'}>
                        {dealer.status}
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

export default Dealers;
