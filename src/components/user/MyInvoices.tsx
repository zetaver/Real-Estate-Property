import React from 'react';
import { Download, FileText } from 'lucide-react';

interface Invoice {
  id: string;
  date: string;
  amount: string;
  status: 'paid' | 'pending' | 'overdue';
  description: string;
}

const invoices: Invoice[] = [
  {
    id: "INV-2025-001",
    date: "2025-03-24",
    amount: "$99.00",
    status: "paid",
    description: "Premium Membership - Monthly"
  }
];

export default function MyInvoices() {
  return (
    <div className="flex-1 bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h1 className="text-3xl font-bold mb-2">Welcome</h1>
        <h2 className="text-4xl font-bold">My Invoices</h2>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        {invoices.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-medium text-gray-600">Invoice</th>
                  <th className="text-left py-4 px-4 font-medium text-gray-600">Date</th>
                  <th className="text-left py-4 px-4 font-medium text-gray-600">Amount</th>
                  <th className="text-left py-4 px-4 font-medium text-gray-600">Status</th>
                  <th className="text-left py-4 px-4 font-medium text-gray-600">Description</th>
                  <th className="text-right py-4 px-4 font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="border-b border-gray-100">
                    <td className="py-4 px-4">{invoice.id}</td>
                    <td className="py-4 px-4">{invoice.date}</td>
                    <td className="py-4 px-4">{invoice.amount}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        invoice.status === 'paid' ? 'bg-green-100 text-green-800' :
                        invoice.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                      </span>
                    </td>
                    <td className="py-4 px-4">{invoice.description}</td>
                    <td className="py-4 px-4 text-right">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Download size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12">
            <FileText size={48} className="mx-auto mb-4 text-gray-400" />
            <p className="text-gray-600">You don't have any invoices yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}