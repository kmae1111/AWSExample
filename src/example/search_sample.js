const DBAccessor = require('../mysql/db_accessor.js');
const db = new DBAccessor();

const targetID = 3;

(async () => {
  console.log('Search ALL Start...');
  await db.connect('class');
  rows = await db.searchALL();
  console.log(rows);
  console.log('Search ALL End');

  console.log('Search by ID = ' + targetID + ' Start...');
  rows = await db.searchByID(targetID);
  console.log(rows);
  console.log('Search by ID = ' + targetID + ' End');

  await db.disconnect();
})().catch(err => console.log(err));
