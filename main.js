//setting perms

let canSearchForProfiles = true;
let canSaveProfile = true;
let canRefreshReports = true;
let canInputTag = true;
let canSearchReport = true;

//initializing current tab 

let currentTab = ".index-page-container";
let MyName = ""; // self explainatory

//perms
let canInputReportTag = true;
let canSearchForReport = true;

//declaring name and job from player
var LastName = "";
var FirstName = "";
var playerJob = "";

//place holder job

const DojJobs = {
    ['lawyer']: true,
    ['judge']: true
}

//months of the year

const MONTH_NAMES = [
    "january",
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
    "December",
];

//formatting the date

function getFormattedDate(date, prefomattedDate = false, hideYear = false) {
    const day = date.getDate();
    const month = MONTH_NAMES[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    let minutes = date.getMinutes();
}

//set the timeframe of the report that was done

function timeAgo(dateParam) {
    if (!dateParam) {
        return null;
    }

    const date = typeof dateParam === "object" ? dateParam : new Date(dateParam);
    const DAY_IN_MS = 86400000;
    const today = new Date();
    const yesterday = new Date(today - DAY_IN_MS);
    const seconds = Math.round((today - date) / 1000);
    const minutes = Math.round(seconds / 60);
    const isToday = today.toDateString() === date.toDateString();
    const isYesterday = yesterday.toDateString() === date.toDateString();
    const isThisYear = today.getFullYear() === date.getFullYear();

    if (seconds < 5) {
        return "Just Now";
        } else if (seconds < 60) {
            return '${seconds} Seconds ago';
        } else if (seconds < 90) {
            return "A minute ago";
        } else if (minutes < 60) {
            return '${minutes} Minutes ago';
        } else if (isToday) {
            return getFormattedDate(date, "Today");
        } else if (isYesterday) {
            return getFormattedDate(date, "Yesterday");
        } else if (isThisYear) {
            return getFormattedDate(date, false, true);
        }

    return getFormattedDate(date);
}

//close container

function closeContainer(selector) {
    if ( 
        $(selector).css("display") != "none"
    ) {
        shouldClose = false;
        $(selector).fadeOut(50);
        $(".close-all").css("filter", "none");
    }
}