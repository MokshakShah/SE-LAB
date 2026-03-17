import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { CompanyDetails, DeliveryOrder, PurchaseOrder, Invoice } from '../App';

export function generateDOPDF(deliveryOrder: DeliveryOrder, companyDetails: CompanyDetails) {
  const doc = new jsPDF();
  
  // Company Header
  doc.setFontSize(20);
  doc.text(companyDetails.companyName, 14, 20);
  
  doc.setFontSize(10);
  doc.text(companyDetails.address, 14, 28);
  doc.text(`${companyDetails.city}, ${companyDetails.state} ${companyDetails.zipCode}`, 14, 33);
  doc.text(`${companyDetails.country}`, 14, 38);
  doc.text(`Email: ${companyDetails.email} | Phone: ${companyDetails.phone}`, 14, 43);
  if (companyDetails.taxId) {
    doc.text(`Tax ID: ${companyDetails.taxId}`, 14, 48);
  }
  
  // Document Title
  doc.setFontSize(24);
  doc.text('DELIVERY ORDER', 14, 65);
  
  // DO Details
  doc.setFontSize(12);
  doc.text(`DO Number: ${deliveryOrder.doNumber}`, 14, 75);
  doc.text(`Date: ${new Date(deliveryOrder.date).toLocaleDateString()}`, 14, 82);
  doc.text(`Status: ${deliveryOrder.status}`, 14, 89);
  
  // Customer Information
  doc.setFontSize(14);
  doc.text('Deliver To:', 14, 105);
  doc.setFontSize(11);
  doc.text(deliveryOrder.customerName, 14, 112);
  const addressLines = deliveryOrder.customerAddress.split('\n');
  let yPos = 119;
  addressLines.forEach(line => {
    doc.text(line, 14, yPos);
    yPos += 7;
  });
  
  // Items Table
  const tableData = deliveryOrder.items.map(item => [
    item.description,
    item.quantity.toString(),
    item.unit
  ]);
  
  autoTable(doc, {
    startY: yPos + 10,
    head: [['Description', 'Quantity', 'Unit']],
    body: tableData,
    theme: 'grid',
    headStyles: { fillColor: [59, 130, 246] },
  });
  
  // Notes
  if (deliveryOrder.notes) {
    const finalY = (doc as any).lastAutoTable.finalY || yPos + 50;
    doc.setFontSize(12);
    doc.text('Notes:', 14, finalY + 15);
    doc.setFontSize(10);
    const noteLines = doc.splitTextToSize(deliveryOrder.notes, 180);
    doc.text(noteLines, 14, finalY + 22);
  }
  
  // Save PDF
  doc.save(`DO-${deliveryOrder.doNumber}.pdf`);
}

export function generatePOPDF(purchaseOrder: PurchaseOrder, companyDetails: CompanyDetails) {
  const doc = new jsPDF();
  
  // Company Header
  doc.setFontSize(20);
  doc.text(companyDetails.companyName, 14, 20);
  
  doc.setFontSize(10);
  doc.text(companyDetails.address, 14, 28);
  doc.text(`${companyDetails.city}, ${companyDetails.state} ${companyDetails.zipCode}`, 14, 33);
  doc.text(`${companyDetails.country}`, 14, 38);
  doc.text(`Email: ${companyDetails.email} | Phone: ${companyDetails.phone}`, 14, 43);
  if (companyDetails.taxId) {
    doc.text(`Tax ID: ${companyDetails.taxId}`, 14, 48);
  }
  
  // Document Title
  doc.setFontSize(24);
  doc.text('PURCHASE ORDER', 14, 65);
  
  // PO Details
  doc.setFontSize(12);
  doc.text(`PO Number: ${purchaseOrder.poNumber}`, 14, 75);
  doc.text(`Date: ${new Date(purchaseOrder.date).toLocaleDateString()}`, 14, 82);
  doc.text(`Status: ${purchaseOrder.status}`, 14, 89);
  doc.text(`Payment Terms: ${purchaseOrder.paymentTerms} days`, 14, 96);
  doc.text(`Payment Due Date: ${new Date(purchaseOrder.paymentDueDate).toLocaleDateString()}`, 14, 103);
  
  // Vendor Information
  doc.setFontSize(14);
  doc.text('Vendor:', 14, 115);
  doc.setFontSize(11);
  doc.text(purchaseOrder.vendorName, 14, 122);
  const addressLines = purchaseOrder.vendorAddress.split('\n');
  let yPos = 129;
  addressLines.forEach(line => {
    doc.text(line, 14, yPos);
    yPos += 7;
  });
  
  // Items Table
  const tableData = purchaseOrder.items.map(item => [
    item.description,
    item.quantity.toString(),
    item.unit,
    `$${item.unitPrice.toFixed(2)}`,
    `$${item.total.toFixed(2)}`
  ]);
  
  autoTable(doc, {
    startY: yPos + 10,
    head: [['Description', 'Quantity', 'Unit', 'Unit Price', 'Total']],
    body: tableData,
    theme: 'grid',
    headStyles: { fillColor: [59, 130, 246] },
  });
  
  // Summary
  const finalY = (doc as any).lastAutoTable.finalY || yPos + 50;
  doc.setFontSize(12);
  doc.text(`Subtotal: $${purchaseOrder.subtotal.toFixed(2)}`, 140, finalY + 15);
  doc.text(`Tax: $${purchaseOrder.tax.toFixed(2)}`, 140, finalY + 22);
  doc.setFontSize(14);
  doc.text(`Total: $${purchaseOrder.totalAmount.toFixed(2)}`, 140, finalY + 32);
  
  // Notes
  if (purchaseOrder.notes) {
    doc.setFontSize(12);
    doc.text('Notes:', 14, finalY + 45);
    doc.setFontSize(10);
    const noteLines = doc.splitTextToSize(purchaseOrder.notes, 180);
    doc.text(noteLines, 14, finalY + 52);
  }
  
  // Save PDF
  doc.save(`PO-${purchaseOrder.poNumber}.pdf`);
}

