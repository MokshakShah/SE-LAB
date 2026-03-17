import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { FileText, Package, ShoppingCart, TrendingUp } from 'lucide-react';
import { DeliveryOrder, PurchaseOrder, Invoice } from '../App';

type DashboardProps = {
  deliveryOrders: DeliveryOrder[];
  purchaseOrders: PurchaseOrder[];
  invoices: Invoice[];
  onNavigate: (page: string) => void;
};

export function Dashboard({ deliveryOrders, purchaseOrders, invoices, onNavigate }: DashboardProps) {
  const stats = [
    {
      title: 'Delivery Orders',
      value: deliveryOrders.length,
      icon: Package,
      color: 'bg-blue-500',
      action: () => onNavigate('create-do'),
    },
    {
      title: 'Purchase Orders',
      value: purchaseOrders.length,
      icon: ShoppingCart,
      color: 'bg-green-500',
      action: () => onNavigate('create-po'),
    },
    {
      title: 'Invoices',
      value: invoices.length,
      icon: FileText,
      color: 'bg-purple-500',
      action: () => onNavigate('create-invoice'),
    },
    {
      title: 'Total Revenue',
      value: `$${invoices.reduce((sum, inv) => sum + inv.totalAmount, 0).toLocaleString()}`,
      icon: TrendingUp,
      color: 'bg-orange-500',
      action: () => onNavigate('invoice-list'),
    },
  ];

  const recentActivity = [
    ...deliveryOrders.slice(-3).map(do_ => ({
      type: 'DO',
      number: do_.doNumber,
      customer: do_.customerName,
      date: do_.date,
    })),
    ...purchaseOrders.slice(-3).map(po => ({
      type: 'PO',
      number: po.poNumber,
      customer: po.vendorName,
      date: po.date,
    })),
    ...invoices.slice(-3).map(inv => ({
      type: 'Invoice',
      number: inv.invoiceNumber,
      customer: inv.customerName,
      date: inv.date,
    })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome to your business portal</p>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow" onClick={stat.action}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-gray-600">{stat.title}</CardTitle>
                <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-gray-900">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button onClick={() => onNavigate('create-do')} className="w-full justify-start">
              <Package className="w-4 h-4 mr-2" />
              Create Delivery Order
            </Button>
            <Button onClick={() => onNavigate('create-po')} className="w-full justify-start" variant="outline">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Create Purchase Order
            </Button>
            <Button onClick={() => onNavigate('create-invoice')} className="w-full justify-start" variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              Create Invoice
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            {recentActivity.length === 0 ? (
              <p className="text-gray-500 text-center py-4">No activity yet</p>
            ) : (
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-gray-900">{activity.type} #{activity.number}</p>
                      <p className="text-gray-500 text-sm">{activity.customer}</p>
                    </div>
                    <span className="text-gray-500 text-sm">{new Date(activity.date).toLocaleDateString()}</span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
