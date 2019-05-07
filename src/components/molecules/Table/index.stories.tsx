import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Table from '.';

const data = [
  {
    firstName: 'Thompson',
    lastName: 'Eaton',
    age: 25
  },
  {
    firstName: 'Emily',
    lastName: 'French',
    age: 40
  },
  {
    firstName: 'Lorena',
    lastName: 'Becker',
    age: 33
  },
  {
    firstName: 'Noemi',
    lastName: 'Keith',
    age: 25
  },
  {
    firstName: 'Phyllis',
    lastName: 'Cooper',
    age: 27
  },
  {
    firstName: 'Patton',
    lastName: 'Young',
    age: 30
  },
  {
    firstName: 'Ina',
    lastName: 'Moreno',
    age: 35
  },
  {
    firstName: 'Merritt',
    lastName: 'Fry',
    age: 39
  },
  {
    firstName: 'Sharon',
    lastName: 'Johns',
    age: 30
  },
  {
    firstName: 'Hansen',
    lastName: 'Levine',
    age: 21
  },
  {
    firstName: 'Ayala',
    lastName: 'Day',
    age: 23
  },
  {
    firstName: 'Keith',
    lastName: 'Owen',
    age: 38
  },
  {
    firstName: 'Haney',
    lastName: 'Dean',
    age: 37
  },
  {
    firstName: 'Branch',
    lastName: 'Ferrell',
    age: 25
  },
  {
    firstName: 'Carrie',
    lastName: 'Leblanc',
    age: 28
  },
  {
    firstName: 'Franks',
    lastName: 'Donaldson',
    age: 29
  },
  {
    firstName: 'Giles',
    lastName: 'Kemp',
    age: 39
  },
  {
    firstName: 'Winters',
    lastName: 'Moses',
    age: 37
  },
  {
    firstName: 'Everett',
    lastName: 'Maxwell',
    age: 30
  },
  {
    firstName: 'Morris',
    lastName: 'Mack',
    age: 23
  },
  {
    firstName: 'Amanda',
    lastName: 'Cortez',
    age: 26
  },
  {
    firstName: 'Amelia',
    lastName: 'Lang',
    age: 35
  },
  {
    firstName: 'Norman',
    lastName: 'Schneider',
    age: 39
  },
  {
    firstName: 'Hazel',
    lastName: 'Colon',
    age: 26
  },
  {
    firstName: 'Chase',
    lastName: 'Mckenzie',
    age: 40
  },
  {
    firstName: 'Bender',
    lastName: 'Wright',
    age: 20
  },
  {
    firstName: 'Minerva',
    lastName: 'Williams',
    age: 37
  },
  {
    firstName: 'Tania',
    lastName: 'Wade',
    age: 32
  },
  {
    firstName: 'Alta',
    lastName: 'Middleton',
    age: 20
  },
  {
    firstName: 'Oneil',
    lastName: 'Dillard',
    age: 30
  },
  {
    firstName: 'Virginia',
    lastName: 'Hogan',
    age: 39
  },
  {
    firstName: 'Fulton',
    lastName: 'Battle',
    age: 27
  },
  {
    firstName: 'Allyson',
    lastName: 'Santos',
    age: 21
  },
  {
    firstName: 'Erickson',
    lastName: 'Yang',
    age: 37
  },
  {
    firstName: 'Mae',
    lastName: 'Stuart',
    age: 27
  },
  {
    firstName: 'Lawson',
    lastName: 'Riggs',
    age: 22
  },
  {
    firstName: 'Dorothy',
    lastName: 'Velazquez',
    age: 25
  },
  {
    firstName: 'Suzette',
    lastName: 'Caldwell',
    age: 24
  },
  {
    firstName: 'Keller',
    lastName: 'Mcleod',
    age: 25
  },
  {
    firstName: 'Ewing',
    lastName: 'Merritt',
    age: 38
  },
  {
    firstName: 'Keri',
    lastName: 'Foreman',
    age: 34
  },
  {
    firstName: 'Pace',
    lastName: 'Nicholson',
    age: 31
  },
  {
    firstName: 'Wallace',
    lastName: 'Christian',
    age: 39
  },
  {
    firstName: 'Charmaine',
    lastName: 'Valentine',
    age: 25
  },
  {
    firstName: 'Nicholson',
    lastName: 'Berger',
    age: 34
  },
  {
    firstName: 'Geneva',
    lastName: 'Hart',
    age: 20
  },
  {
    firstName: 'Saundra',
    lastName: 'Taylor',
    age: 22
  },
  {
    firstName: 'Tracey',
    lastName: 'Ochoa',
    age: 26
  },
  {
    firstName: 'Cherry',
    lastName: 'Jimenez',
    age: 20
  },
  {
    firstName: 'Tiffany',
    lastName: 'Alvarado',
    age: 31
  },
  {
    firstName: 'Hendricks',
    lastName: 'Fitzgerald',
    age: 34
  },
  {
    firstName: 'Cora',
    lastName: 'Pitts',
    age: 39
  },
  {
    firstName: 'Deanne',
    lastName: 'Riley',
    age: 27
  },
  {
    firstName: 'Clements',
    lastName: 'Hansen',
    age: 25
  },
  {
    firstName: 'Deena',
    lastName: 'Snider',
    age: 32
  },
  {
    firstName: 'Espinoza',
    lastName: 'Alvarez',
    age: 39
  },
  {
    firstName: 'Butler',
    lastName: 'Carey',
    age: 25
  },
  {
    firstName: 'Velasquez',
    lastName: 'Powell',
    age: 28
  },
  {
    firstName: 'Moon',
    lastName: 'Gates',
    age: 36
  },
  {
    firstName: 'Fernandez',
    lastName: 'Romero',
    age: 38
  },
  {
    firstName: 'Elisabeth',
    lastName: 'Short',
    age: 21
  },
  {
    firstName: 'Cathleen',
    lastName: 'Wiggins',
    age: 21
  },
  {
    firstName: 'Perry',
    lastName: 'Bray',
    age: 39
  },
  {
    firstName: 'Ball',
    lastName: 'Cantu',
    age: 35
  },
  {
    firstName: 'Beverly',
    lastName: 'Brown',
    age: 38
  },
  {
    firstName: 'Eaton',
    lastName: 'Walsh',
    age: 22
  },
  {
    firstName: 'Osborn',
    lastName: 'Brewer',
    age: 26
  },
  {
    firstName: 'Brennan',
    lastName: 'Franco',
    age: 20
  },
  {
    firstName: 'Adeline',
    lastName: 'Bishop',
    age: 32
  },
  {
    firstName: 'Arline',
    lastName: 'Sullivan',
    age: 40
  },
  {
    firstName: 'Christa',
    lastName: 'Chan',
    age: 29
  },
  {
    firstName: 'Catalina',
    lastName: 'Campos',
    age: 40
  },
  {
    firstName: 'Aurelia',
    lastName: 'Macdonald',
    age: 24
  },
  {
    firstName: 'Elma',
    lastName: 'Sosa',
    age: 23
  },
  {
    firstName: 'Augusta',
    lastName: 'Graves',
    age: 21
  },
  {
    firstName: 'Debbie',
    lastName: 'Tate',
    age: 33
  },
  {
    firstName: 'Fields',
    lastName: 'Blake',
    age: 35
  },
  {
    firstName: 'Yates',
    lastName: 'Hurst',
    age: 27
  },
  {
    firstName: 'Riddle',
    lastName: 'Gentry',
    age: 32
  },
  {
    firstName: 'Katherine',
    lastName: 'Prince',
    age: 40
  },
  {
    firstName: 'Gross',
    lastName: 'Gallagher',
    age: 34
  },
  {
    firstName: 'Mona',
    lastName: 'Ellis',
    age: 31
  },
  {
    firstName: 'Lenora',
    lastName: 'Dickerson',
    age: 38
  },
  {
    firstName: 'Callie',
    lastName: 'Whitfield',
    age: 27
  },
  {
    firstName: 'Riley',
    lastName: 'Stein',
    age: 29
  },
  {
    firstName: 'Kathleen',
    lastName: 'Sargent',
    age: 25
  },
  {
    firstName: 'Rebekah',
    lastName: 'Dickson',
    age: 29
  },
  {
    firstName: 'Bright',
    lastName: 'Copeland',
    age: 33
  },
  {
    firstName: 'Glass',
    lastName: 'Crawford',
    age: 29
  },
  {
    firstName: 'Merrill',
    lastName: 'Frazier',
    age: 24
  },
  {
    firstName: 'Darlene',
    lastName: 'Gomez',
    age: 31
  },
  {
    firstName: 'Ramona',
    lastName: 'King',
    age: 22
  },
  {
    firstName: 'Annmarie',
    lastName: 'Cabrera',
    age: 39
  },
  {
    firstName: 'Nieves',
    lastName: 'Cole',
    age: 23
  },
  {
    firstName: 'Calhoun',
    lastName: 'Wilkerson',
    age: 25
  },
  {
    firstName: 'Rosales',
    lastName: 'Booker',
    age: 24
  },
  {
    firstName: 'Jeanine',
    lastName: 'Hamilton',
    age: 30
  },
  {
    firstName: 'Alexander',
    lastName: 'Wood',
    age: 37
  },
  {
    firstName: 'Polly',
    lastName: 'Cummings',
    age: 38
  },
  {
    firstName: 'Coleman',
    lastName: 'Buckley',
    age: 36
  },
  {
    firstName: 'Carpenter',
    lastName: 'Medina',
    age: 22
  },
  {
    firstName: 'Jessica',
    lastName: 'Mcpherson',
    age: 26
  },
  {
    firstName: 'Mallory',
    lastName: 'Tillman',
    age: 39
  },
  {
    firstName: 'Craig',
    lastName: 'Tyson',
    age: 22
  },
  {
    firstName: 'Rowe',
    lastName: 'Doyle',
    age: 22
  },
  {
    firstName: 'Georgia',
    lastName: 'Farmer',
    age: 28
  },
  {
    firstName: 'Gibson',
    lastName: 'Callahan',
    age: 36
  },
  {
    firstName: 'Singleton',
    lastName: 'Blankenship',
    age: 30
  },
  {
    firstName: 'Cochran',
    lastName: 'Beach',
    age: 31
  },
  {
    firstName: 'Marisa',
    lastName: 'Gould',
    age: 30
  },
  {
    firstName: 'Valdez',
    lastName: 'Hopper',
    age: 20
  },
  {
    firstName: 'Trisha',
    lastName: 'Jenkins',
    age: 24
  },
  {
    firstName: 'Head',
    lastName: 'Knox',
    age: 30
  },
  {
    firstName: 'Chandler',
    lastName: 'Burns',
    age: 29
  },
  {
    firstName: 'Nolan',
    lastName: 'Maynard',
    age: 20
  },
  {
    firstName: 'Matthews',
    lastName: 'Sweeney',
    age: 26
  },
  {
    firstName: 'Barrett',
    lastName: 'Donovan',
    age: 38
  },
  {
    firstName: 'Mcdaniel',
    lastName: 'Velez',
    age: 20
  },
  {
    firstName: 'Bettie',
    lastName: 'Ryan',
    age: 25
  },
  {
    firstName: 'Rhoda',
    lastName: 'Powers',
    age: 32
  },
  {
    firstName: 'Joseph',
    lastName: 'Cross',
    age: 39
  },
  {
    firstName: 'Berg',
    lastName: 'Soto',
    age: 38
  },
  {
    firstName: 'Foley',
    lastName: 'Rose',
    age: 31
  },
  {
    firstName: 'Colon',
    lastName: 'Puckett',
    age: 37
  },
  {
    firstName: 'Alfreda',
    lastName: 'Mueller',
    age: 39
  },
  {
    firstName: 'Madelyn',
    lastName: 'Aguilar',
    age: 28
  },
  {
    firstName: 'Aimee',
    lastName: 'Gordon',
    age: 37
  },
  {
    firstName: 'Bobbi',
    lastName: 'Mcconnell',
    age: 38
  },
  {
    firstName: 'Beatrice',
    lastName: 'Morton',
    age: 25
  },
  {
    firstName: 'Imelda',
    lastName: 'Michael',
    age: 37
  },
  {
    firstName: 'Gillespie',
    lastName: 'Salas',
    age: 23
  },
  {
    firstName: 'Angie',
    lastName: 'Benson',
    age: 28
  },
  {
    firstName: 'Gomez',
    lastName: 'Hewitt',
    age: 31
  },
  {
    firstName: 'Bowen',
    lastName: 'Combs',
    age: 23
  },
  {
    firstName: 'Yang',
    lastName: 'Monroe',
    age: 25
  },
  {
    firstName: 'Grace',
    lastName: 'Fowler',
    age: 21
  },
  {
    firstName: 'Socorro',
    lastName: 'Foley',
    age: 24
  },
  {
    firstName: 'Le',
    lastName: 'Padilla',
    age: 38
  },
  {
    firstName: 'Gale',
    lastName: 'Goff',
    age: 39
  },
  {
    firstName: 'Elena',
    lastName: 'Mcknight',
    age: 26
  },
  {
    firstName: 'Curry',
    lastName: 'Floyd',
    age: 35
  },
  {
    firstName: 'Lidia',
    lastName: 'Atkins',
    age: 35
  },
  {
    firstName: 'Loretta',
    lastName: 'Stanley',
    age: 31
  },
  {
    firstName: 'Vivian',
    lastName: 'Owens',
    age: 24
  },
  {
    firstName: 'Mitchell',
    lastName: 'Jones',
    age: 37
  },
  {
    firstName: 'Iris',
    lastName: 'Bean',
    age: 20
  },
  {
    firstName: 'Harrell',
    lastName: 'Jensen',
    age: 38
  },
  {
    firstName: 'Rosanna',
    lastName: 'Mcdonald',
    age: 36
  },
  {
    firstName: 'Dollie',
    lastName: 'Reyes',
    age: 23
  },
  {
    firstName: 'Charity',
    lastName: 'Massey',
    age: 25
  },
  {
    firstName: 'Frost',
    lastName: 'Nixon',
    age: 36
  },
  {
    firstName: 'Gregory',
    lastName: 'Douglas',
    age: 22
  },
  {
    firstName: 'Faith',
    lastName: 'Swanson',
    age: 29
  },
  {
    firstName: 'Antonia',
    lastName: 'Barber',
    age: 34
  },
  {
    firstName: 'Bird',
    lastName: 'Emerson',
    age: 21
  },
  {
    firstName: 'Beach',
    lastName: 'Clarke',
    age: 31
  },
  {
    firstName: 'Salinas',
    lastName: 'Mcneil',
    age: 25
  },
  {
    firstName: 'Leonard',
    lastName: 'Knight',
    age: 39
  },
  {
    firstName: 'Sally',
    lastName: 'Vincent',
    age: 24
  },
  {
    firstName: 'Allison',
    lastName: 'Conley',
    age: 36
  },
  {
    firstName: 'Carmen',
    lastName: 'Casey',
    age: 40
  },
  {
    firstName: 'Billie',
    lastName: 'Poole',
    age: 40
  },
  {
    firstName: 'Dixon',
    lastName: 'Albert',
    age: 23
  },
  {
    firstName: 'Rasmussen',
    lastName: 'Oneal',
    age: 29
  },
  {
    firstName: 'Christine',
    lastName: 'Hickman',
    age: 27
  },
  {
    firstName: 'Bray',
    lastName: 'Abbott',
    age: 29
  },
  {
    firstName: 'Lucile',
    lastName: 'Dotson',
    age: 29
  },
  {
    firstName: 'Daniel',
    lastName: 'Hardin',
    age: 36
  },
  {
    firstName: 'Ladonna',
    lastName: 'Shepherd',
    age: 28
  },
  {
    firstName: 'Sykes',
    lastName: 'Mills',
    age: 33
  },
  {
    firstName: 'Gail',
    lastName: 'Austin',
    age: 29
  },
  {
    firstName: 'Mcintyre',
    lastName: 'Snow',
    age: 40
  },
  {
    firstName: 'Mcfarland',
    lastName: 'Harmon',
    age: 32
  },
  {
    firstName: 'Mullins',
    lastName: 'Mcgee',
    age: 30
  },
  {
    firstName: 'Katy',
    lastName: 'Gill',
    age: 22
  },
  {
    firstName: 'Jillian',
    lastName: 'Shelton',
    age: 22
  },
  {
    firstName: 'Shaffer',
    lastName: 'Jennings',
    age: 40
  },
  {
    firstName: 'Golden',
    lastName: 'Lott',
    age: 32
  },
  {
    firstName: 'Mildred',
    lastName: 'Ward',
    age: 21
  },
  {
    firstName: 'Gaines',
    lastName: 'Griffin',
    age: 25
  },
  {
    firstName: 'Walker',
    lastName: 'Beard',
    age: 35
  },
  {
    firstName: 'Madeline',
    lastName: 'Adams',
    age: 36
  },
  {
    firstName: 'Angela',
    lastName: 'Baird',
    age: 21
  },
  {
    firstName: 'Young',
    lastName: 'Cohen',
    age: 32
  },
  {
    firstName: 'Jewel',
    lastName: 'Woods',
    age: 22
  },
  {
    firstName: 'Mari',
    lastName: 'Bartlett',
    age: 39
  },
  {
    firstName: 'Ellen',
    lastName: 'Hurley',
    age: 40
  },
  {
    firstName: 'Robertson',
    lastName: 'Calderon',
    age: 32
  },
  {
    firstName: 'Stuart',
    lastName: 'Workman',
    age: 23
  },
  {
    firstName: 'Eula',
    lastName: 'Rowe',
    age: 39
  },
  {
    firstName: 'Chaney',
    lastName: 'Mcclain',
    age: 39
  },
  {
    firstName: 'Craft',
    lastName: 'Melendez',
    age: 36
  },
  {
    firstName: 'Morin',
    lastName: 'Cannon',
    age: 40
  },
  {
    firstName: 'Francis',
    lastName: 'Whitaker',
    age: 34
  },
  {
    firstName: 'Sawyer',
    lastName: 'Wheeler',
    age: 31
  },
  {
    firstName: 'Prince',
    lastName: 'Heath',
    age: 28
  },
  {
    firstName: 'Yvette',
    lastName: 'Byers',
    age: 23
  },
  {
    firstName: 'Kaye',
    lastName: 'Pollard',
    age: 20
  },
  {
    firstName: 'Viola',
    lastName: 'Strickland',
    age: 21
  },
  {
    firstName: 'Thornton',
    lastName: 'Vinson',
    age: 29
  },
  {
    firstName: 'Guerrero',
    lastName: 'Clay',
    age: 29
  },
  {
    firstName: 'Julie',
    lastName: 'Burks',
    age: 39
  },
  {
    firstName: 'Calderon',
    lastName: 'Guy',
    age: 37
  },
  {
    firstName: 'Letitia',
    lastName: 'Roman',
    age: 34
  },
  {
    firstName: 'Boyer',
    lastName: 'Welch',
    age: 25
  },
  {
    firstName: 'Solomon',
    lastName: 'Cardenas',
    age: 20
  },
  {
    firstName: 'Vega',
    lastName: 'Mcbride',
    age: 25
  },
  {
    firstName: 'Ila',
    lastName: 'Hawkins',
    age: 21
  },
  {
    firstName: 'Hattie',
    lastName: 'Mathews',
    age: 31
  },
  {
    firstName: 'Marina',
    lastName: 'Frye',
    age: 28
  },
  {
    firstName: 'Lamb',
    lastName: 'Erickson',
    age: 21
  },
  {
    firstName: 'Diaz',
    lastName: 'Holt',
    age: 25
  },
  {
    firstName: 'Annette',
    lastName: 'Ray',
    age: 26
  },
  {
    firstName: 'Fox',
    lastName: 'Vaughan',
    age: 23
  },
  {
    firstName: 'Elvia',
    lastName: 'Robles',
    age: 21
  },
  {
    firstName: 'Sandra',
    lastName: 'Hanson',
    age: 27
  },
  {
    firstName: 'Watson',
    lastName: 'Delaney',
    age: 32
  },
  {
    firstName: 'Barron',
    lastName: 'Dudley',
    age: 20
  },
  {
    firstName: 'Gonzales',
    lastName: 'Randolph',
    age: 37
  },
  {
    firstName: 'Mariana',
    lastName: 'Vazquez',
    age: 26
  },
  {
    firstName: 'Lea',
    lastName: 'Ramirez',
    age: 22
  },
  {
    firstName: 'Fuller',
    lastName: 'Ramsey',
    age: 25
  },
  {
    firstName: 'Skinner',
    lastName: 'Giles',
    age: 24
  },
  {
    firstName: 'Medina',
    lastName: 'Kramer',
    age: 29
  },
  {
    firstName: 'Smith',
    lastName: 'Mckay',
    age: 37
  },
  {
    firstName: 'Simon',
    lastName: 'Jacobson',
    age: 32
  },
  {
    firstName: 'Vang',
    lastName: 'Parker',
    age: 21
  },
  {
    firstName: 'Lorraine',
    lastName: 'Pugh',
    age: 35
  },
  {
    firstName: 'Cohen',
    lastName: 'Mcfarland',
    age: 31
  },
  {
    firstName: 'Duke',
    lastName: 'Henson',
    age: 38
  },
  {
    firstName: 'Roy',
    lastName: 'Nelson',
    age: 31
  },
  {
    firstName: 'Hallie',
    lastName: 'Wiley',
    age: 26
  },
  {
    firstName: 'Solis',
    lastName: 'Dodson',
    age: 40
  },
  {
    firstName: 'Wall',
    lastName: 'Chaney',
    age: 31
  },
  {
    firstName: 'Marcie',
    lastName: 'Rios',
    age: 23
  },
  {
    firstName: 'Henderson',
    lastName: 'Wall',
    age: 29
  },
  {
    firstName: 'Hopkins',
    lastName: 'Chavez',
    age: 38
  },
  {
    firstName: 'Maureen',
    lastName: 'Huber',
    age: 26
  },
  {
    firstName: 'Tara',
    lastName: 'Smith',
    age: 21
  },
  {
    firstName: 'Johnnie',
    lastName: 'Dale',
    age: 35
  },
  {
    firstName: 'Schroeder',
    lastName: 'Branch',
    age: 32
  },
  {
    firstName: 'Dunlap',
    lastName: 'Hernandez',
    age: 38
  },
  {
    firstName: 'Fanny',
    lastName: 'Buckner',
    age: 35
  },
  {
    firstName: 'Zelma',
    lastName: 'Guthrie',
    age: 39
  },
  {
    firstName: 'Bennett',
    lastName: 'Pickett',
    age: 26
  },
  {
    firstName: 'Lang',
    lastName: 'Mathis',
    age: 31
  },
  {
    firstName: 'Townsend',
    lastName: 'Hoover',
    age: 22
  },
  {
    firstName: 'Sloan',
    lastName: 'Roberson',
    age: 28
  },
  {
    firstName: 'Bernard',
    lastName: 'Marsh',
    age: 25
  },
  {
    firstName: 'Combs',
    lastName: 'Garrett',
    age: 28
  },
  {
    firstName: 'Becker',
    lastName: 'Santiago',
    age: 40
  },
  {
    firstName: 'Caroline',
    lastName: 'Harrington',
    age: 21
  },
  {
    firstName: 'Lawrence',
    lastName: 'Hardy',
    age: 20
  },
  {
    firstName: 'Silva',
    lastName: 'Sheppard',
    age: 20
  },
  {
    firstName: 'Schneider',
    lastName: 'Flowers',
    age: 30
  },
  {
    firstName: 'Delaney',
    lastName: 'Cotton',
    age: 34
  },
  {
    firstName: 'Margery',
    lastName: 'Landry',
    age: 39
  },
  {
    firstName: 'Gertrude',
    lastName: 'Knapp',
    age: 20
  },
  {
    firstName: 'Ingrid',
    lastName: 'Raymond',
    age: 35
  },
  {
    firstName: 'Stefanie',
    lastName: 'Peck',
    age: 37
  },
  {
    firstName: 'Olivia',
    lastName: 'Ball',
    age: 30
  },
  {
    firstName: 'Santos',
    lastName: 'Bass',
    age: 20
  },
  {
    firstName: 'Pearlie',
    lastName: 'Goodwin',
    age: 24
  },
  {
    firstName: 'Marcella',
    lastName: 'Chapman',
    age: 32
  },
  {
    firstName: 'Harriett',
    lastName: 'Lamb',
    age: 20
  },
  {
    firstName: 'Helen',
    lastName: 'Hall',
    age: 34
  },
  {
    firstName: 'Laurel',
    lastName: 'Murray',
    age: 25
  },
  {
    firstName: 'Gilliam',
    lastName: 'Morales',
    age: 27
  },
  {
    firstName: 'Neva',
    lastName: 'Burnett',
    age: 28
  },
  {
    firstName: 'Alvarado',
    lastName: 'Knowles',
    age: 31
  },
  {
    firstName: 'Vasquez',
    lastName: 'Dyer',
    age: 29
  },
  {
    firstName: 'Daugherty',
    lastName: 'Collier',
    age: 24
  },
  {
    firstName: 'Brooks',
    lastName: 'Salinas',
    age: 32
  },
  {
    firstName: 'Haynes',
    lastName: 'Rich',
    age: 30
  },
  {
    firstName: 'Conley',
    lastName: 'Burch',
    age: 31
  },
  {
    firstName: 'Rosanne',
    lastName: 'House',
    age: 31
  },
  {
    firstName: 'Karin',
    lastName: 'Olson',
    age: 37
  },
  {
    firstName: 'Dunn',
    lastName: 'Robbins',
    age: 30
  },
  {
    firstName: 'Oneal',
    lastName: 'Joseph',
    age: 39
  },
  {
    firstName: 'Carol',
    lastName: 'Kerr',
    age: 24
  },
  {
    firstName: 'Kari',
    lastName: 'Meadows',
    age: 29
  },
  {
    firstName: 'Grimes',
    lastName: 'Bullock',
    age: 35
  },
  {
    firstName: 'Tamera',
    lastName: 'Strong',
    age: 23
  },
  {
    firstName: 'English',
    lastName: 'Morse',
    age: 25
  },
  {
    firstName: 'Christi',
    lastName: 'Myers',
    age: 25
  },
  {
    firstName: 'Berger',
    lastName: 'Craft',
    age: 23
  },
  {
    firstName: 'Yolanda',
    lastName: 'Boyd',
    age: 31
  },
  {
    firstName: 'Yesenia',
    lastName: 'Jefferson',
    age: 30
  },
  {
    firstName: 'Aida',
    lastName: 'Solis',
    age: 35
  },
  {
    firstName: 'Sanford',
    lastName: 'Gregory',
    age: 38
  },
  {
    firstName: 'Johnson',
    lastName: 'Howell',
    age: 23
  },
  {
    firstName: 'Montoya',
    lastName: 'Hunt',
    age: 30
  },
  {
    firstName: 'Hollie',
    lastName: 'Perry',
    age: 35
  },
  {
    firstName: 'Fay',
    lastName: 'Saunders',
    age: 36
  },
  {
    firstName: 'Fletcher',
    lastName: 'Haley',
    age: 26
  },
  {
    firstName: 'Barbara',
    lastName: 'Duncan',
    age: 29
  },
  {
    firstName: 'Osborne',
    lastName: 'Lopez',
    age: 35
  },
  {
    firstName: 'Jenna',
    lastName: 'Moran',
    age: 32
  },
  {
    firstName: 'Terrell',
    lastName: 'Savage',
    age: 39
  },
  {
    firstName: 'Tamika',
    lastName: 'Reilly',
    age: 31
  }
];

storiesOf('Molecules/Table', module).add('Default', () => {
  return (
    <div style={{ padding: 50 }}>
      <Table
        data={data.slice(0, 60)}
        columns={
          [
            {
              Header: 'First Name',
              accessor: 'firstName'
            },
            {
              Header: 'Last Name',
              accessor: 'lastName'
            },
            {
              Header: 'Age',
              accessor: 'age'
            }
          ]
          /*[
          {
            Header: "Name",
            columns: [
              {
                Header: "First Name",
                accessor: "firstName"
              },
              {
                Header: "Last Name",
                accessor: "lastName"
              }
            ]
          },
          {
            Header: "Info",
            columns: [
              {
                Header: "Age",
                accessor: "age"
              }
            ]
          }
        ]*/
        }
        enforcePagination
      />
    </div>
  );
});
