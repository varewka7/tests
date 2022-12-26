// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву
// з усіма елементами двох вихідних firstArray і
// secondArray.
// Параметр maxLength містить максимально допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, функція
//  повинна повернути копію масиву довжиною maxLength елементів.
//  В іншому випадку функція повинна повернути новий масив повністю.



// function makeArray(firstArray, secondArray, maxLength) {
//   const newMakeArray = firstArray.concat(secondArray)

//   if (newMakeArray.length > maxLength) {
//     return maxLength
//   } else {
//     return newMakeArray

//   }

// }
// const result = makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);


// // const result = makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)
// console.log(result)


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
 
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// // Change code below this line
// console.log(apartment.price);
// console.log(apartment.rating);
// console.log(apartment.owner.name);
// console.log(apartment.tags);


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };


// ------------MODULE 3/7---------------
// // // Change code below this line
// // apartment.area= 60;
// // apartment.rooms = 3;
// // apartment.location = {};
// // apartment.location.country = "Jamaica";
// // apartment.location.city = "Kingston";

// // console.log(apartment.area);
// // console.log(apartment.rooms);
// // console.log(apartment.location);
// // console.log(apartment.location.country);
// // console.log(apartment.location.city);
// ---------------MODULE 3/7----------------


// ------------- FOR ...IN---------------

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Mango";
// console.log(dog.name)

// for (const key in animal) {
//   if (animal.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(animal[key])
//   }
// }
// // console.log(dog.hasOwnProperty("name"))

// --------------FOR...IN-----------------


// --------------------------------------MODULE 3/12---------------------------------------
// Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей об'єкта в параметрі object.
// Використовуй змінну propCount для зберігання кількості властивостей об'єкта.

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line}

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;

//     //     console.log(key)
//     // console.log(object[key])
//     }
  
// }

//   // Change code above this line
//   return propCount;
// }
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))
// --------------------------------------------------------------------------------------------



// -------------------------------MODULE 3/13--------------------------------------------------
//   Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
//   Запиши у змінну keys масив ключів власних властивостей об'єкта apartment,
//     і додай в масив values всі значення його властивостей.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// let values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys)

// for (const key of keys) {
//   // console.log(key);
//   // console.log(apartment[key]);
//   values.push(apartment[key])
// }

// console.log(values);
// ---------------------------------------------------------------------------------------------



// ----------------------------------------- MODULE 3 / 14-------------------------------------------
//   Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і,
//     можливо, але не обов'язково, цикл for...of.


// ----------------------------------варіант1----------------------------------------
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   const keys = Object.keys(object);
//   // console.log(keys);

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Change code above this line
// }
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// console.log(countProps({}))



// ---------------------------------варіант2--------------------------------------
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   const keys = Object.keys(object);
//   // console.log(keys);

//   for (const key of keys) {
//       propCount += 1;
    
//   }

//   return propCount;
//   // Change code above this line
// }
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// console.log(countProps({}))
// ------------------------------------------------------------------------------------


// ----------------------------------------MODULE 3 / 15------------------------------------
//   Запиши у змінну keys масив ключів власних властивостей об'єкта apartment,
//   а у змінну values - масив всіх значень його властивостей.
// Використовуй методи Object.keys() і Object.values().

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);

// const values = Object.values(apartment);
// console.log(values)

// --------------------------------------------------------------------------------------------------



// --------------------------------- MODULE 3 / 16-----------------------------------------------------------

//   Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, де ім'я властивості - це ім'я співробітника,
//    а значення властивості - це зарплата.Функція повинна розрахувати загальну суму зарплат співробітників і повернути її.
//  Використовуй змінну totalSalary для зберігання загальної суми зарплати.

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const keys = Object.keys(salaries);
//   console.log(keys);

//   const values = Object.values(salaries);
//   console.log(values);

//   for (const value of values) {
//     totalSalary += value;
//   }


//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({}))
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }))
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }))
// -------------------------------------------------------------------------------------------------------------


// --------------------------------------------- MODULE 3 / 17---------------------------------------------------------

//   Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex,
//  а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line


// for (const colour of colors) {
  
//   // console.log(colour);
  
//   // console.log(colour.hex);
//   hexColors.push(colour.hex);
  
//   // console.log(colour.rgb);
//   rgbColors.push(colour.rgb)
// }

// console.log(hexColors)
// console.log(rgbColors);

// ----------------------------------------------------------------------------------------------------------------------


