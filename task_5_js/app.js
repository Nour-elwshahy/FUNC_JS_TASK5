//TASK_____1
// function addUsernames(list) {
//   const currentYear = new Date().getFullYear();
//   const CurrentYear = 2020;

//   return list.map((person) => {
//     const birthYear = currentYear - person.age;
//     const firstNameLower = person.firstName.toLowerCase();
//     const lastNameInitial = person.lastName.charAt(0).toLowerCase();

//     const username = `${firstNameLower}${lastNameInitial}${birthYear}`;

//     return {
//       ...person,
//       username: username,
//     };
//   });
// }

// var list1 = [
//   {
//     firstName: "Emily",
//     lastName: "N.",
//     country: "Ireland",
//     continent: "Europe",
//     age: 30,
//     language: "Ruby",
//   },
//   {
//     firstName: "Nor",
//     lastName: "E.",
//     country: "Malaysia",
//     continent: "Asia",
//     age: 20,
//     language: "Clojure",
//   },
// ];

// console.log(addUsernames(list1));
/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
//TASK___2
function countMeals(list) {
  const mealCounts = {};

  list.forEach((developer) => {
    const meal = developer.meal;

    if (mealCounts[meal]) {
      mealCounts[meal]++;
    } else {
      mealCounts[meal] = 1;
    }
  });

  return mealCounts;
}

var list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
    meal: "vegetarian",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
    meal: "standard",
  },
  {
    firstName: "Ramona",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
    meal: "vegan",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
    meal: "vegetarian",
  },
];

console.log(countMeals(list1));
/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//TASK___3

function findMissingDetails(developers) {
  const missingDetails = [];

  developers.forEach((developer) => {
    if (developer.firstName === null) {
      developer.question = "Hi, could you please provide your firstName.";
      missingDetails.push(developer);
    } else if (developer.language === null) {
      developer.question = "Hi, could you please provide your language.";
      missingDetails.push(developer);
    }
  });

  return missingDetails;
}

var list1 = [
  {
    firstName: null,
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: null,
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];

console.log(findMissingDetails(list1));
/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//TASK____4
function findOldestDevelopers(developers) {
  let maxAge = 0;
  const oldestDevelopers = [];

  for (const developer of developers) {
    if (developer.age > maxAge) {
      maxAge = developer.age;
    }
  }

  for (const developer of developers) {
    if (developer.age === maxAge) {
      oldestDevelopers.push(developer);
    }
  }

  return oldestDevelopers;
}

var list1 = [
  {
    firstName: "Gabriel",
    lastName: "X.",
    country: "Monaco",
    continent: "Europe",
    age: 49,
    language: "PHP",
  },
  {
    firstName: "Odval",
    lastName: "F.",
    country: "Mongolia",
    continent: "Asia",
    age: 38,
    language: "Python",
  },
  {
    firstName: "Emilija",
    lastName: "S.",
    country: "Lithuania",
    continent: "Europe",
    age: 19,
    language: "Python",
  },
  {
    firstName: "Sou",
    lastName: "B.",
    country: "Japan",
    continent: "Asia",
    age: 49,
    language: "PHP",
  },
];

console.log(findOldestDevelopers(list1));
/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//TASK___5 >>>LIKE TASK 2
function countLanguages(developers) {
  const languageCounts = {};

  developers.forEach((developer) => {
    const language = developer.language;

    if (languageCounts[language]) {
      languageCounts[language]++;
    } else {
      languageCounts[language] = 1;
    }
  });

  return languageCounts;
}

var list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
  },
  {
    firstName: "Ramon",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
  },
];

console.log(countLanguages(list1));
