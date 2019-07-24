const DBAccessor = require('../mysql/db_accessor.js');
const db = new DBAccessor();
var targetID = 3;
var targetKey = 'score';
var newScore = 100;

(async () => {
  console.log(
    'Update(id=' +
      targetID +
      ',key=' +
      targetKey +
      ',param=' +
      newScore +
      ') Start...'
  );
  await db.connect('class');
  rows = await db.updateByID(targetID, targetKey, newScore);
  console.log('Update End');

  console.log('Search ALL Start...');
  rows = await db.searchALL();
  console.log(rows);
  console.log('Search ALL End');

  await db.disconnect();
})().catch(err => console.log(err));
