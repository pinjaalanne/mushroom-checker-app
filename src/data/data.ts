import blackTrumpet from '../assets/images/blackTrumpet.jpg';
import chanterelle from '../assets/images/chanterelle.jpeg';
import falseMorel from '../assets/images/false_moral_pic568037.jpg';
import flyAgaric from '../assets/images/Fly_Agaric.png';
import hedgehogMushroom from '../assets/images/hedgehog.jpeg';
import porcini from '../assets/images/porcini.jpg';
import yellowfoot from '../assets/images/yellowfoot.jpg';
import destroyingAngel from '../assets/images/Destroying_Angel.png';
import funerallBell from '../assets/images/Funeral_Bell.png';
import sheepPolypore from '../assets/images/Sheep_Polypore_pic.png';

export interface Mushroom {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  occurrence: string;
  'picking months': string;
  'primary habitat': string;
  edible: boolean;
  recipes: string;
  image: string;
}

const data: Mushroom[] = [
  {
    id: '1',
    name: 'Chanterelle',
    scientificName: 'Cantharellus cibarius',
    description:
      'Chanterelles are orange, yellow or white, meaty and funnel-shaped.',
    occurrence: 'Common in South of Finland, rare in North of Finland.',
    'picking months': 'July - October',
    'primary habitat': 'Mesic and herb-rich heath forests',
    edible: true,
    recipes:
      'https://www.foodandwine.com/vegetables/mushrooms/chanterelle-recipes',
    image: chanterelle,
  },
  {
    id: '2',
    name: 'Porcini',
    scientificName: 'Boletus edulis',
    description:
      'Porcini mushrooms are large, brown-capped mushrooms with a white stem.',
    occurrence: 'Common in all of Finland where the pine grows.',
    'picking months': 'July - September',
    'primary habitat': 'Heath forests',
    edible: true,
    recipes: 'https://www.bonappetit.com/ingredient/porcini-mushroom',
    image: porcini,
  },
  {
    id: '3',
    name: 'Yellowfoot',
    scientificName: 'Craterellus tubaeformis',
    description:
      'Yellowfoot mushrooms are small, yellow mushrooms with a brown cap.',
    occurrence:
      'Common in South and Middle of Finland, rare in North of Finland.',
    'picking months': 'August-November',
    'primary habitat': 'Heath forests',
    edible: true,
    recipes: 'https://wineforest.com/pages/yellow-foot-chanterelle-soup-1',
    image: yellowfoot,
  },
  {
    id: '4',
    name: 'Black Trumpet',
    scientificName: 'Craterellus cornucopioides',
    description: 'Black Trumpets are small, black, trumpet-shaped mushrooms.',
    occurrence: 'Common in South of Finland.',
    'picking months': 'August-October',
    'primary habitat': 'Mesic and herb-rich heath forests',
    edible: true,
    recipes: 'https://www.yummly.com/recipes/black-trumpet-mushrooms',
    image: blackTrumpet,
  },
  {
    id: '5',
    name: 'Hedgehog Mushroom',
    scientificName: 'Hydnum repandum',
    description:
      'Hedgehog mushrooms are small, brown or orange mushrooms with a toothed underside.',
    occurrence: 'Common in South of Finland.',
    'picking months': 'July - October',
    'primary habitat': 'Mesic and herb-rich heath forests',
    edible: true,
    recipes:
      'https://foragerchef.com/category/wild-mushroom-recipes-2/hedgehog-mushrooms/',
    image: hedgehogMushroom,
  },
  {
    id: '6',
    name: 'False Morel',
    scientificName: 'Gyromitra esculenta',
    description: 'False morels are large, wrinkled, brain-like mushrooms.',
    occurrence: 'Common in South of Finland, rare in North of Finland.',
    'picking months': 'May - June',
    'primary habitat': 'Heath forests',
    edible: true,
    recipes: 'https://www.thespruceeats.com/morel-mushroom-recipes-2217133',
    image: falseMorel,
  },
  {
    id: '7',
    name: 'Fly Agaric',
    scientificName: 'Amanita muscaria',
    description: 'Fly agaric is a large, red-capped mushroom with white spots.',
    occurrence: 'Common in all of Finland.',
    'picking months': 'August - October',
    'primary habitat': 'Heath forests',
    edible: false,
    recipes: '',
    image: flyAgaric,
  },
  {
    id: '8',
    name: 'Destroying Angel',
    scientificName: 'Amanita virosa',
    description:
      'Destroying angel is a large, white mushroom with a smooth cap.',
    occurrence: 'Common in all of Finland.',
    'picking months': 'August - October',
    'primary habitat': 'Heath forests',
    edible: false,
    recipes: '',
    image: destroyingAngel,
  },
  {
    id: '9',
    name: 'Funerall Bell',
    scientificName: 'Galerina marginata',
    description:
      'Funerall bell is a small, white mushroom with a bell-shaped cap.',
    occurrence: 'Common in all of Finland.',
    'picking months': 'August - October',
    'primary habitat': 'Heath forests',
    edible: false,
    recipes: '',
    image: funerallBell,
  },
  {
    id: '10',
    name: 'Sheep Polypore',
    scientificName: 'Albatrellus ovinus',
    description:
      'Sheep polypore is a large, brown mushroom with a hoof-shaped cap.',
    occurrence: 'Common in all of Finland.',
    'picking months': 'August - October',
    'primary habitat': 'Heath forests',
    edible: false,
    recipes: '',
    image: sheepPolypore,
  },
];

export default data;
