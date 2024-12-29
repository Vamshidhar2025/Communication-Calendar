import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { AddCompanyModal } from './AddCompanyModal';

export function AdminDashboard() {
  const [isAddModalOpen, setIsAddModalOpen] = React.useState(false);
  const companies = useStore((state) => state.companies);
  const communicationMethods = useStore((state) => state.communicationMethods);

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Companies</h2>
          <Button className="flex items-center gap-2" onClick={() => setIsAddModalOpen(true)}>
            <Plus className="h-4 w-4" />
            Add Company
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Name</th>
                <th className="text-left py-3 px-4">Location</th>
                <th className="text-left py-3 px-4">LinkedIn</th>
                <th className="text-left py-3 px-4">Emails</th>
                <th className="text-left py-3 px-4">Phone Numbers</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company) => (
                <tr key={company.id} className="border-b">
                  <td className="py-3 px-4">{company.name}</td>
                  <td className="py-3 px-4">{company.location}</td>
                  <td className="py-3 px-4">
                    <a
                      href={company.linkedinProfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View Profile
                    </a>
                  </td>
                  <td className="py-3 px-4">
                    {company.emails.map((email) => (
                      <div key={email}>{email}</div>
                    ))}
                  </td>
                  <td className="py-3 px-4">
                    {company.phoneNumbers.map((phone) => (
                      <div key={phone}>{phone}</div>
                    ))}
                  </td>
                  <td className="py-3 px-4">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm">
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Communication Methods
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Name</th>
                <th className="text-left py-3 px-4">Description</th>
                <th className="text-left py-3 px-4">Sequence</th>
                <th className="text-left py-3 px-4">Mandatory</th>
              </tr>
            </thead>
            <tbody>
              {communicationMethods.map((method) => (
                <tr key={method.id} className="border-b">
                  <td className="py-3 px-4">{method.name}</td>
                  <td className="py-3 px-4">{method.description}</td>
                  <td className="py-3 px-4">{method.sequence}</td>
                  <td className="py-3 px-4">
                    {method.isMandatory ? 'Yes' : 'No'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AddCompanyModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
    </div>
  );
}