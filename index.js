const BAZA_PODATAKA = {
  COMPANIES: [],
  PEOPLE: [],
  NEXT_COMPANY_ID: 1,
  NEXT_PERSON_ID: 1,
  addCompany: function (company) {
    company.ID = this.NEXT_COMPANY_ID;
    this.COMPANIES.push(company);
    this.NEXT_COMPANY_ID += 1;

    return company;
  },
  addPerson: function (person) {
    person.ID = this.NEXT_PERSON_ID;
    this.PEOPLE.push(person);
    this.NEXT_PERSON_ID += 1;

    return person;
  }
}




function createCompany(name, location, employees = []) {

  return {
    ID: undefined,
    name,
    location,
    employees,
    generateSalary: function (min, max) {
      const randNum = Math.floor(min + Math.random() * (max - min));

      return Math.round(randNum / 100) * 100;
    },
    hirePerson: function (person) {
      person.isEmployed = true;
      person.salary = this.generateSalary(1000, 3000);
      person.companyID = this.ID;
      this.employees.push(person);

      return person;
    },
    fireEmployee: function (employeeID) {
      let indexOfEmployee = -1;
      let employee = undefined;
      for (let i = 0; i < this.employees.length; i++) {
        const element = this.employees[i];
        if (element.ID === employeeID) {
          indexOfEmployee = i;
          employee = element;
        }
      }
      employee.isEmployed = false;
      employee.salary = undefined;
      employee.companyID = undefined;
      return this.employees.splice(indexOfEmployee, 1);
    }

  }
}

function createPerson(firstName, lastName) {

  return {
    ID: undefined,
    firstName,
    lastName,
    isEmployed: false,
    salary: undefined,
    companyID: undefined,
  }
}

