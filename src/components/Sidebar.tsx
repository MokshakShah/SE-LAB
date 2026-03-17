import { Building2, FileText, Package, ShoppingCart, LayoutDashboard, Settings, LogOut, List } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { User } from '../App';

type SidebarProps = {
  currentPage: string;
  onNavigate: (page: string) => void;
  user: User;
  onLogout: () => void;
};

export function Sidebar({ currentPage, onNavigate, user, onLogout }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'create-do', label: 'Create DO', icon: Package },
    { id: 'create-po', label: 'Create PO', icon: ShoppingCart },
    { id: 'create-invoice', label: 'Create Invoice', icon: FileText },
    { id: 'do-list', label: 'Delivery Orders', icon: List },
    { id: 'po-list', label: 'Purchase Orders', icon: List },
    { id: 'invoice-list', label: 'Invoices', icon: List },
    { id: 'company-settings', label: 'Company Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-gray-900">Business Portal</h1>
          </div>
        </div>
      </div>

      <Separator />

      <div className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      <Separator />

      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-600">{user.name.charAt(0).toUpperCase()}</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-gray-900 truncate">{user.name}</p>
            <p className="text-gray-500 text-sm truncate">{user.email}</p>
          </div>
        </div>
        <Button
          onClick={onLogout}
          variant="outline"
          className="w-full"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );
}
