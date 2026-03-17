import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Building2, FileText, Package, ShoppingCart, LayoutDashboard, 
  Settings, LogOut, List, CheckCircle, Download, Eye, ArrowLeft,
  Plus, Trash2, AlertCircle, ArrowRight
} from 'lucide-react';

export function DesignReference() {
  const [selectedScreen, setSelectedScreen] = useState('overview');

  const screens = [
    { id: 'login', name: 'Login / Signup', category: 'auth' },
    { id: 'signup-step2', name: 'Signup - Company Details', category: 'auth' },
    { id: 'dashboard', name: 'Dashboard', category: 'main' },
    { id: 'company-settings', name: 'Company Settings', category: 'main' },
    { id: 'create-do', name: 'Create Delivery Order', category: 'documents' },
    { id: 'create-po', name: 'Create Purchase Order', category: 'documents' },
    { id: 'create-invoice', name: 'Create Invoice', category: 'documents' },
    { id: 'success', name: 'Document Success', category: 'documents' },
    { id: 'do-list', name: 'Delivery Orders List', category: 'lists' },
    { id: 'po-list', name: 'Purchase Orders List', category: 'lists' },
    { id: 'invoice-list', name: 'Invoices List', category: 'lists' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Design Reference - Business Portal</h1>
          <p className="text-gray-600">Complete screen designs and user flow documentation</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="auth">Authentication</TabsTrigger>
            <TabsTrigger value="main">Main Pages</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="lists">Lists</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="colors">Design System</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>User Flow</CardTitle>
                <CardDescription>Complete navigation flow through the application</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-white p-8 rounded-lg border-2 border-gray-200">
                  <div className="space-y-8">
                    {/* Flow Diagram */}
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-4 min-w-[200px]">
                        <p className="text-blue-900">Login / Signup</p>
                      </div>
                      <ArrowRight className="text-gray-400" />
                      <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-4 min-w-[200px]">
                        <p className="text-blue-900">Company Details (Signup)</p>
                      </div>
                      <ArrowRight className="text-gray-400" />
                      <div className="bg-green-50 border-2 border-green-600 rounded-lg p-4 min-w-[200px]">
                        <p className="text-green-900">Dashboard</p>
                      </div>
                    </div>

                    <div className="ml-[500px] space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-purple-50 border-2 border-purple-600 rounded-lg p-4 min-w-[200px]">
                          <p className="text-purple-900">Create DO/PO/Invoice</p>
                        </div>
                        <ArrowRight className="text-gray-400" />
                        <div className="bg-orange-50 border-2 border-orange-600 rounded-lg p-4 min-w-[200px]">
                          <p className="text-orange-900">Success + Download PDF</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="bg-teal-50 border-2 border-teal-600 rounded-lg p-4 min-w-[200px]">
                          <p className="text-teal-900">View Lists</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="bg-gray-50 border-2 border-gray-600 rounded-lg p-4 min-w-[200px]">
                          <p className="text-gray-900">Company Settings</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="text-gray-900">Key Features</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Persistent sidebar navigation</li>
                      <li>• Company details saved after signup</li>
                      <li>• Auto-filled forms with company info</li>
                      <li>• PDF generation for all documents</li>
                      <li>• LocalStorage data persistence</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-gray-900">Screen Count</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Authentication: 2 screens</li>
                      <li>• Main Pages: 2 screens</li>
                      <li>• Document Creation: 3 screens</li>
                      <li>• Document Lists: 3 screens</li>
                      <li>• Success Pages: 1 screen</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Authentication Tab */}
          <TabsContent value="auth" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Login Screen</CardTitle>
                <CardDescription>Desktop - Full screen centered card</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg min-h-[600px] flex items-center justify-center">
                  <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                        <Building2 className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <h2 className="text-center text-gray-900 mb-2">Welcome Back</h2>
                    <p className="text-center text-gray-600 mb-6">Sign in to your business portal</p>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="text-gray-900 block mb-2">Email</label>
                        <div className="border-2 border-gray-300 rounded-md p-3 bg-gray-50">
                          <span className="text-gray-400">you@company.com</span>
                        </div>
                      </div>
                      <div>
                        <label className="text-gray-900 block mb-2">Password</label>
                        <div className="border-2 border-gray-300 rounded-md p-3 bg-gray-50">
                          <span className="text-gray-400">••••••••</span>
                        </div>
                      </div>
                      <button className="w-full bg-blue-600 text-white py-3 rounded-md">
                        Sign In
                      </button>
                    </div>
                    
                    <p className="text-center mt-4 text-blue-600">Don't have an account? Sign up</p>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-gray-900 mb-2">Design Specs:</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Background: Gradient from-blue-50 to-indigo-100</li>
                    <li>• Card: White, max-width 448px, centered</li>
                    <li>• Icon: Blue-600 background, rounded-xl</li>
                    <li>• Button: Blue-600, full width</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Signup - Step 2 (Company Details)</CardTitle>
                <CardDescription>Desktop - Wider card with 2-column layout</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg min-h-[600px] flex items-center justify-center">
                  <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center">
                        <Building2 className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <h2 className="text-center text-gray-900 mb-2">Company Details</h2>
                    <p className="text-center text-gray-600 mb-6">Tell us about your company - Step 2 of 2</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <label className="text-gray-900 block mb-2">Company Name *</label>
                        <div className="border-2 border-gray-300 rounded-md p-3 bg-gray-50" />
                      </div>
                      <div className="col-span-2">
                        <label className="text-gray-900 block mb-2">Street Address *</label>
                        <div className="border-2 border-gray-300 rounded-md p-3 bg-gray-50" />
                      </div>
                      <div>
                        <label className="text-gray-900 block mb-2">City *</label>
                        <div className="border-2 border-gray-300 rounded-md p-3 bg-gray-50" />
                      </div>
                      <div>
                        <label className="text-gray-900 block mb-2">State *</label>
                        <div className="border-2 border-gray-300 rounded-md p-3 bg-gray-50" />
                      </div>
                      <div>
                        <label className="text-gray-900 block mb-2">Email *</label>
                        <div className="border-2 border-gray-300 rounded-md p-3 bg-gray-50" />
                      </div>
                      <div>
                        <label className="text-gray-900 block mb-2">Phone *</label>
                        <div className="border-2 border-gray-300 rounded-md p-3 bg-gray-50" />
                      </div>
                    </div>
                    
                    <div className="flex gap-4 mt-6">
                      <button className="flex-1 border-2 border-gray-300 py-3 rounded-md">
                        ← Back
                      </button>
                      <button className="flex-1 bg-blue-600 text-white py-3 rounded-md">
                        Complete Registration
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Main Pages Tab */}
          <TabsContent value="main" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Dashboard Layout</CardTitle>
                <CardDescription>Main application view with sidebar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex gap-4 h-[700px]">
                    {/* Sidebar */}
                    <div className="w-64 bg-white rounded-lg p-4 space-y-4">
                      <div className="flex items-center gap-3 pb-4 border-b">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-gray-900">Business Portal</span>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="bg-blue-50 text-blue-600 p-3 rounded-lg flex items-center gap-3">
                          <LayoutDashboard className="w-5 h-5" />
                          <span>Dashboard</span>
                        </div>
                        <div className="text-gray-700 p-3 rounded-lg flex items-center gap-3 hover:bg-gray-50">
                          <Package className="w-5 h-5" />
                          <span>Create DO</span>
                        </div>
                        <div className="text-gray-700 p-3 rounded-lg flex items-center gap-3 hover:bg-gray-50">
                          <ShoppingCart className="w-5 h-5" />
                          <span>Create PO</span>
                        </div>
                        <div className="text-gray-700 p-3 rounded-lg flex items-center gap-3 hover:bg-gray-50">
                          <FileText className="w-5 h-5" />
                          <span>Create Invoice</span>
                        </div>
                        <div className="text-gray-700 p-3 rounded-lg flex items-center gap-3 hover:bg-gray-50">
                          <List className="w-5 h-5" />
                          <span>Delivery Orders</span>
                        </div>
                        <div className="text-gray-700 p-3 rounded-lg flex items-center gap-3 hover:bg-gray-50">
                          <List className="w-5 h-5" />
                          <span>Purchase Orders</span>
                        </div>
                        <div className="text-gray-700 p-3 rounded-lg flex items-center gap-3 hover:bg-gray-50">
                          <List className="w-5 h-5" />
                          <span>Invoices</span>
                        </div>
                        <div className="text-gray-700 p-3 rounded-lg flex items-center gap-3 hover:bg-gray-50">
                          <Settings className="w-5 h-5" />
                          <span>Company Settings</span>
                        </div>
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 bg-white rounded-lg p-8 overflow-auto">
                      <div className="mb-6">
                        <h1 className="text-gray-900 mb-2">Dashboard</h1>
                        <p className="text-gray-600">Welcome to your business portal</p>
                      </div>

                      {/* Stats Cards */}
                      <div className="grid grid-cols-4 gap-4 mb-6">
                        {[
                          { icon: Package, label: 'Delivery Orders', value: '0', color: 'bg-blue-500' },
                          { icon: ShoppingCart, label: 'Purchase Orders', value: '0', color: 'bg-green-500' },
                          { icon: FileText, label: 'Invoices', value: '0', color: 'bg-purple-500' },
                          { icon: Package, label: 'Total Revenue', value: '$0', color: 'bg-orange-500' },
                        ].map((stat, i) => (
                          <div key={i} className="bg-white border-2 border-gray-200 rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                              <span className="text-gray-600">{stat.label}</span>
                              <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center`}>
                                <stat.icon className="w-5 h-5 text-white" />
                              </div>
                            </div>
                            <p className="text-gray-900">{stat.value}</p>
                          </div>
                        ))}
                      </div>

                      {/* Action Cards */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="border-2 border-gray-200 rounded-lg p-4">
                          <h3 className="text-gray-900 mb-4">Quick Actions</h3>
                          <div className="space-y-2">
                            <button className="w-full bg-blue-600 text-white py-2 rounded-md text-left px-4">
                              <Package className="inline w-4 h-4 mr-2" />
                              Create Delivery Order
                            </button>
                            <button className="w-full border-2 border-gray-300 py-2 rounded-md text-left px-4">
                              <ShoppingCart className="inline w-4 h-4 mr-2" />
                              Create Purchase Order
                            </button>
                          </div>
                        </div>
                        <div className="border-2 border-gray-200 rounded-lg p-4">
                          <h3 className="text-gray-900 mb-4">Recent Activity</h3>
                          <p className="text-gray-500 text-center py-8">No activity yet</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-gray-900 mb-2">Layout Specs:</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Sidebar: 256px fixed width, white background</li>
                    <li>• Main content: Flexible width, gray-50 background</li>
                    <li>• Stats cards: Grid 4 columns with gap-6</li>
                    <li>• Active nav: Blue-50 background with blue-600 text</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Company Settings</CardTitle>
                <CardDescription>Form layout with 2-3 column grids</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="max-w-4xl mx-auto">
                    <div className="mb-6">
                      <h1 className="text-gray-900 mb-2">Company Settings</h1>
                      <p className="text-gray-600">Manage your company information</p>
                    </div>

                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                      <h3 className="text-gray-900 mb-4">Company Information</h3>
                      <p className="text-gray-600 mb-6">These details will be automatically included in all your documents</p>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-gray-900 block mb-2">Company Name *</label>
                            <div className="border-2 border-gray-300 rounded-md p-3 bg-white" />
                          </div>
                          <div>
                            <label className="text-gray-900 block mb-2">Tax ID</label>
                            <div className="border-2 border-gray-300 rounded-md p-3 bg-white" />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4">
                          <div>
                            <label className="text-gray-900 block mb-2">City *</label>
                            <div className="border-2 border-gray-300 rounded-md p-3 bg-white" />
                          </div>
                          <div>
                            <label className="text-gray-900 block mb-2">State *</label>
                            <div className="border-2 border-gray-300 rounded-md p-3 bg-white" />
                          </div>
                          <div>
                            <label className="text-gray-900 block mb-2">ZIP Code *</label>
                            <div className="border-2 border-gray-300 rounded-md p-3 bg-white" />
                          </div>
                        </div>

                        <button className="w-full bg-blue-600 text-white py-3 rounded-md mt-6">
                          Save Company Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Create Document Form</CardTitle>
                <CardDescription>Multi-card layout for DO/PO/Invoice creation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="max-w-5xl mx-auto space-y-6">
                    <div className="mb-6">
                      <h1 className="text-gray-900 mb-2">Create Purchase Order</h1>
                      <p className="text-gray-600">Create a new purchase order for your vendor</p>
                    </div>

                    {/* PO Information Card */}
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                      <h3 className="text-gray-900 mb-4">PO Information</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-gray-900 block mb-2">PO Number *</label>
                          <div className="border-2 border-gray-300 rounded-md p-3 bg-white">
                            <span className="text-gray-400">PO-1234567890</span>
                          </div>
                        </div>
                        <div>
                          <label className="text-gray-900 block mb-2">Date *</label>
                          <div className="border-2 border-gray-300 rounded-md p-3 bg-white" />
                        </div>
                      </div>
                    </div>

                    {/* Vendor Information Card */}
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                      <h3 className="text-gray-900 mb-4">Vendor Information</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="text-gray-900 block mb-2">Vendor Name *</label>
                          <div className="border-2 border-gray-300 rounded-md p-3 bg-white" />
                        </div>
                        <div>
                          <label className="text-gray-900 block mb-2">Vendor Address *</label>
                          <div className="border-2 border-gray-300 rounded-md p-12 bg-white" />
                        </div>
                      </div>
                    </div>

                    {/* Items Card */}
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                      <h3 className="text-gray-900 mb-2">Items</h3>
                      <p className="text-gray-600 mb-4">Add items to purchase</p>
                      
                      <div className="space-y-3">
                        <div className="flex gap-4">
                          <div className="flex-1 border-2 border-gray-300 rounded-md p-3 bg-white">
                            <span className="text-gray-400">Description</span>
                          </div>
                          <div className="w-24 border-2 border-gray-300 rounded-md p-3 bg-white" />
                          <div className="w-24 border-2 border-gray-300 rounded-md p-3 bg-white" />
                          <div className="w-32 border-2 border-gray-300 rounded-md p-3 bg-white" />
                          <div className="w-32 border-2 border-gray-300 rounded-md p-3 bg-white" />
                        </div>
                        
                        <button className="w-full border-2 border-gray-300 py-3 rounded-md text-gray-700">
                          <Plus className="inline w-4 h-4 mr-2" />
                          Add Item
                        </button>

                        <div className="flex justify-end pt-4 border-t-2">
                          <div className="text-right">
                            <p className="text-gray-600">Total Amount</p>
                            <p className="text-gray-900">$0.00</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <button className="flex-1 bg-blue-600 text-white py-3 rounded-md">
                        Create Purchase Order
                      </button>
                      <button className="border-2 border-gray-300 px-8 py-3 rounded-md">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-gray-900 mb-2">Form Specs:</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Multi-card layout, each card for different section</li>
                    <li>• Items table with dynamic add/remove rows</li>
                    <li>• Real-time calculation of totals</li>
                    <li>• Full width submit button</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Document Success Screen</CardTitle>
                <CardDescription>Centered success card with actions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-8 rounded-lg min-h-[600px] flex items-center justify-center">
                  <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl">
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-12 h-12 text-green-600" />
                      </div>
                    </div>
                    <h2 className="text-center text-green-900 mb-2">Purchase Order Created!</h2>
                    <p className="text-center text-gray-600 mb-8">
                      Your PO #PO-1234567890 has been successfully created
                    </p>

                    <div className="bg-gray-50 rounded-lg p-6 space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Document Number:</span>
                        <span className="text-gray-900">PO-1234567890</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date:</span>
                        <span className="text-gray-900">10/13/2025</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Vendor:</span>
                        <span className="text-gray-900">ABC Supplies Inc.</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Amount:</span>
                        <span className="text-gray-900">$1,250.00</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <button className="bg-blue-600 text-white py-3 rounded-md">
                        <Download className="inline w-4 h-4 mr-2" />
                        Download PDF
                      </button>
                      <button className="border-2 border-gray-300 py-3 rounded-md">
                        <Eye className="inline w-4 h-4 mr-2" />
                        View All Purchase Orders
                      </button>
                    </div>

                    <button className="w-full text-gray-600 py-3">
                      <ArrowLeft className="inline w-4 h-4 mr-2" />
                      Back to Dashboard
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Lists Tab */}
          <TabsContent value="lists" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Document Lists</CardTitle>
                <CardDescription>Table layout for viewing all documents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="mb-6">
                    <h1 className="text-gray-900 mb-2">Purchase Orders</h1>
                    <p className="text-gray-600">View and manage all purchase orders</p>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                    <h3 className="text-gray-900 mb-4">All Purchase Orders (5)</h3>
                    
                    <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="text-left p-4 text-gray-900">PO Number</th>
                            <th className="text-left p-4 text-gray-900">Date</th>
                            <th className="text-left p-4 text-gray-900">Vendor</th>
                            <th className="text-left p-4 text-gray-900">Items</th>
                            <th className="text-left p-4 text-gray-900">Total Amount</th>
                            <th className="text-left p-4 text-gray-900">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[1, 2, 3].map((i) => (
                            <tr key={i} className="border-t-2 border-gray-200">
                              <td className="p-4 text-gray-900">PO-{i}234567890</td>
                              <td className="p-4 text-gray-600">10/{i}/2025</td>
                              <td className="p-4">
                                <div className="text-gray-900">Vendor Name {i}</div>
                                <div className="text-gray-500 text-sm">123 Main St</div>
                              </td>
                              <td className="p-4 text-gray-600">{i + 2} item(s)</td>
                              <td className="p-4 text-gray-900">${(i * 500).toFixed(2)}</td>
                              <td className="p-4">
                                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                                  Pending
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-gray-900 mb-2">Table Specs:</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Full width responsive table</li>
                    <li>• Gray-50 header background</li>
                    <li>• Status badges with rounded-full style</li>
                    <li>• Hover effect on rows (optional)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Components Tab */}
          <TabsContent value="components" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>UI Components</CardTitle>
                <CardDescription>Reusable components used throughout the app</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Buttons */}
                  <div>
                    <h3 className="text-gray-900 mb-4">Buttons</h3>
                    <div className="flex gap-4">
                      <button className="bg-blue-600 text-white px-6 py-3 rounded-md">Primary Button</button>
                      <button className="border-2 border-gray-300 px-6 py-3 rounded-md">Secondary Button</button>
                      <button className="text-gray-600 px-6 py-3">Ghost Button</button>
                      <button className="bg-red-600 text-white px-6 py-3 rounded-md">Destructive</button>
                    </div>
                  </div>

                  {/* Input Fields */}
                  <div>
                    <h3 className="text-gray-900 mb-4">Input Fields</h3>
                    <div className="space-y-3 max-w-md">
                      <div>
                        <label className="text-gray-900 block mb-2">Label</label>
                        <input className="w-full border-2 border-gray-300 rounded-md p-3" placeholder="Placeholder text" />
                      </div>
                      <div>
                        <label className="text-gray-900 block mb-2">Disabled</label>
                        <input className="w-full border-2 border-gray-300 rounded-md p-3 bg-gray-100" disabled />
                      </div>
                      <div>
                        <label className="text-gray-900 block mb-2">Textarea</label>
                        <textarea className="w-full border-2 border-gray-300 rounded-md p-3" rows={3} />
                      </div>
                    </div>
                  </div>

                  {/* Cards */}
                  <div>
                    <h3 className="text-gray-900 mb-4">Cards</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="border-2 border-gray-200 rounded-lg p-4">
                        <h4 className="text-gray-900 mb-2">Card Title</h4>
                        <p className="text-gray-600">Card content goes here</p>
                      </div>
                      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                        <h4 className="text-blue-900 mb-2">Info Card</h4>
                        <p className="text-blue-700">Highlighted information</p>
                      </div>
                      <div className="shadow-lg rounded-lg p-4 bg-white">
                        <h4 className="text-gray-900 mb-2">Elevated Card</h4>
                        <p className="text-gray-600">With shadow</p>
                      </div>
                    </div>
                  </div>

                  {/* Badges */}
                  <div>
                    <h3 className="text-gray-900 mb-4">Badges</h3>
                    <div className="flex gap-3">
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">Default</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Info</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Success</span>
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full">Error</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">Warning</span>
                    </div>
                  </div>

                  {/* Alerts */}
                  <div>
                    <h3 className="text-gray-900 mb-4">Alerts</h3>
                    <div className="space-y-3">
                      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <p className="text-blue-900">Information Alert</p>
                          <p className="text-blue-700 text-sm mt-1">This is an informational message</p>
                        </div>
                      </div>
                      <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                        <div>
                          <p className="text-red-900">Error Alert</p>
                          <p className="text-red-700 text-sm mt-1">Something went wrong</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Design System Tab */}
          <TabsContent value="colors" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Design System</CardTitle>
                <CardDescription>Colors, typography, spacing, and design tokens</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Colors */}
                  <div>
                    <h3 className="text-gray-900 mb-4">Color Palette</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-600 mb-2">Primary (Blue)</p>
                        <div className="flex gap-2">
                          <div className="w-20 h-20 bg-blue-50 rounded-lg border-2 flex items-center justify-center">
                            <span className="text-xs">50</span>
                          </div>
                          <div className="w-20 h-20 bg-blue-100 rounded-lg border-2 flex items-center justify-center">
                            <span className="text-xs">100</span>
                          </div>
                          <div className="w-20 h-20 bg-blue-600 rounded-lg border-2 flex items-center justify-center text-white">
                            <span className="text-xs">600</span>
                          </div>
                          <div className="w-20 h-20 bg-blue-900 rounded-lg border-2 flex items-center justify-center text-white">
                            <span className="text-xs">900</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="text-gray-600 mb-2">Gray Scale</p>
                        <div className="flex gap-2">
                          <div className="w-20 h-20 bg-gray-50 rounded-lg border-2 flex items-center justify-center">
                            <span className="text-xs">50</span>
                          </div>
                          <div className="w-20 h-20 bg-gray-200 rounded-lg border-2 flex items-center justify-center">
                            <span className="text-xs">200</span>
                          </div>
                          <div className="w-20 h-20 bg-gray-400 rounded-lg border-2 flex items-center justify-center">
                            <span className="text-xs">400</span>
                          </div>
                          <div className="w-20 h-20 bg-gray-600 rounded-lg border-2 flex items-center justify-center text-white">
                            <span className="text-xs">600</span>
                          </div>
                          <div className="w-20 h-20 bg-gray-900 rounded-lg border-2 flex items-center justify-center text-white">
                            <span className="text-xs">900</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="text-gray-600 mb-2">Semantic Colors</p>
                        <div className="flex gap-2">
                          <div className="w-20 h-20 bg-green-500 rounded-lg flex items-center justify-center text-white">
                            <span className="text-xs">Success</span>
                          </div>
                          <div className="w-20 h-20 bg-red-500 rounded-lg flex items-center justify-center text-white">
                            <span className="text-xs">Error</span>
                          </div>
                          <div className="w-20 h-20 bg-orange-500 rounded-lg flex items-center justify-center text-white">
                            <span className="text-xs">Warning</span>
                          </div>
                          <div className="w-20 h-20 bg-purple-500 rounded-lg flex items-center justify-center text-white">
                            <span className="text-xs">Info</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Typography */}
                  <div>
                    <h3 className="text-gray-900 mb-4">Typography</h3>
                    <div className="space-y-3">
                      <div>
                        <h1 className="text-gray-900">Heading 1 - Default from globals.css</h1>
                        <p className="text-gray-500 text-sm">Used for page titles</p>
                      </div>
                      <div>
                        <h2 className="text-gray-900">Heading 2 - Default from globals.css</h2>
                        <p className="text-gray-500 text-sm">Used for section titles</p>
                      </div>
                      <div>
                        <h3 className="text-gray-900">Heading 3 - Default from globals.css</h3>
                        <p className="text-gray-500 text-sm">Used for card titles</p>
                      </div>
                      <div>
                        <p className="text-gray-900">Body text - Default from globals.css</p>
                        <p className="text-gray-500 text-sm">Regular paragraph text</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Secondary text - gray-600</p>
                        <p className="text-gray-500 text-sm">Used for descriptions</p>
                      </div>
                    </div>
                  </div>

                  {/* Spacing */}
                  <div>
                    <h3 className="text-gray-900 mb-4">Spacing Scale</h3>
                    <div className="space-y-2">
                      {[1, 2, 3, 4, 6, 8, 12, 16, 24].map((space) => (
                        <div key={space} className="flex items-center gap-4">
                          <span className="w-12 text-gray-600">{space}</span>
                          <div className={`h-8 bg-blue-200 rounded`} style={{ width: `${space * 4}px` }} />
                          <span className="text-gray-500 text-sm">{space * 4}px</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Border Radius */}
                  <div>
                    <h3 className="text-gray-900 mb-4">Border Radius</h3>
                    <div className="flex gap-4">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-blue-100 border-2 border-blue-600 rounded-md mb-2" />
                        <span className="text-sm text-gray-600">md (6px)</span>
                      </div>
                      <div className="text-center">
                        <div className="w-20 h-20 bg-blue-100 border-2 border-blue-600 rounded-lg mb-2" />
                        <span className="text-sm text-gray-600">lg (8px)</span>
                      </div>
                      <div className="text-center">
                        <div className="w-20 h-20 bg-blue-100 border-2 border-blue-600 rounded-xl mb-2" />
                        <span className="text-sm text-gray-600">xl (12px)</span>
                      </div>
                      <div className="text-center">
                        <div className="w-20 h-20 bg-blue-100 border-2 border-blue-600 rounded-full mb-2" />
                        <span className="text-sm text-gray-600">full</span>
                      </div>
                    </div>
                  </div>

                  {/* Shadows */}
                  <div>
                    <h3 className="text-gray-900 mb-4">Shadows</h3>
                    <div className="flex gap-4">
                      <div className="w-32 h-32 bg-white rounded-lg shadow-sm flex items-center justify-center">
                        <span className="text-sm text-gray-600">sm</span>
                      </div>
                      <div className="w-32 h-32 bg-white rounded-lg shadow flex items-center justify-center">
                        <span className="text-sm text-gray-600">default</span>
                      </div>
                      <div className="w-32 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center">
                        <span className="text-sm text-gray-600">lg</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Design Tokens Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="text-gray-900">Primary Colors</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Blue-600: Primary actions & branding</li>
                      <li>• Blue-50: Selected/hover states</li>
                      <li>• Gray-900: Primary text</li>
                      <li>• Gray-600: Secondary text</li>
                      <li>• Gray-50: Page background</li>
                      <li>• White: Card backgrounds</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-gray-900">Component Specs</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Border: 2px solid for cards</li>
                      <li>• Border radius: 8px (rounded-lg)</li>
                      <li>• Button height: 48px (py-3)</li>
                      <li>• Input height: 48px (p-3)</li>
                      <li>• Card padding: 24px (p-6)</li>
                      <li>• Section spacing: 24px (space-y-6)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
