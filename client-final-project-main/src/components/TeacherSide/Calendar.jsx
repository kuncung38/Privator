import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid' 
import { formatDate } from '@fullcalendar/core'
import dayjs from "dayjs"

// const format = (date) => { 
//     return formatDate(date, {
//         month: 'long',
//         year: 'numeric',
//         day: 'numeric',
//         timeZoneName: 'short',
//         timeZone: 'UTC',
//         locale: 'ID'
// })
// }



const events=[
    { title: 'event 4', date: dayjs("2023-02-07 15:00:00").format("YYYY-MM-DD HH:mm:ss")},
    { title: 'event 4', date: dayjs("2023-02-01T09:02:46.850Z").format("YYYY-MM-DD HH:mm:ss")},
  ]


const renderEventContent = (eventInfo) => {
    console.log(eventInfo, "ini HHAHHAHAH");
    return (
        <div className="gap-x-2 bg-[#33d450] p-2 w-full text-black">
            <p>{eventInfo.textDate}</p>
            <p className="whitespace-normal">{eventInfo.event.title}</p>
        </div>
    )
}

const Calendar = () => {
    return (
        <>
            <FullCalendar
            handleWindowResize={true}
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            weekends={false}
            events={events}
            headerToolbar={{
                start: "today,prev,next",
                center: "title",
                end: "dayGridWeek,dayGridDay,dayGridMonth"
            }}
            eventContent={renderEventContent}
            />
        </>
    )
}


export default Calendar