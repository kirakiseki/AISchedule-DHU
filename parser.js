function scheduleHtmlParser(html) {
  let lessons = html.split('|');
  let resArr = [];
  for (let lesson of lessons) {
    let week = lesson.split('@')[1];
    let start = parseInt(lesson.split('@')[2]);
    let last = parseInt(lesson.split('@')[3]);
    if (!last) {
      last = 1;
    }
    let aLessons = lesson.split('@')[0].split("<br>");
    for (let aLesson of aLessons) {
      let lessonObj = {};
      let infos = aLesson.split(' ');
      if (!infos[0]) {
        continue;
      }
      lessonObj.name = infos[0];
      lessonObj.position = infos[3];
      lessonObj.teacher = infos[2];
      lessonObj.day = week;
      let sections = [];
      for (let i = start; i <= start + last - 1; i++) {
        sections.push(i);
      }
      sections.sort();
      lessonObj.sections = sections;
      let weeks = [];
      let weekArr = infos[1].slice(0, -1).split(',');
      weekArr.forEach(item => {
        if (item.includes('-') && !(item.includes('单') || item.includes('双'))) {
          let start = parseInt(item.split('-')[0]);
          let end = parseInt(item.split('-')[1]);
          for (let i = start; i <= end; i++) {
            weeks.push(i);
          }
        }
        else if (item.includes('单') || item.includes('双')) {
          let start = parseInt(item.split('-')[0]);
          let end = parseInt(item.split('-')[1]);
          for (let i = start; i <= end; i += 2) {
            weeks.push(i);
          }
        }
        else {
          weeks.push(parseInt(item));
        }
      });
      lessonObj.weeks = weeks;
      resArr.push(lessonObj);
    }
  }
  return resArr;
}