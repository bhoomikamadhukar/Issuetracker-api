/* global db print */
/* eslint no-restricted-globals: "off" */

db.issues.remove({});
db.deleted_issues.remove({});

const issuesDB = [
  {
    id: 1,
    status: 'New',
    owner: 'Eshan',
    effort: 5,
    created: new Date('2021-2-3'),
    due: new Date('2021-4-20'),
    title: 'Error in adding new issues to the list.',
    description: 'Steps to recreate the problem:'
      + '\n1. Refresh the browser.'
      + '\n2. Select "New" in the filter'
      + '\n3. Refresh the browser again. Note the warning in the console:'
      + '\n   Warning: Hash history cannot PUSH the same path; a new entry'
      + '\n   will not be added to the history stack'
      + '\n4. Click on Add.'
      + '\n5. There is an error in console, and add doesn\'t work.',
  },
  {
    id: 2,
    status: 'Closed',
    owner: 'Tony',
    effort: 9,
    created: new Date('2021-4-5'),
    due: new Date('2021-4-20'),
    title: 'Missing the border on the bottom panel',
    description: 'There needs to be a border in the bottom in the panel'
    + ' that appears when clicking on Add',
  },
  {
    id: 3,
    status: 'Assigned',
    owner: 'Prerana',
    effort: 20,
    created: new Date('2021-4-13'),
    due: undefined,
    title: 'New version is not compatible with older features',
    description: 'Steps to recreate the problem:'
      + '\n1. Refresh the browser.'
      + '\n2. Select "New" in the filter'
      + '\n3. Refresh the browser again. Note the warning in the console:'
      + '\n   Warning: Hash history cannot PUSH the same path; a new entry'
      + '\n   will not be added to the history stack'
      + '\n4. Click on Add.'
      + '\n5. There is an error in console, and add doesn\'t work.',
  },
  
];

db.issues.insertMany(issuesDB);
const count = db.issues.count();
print('Inserted', count, 'issues');
db.issues.createIndex({ id: 1 }, { unique: true });
db.issues.createIndex({ status: 1 });
db.issues.createIndex({ owner: 1 });
db.issues.createIndex({ created: 1 });
db.issues.createIndex({ title: 'text', description: 'text' });
db.deleted_issues.createIndex({ id: 1 }, { unique: true });


db.counters.remove({ _id: 'issues' });

db.counters.insert({ _id: 'issues', current: count });
