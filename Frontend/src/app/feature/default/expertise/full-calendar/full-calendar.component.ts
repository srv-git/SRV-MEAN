import { CommonModule } from '@angular/common';
import { Component, NgZone, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FullCalendarModule } from '@fullcalendar/angular';
import {
  CalendarOptions,
  DateSelectArg,
  EventApi,
  EventClickArg,
} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-full-calendar',
  imports: [FullCalendarModule, CommonModule, MatButtonModule],
  templateUrl: './full-calendar.component.html',
  styleUrl: './full-calendar.component.scss',
})
export class FullCalendarComponent {
  currentEvents = signal<EventApi[]>([]);
  calendarDisplay = signal(true);
  calendarEvents = [
    { title: 'Meeting', start: new Date(), textColor: 'green' },
    {
      title: 'Meeting 1',
      start: new Date(),
      textColor: 'green',
      backgroundColor: 'yellow',
      borderColor: 'red',
    },
    {
      title: 'Meeting 2',
      start: new Date(),
      backgroundColor: 'yellow',
      borderColor: 'red',
      textColor: 'green',
    },
  ];
  calendarOptions = signal<CalendarOptions>({
    headerToolbar: {
      left: 'prev,next,today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay',
    },
    initialView: 'dayGridMonth',
    editable: true,
    selectable: true,
    plugins: [dayGridPlugin, interactionPlugin],
    events: this.calendarEvents,
    select: this.handleSelect.bind(this),
    eventClick: this.handleRemoveEvent.bind(this),
    eventsSet: this.handleEvents.bind(this),
    /* To update database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  });

  constructor(private readonly zone: NgZone) {}

  handleSelect(selectInfo: DateSelectArg): void {
    const title = prompt('Please enter the event title');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: String(Math.floor(Math.random() * 10000)),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  }

  handleRemoveEvent(clickInfo: EventClickArg): void {
    if (confirm('Are you sure? You want to remove this event.')) {
      clickInfo.event.remove();
    }
  }

  calendarToggle() {
    this.calendarDisplay.update((visible) => !visible);
  }

  handleEvents(events: EventApi[]) {
    this.zone.run(() => {
      this.currentEvents.set(events);
    });
  }
}
