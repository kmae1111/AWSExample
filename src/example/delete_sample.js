const DBAccessor = require('../mysql/db_accessor.js');
const db = new DBAccessor();

var targetID = 5;

(async () => {
  console.log('Delete id=' + targetID + ' Start...');
  await db.connect('class');
  rows = await db.deleteByID(targetID);
  console.log('Delete End');

  console.log('Search ALL Start...');
  rows = await db.searchALL();
  console.log(rows);
  console.log('Search ALL End');

  await db.disconnect();
})().catch(err => console.log(err));
