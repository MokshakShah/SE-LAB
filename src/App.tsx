import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { CompanySettings } from './components/CompanySettings';
import { CreateDO } from './components/CreateDO';
import { CreatePO } from './components/CreatePO';
import { CreateInvoice } from './components/CreateInvoice';
import { DOList } from './components/DOList';
import { POList } from './components/POList';
import { InvoiceList } from './components/InvoiceList';
import { DocumentSuccess } from './components/DocumentSuccess';
import { DesignReference } from './components/DesignReference';

export type CompanyDetails = {
  companyName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  email: string;
  phone: string;
  taxId: string;
  logo?: string;
};

export type User = {
  id: string;
  email: string;
  name: string;
};

export type DeliveryOrder = {
  id: string;
  doNumber: string;
  date: string;
  customerName: string;
  customerAddress: string;
  items: Array<{
    description: string;
    quantity: number;
    unit: string;
  }>;
  notes: string;
  status: string;
};

export type PurchaseOrder = {
  id: string;
  poNumber: string;
  date: string;
  vendorName: string;
  vendorAddress: string;
  items: Array<{
    description: string;
    quantity: number;
    unit: string;
    unitPrice: number;
    total: number;
  }>;
  notes: string;
  status: string;
  subtotal: number;
  tax: number;
  totalAmount: number;
  paymentTerms: number;
  paymentDueDate: string;
};

export type Invoice = {
  id: string;
  invoiceNumber: string;
  date: string;
  dueDate: string;
  customerName: string;
  customerAddress: string;
  items: Array<{
    description: string;
    quantity: number;
    unit: string;
    unitPrice: number;
    total: number;
  }>;
  notes: string;
  status: string;
  subtotal: number;
  tax: number;
  totalAmount: number;
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [user, setUser] = useState<User | null>(null);
  const [companyDetails, setCompanyDetails] = useState<CompanyDetails | null>(null);
  const [deliveryOrders, setDeliveryOrders] = useState<DeliveryOrder[]>([]);
  const [purchaseOrders, setPurchaseOrders] = useState<PurchaseOrder[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [currentDocument, setCurrentDocument] = useState<DeliveryOrder | PurchaseOrder | Invoice | null>(null);
  const [currentDocumentType, setCurrentDocumentType] = useState<'DO' | 'PO' | 'Invoice' | null>(null);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedCompany = localStorage.getItem('companyDetails');
    const savedDOs = localStorage.getItem('deliveryOrders');
    const savedPOs = localStorage.getItem('purchaseOrders');
    const savedInvoices = localStorage.getItem('invoices');

    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedCompany) setCompanyDetails(JSON.parse(savedCompany));
    if (savedDOs) setDeliveryOrders(JSON.parse(savedDOs));
    if (savedPOs) setPurchaseOrders(JSON.parse(savedPOs));
    if (savedInvoices) setInvoices(JSON.parse(savedInvoices));
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    if (companyDetails) {
      localStorage.setItem('companyDetails', JSON.stringify(companyDetails));
    }
  }, [companyDetails]);

  useEffect(() => {
    localStorage.setItem('deliveryOrders', JSON.stringify(deliveryOrders));
  }, [deliveryOrders]);

  useEffect(() => {
    localStorage.setItem('purchaseOrders', JSON.stringify(purchaseOrders));
  }, [purchaseOrders]);

  useEffect(() => {
    localStorage.setItem('invoices', JSON.stringify(invoices));
  }, [invoices]);

  const handleLogin = (email: string, password: string, name: string, companyDetails?: CompanyDetails) => {
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
    };
    setUser(newUser);
    
    // If company details are provided (during signup), save them
    if (companyDetails) {
      setCompanyDetails(companyDetails);
    }
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('dashboard');
  };

  const handleSaveCompanyDetails = (details: CompanyDetails) => {
    setCompanyDetails(details);
  };

  const handleCreateDO = (newDO: DeliveryOrder) => {
    setDeliveryOrders([...deliveryOrders, newDO]);
    setCurrentDocument(newDO);
    setCurrentDocumentType('DO');
    setCurrentPage('document-success');
  };

  const handleCreatePO = (newPO: PurchaseOrder) => {
    setPurchaseOrders([...purchaseOrders, newPO]);
    setCurrentDocument(newPO);
    setCurrentDocumentType('PO');
    setCurrentPage('document-success');
  };

  const handleCreateInvoice = (newInvoice: Invoice) => {
    setInvoices([...invoices, newInvoice]);
    setCurrentDocument(newInvoice);
    setCurrentDocumentType('Invoice');
    setCurrentPage('document-success');
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return (
          <Dashboard
            deliveryOrders={deliveryOrders}
            purchaseOrders={purchaseOrders}
            invoices={invoices}
            onNavigate={setCurrentPage}
          />
        );
      case 'company-settings':
        return (
          <CompanySettings
            companyDetails={companyDetails}
            onSave={handleSaveCompanyDetails}
          />
        );
      case 'create-do':
        return (
          <CreateDO
            companyDetails={companyDetails}
            onCreate={handleCreateDO}
            onNavigate={setCurrentPage}
          />
        );
      case 'create-po':
        return (
          <CreatePO
            companyDetails={companyDetails}
            onCreate={handleCreatePO}
            onNavigate={setCurrentPage}
          />
        );
      case 'create-invoice':
        return (
          <CreateInvoice
            companyDetails={companyDetails}
            onCreate={handleCreateInvoice}
            onNavigate={setCurrentPage}
          />
        );
      case 'do-list':
        return <DOList deliveryOrders={deliveryOrders} />;
      case 'po-list':
        return <POList purchaseOrders={purchaseOrders} />;
      case 'invoice-list':
        return <InvoiceList invoices={invoices} />;
      case 'document-success':
        if (currentDocument && currentDocumentType && companyDetails) {
          return (
            <DocumentSuccess
              type={currentDocumentType}
              document={currentDocument}
              companyDetails={companyDetails}
              onNavigate={setCurrentPage}
            />
          );
        }
        return <Dashboard deliveryOrders={deliveryOrders} purchaseOrders={purchaseOrders} invoices={invoices} onNavigate={setCurrentPage} />;
      default:
        return <Dashboard deliveryOrders={deliveryOrders} purchaseOrders={purchaseOrders} invoices={invoices} onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        user={user}
        onLogout={handleLogout}
      />
      <main className="flex-1 overflow-y-auto">
        {renderPage()}
      </main>
    </div>
  );
}