function setupPeople() {
  const peopleNames = `Rosa Rose
  Sage Turner
  Terrence Blackwell
  Gisselle Bauer
  Enzo Mcdaniel
  Gloria Jones
  Kennedy Shields
  Bradyn Larsen
  India Rush
  June Everett
  Jamison Haney
  Hugo Castro
  Rohan Cox
  Averie Hart
  Grayson Hammond
  Patricia Copeland
  Brian Dean
  Muhammad Horton
  Noelle Lucas
  Roger Coffey
  Sam Farmer
  Charlize Bush
  Tyrell Howard
  Kylie Melendez
  Ruben Bailey
  Emilee Page
  Mattie Schaefer
  Stephany Pope
  Mireya Montoya
  Ashlee Dominguez
  Gerardo Nelson
  Evan Juarez
  Braylen Byrd
  Chad Calhoun
  Avery Day
  Cora Liu
  Colt Malone
  Maritza Copeland
  Raelynn Hayes
  Ibrahim Morales
  Parker Obrien
  Nathanial Osborne
  Krista Owen
  Aliana Mendoza
  Charlie Beck
  Dallas Maxwell
  Gavyn Chavez
  Stanley Golden
  Keely Stein
  Raphael Hunt
  Carmelo Ray
  Patience Khan
  Nicole Cantu
  Geovanni Beard
  Savion Aguirre
  Karma Cross
  Selah Woods
  Chanel Shah
  Walter Delacruz
  Jessie Mcmillan
  Antoine Castillo
  Emmy Watson
  Camryn Proctor
  Mariah Hammond
  Alexzander Riley
  Jovani Bullock
  Moriah Wilkinson
  Yareli Durham
  Allyson Alexander
  Anton Phillips
  Alexandra Travis
  Isai Adams
  Payton Mcmahon
  Shaniya Estes
  Felipe Dickson
  Marisa Duncan
  Douglas Patterson
  Kymani Stewart
  Miya Fritz
  Irvin Villarreal
  Julian Middleton
  Clara Mooney
  Henry Guerrero
  Alec Davis
  Irene Mckinney
  Kamila Burns
  Waylon Callahan
  Roman Mitchell
  Mikayla Costa
  Gauge Mckee
  Haven Weeks
  Georgia Harrell
  Ruby Benitez
  Krystal Gates
  Marquis Dorsey
  Marlon Quinn
  Braylen Zimmerman
  Chaya Austin
  Kaylie Terry
  Melody Hill
  Amari Sutton
  Talan Salas
  Elena Schultz
  Leo Mann
  Antonio Madden
  Rosa Paul
  Dillan Hodges
  Nehemiah Mcmahon
  Shaun Cobb
  Judith Hutchinson
  Alvin Petersen
  Parker Lowery
  Ryker Blackburn
  Caitlyn Mercado
  Jazlynn Page
  Whitney Ho
  Tommy Howard
  Gianna Webster
  Whitney Koch
  Melvin Stevenson
  Nathanial Strickland
  Zariah Howell
  Devin Landry
  Alondra Mack
  Conrad Schultz
  Madisyn Copeland
  Courtney Horne
  Maribel Carlson
  Kaia Merritt
  Bennett Liu
  Blake English
  Conrad Allison
  Colton Lozano
  Laurel Gay
  Jonah Herring
  Carter Heath
  Amelie Mann
  Jeremiah Sanford
  Marcos Fitzpatrick
  Kailee Medina
  Caylee Evans
  Ralph Shea
  Andres Montoya
  Journey Lucero
  Mason Roberts
  Javion Callahan
  Nevaeh Douglas
  Elijah Jensen
  Grady Stephens
  Jude Rivera
  Damian Hernandez
  Whitney Mays
  Mikaela Fitzgerald
  Julio Knight
  Angela Vargas
  Randall Bird
  Maximus Whitaker
  Blaine Golden
  Giovani Gamble
  Quintin Brandt
  Jaylon Roman
  Cohen Stewart
  Griffin Cochran
  Athena Wong
  Adalyn Hatfield
  Amaris Harrison
  Lennon English
  Jonathan Bruce
  Rudy Cabrera
  Ethen Knapp
  Rubi Harrison
  Sophia Pineda
  Everett Bean
  Landyn Becker
  Caroline Moran
  Uriel Koch
  Lorelei Vang
  Fisher Gay
  Sanai Barr
  Sidney Choi
  Ellie Villanueva
  Roderick Moss
  Kali Mercado
  Brooklynn Calderon
  Yadiel Bond
  Jayce Mcintosh
  Elaina Ponce
  Camille Herring
  Eugene Norris
  Tony Eaton
  Hassan Shepard
  Annika Montgomery
  Omari Travis
  Kaiden Merritt
  Danny Durham
  Makaila Vasquez
  Leah Mitchell
  Jade Burgess
  Mattie Ramos
  Kaydence Levine
  Junior Clayton
  Jarrett Duncan
  Trevon Lloyd
  Juan Gregory
  Terrance Gamble
  Gabriel Obrien
  Madilynn Hernandez
  Colton Steele
  Audrey Durham
  Reece Montes
  Izabelle Allison
  Mariah Suarez
  Kaydence Copeland
  Lawson Carey
  Kailee Blanchard
  Lilian Cole
  Trystan Cannon
  Jaqueline Cuevas
  Seth Giles
  Mike Mcfarland
  Anton Santiago
  Jamya Logan
  Averie Wilkins
  Freddy Sweeney
  Tori Cox
  Payton Mercado
  Hailie Mathews
  Ace Dawson
  Alisson Finley
  Annika Green
  Angelica Morrow
  Jada Olson
  Yahir Dickson
  Kelvin Maddox
  Keenan Lynn
  Teresa Galvan
  Emerson Horton
  Corinne Savage
  Harmony Keith
  Emily Allen
  Kayla Frazier
  Alayna Mcguire
  Aimee Fisher
  Helena Hodge
  Trent Whitney
  Rene Daugherty
  Elliott Buckley
  Dennis Brewer
  Roberto Parsons
  Hallie Noble
  Raul Harper
  Ethan Rice
  Bryanna Andrade
  Darian Shelton
  Derrick Pacheco
  Kate Cunningham
  Ellen Santana
  Claire Faulkner
  Julius Moore
  Camryn Mckenzie
  Jorden Cabrera
  Linda Thomas
  Bradley Lloyd
  Ishaan Tate
  Katie Ayers
  Kameron Peterson
  Savannah Carter
  Manuel Mccarthy
  Jaelynn Reyes
  Jaquan Cook
  Maximus Nixon
  Bethany Moss
  Allie Villa
  Yasmin Mullins
  Roland Francis
  Danielle Middleton
  Yadiel Walsh
  Hayden Moyer
  Victoria Fleming
  Thomas Booth
  Davon Hahn
  Zaniyah Jordan
  Tamara Valdez
  August Sims
  Angeline Dickson
  Alyssa Li
  Bentley Cross
  Xiomara Mueller
  Hadassah Hanna
  Renee Powell
  Jazmyn Leon
  Devon Jones
  Laura Glenn
  Mireya Waller
  Viviana Mahoney
  Macie Lopez
  Amiya Rojas
  Messiah Bond
  Trevor Spears
  Wilson Spence
  Draven Herrera
  Cassius Short
  Dax Mckinney
  Emily Wagner
  Kaiden Hogan
  Jazmine Alvarez
  Lyla Ponce
  Leonardo Waller
  Miley Watkins
  Stacy Sherman
  Skyler Haynes
  Alex Mosley
  Melina Trevino
  Amare Sanders
  Xander Coleman
  Lauren Merritt
  Madalynn Franco
  Alyson Hinton
  Miles Schmitt
  Azaria Best
  Iliana Mejia
  Jorge Soto
  Ellen Nolan
  Rose Richardson
  Quincy Reynolds
  Emelia Briggs
  Elise Hobbs
  Gilberto Coleman
  Bridget Liu
  Yasmine Harmon
  Broderick Campbell
  Raul Randolph
  Kobe Luna
  Enrique Hart
  Jaslyn Dawson
  Monique Arias
  Giada Hall
  Phillip Dudley
  Brendan Lyons
  Dylan Huff
  Taylor English
  Adeline Whitaker
  Xander Delgado
  Cullen Cole
  Yoselin Davila
  Bella Barron
  Brent Acevedo
  Haiden Curry
  Ismael Moore
  Denise Harris
  London Thornton
  Chad Hurst
  Luna Fletcher
  Asher Navarro
  Yasmin Graham
  Jacoby Flynn
  Craig Mahoney
  Aria Spears
  Bryce Wallace
  Dania Stevens
  Tyrell Cantu
  Riley Choi
  June Salazar
  Oscar Andersen
  Reynaldo Fritz
  Brady Bryant
  Keegan Reyes
  Willow Murillo
  Ximena Phillips
  Kolton Braun
  Landon Jimenez
  Misael Osborn
  Cali Macias
  Nikhil Obrien
  Beau Olsen
  Simeon Fry
  Aditya Camacho
  Chaya Payne
  Harley Welch
  Byron Bird
  Beau Jordan
  Rolando Chambers
  Tori Sutton
  Ronnie Landry
  Yaritza Patrick
  Rishi Logan
  Jan Saunders
  Janessa Sharp
  Jolie Pratt
  Antwan Snow
  Gary Vaughan
  Carina Gill
  Kyleigh Flores
  Lilia Tran
  Javon Lucero
  Denise Cannon
  Liam Cardenas
  Rodolfo Donovan
  Carter Rodriguez
  Jayda Navarro
  Laurel Pham
  Alan Melendez
  Beau Salazar
  Giada Barrett
  Skylar Reeves
  Sarai Oneal
  Wesley Acosta
  Skylar Bridges
  Pierce Cantu
  Colten Wells
  Ross Mcgee
  Conor Lee
  Marin Lyons
  Vaughn Bowers
  Yoselin Hopkins
  Martin Best
  Anton Odom
  Jovany Blackburn
  Nina Wallace
  Gabriela Mata
  Tess Ibarra
  Aryana Bentley
  Angelica Norris
  Maritza Mathews
  Reece Adkins
  Case Calhoun
  Mason Simon
  Joe Hogan
  Colton Ayers
  Annabelle Stone
  Lailah Rosales
  Emerson Gibson
  Frank Salinas
  Danny Jennings
  Keith Mcclure
  Darnell Blackburn
  Alicia Haley
  Cullen Weaver
  Tess Zimmerman
  Jaiden Gates
  Ayden Hammond
  Khloe Hamilton
  Shawn Mueller
  Eve Daniels
  Kamryn Turner
  Charlie Werner
  Elaine Mathews
  Bobby Mayo
  Gisselle Pollard
  Prince Lara
  Arthur Beard
  Kaitlyn Gregory
  Kamila Reid
  Jadyn Nielsen
  Toby Garcia
  Gianna Briggs
  Yurem Vaughan
  Rebecca Melton
  Shannon Rodgers
  Drew Salas
  Jaylen Carlson
  Amanda Frazier
  Elle Walls
  Esther Mathis
  Jeffery Pittman
  Byron Barrett
  Nylah Salinas
  Santiago Rios
  Brayden Coleman
  Jarrett Zamora
  Roderick Hoffman
  Elise Wolf
  Alexus Duran
  Lillie Schneider
  Emmy Hodges
  Amani Case
  Addison Zavala
  Ayaan Reilly
  Gracie Ramirez
  Janessa Reynolds
  Gregory Sutton
  Carly Cook
  Amara Bauer
  Zion Reyes
  Sidney Hogan
  Jade Fox
  John Gardner
  Douglas Esparza
  Enrique Love
  Tiana Bruce
  Addison Gamble
  Kathy Hooper
  Atticus Davidson
  Haley Blake
  Randall Stewart
  Madden Schultz
  Reese Clay
  Angela Oneal
  Cristian Brewer
  Hugo Stanley
  Roberto Howell
  Adison Fitzpatrick
  Derick Holt
  Carmen Baxter
  Elise Frey
  Camilla Benjamin
  Tabitha Walker
  Hanna Roy
  Simon Sampson
  Jaidyn Ewing
  Rosemary Newman
  Theodore Brown
  Moshe Lucas
  Dane Sosa
  Joaquin Middleton
  Gage Mcfarland
  Sage Sanford
  Aubrey Pollard
  Yoselin Cruz
  Arabella Simon
  Mckayla Noble
  Bronson Nelson
  Mayra Carlson
  Uriah Nichols
  Willow Ingram
  Brooks Downs
  Eli Beard
  Trinity Norris
  Deanna Owens
  Jeremiah Walter
  Jake Austin
  Gretchen Graves
  Spencer Rice
  Mohammad Huff
  Jacquelyn Bautista
  Belen Hardin
  Leonidas Taylor
  Ben Booker
  Karley Steele
  Alani Richmond
  Jovanni Morton
  Yahir Rodriguez
  Alexus Dyer
  Mariana Bentley
  Keegan Weeks
  Toby Bass
  Jaiden Norris
  Sage Marshall
  Jerry Stafford
  Donald Gonzalez
  Reed Keller
  Arthur Downs
  Brock Ware
  Lexi Johnson
  Kyra Lutz
  Mark Trevino
  Rebekah Chan
  Trace Cline
  Keaton Thompson
  Conor Bernard
  Marvin Williams
  Priscilla Proctor
  Charlotte Clark
  Brandon Andersen
  Zechariah Patterson
  Annalise Clark
  Trey Mason
  Fernanda Warner
  Valery Richardson
  Jensen Goodwin
  Eva Hogan
  Kenyon Mccall
  Leanna Chaney
  Slade Leonard
  Davion Mann
  Nasir Ellison
  Mckinley Cobb
  Taniyah Stewart
  Veronica Pollard
  Jon Nelson
  Allan Gates
  Deangelo Shelton
  Kaelyn Cordova
  Eugene Mccarty
  Stanley Frank
  Dominique Flynn
  Anton Schmidt
  Kieran Osborne
  Claire Thornton
  Renee Valencia
  Davis Ware
  Sydney Castaneda
  Phoenix Kemp
  Cyrus Merritt
  Olive Burns
  Braxton Oneill
  Kyle Mejia
  Emilio Clay
  Alexis Cochran
  Cash Cohen
  Ramiro Charles
  Samantha Casey
  Mariam Ali
  Rowan Houston
  Caiden James
  Jaden Fuller
  Sidney Mcgrath
  Kamron Carlson
  Giselle Ross
  Karma Strong
  Kathy Bolton
  Kareem Francis
  Easton Donaldson
  Hezekiah Beck
  Bobby Moody
  Mario Marsh
  Jaquan Bowen
  Kaitlin Howe
  Aryan Blankenship
  Zaria Pittman
  Aryan Hansen
  Ari Pope
  Ariel Curtis
  Aspen Parker
  Colt Durham
  Presley Davenport
  Marquise Buckley
  Austin Small
  Abbigail Velasquez
  Kate Hampton
  Edward Macias
  Rayne Hart
  Anne Hinton
  Cole Cannon
  Simon Stevenson
  Emiliano Garrett
  Gavyn Bauer
  Nash Nolan
  Mila Lester
  Sonia Novak
  Hayden Miranda
  Johan Olsen
  Roman Stein
  Kathy Soto
  Kaylynn Odonnell
  Leila Berg
  Tiara Pearson
  Phillip Bowers
  Nikolai Powers
  Gia Holloway
  Kody Johnston
  Alanna Huynh
  Yamilet Conway
  Nancy Heath
  Kade Kent
  Kaylen Mills
  Sarahi Fields
  Elise Leblanc
  Keira Keller
  Lilyana Underwood
  Jacey Decker
  Harper Rice
  Bruce Mclean
  Ally Cordova
  Neil Newman
  Kyla Johnston
  Royce Griffin
  Xander Ford
  Lawson Werner
  Elliot Joyce
  Giuliana Burke
  Jair Byrd
  Claire Schultz
  Aria Watson
  Simone Villanueva
  Kassandra Banks
  Casey Mata
  Johanna Stark
  Emilio Maldonado
  Gemma Parrish
  Dakota Valdez
  Branson Middleton
  Diego Rowe
  Joslyn Reyes
  Joel Valentine
  Kevin Frey
  Erika Miller
  Averie Waller
  Arianna Fitzgerald
  Chance Greer
  Baylee Burch
  Savion Weeks
  Yaretzi Spears
  Angelica Mitchell
  Alaina West
  Daisy Lamb
  Lizeth Forbes
  Christopher Horne
  Precious Friedman
  Abril Hahn
  Phoenix Schneider
  Savanna Pacheco
  Adison Velez
  Devon Eaton
  Jenny Bowman
  Carl Robertson
  Xzavier West
  Princess Griffith
  Naima Sims
  Natasha Mack
  Jazmin West
  Janiah Villa
  Keon Downs
  Karly Irwin
  Vance Flores
  Lyla Cardenas
  Makai Alvarez
  Alonso Hammond
  Taylor Garner
  Devyn Rollins
  Emmalee Shah
  Rogelio Nielsen
  Brodie Floyd
  Keira Berg
  Aniyah Rivas
  Alejandro Nichols
  Jamir Gardner
  Kyan Mccormick
  Giuliana Williams
  Elianna Mitchell
  Anderson James
  Kenny Sims
  Chanel Holden
  Will Munoz
  Lucia Mendoza
  Gauge Russo
  Ernesto Peck
  Giselle Fowler
  Jonathan Chapman
  Aliyah Villa
  Tatiana Travis
  Orlando Harris
  Jaeden Atkinson
  Sage Freeman
  Sidney Hancock
  Felipe Ponce
  Giovani Villegas
  Deshawn Levy
  Alena Atkinson
  Kailey Davies
  Maeve Thompson
  Jordin Walsh
  Sidney Smith
  Aydan Hall
  Cooper Franco
  Sammy Hunter
  Bryce Washington
  Santino Yoder
  Wendy Castaneda
  Billy Bowman
  Cooper Harris
  Van Copeland
  Kaylen Kennedy
  Zaire Stevens
  Paula Hawkins
  Nyasia Werner
  Alyson Wagner
  Justine Marshall
  David Singh
  Maxim Murillo
  Abram Robertson
  Tiara Stone
  Leo Murphy
  Israel Travis
  Rudy Tanner
  Gunner Mosley
  Josiah Farmer
  Bentley Shannon
  Sharon Cervantes
  Ryan Kramer
  Trey Yates
  Cristal Barrera
  Blake Sutton
  Layla Sims
  Kelly Gallegos
  Clare Duran
  Kenna Simon
  Haven Gardner
  Jett Weiss
  Alexus Moses
  Madilyn Hoover
  Emilia Herrera
  Leon Noble
  Bennett Ramsey
  Salma Compton
  Haylee Wells
  King Adams
  Ben Krause
  Jordan Rodgers
  Jorge Horne
  Alyssa Velasquez
  Alexis Chapman
  Ulises Lamb
  Bruno Carey
  Zaid Bradley
  Heather Villanueva
  Alonzo Mcmillan
  Blaze Graham
  Liberty Beasley
  Moises Dean
  Yael Macdonald
  Aidyn Ramirez
  Kamren Boyd
  Stella Wall
  Graham Monroe
  Madyson Sharp
  Chaya Hall
  Diya Hunt
  Mckinley Charles
  Phoenix Rubio
  Aimee Murray
  Maverick Chaney
  Layton Burnett
  Wendy Gaines
  Justine Osborne
  Sonia Rice
  Cheyanne Mack
  Leroy House
  Nevaeh Vincent
  Maurice Wells
  Bo Barker
  Frederick Baxter
  Fernando Mercer
  Cade Foster
  Cindy Mora
  Memphis Harrell
  Kymani Chandler
  Eliza Maldonado
  Noah Pace
  Michael Pierce
  Victor Fox
  Brenden Coleman
  Grady Solis
  Alyssa Hardy
  Micah Small
  Leonardo Pollard
  Elliott Cochran
  Evelyn Boone
  Jaron Hatfield
  Makena Shaffer
  Jacob Howell
  Clare Greene
  Gianna Vance
  Jazlyn Hart
  Gloria Davidson
  Stacy Johnson
  Kendall Mosley
  Lacey Snyder
  Carsen Bruce
  Clinton Harding
  Alexis Carroll
  Ryland Barrera
  Mylie Hale
  Ezequiel Pearson
  Melvin Turner
  Dixie Charles
  Albert Jacobson
  Mohammad Boyd
  Annalise Bender
  Lawson Lowe
  Caylee Prince
  Samantha Franklin
  Ryleigh Glover
  Tabitha Church
  Leland Davies
  Aydan Williams
  Jeffrey Villanueva
  Zander Stein
  Kash Howard
  Jake Guzman
  Brooklyn Fuentes
  Esther Khan
  Jan Huffman
  Kira Patton
  Brayden Craig
  Carlos Mcgee
  Lauren Barry
  Grayson Potts
  Emmalee Buckley
  Holden Poole
  Abigayle Ruiz
  Georgia Brooks
  Chaim Ashley
  Beau Gross
  Cassandra Gross
  Shayla Kline
  Nathaniel Flores
  Jamie Farrell
  Victor Mccarthy
  Efrain Small
  Genevieve Cannon
  Jaylah Curry
  Ryan Campbell
  Trystan Hayes
  Josue Roberts
  Skyler Jenkins
  Nevaeh Walton
  Kaleb Drake
  Leonard Maddox
  Demetrius French
  Renee Jordan
  Shayla Pineda
  Augustus Stanley
  Brenden Barron
  Sanai Glover
  Callum Reyes
  Alex Burton
  Deacon Reynolds
  Giovanni Rose
  Lia Williams
  Dylan Watson
  Roselyn Stark
  Johnathan White
  Abril Miranda
  Emerson Cannon
  Karsyn Eaton
  Muhammad Hogan
  Jaden Dixon
  Kristen Travis
  Bria Farley
  Enrique Henson
  Noah Walters
  Ariel Wiggins
  Veronica Kemp
  Ramon Cobb
  Aaron West
  Justice Hancock
  Joyce Werner
  Jazlyn Hammond
  Jorden Charles
  Cecelia Kaiser
  Maliyah Bass
  Briana Craig
  Daniel Whitehead
  Isabell Osborne
  Bruce Wilkinson
  Bridger Jenkins
  Rebecca Glover
  Benjamin Rogers
  Carlo Duffy
  Crystal Obrien
  Damian Dominguez
  Julio Lewis
  Cynthia Melendez
  Yaretzi Baker
  Noelle Buchanan
  Armani Mcgee
  Natalya Ferrell
  William Beard
  Julian Wong
  Jamya Dennis
  Mary Huber
  Julien Lynch
  Leila Rojas
  Kenny Lawson
  Clara Ware
  Joel Wise
  Justice Knox
  Ronald Estrada
  Samson Goodman
  Skye Leonard
  Justine Dudley
  Alexander Faulkner
  Slade Torres
  Reese Kaufman
  Phoebe Keller
  Evelyn Forbes
  Jovany Washington
  Jerome Coffey
  Abagail Kline
  Ace Madden
  Rex Mack
  Alaina Meyers
  Aidyn Fuentes
  Luciana Fischer
  Milagros Bates
  Preston Clements
  Gabriel Foley
  Jovanni Stark
  Kenneth Salazar
  Ellie Copeland
  Chad Branch
  Nyla Melton
  Clarence Blake
  Jaylon Cowan
  Adonis Lutz
  Roger Paul
  Aria Berry
  Kingston Travis
  Adrianna Carroll`.split('\n');

  for (let i = 0; i < peopleNames.length; i++) {
    const fullName = peopleNames[i].trim().split(' ');
    console.log(fullName);
    BAZA_PODATAKA.addPerson(createPerson(fullName[0], fullName[1]));
  }
}

