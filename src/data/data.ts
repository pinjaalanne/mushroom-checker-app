export interface Mushroom {
  id: string;
  name: string;
  description: string;
  occurrence: string;
  'picking months': string;
  'primary habitat': string;
  edible: boolean;
  recipes: string;
}
[];

const data: Mushroom[] = [
  {
    id: '1',
    name: 'Chanterelle',
    description:
      'Chanterelles are orange, yellow or white, meaty and funnel-shaped.',
    occurrence: 'Common in South of Finland, rare in North of Finland.',
    'picking months': 'July - October',
    'primary habitat': 'Mesic and herb-rich heath forests',
    edible: true,
    recipes:
      'https://www.foodandwine.com/vegetables/mushrooms/chanterelle-recipes',
  },
  {
    id: '2',
    name: 'Porcini',
    description:
      'Porcini mushrooms are large, brown-capped mushrooms with a white stem.',
    occurrence: 'Common in all of Finland where the pine grows.',
    'picking months': 'July - September',
    'primary habitat': 'Heath forests',
    edible: true,
    recipes: 'https://www.bonappetit.com/ingredient/porcini-mushroom',
  },
  {
    id: '3',
    name: 'Yellowfoot',
    description:
      'Yellowfoot mushrooms are small, yellow mushrooms with a brown cap.',
    occurrence:
      'Common in South and Middle of Finland, rare in North of Finland.',
    'picking months': 'August-November',
    'primary habitat': 'Heath forests',
    edible: true,
    recipes: 'https://wineforest.com/pages/yellow-foot-chanterelle-soup-1',
  },
  {
    id: '4',
    name: 'Black Trumpet',
    description: 'Black Trumpets are small, black, trumpet-shaped mushrooms.',
    occurrence: 'Common in South of Finland.',
    'picking months': 'August-October',
    'primary habitat': 'Mesic and herb-rich heath forests',
    edible: true,
    recipes: 'https://www.yummly.com/recipes/black-trumpet-mushrooms',
  },
  {
    id: '5',
    name: 'Hedgehog Mushroom',
    description:
      'Hedgehog mushrooms are small, brown or orange mushrooms with a toothed underside.',
    occurrence: 'Common in South of Finland.',
    'picking months': 'July - October',
    'primary habitat': 'Mesic and herb-rich heath forests',
    edible: true,
    recipes:
      'https://foragerchef.com/category/wild-mushroom-recipes-2/hedgehog-mushrooms/',
  },
  {
    id: '6',
    name: 'False Morel',
    description: 'False morels are large, wrinkled, brain-like mushrooms.',
    occurrence: 'Common in South of Finland, rare in North of Finland.',
    'picking months': 'May - June',
    'primary habitat': 'Heath forests',
    edible: true,
    recipes: 'https://www.thespruceeats.com/morel-mushroom-recipes-2217133',
  },
  {
    id: '7',
    name: 'Fly Agaric',
    description: 'Fly agaric is a large, red-capped mushroom with white spots.',
    occurrence: 'Common in all of Finland.',
    'picking months': 'August - October',
    'primary habitat': 'Heath forests',
    edible: false,
    recipes: '',
  },
  {
    id: '8',
    name: 'Destroying Angel',
    description:
      'Destroying angel is a large, white mushroom with a smooth cap.',
    occurrence: 'Common in all of Finland.',
    'picking months': 'August - October',
    'primary habitat': 'Heath forests',
    edible: false,
    recipes: '',
  },
  {
    id: '9',
    name: 'Funerall Bell',
    description:
      'Funerall bell is a small, white mushroom with a bell-shaped cap.',
    occurrence: 'Common in all of Finland.',
    'picking months': 'August - October',
    'primary habitat': 'Heath forests',
    edible: false,
    recipes: '',
  },
  {
    id: '10',
    name: 'Sheep Polypore',
    description:
      'Sheep polypore is a large, brown mushroom with a hoof-shaped cap.',
    occurrence: 'Common in all of Finland.',
    'picking months': 'August - October',
    'primary habitat': 'Heath forests',
    edible: false,
    recipes: '',
  },
];

export default data;
