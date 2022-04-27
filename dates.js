  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      height: '100%',
      expandRows: true,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,listWeek'
      },
      initialView: 'dayGridMonth',
      navLinks: true,
      editable: false,
      selectable: true,
      nowIndicator: true,
      dayMaxEvents: true,
      events: [
        // 
        // January
        // 
        {
          title: 'All Day Event',
          daysOfWeek: ['4'],
          start: '2020-09-01',
        },
        // 
        // February
        // 
        {
          title: 'Long Event',
          start: '2020-09-07',
          end: '2020-09-10'
        },
        // 
        // March
        // 
        {
          title: 'BCH237',
          start: '2022-05-12T10:30:00',
          end: '2022-05-12T11:30:00',
          extendedProps: {
            department: 'BioChemistry'
          },
          description: 'Lecture'
        },
        // 
        // April
        // 
        {
          groupId: 999,
          title: 'Repeating Event',
          start: '2022-04-09T16:00:00'
        },
        // 
        // May
        // 
        {
          groupId: 999,
          title: 'Repeating Event',
          start: '2022-04-16T16:00:00'
        },
        // 
        // June
        // 
        {
          title: 'Conference',
          start: '2020-09-11',
          end: '2020-09-13'
        },
        // 
        // July
        // 
        {
          title: 'Meeting',
          start: '2020-09-12T10:30:00',
          end: '2020-09-12T12:30:00'
        },
        // 
        // August
        // 
        {
          title: 'Lunch',
          start: '2020-09-12T12:00:00'
        },
        // 
        // September
        // 
        {
          title: 'Meeting',
          start: '2020-09-12T14:30:00'
        },
        // 
        // October
        // 
        {
          title: 'Happy Hour',
          start: '2020-09-12T17:30:00'
        },
        // 
        // November
        // 
        {
          title: 'Dinner',
          start: '2020-09-12T20:00:00'
        },
        // 
        // December
        // 
        {
          title: 'Birthday Party',
          start: '2020-09-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2022-04-04'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2022-04-04'
        }
      ]
    });

    calendar.render();
  });