function countUnemployedPeople(people) {
  let count = 0;

  for (let i = 0; i < people.length; i++) {
    if (!people[i].isEmployed) count += 1;
  }

  return count;
}


function hireUndemployedPeople(company, people, percentage) {
  const unemployedCount = countUnemployedPeople(people);
  const numberToEmploy = unemployedCount * percentage / 100;
  let countEmployed = 0;
  while (countEmployed < numberToEmploy) {
    const randIndex = Math.floor(Math.random() * people.length);
    const person = people[randIndex];
    if (!person.isEmployed) {
      company.hirePerson(person);
      countEmployed += 1;
    }
  }
}
let lol = -1;
function firePeopleBelowAvgSalary(company, avgSalary) {
  const { employees } = company;

  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];

    if (employee.salary < avgSalary) {
      lol = employee.ID;
      company.fireEmployee(employee.ID);
    }
  }

}

const grogoth = BAZA_PODATAKA.addCompany(createCompany('Grogoth', 'Tuzla'));
const genelec = BAZA_PODATAKA.addCompany(createCompany('Genelec', 'Tuzle'));
const mljekara = BAZA_PODATAKA.addCompany(createCompany('Mljekara', 'Tuzla'));



setupPeople();
hireUndemployedPeople(grogoth, BAZA_PODATAKA.PEOPLE, 40);
hireUndemployedPeople(genelec, BAZA_PODATAKA.PEOPLE, 33);
hireUndemployedPeople(mljekara, BAZA_PODATAKA.PEOPLE, 50);


console.log(grogoth.employees.length);
firePeopleBelowAvgSalary(grogoth, 1500);
console.log(grogoth.employees.length);

for (let i = 0; i < BAZA_PODATAKA.PEOPLE.length; i++) {
  const element = BAZA_PODATAKA.PEOPLE[i];
  if (element.ID === lol) {
    console.log(element);
  }
}