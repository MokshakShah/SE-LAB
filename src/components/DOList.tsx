import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { DeliveryOrder } from '../App';

type DOListProps = {
  deliveryOrders: DeliveryOrder[];
};

export function DOList({ deliveryOrders }: DOListProps) {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-gray-900 mb-2">Delivery Orders</h1>
        <p className="text-gray-600">View and manage all delivery orders</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Delivery Orders ({deliveryOrders.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {deliveryOrders.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No delivery orders yet</p>
              <p className="text-gray-400 text-sm mt-2">Create your first delivery order to get started</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>DO Number</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {deliveryOrders.map((do_) => (
                  <TableRow key={do_.id}>
                    <TableCell>{do_.doNumber}</TableCell>
                    <TableCell>{new Date(do_.date).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div>
                        <p>{do_.customerName}</p>
                        <p className="text-gray-500 text-sm">{do_.customerAddress.split('\n')[0]}</p>
                      </div>
                    </TableCell>
                    <TableCell>{do_.items.length} item(s)</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{do_.status}</Badge>
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