// ------------------------------------------MODUL 3/18--------------------------------------------------------------------

// Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту.
// Функція шукає об'єкт продукту з таким ім'ям(властивість name) в масиві products і повертає його ціну(властивість price).
//  Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
  
//   for (const key of products) {
//     if (productName === key.name) {
//      return key.price
//     }
  
// }
//  return null
//   // Change code above this line
// }
// console.log(getProductPrice("Radar"))
// console.log(getProductPrice("Scanner"))
// console.log(getProductPrice("Droid"))
// console.log(getProductPrice("Grip"))
// ----------------------------------------------------------------------------------------------



// ------------------------------------------MODUL 3 / 19--------------------------------------
  
//   Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості.
//   Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products.
//   Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

 
// function getAllPropValues(propName) {
//   let total = []
  
  

//   for (let product of products) {
//     const key = Object.keys(product);
//   // console.log(key)
    
//     if (key.includes(propName)) {
//       total.push(product[propName])
//     }
//   }
// return total


//   // Change code above this line
// }


// console.log(getAllPropValues("name"))
// console.log(getAllPropValues("quantity"))
// console.log(getAllPropValues("price"))
// console.log(getAllPropValues("category"))

// --------------------------------------------------------------------------------------------------


// ------------------------------------------------- MODULE 3 / 20--------------------------------

//   Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName - назва товару.
//  Функція повинна повернути загальну вартість(ціна * кількість) товару з таким ім'ям з масиву products.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalPrice = 0;

//   for (const product of products) {
//     if (product.name === productName) {
//       totalPrice += product.price * product.quantity;
//     }
//   }
// return totalPrice


//   // Change code above this line
// }
// console.log(calculateTotalPrice("Blaster"))
// console.log(calculateTotalPrice("Radar"))
// console.log(calculateTotalPrice("Scanner"))
// console.log(calculateTotalPrice("Droid"))
// console.log(calculateTotalPrice("Grip"))

// -------------------------------------------------------------------------------------------



// ------------------------------------- MODULE 3 / 21---------------------------------------

//   Складні дані завжди представлені об'єктом.
// Багаторазові звернення до властивостей об'єкта візуально забруднюють код.

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures
// // console.log(highTemperatures)

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// ----------------------------------------------------------------------------------------


// ----------------------------------------MODULE 3 / 22----------------------------------------
  
//   У прогнозі максимальних температур також може бути необов'язкова властивість icon - іконка погоди.
//   Заміни оголошення змінних yesterday, today, tomorrow і icon однією операцією деструктуризації властивостей об'єкта highTemperatures.
//    Задай значення за замовчуванням для icon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".


// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", } = highTemperatures;
// console.log(highTemperatures)
// console.log(icon)

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// -----------------------------------------------------------------------------------------------------



// ------------------------------------------- MODULE 3 / 24 ------------------------------------------------

// Виконай рефакторинг циклу for...of таким чином, щоб в ньому використовувалася деструктуризація об'єкта.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors)

// ---------------------------------------------------------------------------------------------------

// -----------------------------------------------MODULE 3 / 25-------------------------------------------

// Ми отримали прогноз погоди на два дні, з мінімальними і максимальними температурами,
//   а також необов'язковими іконками. Заміни оголошення всіх змінних однією операцією деструктуризації властивостей об'єкта forecast.
// Задай значення за замовчуванням для іконок, змінних todayIcon
// і tomorrowIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: {
//     high: highToday,
//     low: lowToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", },
//   tomorrow: {
//     high: highTomorrow,
//     low: lowTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", } } = forecast

//   console.log("forecast", forecast)

// ---------------------------------------------------------------------------------------------------------------

// ---------------------------------------------MODULE 3 / 26-------------------------------------------------

// Функція calculateMeanTemperature(forecast) приймає один параметр forecast - об'єкт температур на два дні наступного формату.
// Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {
//     today: {
//       high: todayHigh,
//       low: todayLow, },
    
//       tomorrow: {
//         high: tomorrowHigh,
//         low: tomorrowLow, }
//   } = forecast
  
//   console.log(todayHigh);
//   console.log(todayLow);
//   console.log(tomorrowHigh);
//   console.log(tomorrowLow)
// // console.log(forecast)
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} })

// -----------------------------------------------------------------------------------------------------------


// --------------------------------------------------MODULE 3 / 30---------------------------------------------------

// Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями.

// text - текст завдання.
// category - категорія завдання.
// priority - пріоритет завдання.

// Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму параметр data.
//  У новому об'єкті повинна бути властивість completed, значення якої зберігається в однойменній локальній змінній.

// В параметрі data гарантовано буде тільки властивість text, а інші дві, category і priority, можуть бути відсутніми.
//   Тоді, в новому об'єкті завдання, у властивостях category і priority повинні бути значення за замовчуванням,
//   що зберігаються в однойменних локальних змінних.

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line

// // return { ...{ category, priority, completed }, ...data };


//   // Change code above this line
// }

// console.log(makeTask({}))
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }))


// ----------------------------------------------------------------------------------------------------



// ---------------------------------------SPRED-------------------------------------------------------------


// const a = {
//   x: 5,
//   e: 9,
//   s: 6,
// };
// const b = {
//   x: 9,
//   l: 3,
//   s: 0
// };

// const c = {
//   ...a,
//   ...b
// };

// console.log(c)


// const a = {
//   r: 0,
//   p: 9,
//   m: 2,
// };

// const b = {
//   p: 6,
//   l: 5,
//   s: 11,
// };

// const c = {
//   ...a,
//   ...b,
//   m: 14,
// };

// console.log(c);

// --------------------------------------------------------------------------------------------------

// --------------------------------------- MODUL 3 / 31-------------------------------------------------

//     Використовуючи операцію rest, доповни код функції add() таким чином,
//         щоб вона приймала будь - яку кількість аргументів, рахувала і повертала їх суму.

// Change code below this line

// function add(...args) {
//     console.log(args);

//     let total = 0;

//     for (const arg of args) {
//         total += arg;
//     }
//     return total;
//   // Change code above this line
// }
// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));

// ----------------------------------------------------------------------------------------------------------


// ------------------------------------------MODULE 3 /32--------------------------------------------------------

// Функція addOverNum() рахує суму всіх аргументів.
// Зміни параметри і тіло функції addOverNum() таким чином, щоб вона рахувала суму тільки тих аргументів,
//     які більші за задане число.Це число повинно бути першим параметром функції.

// Change code below this line
// function addOverNum(a, ...args) {
//     // console.log(a);
    
//   let total = 0;

//     for (let arg of args) {
//         if (a < arg) {
//             total += arg;
//         }
//   }

//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8))

// -------------------------------------------------------------------------------------------------------


// ----------------------------------- MODULE 3 / 33---------------------------------------------------------

//     Функція findMatches() приймає довільну кількість аргументів.
// Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.

// Доповни код функції таким чином, щоб вона повертала новий масив matches,
//     в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.

//     Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив[1, 2],
//         тому що тільки вони є в масиві першого аргументу.


// Change code below this line
// function findMatches(array, ...args) {

//     // console.log(array);

//     const matches = []; // Don't change this line

//     for (const element of array) {
//         if (args.includes(element)) {
//         matches.push(element);
//         }
//     }
    

//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// ----------------------------------------------------------------------------------------------------------



// ------------------------------------------MODULE 3 / 34-----------------------------------------------------

// Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки за аналогією з getBooks() і addBook(bookName).

// Метод removeBook(bookName) буде видаляти книгу за назвою.Повертає рядок "Deleting book <назва книги>",
//     де < назва книги > - це значення параметра bookName.

// Метод updateBook(oldName, newName) буде оновлювати назву книги на нову.
// Повертає рядок "Updating book <стара назва> to <нова назва>", де < стара назва > і < нова назва > -
//     це значення параметрів oldName і newName відповідно.


// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//     },
  
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//     },
  
//   removeBook(bookName) {
//         return `Deleting book ${bookName}`;
//     },

//     updateBook(oldName, newName) {
//       return `Updating book ${oldName} to ${newName}`
//   },

//   // Change code above this line
// };
// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

// ------------------------------------------------------------------------------------------------------------


// --------------------------------------- MODULE 3 / 35-----------------------------------------------------------

//     Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з oldName на newName у властивості books.
//  Використовуй indexOf() для того, щоб знайти потрібний елемент масиву, і splice() для того, щоб замінити цей елемент.


// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//     //    return this.books;
//     // Change code below this line

//     const bookIndex = this.books.indexOf(oldName);
//         this.books.splice(bookIndex, 1, newName);
//         return this.books;
//   },
   
//     // Change code above this line
    
// };

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));

// ----------------------------------------------------------------------------------------------------------------------


// -------------------------------------------MODULE 3 / 36------------------------------------------------------------------

