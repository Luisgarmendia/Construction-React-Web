import React, { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker
        closeOnScroll={e => e.target === document}
        selected={startDate}
        onChange={date => setStartDate(date)}
      />
    );
  };

export default DatePicker;