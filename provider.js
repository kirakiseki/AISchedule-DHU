function scheduleHtmlProvider(iframeContent = "", frameContent = "", dom = document) {
  const trs = dom.getElementsByTagName("table")[0].getElementsByTagName("tr");
  let str = "";
  for (let i = 1; i < trs.length; i++) {
    const tr = trs[i];
    const tds = tr.getElementsByTagName("td");
    for (let j = 1; j < tds.length; j++) {
      const td = tds[j];
      if (td.innerHTML) {
        str += (td.innerHTML + '@' + j + '@' + i + '@' + td.attributes.rowspan?.value + '|');
      }
    }
  }
  return str;
}