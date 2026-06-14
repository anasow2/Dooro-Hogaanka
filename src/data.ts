import { Candidate, RegionStats } from './types';

export const CANDIDATES: Candidate[] = [
  {
    id: 'c1',
    fullName: 'Xasan Sheekh Maxamuud',
    party: 'UPD',
    slogan: 'Nabad iyo Nolol',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/His_Excellency_President_Hassan_Sheikh_Mohamud_%28cropped%29.jpg',
    agendas: ['Amniga Qaranka', 'Dhaqaalaha', 'Cadaaladda'],
  },
  {
    id: 'c2',
    fullName: 'Farmaajo Maxamed Cabdullaahi',
    party: 'Nabad iyo Nolol',
    slogan: 'Qaranimo iyo Midnimo',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/His_Excellency_President_Mohamed_Abdullahi_Mohamed_Farmaajo.jpg',
    agendas: ['Madax-bannaanida', 'Ciidanka', 'Adeegyada Bulshada'],
  },
  {
    id: 'c3',
    fullName: 'Siciid Cabdullaahi Deni',
    party: 'Mideeye',
    slogan: 'Horumar iyo Tanaad',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Said_Abdullahi_Deni_%2822-05-2021%29_%28cropped%29.jpg',
    agendas: ['Dimuqraadiyadda', 'Kobaca Ganacsiga', 'Waxbarashada'],
  },
  {
    id: 'c4',
    fullName: 'Sheekh Shariif Sheekh Axmed',
    party: 'Himilo Qaran',
    slogan: 'Isbadal Geesi ah',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Shariif_Sheekh_Axmed.jpg',
    agendas: ['Dowlad Wanaag', 'Cadaalad', 'Midnimo'],
  },
  {
    id: 'c5',
    fullName: 'Fawziya Yuusuf Xaaji',
    party: 'NDP',
    slogan: 'Isbedel Dhab ah',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Somali_Foreign_Minister_Fawzia_Yusuf_H._Adam_%28cropped%29.jpg',
    agendas: ['Xuquuqda Aadanaha', 'Deegaanka', 'Caafimaadka'],
  },
  {
    id: 'c6',
    fullName: 'Xasan Cali Kheyre',
    party: 'Xisbiga Horusocodka',
    slogan: 'Dano Qaran Horta',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Hassan_Ali_%28cropped%29.png',
    agendas: ['Isdhexgalka', 'Biyaha', 'Kaabayaasha Dhaqaalaha'],
  }
];

export const REGIONS = [
  'Banaadir',
  'Puntland',
  'Jubbaland',
  'Galmudug',
  'Koonfur Galbeed',
  'Hirshabelle',
  'Somaliland'
];

export const INITIAL_STATS: RegionStats[] = [
  { region: 'Banaadir', votes: 145020, percentage: 32 },
  { region: 'Puntland', votes: 89000, percentage: 19 },
  { region: 'Somaliland', votes: 75200, percentage: 16 },
  { region: 'Koonfur Galbeed', votes: 62400, percentage: 13 },
  { region: 'Jubbaland', votes: 45000, percentage: 10 },
  { region: 'Galmudug', votes: 28000, percentage: 6 },
  { region: 'Hirshabelle', votes: 18000, percentage: 4 },
];
