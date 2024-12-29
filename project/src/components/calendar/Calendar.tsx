import React from 'react';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { useStore } from '@/store/useStore';

export function Calendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const communications = useStore((state) => state.communications);

  const getDayContent = (day: Date) => {
    const dayComms = communications.filter(
      (comm) =>
        comm.date.getDate() === day.getDate() &&
        comm.date.getMonth() === day.getMonth() &&
        comm.date.getFullYear() === day.getFullYear()
    );

    if (dayComms.length > 0) {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-7 h-7">
            <div className="absolute inset-0 flex items-center justify-center">
              {day.getDate()}
            </div>
            <div className="absolute bottom-0 right-0">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
            </div>
          </div>
        </div>
      );
    }

    return day.getDate();
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Communication Calendar
        </h2>
        <CalendarComponent
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>

      {date && (
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Communications for {date.toLocaleDateString()}
          </h3>
          <div className="space-y-4">
            {communications
              .filter(
                (comm) =>
                  comm.date.getDate() === date.getDate() &&
                  comm.date.getMonth() === date.getMonth() &&
                  comm.date.getFullYear() === date.getFullYear()
              )
              .map((comm) => (
                <div
                  key={comm.id}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="font-medium">{comm.methodId}</div>
                  <div className="text-sm text-gray-500">{comm.notes}</div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}