// До нас звернулася власниця крамниці зілля «У старої жаби» і
// замовила програму для ведення інвентарю - додавання, видалення, пошуку та оновлення зілля.
// Додай об'єкту atTheOldToad властивість potions, значенням якої зроби порожній масив.

// const atTheOldToad = {
//   // Change code below this line

//     potions: [ ]


//   // Change code above this line
// };
// console.log(atTheOldToad)

// --------------------------------------------------------------------------------------------------------------------------


// ---------------------------------------------------MODULE 3 / 37------------------------------------------------------------

// Додай об'єкту atTheOldToad метод getPotions(), який просто повертає значення властивості potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line

//     getPotions(potion) {
//         return this.potions
//     }
//   // Change code above this line
// };
// // console.log(atTheOldToad)
// console.log(atTheOldToad.getPotions())

// --------------------------------------------------------------------------------------------------------------------------


// ---------------------------------------------------MODULE 3 / 38--------------------------------------------------------------

// Доповни метод addPotion(potionName) таким чином, щоб він додавав зілля potionName в кінець масиву зілля у властивості potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     addPotion(potionName) {
  
//             // Change code below this line
//             this.potions.push(potionName);

//         }
//     // Change code above this line
//   }

// -----------------------------------------------------------------------------------------------------------------------------


// ------------------------------------------------------MODULE 3 / 39-----------------------------------------------------------


// Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля potionName з масиву зілля у властивості potions.

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//         // Change code below this line
//         for (let i = 0; i < this.potions.length; i+=1 ) {
//             console.log(this.potions[i]);
//             if (potionName === this.potions[i]) {
//                 this.potions.splice(i, 1)
//             }
 


//             // Change code above this line
//         }
//     }
// }
// console.log(atTheOldToad.removePotion("Dragon breath"))

// ----------------------------------------------------------------------------------------------------------------------------


// ----------------------------------------------------------MODULE 3 / 40---------------------------------------------------------

// Доповни метод updatePotionName(oldName, newName) таким чином,
//     щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
      
//        const potionsIndex = this.potions.indexOf(oldName);
//         this.potions.splice(potionsIndex, 1, newName);
//         return this.potions;
//   },
   

//     // Change code above this line
//   }
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"))

// -------------------------------------------------------------------------------------------------------------------------


// ---------------------------------------------------------MODULE 3 / 41-------------------------------------------------------

// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому, можливо, й іншими характеристиками.
//  Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків, а з масивом об'єктів.

// getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.
//     addPotion(newPotion) - додає зілля newPotion(вже об'єкт) в масив у властивості potions, але тільки,
//     якщо такого зілля ще немає в інвентарі.
//  В іншому випадку повертається рядок.
// removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
// updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на newName в масиві potions.


// const atTheOldToad = {
//   potions: [
//     {
//       name: "Speed potion",
//       price: 460
//     },
//     {
//       name: "Dragon breath",
//       price: 780
//     },
//     {
//       name: "Stone skin",
//       price: 520
//     },
//   ],
    
    
  // Change code below this line
  // getPotions() {
  //   return this.potions;
  // },
  // addPotion(newPotion) {
  //   for (const potion of this.potions) {


  //     if (potion.name === newPotion.name) {
  //       return `Error! Potion ${newPotion.name} is already in your inventory!`;
  //     }
  //   }
  //   this.potions.push(newPotion);
  // },


  // removePotion(potionName) {
 
  //   for (let i = 0; i < this.potions.length; i += 1) {
      // console.log(this.potions[i])
    
  //     if (potionName.name === this.potions[i].name) {
  //       this.potions.splice(i, 1)
  //     }


  //     if (!potionName.name === this.potions[i].name) {
  //       return `Potion ${potionName} is not in inventory!`;
  //     }
  //   }
  
  // },


  // updatePotionName(oldName, newName) {
    //   // for (const potion of this.potions) {
    //   // console.log (potion)
    //   if (potion.name === oldName.name) {
    //     this.potions.splice(oldName.name, 1, newName)
    //   }
     
//     // }

//     // //    
//     for (let i = 0; i < this.potions.length; i += 1) {
//       console.log(this.potions[i])
    
//       if (this.potions[i].name === oldName) {

//         this.potions[i].name = newName;
//       }
//     }
//     // Change code above this line
  
//   }
// }
// // console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }))
// // console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }))
// // console.log(potion)
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"))
// // console.log(atTheOldToad.removePotion("Speed potion"))
