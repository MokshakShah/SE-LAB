import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { PurchaseOrder } from '../App';

type POListProps = {
  purchaseOrders: PurchaseOrder[];
};

export function POList({ purchaseOrders }: POListProps) {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-gray-900 mb-2">Purchase Orders</h1>
        <p className="text-gray-600">View and manage all purchase orders</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Purchase Orders ({purchaseOrders.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {purchaseOrders.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No purchase orders yet</p>
              <p className="text-gray-400 text-sm mt-2">Create your first purchase order to get started</p>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>PO Number</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Vendor</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Payment Due</TableHead>
                  <TableHead>Total Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {purchaseOrders.map((po) => (
                  <TableRow key={po.id}>
                    <TableCell>{po.poNumber}</TableCell>
                    <TableCell>{new Date(po.date).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div>
                        <p>{po.vendorName}</p>
                        <p className="text-gray-500 text-sm">{po.vendorAddress.split('\n')[0]}</p>
                      </div>
                    </TableCell>
                    <TableCell>{po.items.length} item(s)</TableCell>
                    <TableCell>
                      <div>
                        <p>{new Date(po.paymentDueDate).toLocaleDateString()}</p>
                        <p className="text-gray-500 text-sm">{po.paymentTerms} days</p>
                      </div>
                    </TableCell>
                    <TableCell>${po.totalAmount.toFixed(2)}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{po.status}</Badge>
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
