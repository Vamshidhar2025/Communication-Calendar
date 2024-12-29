import React from 'react';
import { useStore } from '@/store/useStore';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface AddCompanyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddCompanyModal({ isOpen, onClose }: AddCompanyModalProps) {
  const addCompany = useStore((state) => state.addCompany);
  const [formData, setFormData] = React.useState({
    name: '',
    location: '',
    linkedinProfile: '',
    emails: [''],
    phoneNumbers: [''],
    comments: '',
    communicationPeriodicity: 14, // Default to 2 weeks
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addCompany({
      id: crypto.randomUUID(),
      ...formData,
    });
    onClose();
  };

  const addField = (field: 'emails' | 'phoneNumbers') => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], ''],
    }));
  };

  const updateField = (field: 'emails' | 'phoneNumbers', index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item)),
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Add New Company</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Company Name</label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.location}
              onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">LinkedIn Profile</label>
            <input
              type="url"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.linkedinProfile}
              onChange={(e) => setFormData((prev) => ({ ...prev, linkedinProfile: e.target.value }))}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Addresses</label>
            {formData.emails.map((email, index) => (
              <div key={index} className="mt-1 flex gap-2">
                <input
                  type="email"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={email}
                  onChange={(e) => updateField('emails', index, e.target.value)}
                />
                {index === formData.emails.length - 1 && (
                  <Button type="button" onClick={() => addField('emails')}>
                    Add
                  </Button>
                )}
              </div>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Numbers</label>
            {formData.phoneNumbers.map((phone, index) => (
              <div key={index} className="mt-1 flex gap-2">
                <input
                  type="tel"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={phone}
                  onChange={(e) => updateField('phoneNumbers', index, e.target.value)}
                />
                {index === formData.phoneNumbers.length - 1 && (
                  <Button type="button" onClick={() => addField('phoneNumbers')}>
                    Add
                  </Button>
                )}
              </div>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Comments</label>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows={3}
              value={formData.comments}
              onChange={(e) => setFormData((prev) => ({ ...prev, comments: e.target.value }))}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Communication Periodicity (days)
            </label>
            <input
              type="number"
              required
              min={1}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.communicationPeriodicity}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  communicationPeriodicity: parseInt(e.target.value),
                }))
              }
            />
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Add Company</Button>
          </div>
        </form>
      </div>
    </div>
  );
}