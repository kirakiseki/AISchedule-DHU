async function scheduleTimer({
  providerRes,
  parserRes
} = {}) {

  let ts = String(+(new Date(new Date().toLocaleDateString()).getTime()));
  return {
    totalWeek: 18,
    startSemester: ts,
    startWithSunday: false,
    showWeekend: true,
    forenoon: 4,
    afternoon: 5,
    night: 4,
    sections: [{
      section: 1,
      startTime: '08:15',
      endTime: '09:00',
    }, {
      section: 2,
      startTime: '09:00',
      endTime: '09:45',
    }, {
      section: 3,
      startTime: '10:05',
      endTime: '10:50',
    }, {
      section: 4,
      startTime: '10:50',
      endTime: '11:35',
    }, {
      section: 5,
      startTime: '13:00',
      endTime: '13:45',
    }, {
      section: 6,
      startTime: '13:45',
      endTime: '14:30',
    }, {
      section: 7,
      startTime: '14:50',
      endTime: '15:35',
    }, {
      section: 8,
      startTime: '15:35',
      endTime: '16:20',
    }, {
      section: 9,
      startTime: '16:20',
      endTime: '17:05',
    }, {
      section: 10,
      startTime: '18:00',
      endTime: '18:45',
    }, {
      section: 11,
      startTime: '18:45',
      endTime: '19:30',
    }, {
      section: 12,
      startTime: '19:50',
      endTime: '20:35',
    }, {
      section: 13,
      startTime: '20:35',
      endTime: '21:20',
    }],
  }
}