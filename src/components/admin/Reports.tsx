import React from 'react';
import { Download } from 'lucide-react';

interface Report {
  id: number;
  name: string;
  type: string;
  period: string;
  generatedAt: string;
  size: string;
}

const reports: Report[] = [
  {
    id: 1,
    name: "Monthly Sales Report",
    type: "Sales",
    period: "March 2025",
    generatedAt: "2025-03-24",
    size: "2.4 MB"
  },
  {
    id: 2,
    name: "User Activity Report",
    type: "Analytics",
    period: "Q1 2025",
    generatedAt: "2025-03-24",
    size: "1.8 MB"
  }
];

export default function Reports() {
  return (
    <div className="flex-1">
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Reports</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Generate New Report
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left py-4 px-6 font-medium text-gray-600">Report Name</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Type</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Period</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Generated</th>
                <th className="text-left py-4 px-6 font-medium text-gray-600">Size</th>
                <th className="text-right py-4 px-6 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {reports.map((report) => (
                <tr key={report.id}>
                  <td className="py-4 px-6 font-medium">{report.name}</td>
                  <td className="py-4 px-6">{report.type}</td>
                  <td className="py-4 px-6">{report.period}</td>
                  <td className="py-4 px-6">{report.generatedAt}</td>
                  <td className="py-4 px-6">{report.size}</td>
                  <td className="py-4 px-6">
                    <div className="flex justify-end">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Download size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}