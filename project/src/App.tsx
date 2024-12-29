import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AdminDashboard } from '@/components/admin/AdminDashboard';
import { UserDashboard } from '@/components/user/UserDashboard';
import { Calendar } from '@/components/calendar/Calendar';
import { Building2, Calendar as CalendarIcon, LayoutDashboard } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">
                Communication Calendar
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="user" className="space-y-6">
          <TabsList className="bg-white p-1 rounded-lg shadow-sm">
            <TabsTrigger value="user" className="flex items-center gap-2">
              <LayoutDashboard className="h-4 w-4" />
              User Dashboard
            </TabsTrigger>
            <TabsTrigger value="admin" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Admin
            </TabsTrigger>
            <TabsTrigger value="calendar" className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" />
              Calendar
            </TabsTrigger>
          </TabsList>

          <TabsContent value="user" className="mt-6">
            <UserDashboard />
          </TabsContent>

          <TabsContent value="admin" className="mt-6">
            <AdminDashboard />
          </TabsContent>

          <TabsContent value="calendar" className="mt-6">
            <Calendar />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

export default App;