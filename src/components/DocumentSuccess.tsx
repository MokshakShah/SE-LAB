import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle, Download, Eye, ArrowLeft } from 'lucide-react';
import { CompanyDetails, DeliveryOrder, PurchaseOrder, Invoice } from '../App';
import { generateDOPDF, generatePOPDF, generateInvoicePDF } from '../utils/pdfGenerator';

type DocumentSuccessProps = {
  type: 'DO' | 'PO' | 'Invoice';
  document: DeliveryOrder | PurchaseOrder | Invoice;
  companyDetails: CompanyDetails;
  onNavigate: (page: string) => void;
};

export function DocumentSuccess({ type, document, companyDetails, onNavigate }: DocumentSuccessProps) {
  const handleDownload = () => {
    if (type === 'DO') {
      generateDOPDF(document as DeliveryOrder, companyDetails);
    } else if (type === 'PO') {
      generatePOPDF(document as PurchaseOrder, companyDetails);
    } else {
      generateInvoicePDF(document as Invoice, companyDetails);
    }
  };

  const handleViewList = () => {
    if (type === 'DO') {
      onNavigate('do-list');
    } else if (type === 'PO') {
      onNavigate('po-list');
    } else {
      onNavigate('invoice-list');
    }
  };

  const getDocumentNumber = () => {
    if ('doNumber' in document) return document.doNumber;
    if ('poNumber' in document) return document.poNumber;
    if ('invoiceNumber' in document) return document.invoiceNumber;
    return '';
  };

  const getTitle = () => {
    switch (type) {
      case 'DO':
        return 'Delivery Order Created!';
      case 'PO':
        return 'Purchase Order Created!';
      case 'Invoice':
        return 'Invoice Created!';
    }
  };

  const getListLabel = () => {
    switch (type) {
      case 'DO':
        return 'View All Delivery Orders';
      case 'PO':
        return 'View All Purchase Orders';
      case 'Invoice':
        return 'View All Invoices';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>
          <div>
            <CardTitle className="text-green-900">{getTitle()}</CardTitle>
            <CardDescription className="mt-2">
              Your {type} #{getDocumentNumber()} has been successfully created
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-6 space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Document Number:</span>
              <span className="text-gray-900">{getDocumentNumber()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date:</span>
              <span className="text-gray-900">{new Date(document.date).toLocaleDateString()}</span>
            </div>
            {type === 'DO' && (
              <div className="flex justify-between">
                <span className="text-gray-600">Customer:</span>
                <span className="text-gray-900">{(document as DeliveryOrder).customerName}</span>
              </div>
            )}
            {type === 'PO' && (
              <>
                <div className="flex justify-between">
                  <span className="text-gray-600">Vendor:</span>
                  <span className="text-gray-900">{(document as PurchaseOrder).vendorName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Amount:</span>
                  <span className="text-gray-900">${(document as PurchaseOrder).totalAmount.toFixed(2)}</span>
                </div>
              </>
            )}
            {type === 'Invoice' && (
              <>
                <div className="flex justify-between">
                  <span className="text-gray-600">Customer:</span>
                  <span className="text-gray-900">{(document as Invoice).customerName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Amount:</span>
                  <span className="text-gray-900">${(document as Invoice).totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Due Date:</span>
                  <span className="text-gray-900">{new Date((document as Invoice).dueDate).toLocaleDateString()}</span>
                </div>
              </>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button onClick={handleDownload} className="w-full">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Button onClick={handleViewList} variant="outline" className="w-full">
              <Eye className="w-4 h-4 mr-2" />
              {getListLabel()}
            </Button>
          </div>

          <Button
            onClick={() => onNavigate('dashboard')}
            variant="ghost"
            className="w-full"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
