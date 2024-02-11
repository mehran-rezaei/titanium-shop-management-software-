import React, { useState } from 'react';
import DatePicker, { DateObject } from "react-multi-date-picker";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css"

const DatePciker = (props:any) => {
    const [values, setValues] = useState<any>([
        new DateObject().subtract(4, "days"),
        new DateObject().add(4, "days")
      ])
    return (
        <div >
            <DatePicker
              className=""
              style={{
                backgroundColor: "black",
                height: "28px",
                width : "190px",
                borderRadius: "8px",
                fontSize: "14px",
                padding: "3px 10px"
              }}
            
              value={props.values}
              onChange={(dateObject: any) => {
                props.setValues(dateObject);
              }}
                  range
                />
        </div>
    );
};

export default DatePciker;