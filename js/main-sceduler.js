function roll(min, max, floatFlag) {
    let r = Math.random() * (max - min) + min
    return floatFlag ? r : Math.floor(r)
}

let weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
let firstDay = new Date("3/1/2020")

console.log(weekdays);
console.log(firstDay);

// Next day function
// get the date first, then added one to it
function getNextDay(day) {
    let nextDay = new Date(day)
    nextDay.setDate(day.getDate() + 1)
    return nextDay
}
// Generate a list of random tasks,
// names can simply be "Task 54"/"Task 23"/etc
// Must have index and Boolean to check for completion

function generateTasks() {
    return [...Array(roll(2, 5))].map((_, i) => {
        return {
            index: i,
            name: `Task ${roll(1, 60)}`,
            complete: roll(0, 2) ? true : false
        }
    })
}


// Returns an array of days representing the week
// Generate Tasks for each day


function buildWeek(day) {
    return [...Array(7)].map((_, i) => {
        let weekday = {
            index: i,
            date: day,
            tasks: generateTasks()
        }
        day = getNextDay(day)
        return weekday
    })
}

let week = buildWeek(firstDay);

let schedule = document.getElementById("WeeklySchedule")
let scheduleHtml = week.reduce((accum, day) => {
    return accum + `<div class="day">
        <div>${weekdays[day.date.getDay()]}</div>
        <div class="tasks">
            ${tasksToHtml(day.tasks)}
        </div>
    </div>`
}, '')


function tasksToHtml(tasks) {
    return tasks.reduce((accumulator, task) => {
        return accumulator + `
            <div class="circle-container ${task.complete ? 'checked' : ''}">
                <div class="circle"></div>
                <label>${task.name}</label>
            </div>
        `
    },'')
}

schedule.innerHTML = scheduleHtml