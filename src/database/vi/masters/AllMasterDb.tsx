import ViMasterDb from "./ViMasterDb.tsx";
import InMasterDb from "./InMasterDb.tsx";
import JpMasterDb from "./JpMasterDb.tsx";
import KoMasterDb from "./KoMasterDb.tsx";

import CnLv0MasterDb from "./CnLv0MasterDb.tsx";
import CnLv1MasterDb from "./CnLv1MasterDb.tsx";
import CnLv2MasterDb from "./CnLv2MasterDb.tsx";
import CnLv3MasterDb from "./CnLv3MasterDb.tsx";
import CnLv4MasterDb from "./CnLv4MasterDb.tsx";
import CnLv5MasterDb from "./CnLv5MasterDb.tsx";
import CnLv6MasterDb from "./CnLv6MasterDb.tsx";
import CnLv7MasterDb from "./CnLv7MasterDb.tsx";
import CnLv8MasterDb from "./CnLv8MasterDb.tsx";
import CnLv9MasterDb from "./CnLv9MasterDb.tsx";
import CnLv10MasterDb from "./CnLv10MasterDb.tsx";
import CnLv11MasterDb from "./CnLv11MasterDb.tsx";
import CnLv12MasterDb from "./CnLv12MasterDb.tsx";
import CnLv13MasterDb from "./CnLv13MasterDb.tsx";
import CnLv14MasterDb from "./CnLv14MasterDb.tsx";
import CnLv15MasterDb from "./CnLv15MasterDb.tsx";
import CnLv16MasterDb from "./CnLv16MasterDb.tsx";
import CnLv17MasterDb from "./CnLv17MasterDb.tsx";
import CnLv18MasterDb from "./CnLv18MasterDb.tsx";
import CnLv19MasterDb from "./CnLv19MasterDb.tsx";
import CnLv20MasterDb from "./CnLv20MasterDb.tsx";
import CnLv21MasterDb from "./CnLv21MasterDb.tsx";
import CnLv22MasterDb from "./CnLv22MasterDb.tsx";
import CnLv23MasterDb from "./CnLv23MasterDb.tsx";
import CnLv24MasterDb from "./CnLv24MasterDb.tsx";
import CnLv25MasterDb from "./CnLv25MasterDb.tsx";
import CnLv26MasterDb from "./CnLv26MasterDb.tsx";
import CnLv27MasterDb from "./CnLv27MasterDb.tsx";
import CnLv28MasterDb from "./CnLv28MasterDb.tsx";
import CnLv29MasterDb from "./CnLv29MasterDb.tsx";
import CnLv30MasterDb from "./CnLv30MasterDb.tsx";
import CnLv31MasterDb from "./CnLv31MasterDb.tsx";
import CnLv32MasterDb from "./CnLv32MasterDb.tsx";
import CnLv33MasterDb from "./CnLv33MasterDb.tsx";
import CnLv34MasterDb from "./CnLv34MasterDb.tsx";
import CnLv35MasterDb from "./CnLv35MasterDb.tsx";
import CnLv36MasterDb from "./CnLv36MasterDb.tsx";
import CnLv37MasterDb from "./CnLv37MasterDb.tsx";
import CnLv38MasterDb from "./CnLv38MasterDb.tsx";

import CnLv55MasterDb from "./CnLv55MasterDb.tsx";
import CnLv56MasterDb from "./CnLv56MasterDb.tsx";
import CnLv57MasterDb from "./CnLv57MasterDb.tsx";
import CnLv58MasterDb from "./CnLv58MasterDb.tsx";
import CnLv59MasterDb from "./CnLv58MasterDb.tsx";
import CnLv60MasterDb from "./CnLv60MasterDb.tsx";

export const InMasters = InMasterDb
export const ViMasters = ViMasterDb
export const JpMasters = JpMasterDb
export const KoMasters = KoMasterDb
export const CnMasters = [
  CnLv0MasterDb,
  CnLv1MasterDb,
  CnLv2MasterDb,
  CnLv3MasterDb,
  CnLv4MasterDb,
  CnLv5MasterDb,
  CnLv6MasterDb,
  CnLv7MasterDb,
  CnLv8MasterDb,
  CnLv9MasterDb,
  CnLv10MasterDb,
  CnLv11MasterDb,
  CnLv12MasterDb,
  CnLv13MasterDb,
  CnLv14MasterDb,
  CnLv15MasterDb,
  CnLv16MasterDb,
  CnLv17MasterDb,
  CnLv18MasterDb,
  CnLv19MasterDb,
  CnLv20MasterDb,
  CnLv21MasterDb,
  CnLv22MasterDb,
  CnLv23MasterDb,
  CnLv24MasterDb,
  CnLv25MasterDb,
  CnLv26MasterDb,
  CnLv27MasterDb,
  CnLv28MasterDb,
  CnLv29MasterDb,
  CnLv30MasterDb,
  CnLv31MasterDb,
  CnLv32MasterDb,
  CnLv33MasterDb,
  CnLv34MasterDb,
  CnLv35MasterDb,
  CnLv36MasterDb,
  CnLv37MasterDb,
  CnLv38MasterDb,

  CnLv55MasterDb,
  CnLv56MasterDb,
  CnLv57MasterDb,
  CnLv58MasterDb,
  CnLv59MasterDb,
  CnLv60MasterDb,
]
export const AllMasters = [
  ...InMasters,
  ...CnMasters.flat(),
  ...JpMasters,
  ...ViMasters,
  ...KoMasters,
]
/*export const CnGuiyangMasters = AllMasters?.filter(master => master.sect?.includes('Guiyang'));
export const CnLinjiMasters = AllMasters?.filter(master => master.sect?.includes('Linji'));
export const CnCaodongMasters = AllMasters?.filter(master => master.sect?.includes('Caodong'));
export const CnFayanMasters = AllMasters?.filter(master => master.sect?.includes('Fayan'));
export const CnYunmenMasters = AllMasters?.filter(master => master.sect?.includes('Yunmen'));
export const CnYangqiMasters = AllMasters?.filter(master => master.sect?.includes('Yangqi'));
export const CnHuanglongMasters = AllMasters?.filter(master => master.sect?.includes('Huanglong'));
export const AllSectMasters = [
  ...CnGuiyangMasters,
  ...CnLinjiMasters,
  ...CnCaodongMasters,
  ...CnFayanMasters,
  ...CnYunmenMasters,
  ...CnYangqiMasters,
  ...CnHuanglongMasters,
];*/
