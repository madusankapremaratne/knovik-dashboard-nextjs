import React, { useState, useRef, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

interface DateRangePickerProps {
  startDate: Date;
  endDate: Date;
  onDateRangeChange: (startDate: Date, endDate: Date) => void;
}

export default function DateRangePicker({
  startDate,
  endDate,
  onDateRangeChange,
}: DateRangePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [tempStartDate, setTempStartDate] = useState(startDate);
  const [tempEndDate, setTempEndDate] = useState(endDate);
  const [currentMonth, setCurrentMonth] = useState(new Date(startDate));
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handleDateClick = (day: number) => {
    const selectedDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );

    if (!tempStartDate || selectedDate < tempStartDate) {
      setTempStartDate(selectedDate);
      setTempEndDate(selectedDate);
    } else if (selectedDate > tempStartDate) {
      setTempEndDate(selectedDate);
    }
  };

  const handleApply = () => {
    onDateRangeChange(tempStartDate, tempEndDate);
    setIsOpen(false);
  };

  const handleReset = () => {
    setTempStartDate(startDate);
    setTempEndDate(endDate);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-9" />
      );
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        day
      );
      const isStart = date.getTime() === tempStartDate.getTime();
      const isEnd = date.getTime() === tempEndDate.getTime();
      const isBetween =
        date > tempStartDate && date < tempEndDate;

      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(day)}
          className={`h-9 rounded text-sm font-medium transition-colors ${
            isStart || isEnd
              ? 'bg-blue-600 text-white'
              : isBetween
                ? 'bg-blue-100 text-blue-900'
                : 'text-slate-300 hover:bg-slate-800'
          }`}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg bg-slate-800 px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
      >
        <Calendar className="h-4 w-4" />
        <span>
          {formatDate(startDate)} - {formatDate(endDate)}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-96 rounded-xl border border-slate-700 bg-slate-900 p-4 shadow-2xl">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold text-white">
              {currentMonth.toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
              })}
            </h3>
            <div className="flex gap-1">
              <button
                onClick={() =>
                  setCurrentMonth(
                    new Date(currentMonth.setMonth(currentMonth.getMonth() - 1))
                  )
                }
                className="rounded p-1 hover:bg-slate-800"
              >
                <ChevronLeft className="h-4 w-4 text-slate-400" />
              </button>
              <button
                onClick={() =>
                  setCurrentMonth(
                    new Date(currentMonth.setMonth(currentMonth.getMonth() + 1))
                  )
                }
                className="rounded p-1 hover:bg-slate-800"
              >
                <ChevronRight className="h-4 w-4 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Day labels */}
          <div className="mb-2 grid grid-cols-7 gap-1 text-center">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-xs font-semibold text-slate-400">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="mb-4 grid grid-cols-7 gap-1">
            {renderCalendarDays()}
          </div>

          {/* Selected date range display */}
          <div className="mb-4 rounded-lg bg-slate-800 p-3">
            <p className="text-xs text-slate-400">Selected Range</p>
            <p className="text-sm font-semibold text-white">
              {formatDate(tempStartDate)} - {formatDate(tempEndDate)}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2">
            <button
              onClick={handleReset}
              className="flex-1 rounded-lg border border-slate-700 px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 transition-colors"
            >
              Reset
            </button>
            <button
              onClick={handleApply}
              className="flex-1 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
