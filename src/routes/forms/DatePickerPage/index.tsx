import {
    DatePicker,
    DayOfWeek
} from "office-ui-fabric-react";
import * as React from 'react'
import './index.css'

/**
 * Date Picker Strings
 */
const datePickerStrings = {
    months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],

    shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],

    days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],

    shortDays: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S"
    ],

    goToToday: "Go to Today"
};


class DatePickerPage extends React.Component {
    public render() {
        return (
            <div className="container">
                <div>
                    <h1 className="Heading">DatePicker</h1>
                    <div className="ContentCard">
                        <h2 className="Heading">DatePicker</h2>
                        <DatePicker
                            firstDayOfWeek={DayOfWeek.Sunday}
                            placeholder="Select a date..."
                            strings={datePickerStrings}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default DatePickerPage
