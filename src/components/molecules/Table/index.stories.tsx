import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Table from '.';

const data = [
  {
    age: 25,
    firstName: 'Thompson',
    lastName: 'Eaton'
  },
  {
    age: 40,
    firstName: 'Emily',
    lastName: 'French'
  },
  {
    age: 33,
    firstName: 'Lorena',
    lastName: 'Becker'
  },
  {
    age: 25,
    firstName: 'Noemi',
    lastName: 'Keith'
  },
  {
    age: 27,
    firstName: 'Phyllis',
    lastName: 'Cooper'
  },
  {
    age: 30,
    firstName: 'Patton',
    lastName: 'Young'
  },
  {
    age: 35,
    firstName: 'Ina',
    lastName: 'Moreno'
  },
  {
    age: 39,
    firstName: 'Merritt',
    lastName: 'Fry'
  },
  {
    age: 30,
    firstName: 'Sharon',
    lastName: 'Johns'
  },
  {
    age: 21,
    firstName: 'Hansen',
    lastName: 'Levine'
  },
  {
    age: 23,
    firstName: 'Ayala',
    lastName: 'Day'
  },
  {
    age: 38,
    firstName: 'Keith',
    lastName: 'Owen'
  },
  {
    age: 37,
    firstName: 'Haney',
    lastName: 'Dean'
  },
  {
    age: 25,
    firstName: 'Branch',
    lastName: 'Ferrell'
  },
  {
    age: 28,
    firstName: 'Carrie',
    lastName: 'Leblanc'
  },
  {
    age: 29,
    firstName: 'Franks',
    lastName: 'Donaldson'
  },
  {
    age: 39,
    firstName: 'Giles',
    lastName: 'Kemp'
  },
  {
    age: 37,
    firstName: 'Winters',
    lastName: 'Moses'
  },
  {
    age: 30,
    firstName: 'Everett',
    lastName: 'Maxwell'
  },
  {
    age: 23,
    firstName: 'Morris',
    lastName: 'Mack'
  },
  {
    age: 26,
    firstName: 'Amanda',
    lastName: 'Cortez'
  },
  {
    age: 35,
    firstName: 'Amelia',
    lastName: 'Lang'
  },
  {
    age: 39,
    firstName: 'Norman',
    lastName: 'Schneider'
  },
  {
    age: 26,
    firstName: 'Hazel',
    lastName: 'Colon'
  },
  {
    age: 40,
    firstName: 'Chase',
    lastName: 'Mckenzie'
  },
  {
    age: 20,
    firstName: 'Bender',
    lastName: 'Wright'
  },
  {
    age: 37,
    firstName: 'Minerva',
    lastName: 'Williams'
  },
  {
    age: 32,
    firstName: 'Tania',
    lastName: 'Wade'
  },
  {
    age: 20,
    firstName: 'Alta',
    lastName: 'Middleton'
  },
  {
    age: 30,
    firstName: 'Oneil',
    lastName: 'Dillard'
  },
  {
    age: 39,
    firstName: 'Virginia',
    lastName: 'Hogan'
  },
  {
    age: 27,
    firstName: 'Fulton',
    lastName: 'Battle'
  },
  {
    age: 21,
    firstName: 'Allyson',
    lastName: 'Santos'
  },
  {
    age: 37,
    firstName: 'Erickson',
    lastName: 'Yang'
  },
  {
    age: 27,
    firstName: 'Mae',
    lastName: 'Stuart'
  },
  {
    age: 22,
    firstName: 'Lawson',
    lastName: 'Riggs'
  },
  {
    age: 25,
    firstName: 'Dorothy',
    lastName: 'Velazquez'
  },
  {
    age: 24,
    firstName: 'Suzette',
    lastName: 'Caldwell'
  },
  {
    age: 25,
    firstName: 'Keller',
    lastName: 'Mcleod'
  },
  {
    age: 38,
    firstName: 'Ewing',
    lastName: 'Merritt'
  },
  {
    age: 34,
    firstName: 'Keri',
    lastName: 'Foreman'
  },
  {
    age: 31,
    firstName: 'Pace',
    lastName: 'Nicholson'
  },
  {
    age: 39,
    firstName: 'Wallace',
    lastName: 'Christian'
  },
  {
    age: 25,
    firstName: 'Charmaine',
    lastName: 'Valentine'
  },
  {
    age: 34,
    firstName: 'Nicholson',
    lastName: 'Berger'
  },
  {
    age: 20,
    firstName: 'Geneva',
    lastName: 'Hart'
  },
  {
    age: 22,
    firstName: 'Saundra',
    lastName: 'Taylor'
  },
  {
    age: 26,
    firstName: 'Tracey',
    lastName: 'Ochoa'
  },
  {
    age: 20,
    firstName: 'Cherry',
    lastName: 'Jimenez'
  },
  {
    age: 31,
    firstName: 'Tiffany',
    lastName: 'Alvarado'
  },
  {
    age: 34,
    firstName: 'Hendricks',
    lastName: 'Fitzgerald'
  },
  {
    age: 39,
    firstName: 'Cora',
    lastName: 'Pitts'
  },
  {
    age: 27,
    firstName: 'Deanne',
    lastName: 'Riley'
  },
  {
    age: 25,
    firstName: 'Clements',
    lastName: 'Hansen'
  },
  {
    age: 32,
    firstName: 'Deena',
    lastName: 'Snider'
  },
  {
    age: 39,
    firstName: 'Espinoza',
    lastName: 'Alvarez'
  },
  {
    age: 25,
    firstName: 'Butler',
    lastName: 'Carey'
  },
  {
    age: 28,
    firstName: 'Velasquez',
    lastName: 'Powell'
  },
  {
    age: 36,
    firstName: 'Moon',
    lastName: 'Gates'
  },
  {
    age: 38,
    firstName: 'Fernandez',
    lastName: 'Romero'
  },
  {
    age: 21,
    firstName: 'Elisabeth',
    lastName: 'Short'
  },
  {
    age: 21,
    firstName: 'Cathleen',
    lastName: 'Wiggins'
  },
  {
    age: 39,
    firstName: 'Perry',
    lastName: 'Bray'
  },
  {
    age: 35,
    firstName: 'Ball',
    lastName: 'Cantu'
  },
  {
    age: 38,
    firstName: 'Beverly',
    lastName: 'Brown'
  },
  {
    age: 22,
    firstName: 'Eaton',
    lastName: 'Walsh'
  },
  {
    age: 26,
    firstName: 'Osborn',
    lastName: 'Brewer'
  },
  {
    age: 20,
    firstName: 'Brennan',
    lastName: 'Franco'
  },
  {
    age: 32,
    firstName: 'Adeline',
    lastName: 'Bishop'
  },
  {
    age: 40,
    firstName: 'Arline',
    lastName: 'Sullivan'
  },
  {
    age: 29,
    firstName: 'Christa',
    lastName: 'Chan'
  },
  {
    age: 40,
    firstName: 'Catalina',
    lastName: 'Campos'
  },
  {
    age: 24,
    firstName: 'Aurelia',
    lastName: 'Macdonald'
  },
  {
    age: 23,
    firstName: 'Elma',
    lastName: 'Sosa'
  },
  {
    age: 21,
    firstName: 'Augusta',
    lastName: 'Graves'
  },
  {
    age: 33,
    firstName: 'Debbie',
    lastName: 'Tate'
  },
  {
    age: 35,
    firstName: 'Fields',
    lastName: 'Blake'
  },
  {
    age: 27,
    firstName: 'Yates',
    lastName: 'Hurst'
  },
  {
    age: 32,
    firstName: 'Riddle',
    lastName: 'Gentry'
  },
  {
    age: 40,
    firstName: 'Katherine',
    lastName: 'Prince'
  },
  {
    age: 34,
    firstName: 'Gross',
    lastName: 'Gallagher'
  },
  {
    age: 31,
    firstName: 'Mona',
    lastName: 'Ellis'
  },
  {
    age: 38,
    firstName: 'Lenora',
    lastName: 'Dickerson'
  },
  {
    age: 27,
    firstName: 'Callie',
    lastName: 'Whitfield'
  },
  {
    age: 29,
    firstName: 'Riley',
    lastName: 'Stein'
  },
  {
    age: 25,
    firstName: 'Kathleen',
    lastName: 'Sargent'
  },
  {
    age: 29,
    firstName: 'Rebekah',
    lastName: 'Dickson'
  },
  {
    age: 33,
    firstName: 'Bright',
    lastName: 'Copeland'
  },
  {
    age: 29,
    firstName: 'Glass',
    lastName: 'Crawford'
  },
  {
    age: 24,
    firstName: 'Merrill',
    lastName: 'Frazier'
  },
  {
    age: 31,
    firstName: 'Darlene',
    lastName: 'Gomez'
  },
  {
    age: 22,
    firstName: 'Ramona',
    lastName: 'King'
  },
  {
    age: 39,
    firstName: 'Annmarie',
    lastName: 'Cabrera'
  },
  {
    age: 23,
    firstName: 'Nieves',
    lastName: 'Cole'
  },
  {
    age: 25,
    firstName: 'Calhoun',
    lastName: 'Wilkerson'
  },
  {
    age: 24,
    firstName: 'Rosales',
    lastName: 'Booker'
  },
  {
    age: 30,
    firstName: 'Jeanine',
    lastName: 'Hamilton'
  },
  {
    age: 37,
    firstName: 'Alexander',
    lastName: 'Wood'
  },
  {
    age: 38,
    firstName: 'Polly',
    lastName: 'Cummings'
  },
  {
    age: 36,
    firstName: 'Coleman',
    lastName: 'Buckley'
  },
  {
    age: 22,
    firstName: 'Carpenter',
    lastName: 'Medina'
  },
  {
    age: 26,
    firstName: 'Jessica',
    lastName: 'Mcpherson'
  },
  {
    age: 39,
    firstName: 'Mallory',
    lastName: 'Tillman'
  },
  {
    age: 22,
    firstName: 'Craig',
    lastName: 'Tyson'
  },
  {
    age: 22,
    firstName: 'Rowe',
    lastName: 'Doyle'
  },
  {
    age: 28,
    firstName: 'Georgia',
    lastName: 'Farmer'
  },
  {
    age: 36,
    firstName: 'Gibson',
    lastName: 'Callahan'
  },
  {
    age: 30,
    firstName: 'Singleton',
    lastName: 'Blankenship'
  },
  {
    age: 31,
    firstName: 'Cochran',
    lastName: 'Beach'
  },
  {
    age: 30,
    firstName: 'Marisa',
    lastName: 'Gould'
  },
  {
    age: 20,
    firstName: 'Valdez',
    lastName: 'Hopper'
  },
  {
    age: 24,
    firstName: 'Trisha',
    lastName: 'Jenkins'
  },
  {
    age: 30,
    firstName: 'Head',
    lastName: 'Knox'
  },
  {
    age: 29,
    firstName: 'Chandler',
    lastName: 'Burns'
  },
  {
    age: 20,
    firstName: 'Nolan',
    lastName: 'Maynard'
  },
  {
    age: 26,
    firstName: 'Matthews',
    lastName: 'Sweeney'
  },
  {
    age: 38,
    firstName: 'Barrett',
    lastName: 'Donovan'
  },
  {
    age: 20,
    firstName: 'Mcdaniel',
    lastName: 'Velez'
  },
  {
    age: 25,
    firstName: 'Bettie',
    lastName: 'Ryan'
  },
  {
    age: 32,
    firstName: 'Rhoda',
    lastName: 'Powers'
  },
  {
    age: 39,
    firstName: 'Joseph',
    lastName: 'Cross'
  },
  {
    age: 38,
    firstName: 'Berg',
    lastName: 'Soto'
  },
  {
    age: 31,
    firstName: 'Foley',
    lastName: 'Rose'
  },
  {
    age: 37,
    firstName: 'Colon',
    lastName: 'Puckett'
  },
  {
    age: 39,
    firstName: 'Alfreda',
    lastName: 'Mueller'
  },
  {
    age: 28,
    firstName: 'Madelyn',
    lastName: 'Aguilar'
  },
  {
    age: 37,
    firstName: 'Aimee',
    lastName: 'Gordon'
  },
  {
    age: 38,
    firstName: 'Bobbi',
    lastName: 'Mcconnell'
  },
  {
    age: 25,
    firstName: 'Beatrice',
    lastName: 'Morton'
  },
  {
    age: 37,
    firstName: 'Imelda',
    lastName: 'Michael'
  },
  {
    age: 23,
    firstName: 'Gillespie',
    lastName: 'Salas'
  },
  {
    age: 28,
    firstName: 'Angie',
    lastName: 'Benson'
  },
  {
    age: 31,
    firstName: 'Gomez',
    lastName: 'Hewitt'
  },
  {
    age: 23,
    firstName: 'Bowen',
    lastName: 'Combs'
  },
  {
    age: 25,
    firstName: 'Yang',
    lastName: 'Monroe'
  },
  {
    age: 21,
    firstName: 'Grace',
    lastName: 'Fowler'
  },
  {
    age: 24,
    firstName: 'Socorro',
    lastName: 'Foley'
  },
  {
    age: 38,
    firstName: 'Le',
    lastName: 'Padilla'
  },
  {
    age: 39,
    firstName: 'Gale',
    lastName: 'Goff'
  },
  {
    age: 26,
    firstName: 'Elena',
    lastName: 'Mcknight'
  },
  {
    age: 35,
    firstName: 'Curry',
    lastName: 'Floyd'
  },
  {
    age: 35,
    firstName: 'Lidia',
    lastName: 'Atkins'
  },
  {
    age: 31,
    firstName: 'Loretta',
    lastName: 'Stanley'
  },
  {
    age: 24,
    firstName: 'Vivian',
    lastName: 'Owens'
  },
  {
    age: 37,
    firstName: 'Mitchell',
    lastName: 'Jones'
  },
  {
    age: 20,
    firstName: 'Iris',
    lastName: 'Bean'
  },
  {
    age: 38,
    firstName: 'Harrell',
    lastName: 'Jensen'
  },
  {
    age: 36,
    firstName: 'Rosanna',
    lastName: 'Mcdonald'
  },
  {
    age: 23,
    firstName: 'Dollie',
    lastName: 'Reyes'
  },
  {
    age: 25,
    firstName: 'Charity',
    lastName: 'Massey'
  },
  {
    age: 36,
    firstName: 'Frost',
    lastName: 'Nixon'
  },
  {
    age: 22,
    firstName: 'Gregory',
    lastName: 'Douglas'
  },
  {
    age: 29,
    firstName: 'Faith',
    lastName: 'Swanson'
  },
  {
    age: 34,
    firstName: 'Antonia',
    lastName: 'Barber'
  },
  {
    age: 21,
    firstName: 'Bird',
    lastName: 'Emerson'
  },
  {
    age: 31,
    firstName: 'Beach',
    lastName: 'Clarke'
  },
  {
    age: 25,
    firstName: 'Salinas',
    lastName: 'Mcneil'
  },
  {
    age: 39,
    firstName: 'Leonard',
    lastName: 'Knight'
  },
  {
    age: 24,
    firstName: 'Sally',
    lastName: 'Vincent'
  },
  {
    age: 36,
    firstName: 'Allison',
    lastName: 'Conley'
  },
  {
    age: 40,
    firstName: 'Carmen',
    lastName: 'Casey'
  },
  {
    age: 40,
    firstName: 'Billie',
    lastName: 'Poole'
  },
  {
    age: 23,
    firstName: 'Dixon',
    lastName: 'Albert'
  },
  {
    age: 29,
    firstName: 'Rasmussen',
    lastName: 'Oneal'
  },
  {
    age: 27,
    firstName: 'Christine',
    lastName: 'Hickman'
  },
  {
    age: 29,
    firstName: 'Bray',
    lastName: 'Abbott'
  },
  {
    age: 29,
    firstName: 'Lucile',
    lastName: 'Dotson'
  },
  {
    age: 36,
    firstName: 'Daniel',
    lastName: 'Hardin'
  },
  {
    age: 28,
    firstName: 'Ladonna',
    lastName: 'Shepherd'
  },
  {
    age: 33,
    firstName: 'Sykes',
    lastName: 'Mills'
  },
  {
    age: 29,
    firstName: 'Gail',
    lastName: 'Austin'
  },
  {
    age: 40,
    firstName: 'Mcintyre',
    lastName: 'Snow'
  },
  {
    age: 32,
    firstName: 'Mcfarland',
    lastName: 'Harmon'
  },
  {
    age: 30,
    firstName: 'Mullins',
    lastName: 'Mcgee'
  },
  {
    age: 22,
    firstName: 'Katy',
    lastName: 'Gill'
  },
  {
    age: 22,
    firstName: 'Jillian',
    lastName: 'Shelton'
  },
  {
    age: 40,
    firstName: 'Shaffer',
    lastName: 'Jennings'
  },
  {
    age: 32,
    firstName: 'Golden',
    lastName: 'Lott'
  },
  {
    age: 21,
    firstName: 'Mildred',
    lastName: 'Ward'
  },
  {
    age: 25,
    firstName: 'Gaines',
    lastName: 'Griffin'
  },
  {
    age: 35,
    firstName: 'Walker',
    lastName: 'Beard'
  },
  {
    age: 36,
    firstName: 'Madeline',
    lastName: 'Adams'
  },
  {
    age: 21,
    firstName: 'Angela',
    lastName: 'Baird'
  },
  {
    age: 32,
    firstName: 'Young',
    lastName: 'Cohen'
  },
  {
    age: 22,
    firstName: 'Jewel',
    lastName: 'Woods'
  },
  {
    age: 39,
    firstName: 'Mari',
    lastName: 'Bartlett'
  },
  {
    age: 40,
    firstName: 'Ellen',
    lastName: 'Hurley'
  },
  {
    age: 32,
    firstName: 'Robertson',
    lastName: 'Calderon'
  },
  {
    age: 23,
    firstName: 'Stuart',
    lastName: 'Workman'
  },
  {
    age: 39,
    firstName: 'Eula',
    lastName: 'Rowe'
  },
  {
    age: 39,
    firstName: 'Chaney',
    lastName: 'Mcclain'
  },
  {
    age: 36,
    firstName: 'Craft',
    lastName: 'Melendez'
  },
  {
    age: 40,
    firstName: 'Morin',
    lastName: 'Cannon'
  },
  {
    age: 34,
    firstName: 'Francis',
    lastName: 'Whitaker'
  },
  {
    age: 31,
    firstName: 'Sawyer',
    lastName: 'Wheeler'
  },
  {
    age: 28,
    firstName: 'Prince',
    lastName: 'Heath'
  },
  {
    age: 23,
    firstName: 'Yvette',
    lastName: 'Byers'
  },
  {
    age: 20,
    firstName: 'Kaye',
    lastName: 'Pollard'
  },
  {
    age: 21,
    firstName: 'Viola',
    lastName: 'Strickland'
  },
  {
    age: 29,
    firstName: 'Thornton',
    lastName: 'Vinson'
  },
  {
    age: 29,
    firstName: 'Guerrero',
    lastName: 'Clay'
  },
  {
    age: 39,
    firstName: 'Julie',
    lastName: 'Burks'
  },
  {
    age: 37,
    firstName: 'Calderon',
    lastName: 'Guy'
  },
  {
    age: 34,
    firstName: 'Letitia',
    lastName: 'Roman'
  },
  {
    age: 25,
    firstName: 'Boyer',
    lastName: 'Welch'
  },
  {
    age: 20,
    firstName: 'Solomon',
    lastName: 'Cardenas'
  },
  {
    age: 25,
    firstName: 'Vega',
    lastName: 'Mcbride'
  },
  {
    age: 21,
    firstName: 'Ila',
    lastName: 'Hawkins'
  },
  {
    age: 31,
    firstName: 'Hattie',
    lastName: 'Mathews'
  },
  {
    age: 28,
    firstName: 'Marina',
    lastName: 'Frye'
  },
  {
    age: 21,
    firstName: 'Lamb',
    lastName: 'Erickson'
  },
  {
    age: 25,
    firstName: 'Diaz',
    lastName: 'Holt'
  },
  {
    age: 26,
    firstName: 'Annette',
    lastName: 'Ray'
  },
  {
    age: 23,
    firstName: 'Fox',
    lastName: 'Vaughan'
  },
  {
    age: 21,
    firstName: 'Elvia',
    lastName: 'Robles'
  },
  {
    age: 27,
    firstName: 'Sandra',
    lastName: 'Hanson'
  },
  {
    age: 32,
    firstName: 'Watson',
    lastName: 'Delaney'
  },
  {
    age: 20,
    firstName: 'Barron',
    lastName: 'Dudley'
  },
  {
    age: 37,
    firstName: 'Gonzales',
    lastName: 'Randolph'
  },
  {
    age: 26,
    firstName: 'Mariana',
    lastName: 'Vazquez'
  },
  {
    age: 22,
    firstName: 'Lea',
    lastName: 'Ramirez'
  },
  {
    age: 25,
    firstName: 'Fuller',
    lastName: 'Ramsey'
  },
  {
    age: 24,
    firstName: 'Skinner',
    lastName: 'Giles'
  },
  {
    age: 29,
    firstName: 'Medina',
    lastName: 'Kramer'
  },
  {
    age: 37,
    firstName: 'Smith',
    lastName: 'Mckay'
  },
  {
    age: 32,
    firstName: 'Simon',
    lastName: 'Jacobson'
  },
  {
    age: 21,
    firstName: 'Vang',
    lastName: 'Parker'
  },
  {
    age: 35,
    firstName: 'Lorraine',
    lastName: 'Pugh'
  },
  {
    age: 31,
    firstName: 'Cohen',
    lastName: 'Mcfarland'
  },
  {
    age: 38,
    firstName: 'Duke',
    lastName: 'Henson'
  },
  {
    age: 31,
    firstName: 'Roy',
    lastName: 'Nelson'
  },
  {
    age: 26,
    firstName: 'Hallie',
    lastName: 'Wiley'
  },
  {
    age: 40,
    firstName: 'Solis',
    lastName: 'Dodson'
  },
  {
    age: 31,
    firstName: 'Wall',
    lastName: 'Chaney'
  },
  {
    age: 23,
    firstName: 'Marcie',
    lastName: 'Rios'
  },
  {
    age: 29,
    firstName: 'Henderson',
    lastName: 'Wall'
  },
  {
    age: 38,
    firstName: 'Hopkins',
    lastName: 'Chavez'
  },
  {
    age: 26,
    firstName: 'Maureen',
    lastName: 'Huber'
  },
  {
    age: 21,
    firstName: 'Tara',
    lastName: 'Smith'
  },
  {
    age: 35,
    firstName: 'Johnnie',
    lastName: 'Dale'
  },
  {
    age: 32,
    firstName: 'Schroeder',
    lastName: 'Branch'
  },
  {
    age: 38,
    firstName: 'Dunlap',
    lastName: 'Hernandez'
  },
  {
    age: 35,
    firstName: 'Fanny',
    lastName: 'Buckner'
  },
  {
    age: 39,
    firstName: 'Zelma',
    lastName: 'Guthrie'
  },
  {
    age: 26,
    firstName: 'Bennett',
    lastName: 'Pickett'
  },
  {
    age: 31,
    firstName: 'Lang',
    lastName: 'Mathis'
  },
  {
    age: 22,
    firstName: 'Townsend',
    lastName: 'Hoover'
  },
  {
    age: 28,
    firstName: 'Sloan',
    lastName: 'Roberson'
  },
  {
    age: 25,
    firstName: 'Bernard',
    lastName: 'Marsh'
  },
  {
    age: 28,
    firstName: 'Combs',
    lastName: 'Garrett'
  },
  {
    age: 40,
    firstName: 'Becker',
    lastName: 'Santiago'
  },
  {
    age: 21,
    firstName: 'Caroline',
    lastName: 'Harrington'
  },
  {
    age: 20,
    firstName: 'Lawrence',
    lastName: 'Hardy'
  },
  {
    age: 20,
    firstName: 'Silva',
    lastName: 'Sheppard'
  },
  {
    age: 30,
    firstName: 'Schneider',
    lastName: 'Flowers'
  },
  {
    age: 34,
    firstName: 'Delaney',
    lastName: 'Cotton'
  },
  {
    age: 39,
    firstName: 'Margery',
    lastName: 'Landry'
  },
  {
    age: 20,
    firstName: 'Gertrude',
    lastName: 'Knapp'
  },
  {
    age: 35,
    firstName: 'Ingrid',
    lastName: 'Raymond'
  },
  {
    age: 37,
    firstName: 'Stefanie',
    lastName: 'Peck'
  },
  {
    age: 30,
    firstName: 'Olivia',
    lastName: 'Ball'
  },
  {
    age: 20,
    firstName: 'Santos',
    lastName: 'Bass'
  },
  {
    age: 24,
    firstName: 'Pearlie',
    lastName: 'Goodwin'
  },
  {
    age: 32,
    firstName: 'Marcella',
    lastName: 'Chapman'
  },
  {
    age: 20,
    firstName: 'Harriett',
    lastName: 'Lamb'
  },
  {
    age: 34,
    firstName: 'Helen',
    lastName: 'Hall'
  },
  {
    age: 25,
    firstName: 'Laurel',
    lastName: 'Murray'
  },
  {
    age: 27,
    firstName: 'Gilliam',
    lastName: 'Morales'
  },
  {
    age: 28,
    firstName: 'Neva',
    lastName: 'Burnett'
  },
  {
    age: 31,
    firstName: 'Alvarado',
    lastName: 'Knowles'
  },
  {
    age: 29,
    firstName: 'Vasquez',
    lastName: 'Dyer'
  },
  {
    age: 24,
    firstName: 'Daugherty',
    lastName: 'Collier'
  },
  {
    age: 32,
    firstName: 'Brooks',
    lastName: 'Salinas'
  },
  {
    age: 30,
    firstName: 'Haynes',
    lastName: 'Rich'
  },
  {
    age: 31,
    firstName: 'Conley',
    lastName: 'Burch'
  },
  {
    age: 31,
    firstName: 'Rosanne',
    lastName: 'House'
  },
  {
    age: 37,
    firstName: 'Karin',
    lastName: 'Olson'
  },
  {
    age: 30,
    firstName: 'Dunn',
    lastName: 'Robbins'
  },
  {
    age: 39,
    firstName: 'Oneal',
    lastName: 'Joseph'
  },
  {
    age: 24,
    firstName: 'Carol',
    lastName: 'Kerr'
  },
  {
    age: 29,
    firstName: 'Kari',
    lastName: 'Meadows'
  },
  {
    age: 35,
    firstName: 'Grimes',
    lastName: 'Bullock'
  },
  {
    age: 23,
    firstName: 'Tamera',
    lastName: 'Strong'
  },
  {
    age: 25,
    firstName: 'English',
    lastName: 'Morse'
  },
  {
    age: 25,
    firstName: 'Christi',
    lastName: 'Myers'
  },
  {
    age: 23,
    firstName: 'Berger',
    lastName: 'Craft'
  },
  {
    age: 31,
    firstName: 'Yolanda',
    lastName: 'Boyd'
  },
  {
    age: 30,
    firstName: 'Yesenia',
    lastName: 'Jefferson'
  },
  {
    age: 35,
    firstName: 'Aida',
    lastName: 'Solis'
  },
  {
    age: 38,
    firstName: 'Sanford',
    lastName: 'Gregory'
  },
  {
    age: 23,
    firstName: 'Johnson',
    lastName: 'Howell'
  },
  {
    age: 30,
    firstName: 'Montoya',
    lastName: 'Hunt'
  },
  {
    age: 35,
    firstName: 'Hollie',
    lastName: 'Perry'
  },
  {
    age: 36,
    firstName: 'Fay',
    lastName: 'Saunders'
  },
  {
    age: 26,
    firstName: 'Fletcher',
    lastName: 'Haley'
  },
  {
    age: 29,
    firstName: 'Barbara',
    lastName: 'Duncan'
  },
  {
    age: 35,
    firstName: 'Osborne',
    lastName: 'Lopez'
  },
  {
    age: 32,
    firstName: 'Jenna',
    lastName: 'Moran'
  },
  {
    age: 39,
    firstName: 'Terrell',
    lastName: 'Savage'
  },
  {
    age: 31,
    firstName: 'Tamika',
    lastName: 'Reilly'
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
