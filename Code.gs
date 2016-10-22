function onOpen() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var entries = [{name : "Remove Unsubscribers",functionName : "eraseEmails"}];
  sheet.addMenu("Scripts", entries);
}

function eraseEmails() {
  //Initiallize Variables

  //Spread Sheet Variables
  var unsubList = SpreadsheetApp.getActive().getSheetByName("Unsubscribe List");
  var mainList = SpreadsheetApp.getActive().getSheetByName("Email List");

  //Variables for Data Ranges
  var unSubValues = unsubList.getDataRange().getValues();
  var mainEmails = mainList.getDataRange().getValues();
  var unSubEmails;

  //Variable for the Cell
  var cell;

  //Initialize Specific Row Variables
  var rows = mainList.getDataRange();
  var rowTotal = rows.getNumRows();
  var rowValue = rows.getValue();
  var rowDelete = 0;

  //Sets the Unsubscribed Emails from List equal to ''
  for (k = 0; k <= rowTotal-1; k++)
  {
    for (u = 0; u < unSubValues.length; u++)
    {
      if (unSubValues[u][2] == mainEmails[k][0])
      {
        mainList.deleteRow((parseInt(k)+1) - rowDelete);
        rowDelete++;
      }

    }
  }

  //Deletes Data from Unsubscribe List Form
  unsubList.clear();
}
