const DBAccessor = require('../mysql/db_accessor.js');
const db = new DBAccessor();

const data = {
  st_name: 'JUN TAKADA3',
  grade: 4,
  class: 3,
  gender: 'Man',
  subjects: 'Science',
  score: 84
};

(async () => {
  console.log('Insert Start...');
  await db.connect('class');
  rows = await db.insert(data);
  console.log('Insert End');

  console.log('Search ALL Start...');
  rows = await db.searchALL();
  console.log(rows);
  console.log('Search ALL End');

  await db.disconnect();
})().catch(err => console.log(err));
