import { AllMasters } from '@database/vi/masters/AllMasterDb.tsx';

const masterDbJson = AllMasters
    .filter(master => master.name_en !== '')
    .map(master => ({
      id: master.id,
      name_en: master.name_en,
      name_vi: master.name_vi,
      teacher: master.teachers[0],
      sect: master.sect.join(', '),
    }));

const masterDb = masterDbJson;

export default masterDb;
