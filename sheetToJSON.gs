function doGet(req) {

  let sheetName = req.parameter.sheetName || null;

  if(sheetName == null){
    return ContentService.createTextOutput(JSON.stringify({error: "Must append sheetName parameter to url",data: sheetnames()})).setMimeType(ContentService.MimeType.JSON);
  }

  let doc = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = doc.getSheetByName(sheetName);
  let cells = sheet.getDataRange().getValues();

  let headers = cells[0];

  let values = cells.slice(1, cells.length);

  let formatted = [];
  let data = values;
  let cols = headers;
  let l = cols.length;

	for (var i=0; i<data.length; i++) {
			var d = data[i],
					o = {};
			for (var j=0; j<l; j++)
					o[cols[j]] = d[j];
			formatted.push(o);
	}

  if(formatted.length === 1){
    formatted = formatted[0];
  }
  
  return ContentService.createTextOutput(JSON.stringify({data: formatted})).setMimeType(ContentService.MimeType.JSON);
}

function sheetnames() { 
  let out = [];
  let sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  for (var i=0 ; i<sheets.length ; i++) out.push( [ sheets[i].getName() ] )
  return out  
}