export function generateInvoicePDF(invoice: Invoice, companyDetails: CompanyDetails) {
  const doc = new jsPDF();
  
  // Company Header
  doc.setFontSize(20);
  doc.text(companyDetails.companyName, 14, 20);
  
  doc.setFontSize(10);
  doc.text(companyDetails.address, 14, 28);
  doc.text(`${companyDetails.city}, ${companyDetails.state} ${companyDetails.zipCode}`, 14, 33);
  doc.text(`${companyDetails.country}`, 14, 38);
  doc.text(`Email: ${companyDetails.email} | Phone: ${companyDetails.phone}`, 14, 43);
  if (companyDetails.taxId) {
    doc.text(`Tax ID: ${companyDetails.taxId}`, 14, 48);
  }
  
  // Document Title
  doc.setFontSize(24);
  doc.text('INVOICE', 14, 65);
  
  // Invoice Details
  doc.setFontSize(12);
  doc.text(`Invoice Number: ${invoice.invoiceNumber}`, 14, 75);
  doc.text(`Date: ${new Date(invoice.date).toLocaleDateString()}`, 14, 82);
  doc.text(`Due Date: ${new Date(invoice.dueDate).toLocaleDateString()}`, 14, 89);
  doc.text(`Status: ${invoice.status}`, 14, 96);
  
  // Customer Information
  doc.setFontSize(14);
  doc.text('Bill To:', 14, 112);
  doc.setFontSize(11);
  doc.text(invoice.customerName, 14, 119);
  const addressLines = invoice.customerAddress.split('\n');
  let yPos = 126;
  addressLines.forEach(line => {
    doc.text(line, 14, yPos);
    yPos += 7;
  });
  
  // Items Table
  const tableData = invoice.items.map(item => [
    item.description,
    item.quantity.toString(),
    item.unit,
    `$${item.unitPrice.toFixed(2)}`,
    `$${item.total.toFixed(2)}`
  ]);
  
  autoTable(doc, {
    startY: yPos + 10,
    head: [['Description', 'Quantity', 'Unit', 'Unit Price', 'Total']],
    body: tableData,
    theme: 'grid',
    headStyles: { fillColor: [59, 130, 246] },
  });
  
  // Summary
  const finalY = (doc as any).lastAutoTable.finalY || yPos + 50;
  doc.setFontSize(12);
  doc.text(`Subtotal: $${invoice.subtotal.toFixed(2)}`, 140, finalY + 15);
  doc.text(`Tax: $${invoice.tax.toFixed(2)}`, 140, finalY + 22);
  doc.setFontSize(14);
  doc.text(`Total: $${invoice.totalAmount.toFixed(2)}`, 140, finalY + 32);
  
  // Notes
  if (invoice.notes) {
    doc.setFontSize(12);
    doc.text('Notes:', 14, finalY + 45);
    doc.setFontSize(10);
    const noteLines = doc.splitTextToSize(invoice.notes, 180);
    doc.text(noteLines, 14, finalY + 52);
  }
  
  // Save PDF
  doc.save(`Invoice-${invoice.invoiceNumber}.pdf`);
}
