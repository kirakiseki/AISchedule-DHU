async function scheduleHtmlProvider(dom = document) {
  let str = '';

  // Placeholder <td></td> for empty cells
  const placeholder = document.createElement('td');

  // Convert table into array
  let table = [...dom.getElementsByTagName("table")[0].getElementsByTagName("tr")].map(tr => [...tr.getElementsByTagName("td")]);

  function insertPlaceholder(row, col, span) {
    for (let i = 1; i < span; i++) {
      table[row + i].splice(col, 0, placeholder);
    }
  }

  for (let num = 1; num < table.length; num++) {
    for (let day = 1; day < table[0].length; day++) {
      const elem = table[num][day];
      // Insert placeholder if cell has rowspan
      if (elem.attributes.rowspan?.value > 1) {
        insertPlaceholder(num, day, elem.attributes.rowspan.value);
      }
      // If cell has content (is not a placeholder), add it to result
      if (elem.innerHTML) {
        str += (elem.innerHTML + '@' + day + '@' + num + '@' + elem.attributes.rowspan?.value + '|');
      }
    }
  }
  
  return str;
}
