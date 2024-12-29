import React from 'react';
import { useStore } from '@/store/useStore';
import { Button } from '@/components/ui/button';
import { MessageSquare, Bell } from 'lucide-react';

export function UserDashboard() {
  const companies = useStore((state) => state.companies);
  const communications = useStore((state) => state.communications);

  const getLastFiveCommunications = (companyId: string) => {
    return communications
      .filter((comm) => comm.companyId === companyId)
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .slice(0, 5);
  };

  const getNextScheduledCommunication = (companyId: string) => {
    return communications
      .filter(
        (comm) => comm.companyId === companyId && !comm.completed && comm.date > new Date()
      )
      .sort((a, b) => a.date.getTime() - b.date.getTime())[0];
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Communication Dashboard</h2>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span className="bg-red-500 text-white rounded-full px-2 py-0.5 text-xs">
              3
            </span>
          </Button>
          <Button className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Log Communication
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Five Communications
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Next Scheduled
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {companies.map((company) => {
              const lastFive = getLastFiveCommunications(company.id);
              const nextScheduled = getNextScheduledCommunication(company.id);

              return (
                <tr key={company.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {company.name}
                    </div>
                    <div className="text-sm text-gray-500">{company.location}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      {lastFive.map((comm) => (
                        <div
                          key={comm.id}
                          className="px-2 py-1 bg-gray-100 rounded text-xs"
                          title={comm.notes}
                        >
                          {new Date(comm.date).toLocaleDateString()}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {nextScheduled && (
                      <div className="text-sm text-gray-900">
                        {new Date(nextScheduled.date).toLocaleDateString()}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Button variant="ghost" size="sm">
                      View Details
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}