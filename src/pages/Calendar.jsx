import React, { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const createDaysForMonth = (year, month) => {
    let days = [];
    for (let i = 1; i <= daysInMonth(year, month); i++) {
      days.push(i);
    }
    return days;
  };

  const monthNames = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
  const days = createDaysForMonth(currentDate.getFullYear(), currentDate.getMonth());

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
      </div>
      <div className="calendar-days">
        {days.map((day, index) => (
          <div key={index} className="calendar-day">{day}</div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;