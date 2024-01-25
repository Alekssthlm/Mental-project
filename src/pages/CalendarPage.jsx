import { useEffect, useState } from "react";
import VanillaCalendar from "vanilla-calendar-pro";
import "vanilla-calendar-pro/build/vanilla-calendar.min.css";
import CalendarWrap from "../components/CalendarWrap";

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(() => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = month.toString().length === 1 ? `${year}-0${month}-${day}`: `${year}-${month}-${day}`  ;
    return currentDate
  });

  useEffect(() => {
    const options = {
      actions: {
        clickDay(event, self) {
          setSelectedDate(self.selectedDates[0]);
        },
      },
    };
    console.log("effect");
    const calendar = new VanillaCalendar("#calendar", options);
    calendar.init();
  }, []);

  console.log(selectedDate);

  return (
    <div className="calendar-wrap">
      <div id="calendar"></div>
      <CalendarWrap selectedDate={selectedDate} />
    </div>
  );
}
