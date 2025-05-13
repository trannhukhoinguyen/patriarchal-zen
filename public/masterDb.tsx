import { AllMasters } from '@database/vi/masters/AllMasterDb.tsx';

const masterDbJson = AllMasters
    .filter(master => master.name_en !== '')
    .map(master => ({
      name_en: master.name_en,
      teacher: master.teachers[0],
      sect: master.sect.join(', '),
    }));
console.log('masterDbJson', masterDbJson);

const masterDb = masterDbJson;

export default masterDb;
