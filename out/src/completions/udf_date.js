'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_Date_Time_CompareFileTime',
        documentation: 'Compares two file times',
        insertText: '_Date_Time_CompareFileTime(${})'
    },
    {
        label: '_Date_Time_DOSDateTimeToArray',
        documentation: 'Decode a DOS date/time to an array',
        insertText: '_Date_Time_DOSDateTimeToArray(${})'
    },
    {
        label: '_Date_Time_DOSDateTimeToFileTime',
        documentation: 'Converts MS-DOS date and time values to a file time',
        insertText: '_Date_Time_DOSDateTimeToFileTime(${})'
    },
    {
        label: '_Date_Time_DOSDateTimeToStr',
        documentation: 'Decode a DOS date to a string',
        insertText: '_Date_Time_DOSDateTimeToStr(${})'},
    {
        label: '_Date_Time_DOSDateToArray',
        documentation: 'Decode a DOS date to an array',
        insertText: '_Date_Time_DOSDateToArray(${})'
    },
    {
        label: '_Date_Time_DOSDateToStr',
        documentation: 'Decode a DOS date to a string',
        insertText: '_Date_Time_DOSDateToStr(${})'
    },
    {
        label: '_Date_Time_DOSTimeToArray',
        documentation: 'Decode a DOS time to an array',
        insertText: '_Date_Time_DOSTimeToArray(${})'
    },
    {
        label: '_Date_Time_DOSTimeToStr',
        documentation: 'Decode a DOS time to a string',
        insertText: '_Date_Time_DOSTimeToStr(${})'
    },
    {
        label: '_Date_Time_EncodeFileTime',
        documentation: 'Encodes and returns a $tagFILETIME structure',
        insertText: '_Date_Time_EncodeFileTime(${})'
    },
    {
        label: '_Date_Time_EncodeSystemTime',
        documentation: 'Encodes and returns a $tagSYSTEMTIME structure',
        insertText: '_Date_Time_EncodeSystemTime(${})'
    },
    {
        label: '_Date_Time_FileTimeToArray',
        documentation: 'Decode a file time to an array',
        insertText: '_Date_Time_FileTimeToArray(${})'
    },
    {
        label: '_Date_Time_FileTimeToDOSDateTime',
        documentation: 'Converts MS-DOS date and time values to a file time',
        insertText: '_Date_Time_FileTimeToDOSDateTime(${})'
    },
    {
        label: '_Date_Time_FileTimeToLocalFileTime',
        documentation: 'Converts a file time based on the Coordinated Universal Time to a local file time',
        insertText: '_Date_Time_FileTimeToLocalFileTime(${})'
    },
    {
        label: '_Date_Time_FileTimeToStr',
        documentation: 'Decode a file time to a date/time string',
        insertText: '_Date_Time_FileTimeToStr(${})'
    },
    {
        label: '_Date_Time_FileTimeToSystemTime',
        documentation: 'Converts a file time to system time format',
        insertText: '_Date_Time_FileTimeToSystemTime(${})'
    },
    {
        label: '_Date_Time_GetFileTime',
        documentation: 'Retrieves the date and time that a file was created, accessed and modified',
        insertText: '_Date_Time_GetFileTime(${})'
    },
    {
        label: '_Date_Time_GetLocalTime',
        documentation: 'Retrieves the current local date and time',
        insertText: '_Date_Time_GetLocalTime(${})'
    },
    {
        label: '_Date_Time_GetSystemTime',
        documentation: 'Retrieves the current system date and time expressed in UTC',
        insertText: '_Date_Time_GetSystemTime(${})'
    },
    {
        label: '_Date_Time_GetSystemTimeAdjustment',
        documentation: 'Determines whether the system is applying periodic time adjustments',
        insertText: '_Date_Time_GetSystemTimeAdjustment(${})'
    },
    {
        label: '_Date_Time_GetSystemTimeAsFileTime',
        documentation: 'Retrieves the current system date and time expressed in UTC',
        insertText: '_Date_Time_GetSystemTimeAsFileTime(${})'
    },
    {
        label: '_Date_Time_GetSystemTimes',
        documentation: 'Retrieves system timing information',
        insertText: '_Date_Time_GetSystemTimes(${})'
    },
    {
        label: '_Date_Time_GetTickCount',
        documentation: 'Retrieves the number of milliseconds that have elapsed since Windows was started',
        insertText: '_Date_Time_GetTickCount(${})'
    },
    {
        label: '_Date_Time_GetTimeZoneInformation',
        documentation: 'Retrieves the current time zone settings',
        insertText: '_Date_Time_GetTimeZoneInformation(${})'
    },
    {
        label: '_Date_Time_LocalFileTimeToFileTime',
        documentation: 'Converts a local file time to a file time based on UTC',
        insertText: '_Date_Time_LocalFileTimeToFileTime(${})'
    },
    {
        label: '_Date_Time_SetFileTime',
        documentation: 'Sets the date and time that a file was created, accessed and modified',
        insertText: '_Date_Time_SetFileTime(${})'
    },
    {
        label: '_Date_Time_SetLocalTime',
        documentation: 'Sets the current local date and time',
        insertText: '_Date_Time_SetLocalTime(${})'
    },
    {
        label: '_Date_Time_SetSystemTime',
        documentation: 'Sets the current system time and date, expressed in UTC',
        insertText: '_Date_Time_SetSystemTime(${})'
    },
    {
        label: '_Date_Time_SetSystemTimeAdjustment',
        documentation: 'Enables or disables periodic time adjustments to the system\'s time of day clock',
        insertText: '_Date_Time_SetSystemTimeAdjustment(${})'
    },
    {
        label: '_Date_Time_SetTimeZoneInformation',
        documentation: 'Sets the current time zone settings',
        insertText: '_Date_Time_SetTimeZoneInformation(${})'
    },
    {
        label: '_Date_Time_SystemTimeToArray',
        documentation: 'Decode a system time to an array',
        insertText: '_Date_Time_SystemTimeToArray(${})'
    },
    {
        label: '_Date_Time_SystemTimeToDateStr',
        documentation: 'Decode a system time to a date string',
        insertText: '_Date_Time_SystemTimeToDateStr(${})'
    },
    {
        label: '_Date_Time_SystemTimeToDateTimeStr',
        documentation: 'Decode a system time to a date/time string',
        insertText: '_Date_Time_SystemTimeToDateTimeStr(${})'
    },
    {
        label: '_Date_Time_SystemTimeToFileTime',
        documentation: 'Converts a system time to file time format',
        insertText: '_Date_Time_SystemTimeToFileTime(${})'
    },
    {
        label: '_Date_Time_SystemTimeToTimeStr',
        documentation: 'Decode a system time to a time string',
        insertText: '_Date_Time_SystemTimeToTimeStr(${})'
    },
    {
        label: '_Date_Time_SystemTimeToTzSpecificLocalTime',
        documentation: 'Converts a UTC time to a specified time zone\'s corresponding local time',
        insertText: '_Date_Time_SystemTimeToTzSpecificLocalTime(${})'
    },
    {
        label: '_Date_Time_TzSpecificLocalTimeToSystemTime',
        documentation: 'Converts a local time to a time in UTC',
        insertText: '_Date_Time_TzSpecificLocalTimeToSystemTime(${})'
    },
    {
        label: '_DateAdd',
        documentation: 'Calculates a new date/time by adding/subtracting a specified number of time intervals from an initial date/time',
        insertText: '_DateAdd(${})'
    },
    {
        label: '_DateDayOfWeek',
        documentation: 'Returns the name of the weekday, based on the specified day',
        insertText: '_DateDayOfWeek(${})'
    },
    {
        label: '_DateDaysInMonth',
        documentation: 'Returns the number of days in a month, based on the specified month and year',
        insertText: '_DateDaysInMonth(${})'
    },
    {
        label: '_DateDiff',
        documentation: 'Returns the difference between 2 dates, expressed in the type requested',
        insertText: '_DateDiff(${})'
    },
    {
        label: '_DateIsLeapYear',
        documentation: 'Checks a given year to see if it is a leap year',
        insertText: '_DateIsLeapYear(${})'
    },
    {
        label: '_DateIsValid',
        documentation: 'Checks the given date to determine if it is a valid date',
        insertText: '_DateIsValid(${})'
    },
    {
        label: '_DateTimeFormat',
        documentation: 'Returns the date in the PC\'s regional settings format',
        insertText: '_DateTimeFormat(${})'
    },
    {
        label: '_DateTimeSplit',
        documentation: 'Split a string containing Date and Time into two separate Arrays',
        insertText: '_DateTimeSplit(${})'
    },
    {
        label: '_DateToDayOfWeek',
        documentation: 'Returns the weekday number for a given date',
        insertText: '_DateToDayOfWeek(${})'
    },
    {
        label: '_DateToDayOfWeekISO',
        documentation: 'Returns the ISO weekday number for a given date',
        insertText: '_DateToDayOfWeekISO(${})'
    },
    {
        label: '_DateToDayValue',
        documentation: 'Returns the day number since noon 4713 BC January 1 for a given Gregorian date',
        insertText: '_DateToDayValue(${})'
    },
    {
        label: '_DateToMonth',
        documentation: 'Returns the name of the month, based on the specified month',
        insertText: '_DateToMonth(${})'
    },
    {
        label: '_DayValueToDate',
        documentation: 'Add the given days since noon 4713 BC January 1 and returns the Gregorian date',
        insertText: '_DayValueToDate(${})'
    },
    {
        label: '_Now',
        documentation: 'Returns the current Date and Time in PC\'s format',
        insertText: '_Now(${})'
    },
    {
        label: '_NowCalc',
        documentation: 'Returns the current Date and Time in format YYYY/MM/DD HH:MM:SS for use in date calculations',
        insertText: '_NowCalc(${})'
    },
    {
        label: '_NowCalcDate',
        documentation: 'Returns the current Date in format YYYY/MM/DD',
        insertText: '_NowCalcDate(${})'
    },
    {
        label: '_NowDate',
        documentation: 'Returns the current Date in the Pc\'s format',
        insertText: '_NowDate(${})'
    },
    {
        label: '_NowTime',
        documentation: 'Returns the current Time in the requested format',
        insertText: '_NowTime(${})'
    },
    {
        label: '_SetDate',
        documentation: 'Sets the current date of the system',
        insertText: '_SetDate(${})'
    },
    {
        label: '_SetTime',
        documentation: 'Sets the current time of the system',
        insertText: '_SetTime(${})'
    },
    {
        label: '_TicksToTime',
        documentation: 'Converts the specified tick amount to hours, minutes and seconds',
        insertText: '_TicksToTime(${})'
    },
    {
        label: '_TimeToTicks',
        documentation: 'Converts the specified hours, minutes, and seconds to ticks',
        insertText: '_TimeToTicks(${})'
    },
    {
        label: '_WeekNumberISO',
        documentation: 'Calculate the weeknumber of a given date',
        insertText: '_WeekNumberISO(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'Date UDF - #include <Date.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items