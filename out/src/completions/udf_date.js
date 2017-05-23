'use strict'

var {
    CompletionItemKind
} = require('vscode')

var items = [{
        label: '_Date_Time_CompareFileTime',
        documentation: 'Compares two file times'
    },
    {
        label: '_Date_Time_DOSDateTimeToArray',
        documentation: 'Decode a DOS date/time to an array'
    },
    {
        label: '_Date_Time_DOSDateTimeToFileTime',
        documentation: 'Converts MS-DOS date and time values to a file time'
    },
    {
        label: '_Date_Time_DOSDateTimeToStr',
        documentation: 'Decode a DOS date to a string'
    },
    {
        label: '_Date_Time_DOSDateToArray',
        documentation: 'Decode a DOS date to an array'
    },
    {
        label: '_Date_Time_DOSDateToStr',
        documentation: 'Decode a DOS date to a string'
    },
    {
        label: '_Date_Time_DOSTimeToArray',
        documentation: 'Decode a DOS time to an array'
    },
    {
        label: '_Date_Time_DOSTimeToStr',
        documentation: 'Decode a DOS time to a string'
    },
    {
        label: '_Date_Time_EncodeFileTime',
        documentation: 'Encodes and returns a $tagFILETIME structure'
    },
    {
        label: '_Date_Time_EncodeSystemTime',
        documentation: 'Encodes and returns a $tagSYSTEMTIME structure'
    },
    {
        label: '_Date_Time_FileTimeToArray',
        documentation: 'Decode a file time to an array'
    },
    {
        label: '_Date_Time_FileTimeToDOSDateTime',
        documentation: 'Converts MS-DOS date and time values to a file time'
    },
    {
        label: '_Date_Time_FileTimeToLocalFileTime',
        documentation: 'Converts a file time based on the Coordinated Universal Time to a local file time'
    },
    {
        label: '_Date_Time_FileTimeToStr',
        documentation: 'Decode a file time to a date/time string'
    },
    {
        label: '_Date_Time_FileTimeToSystemTime',
        documentation: 'Converts a file time to system time format'
    },
    {
        label: '_Date_Time_GetFileTime',
        documentation: 'Retrieves the date and time that a file was created, accessed and modified'
    },
    {
        label: '_Date_Time_GetLocalTime',
        documentation: 'Retrieves the current local date and time'
    },
    {
        label: '_Date_Time_GetSystemTime',
        documentation: 'Retrieves the current system date and time expressed in UTC'
    },
    {
        label: '_Date_Time_GetSystemTimeAdjustment',
        documentation: 'Determines whether the system is applying periodic time adjustments'
    },
    {
        label: '_Date_Time_GetSystemTimeAsFileTime',
        documentation: 'Retrieves the current system date and time expressed in UTC'
    },
    {
        label: '_Date_Time_GetSystemTimes',
        documentation: 'Retrieves system timing information'
    },
    {
        label: '_Date_Time_GetTickCount',
        documentation: 'Retrieves the number of milliseconds that have elapsed since Windows was started'
    },
    {
        label: '_Date_Time_GetTimeZoneInformation',
        documentation: 'Retrieves the current time zone settings'
    },
    {
        label: '_Date_Time_LocalFileTimeToFileTime',
        documentation: 'Converts a local file time to a file time based on UTC'
    },
    {
        label: '_Date_Time_SetFileTime',
        documentation: 'Sets the date and time that a file was created, accessed and modified'
    },
    {
        label: '_Date_Time_SetLocalTime',
        documentation: 'Sets the current local date and time'
    },
    {
        label: '_Date_Time_SetSystemTime',
        documentation: 'Sets the current system time and date, expressed in UTC'
    },
    {
        label: '_Date_Time_SetSystemTimeAdjustment',
        documentation: 'Enables or disables periodic time adjustments to the system\'s time of day clock'
    },
    {
        label: '_Date_Time_SetTimeZoneInformation',
        documentation: 'Sets the current time zone settings'
    },
    {
        label: '_Date_Time_SystemTimeToArray',
        documentation: 'Decode a system time to an array'
    },
    {
        label: '_Date_Time_SystemTimeToDateStr',
        documentation: 'Decode a system time to a date string'
    },
    {
        label: '_Date_Time_SystemTimeToDateTimeStr',
        documentation: 'Decode a system time to a date/time string'
    },
    {
        label: '_Date_Time_SystemTimeToFileTime',
        documentation: 'Converts a system time to file time format'
    },
    {
        label: '_Date_Time_SystemTimeToTimeStr',
        documentation: 'Decode a system time to a time string'
    },
    {
        label: '_Date_Time_SystemTimeToTzSpecificLocalTime',
        documentation: 'Converts a UTC time to a specified time zone\'s corresponding local time'
    },
    {
        label: '_Date_Time_TzSpecificLocalTimeToSystemTime',
        documentation: 'Converts a local time to a time in UTC'
    },
    {
        label: '_DateAdd',
        documentation: 'Calculates a new date/time by adding/subtracting a specified number of time intervals from an initial date/time'
    },
    {
        label: '_DateDayOfWeek',
        documentation: 'Returns the name of the weekday, based on the specified day'
    },
    {
        label: '_DateDaysInMonth',
        documentation: 'Returns the number of days in a month, based on the specified month and year'
    },
    {
        label: '_DateDiff',
        documentation: 'Returns the difference between 2 dates, expressed in the type requested'
    },
    {
        label: '_DateIsLeapYear',
        documentation: 'Checks a given year to see if it is a leap year'
    },
    {
        label: '_DateIsValid',
        documentation: 'Checks the given date to determine if it is a valid date'
    },
    {
        label: '_DateTimeFormat',
        documentation: 'Returns the date in the PC\'s regional settings format'
    },
    {
        label: '_DateTimeSplit',
        documentation: 'Split a string containing Date and Time into two separate Arrays'
    },
    {
        label: '_DateToDayOfWeek',
        documentation: 'Returns the weekday number for a given date'
    },
    {
        label: '_DateToDayOfWeekISO',
        documentation: 'Returns the ISO weekday number for a given date'
    },
    {
        label: '_DateToDayValue',
        documentation: 'Returns the day number since noon 4713 BC January 1 for a given Gregorian date'
    },
    {
        label: '_DateToMonth',
        documentation: 'Returns the name of the month, based on the specified month'
    },
    {
        label: '_DayValueToDate',
        documentation: 'Add the given days since noon 4713 BC January 1 and returns the Gregorian date'
    },
    {
        label: '_Now',
        documentation: 'Returns the current Date and Time in PC\'s format'
    },
    {
        label: '_NowCalc',
        documentation: 'Returns the current Date and Time in format YYYY/MM/DD HH:MM:SS for use in date calculations'
    },
    {
        label: '_NowCalcDate',
        documentation: 'Returns the current Date in format YYYY/MM/DD'
    },
    {
        label: '_NowDate',
        documentation: 'Returns the current Date in the Pc\'s format'
    },
    {
        label: '_NowTime',
        documentation: 'Returns the current Time in the requested format'
    },
    {
        label: '_SetDate',
        documentation: 'Sets the current date of the system'
    },
    {
        label: '_SetTime',
        documentation: 'Sets the current time of the system'
    },
    {
        label: '_TicksToTime',
        documentation: 'Converts the specified tick amount to hours, minutes and seconds'
    },
    {
        label: '_TimeToTicks',
        documentation: 'Converts the specified hours, minutes, and seconds to ticks'
    },
    {
        label: '_WeekNumberISO',
        documentation: 'Calculate the weeknumber of a given date'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'Date UDF - #include <Date.au3>'
}

module.exports = items