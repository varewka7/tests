// const showTag = function () {
//     console.log("showTag -> this", this)
//     console.log("showTag -> this.tag", this.tag)
// }

// const user = {
//     tag: "Mango"
// }

// user.showUserTag = showTag
// console.log("user", user)

// ------------------------------------

// -----виклик без контексту, але об"явлена, як ф-ція-----

// const user = {
//     tag: "Mango",
//     showTag() {
//         console.log("showTag-> this", this)
//         console.log("showTag -> this.tag", this.tag)
//     }
// }

// user.showTag()

// const outerUserTag = user.showTag
// // outerUserTag() ----- буде undefined
// console.log(outerUserTag()) ----undefined


// -------------контекст в callback ф-ціях-----------

// const user = {
//     tag: "Mango",
//     showTag() {
//         console.log("showTag -> this", this)
//         console.log("showTag -> this.tag", this.tag )
//     }

// }

// user.showTag()

//  const invokeAction = function (action) {
//      console.log(action)


//      action() ------undefind
//  }

// invokeAction(user.showTag)-----undefined

// ----------------------------------------------------



//  -------------------- ТРЕНУВАННЯ---------------------

// const fn = function () {
//     console.log("fn -> this", this)
// }

// fn()  -----------  undefined

// -------------------ВПРАВА 2-----------------------------

// const book = {

//     title: "React for beginners",
//     showThis() {
//         console.log("showThis -> this", this)
//     },

//     showTitle() {
//         console.log("showTitle -> this.title", this.title )
//     },
// }

// // book.showThis() ----- object
 
// // const outerShowThis = book.showThis;
// // outerShowThis()   ------ undefined

// const outerShowTitle = book.showTitle;
// outerShowTitle()  --------- undefined


// --------------------ВПРАВА 3 --------------------------

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this)
//
//     };

//     // changeColor() ------ undefined

//     const sweater = {
//         color: 'teal'
//     };

//     sweater.updateColor = changeColor;

//     // sweater.updateColor('red') ----- посилання на sweater(object)

//     return sweater.updateColor;
// };

// const swapColor = makeChangeColor();

// swapColor('blue') ----- undefined

// makeChangeColor();

// ----------------------ВПРАВА 4----------------------------------------

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this)
//     };

//     return changeColor;
// }

// const updateColor = makeChangeColor();
// // updateColor('yellow');------ undefined

// const hat = {
//     color: 'blue',
//     updateColor,
// };

// // hat.updateColor('orange') ---- посилання на об"єкт hat

// -------------------ВПРАВА 5--------------------------------------

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this', this);
//         this.value += value;
//     },

//     decrement(value) {
//         console.log('decrement -> this', this);
//         this.value -= value;
//     },
// };

// const updateCounter = function (value, operation) {
//     operation(value)
// };
// updateCounter(10, counter.increment)
// updateCounter(5, counter.decrement)

// -------------call & apply------------------

// const showThis = function () {
//     console.log('showThis -> this', this)

// };

// const objA = {
//     a: 5,
//     b: 9,
//     c: 12,
// }

// // showThis.call(objA);
// // showThis()

// const changeColor = function (color) {
//     console.log('changeColor -> this', this);
//     this.color = color;
// };

// const hat = {
//     color: 'black',
// };

// // changeColor.call(hat, 'orange');
// // console.log(hat);

// const sweater = {
//     color: 'green',
// }
// // changeColor.call(sweater, 'blue');
// // console.log(sweater);

// // * bind----

// const changeHatColor = changeColor.bind(hat);
// changeHatColor('yellow');
// console.log(hat)

// const changeSweaterColor = changeColor.bind(sweater);
// changeSweaterColor('red');
// console.log(sweater)


// ------------------------------ПРОТОТИПИ------------------------------------------

// const objC = {
//     z: 9,
// };

// // console.log('objC', objC)
// // console.log(objC.hasOwnProperty('z'))

// const objB = Object.create(objC)
// objB.y = 5;

// // console.log(objB)
// // console.log(objB.z)

// const objA = Object.create(objB);
// objA.x = 1;

// console.log('objA', objA)
// // console.log(objA.x)
// console.log(objA.z)

// -------------------------ф-ція конструктор------------------------------------

// const Car = function ({ brand, model, price } = {}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
         

// };

// Car.prototype.sayHi = function () {
//     console.log('Car.prototype.sayHi -> this', this)
//     console.log('Hello :)')
// };

// Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice;
// };
         
// console.log(Car.prototype);


// const myCar = new Car({
//     brand: 'Audi',
//     model: "03",
//     price: '35000',
// });

// console.log(myCar)
// myCar.sayHi();
// myCar.changePrice(54000);

// const myCar2 = new Car({
//     brand: 'BMV',
//     model: '08',
//     price: '47000',
// })

// console.log(myCar2)
// myCar2.sayHi();
// myCar2.changePrice();

// const myCar3 = new Car({
//     brand: 'Porshe',
//     model: '007',
//     price: '67000',
// })

// console.log(myCar3)
// myCar3.sayHi();
// myCar3.changePrice();

// ---------ще раз ф-ція конструктор--------

// const User = function ({ email, password } = {}) {
//     console.log('User -> this', this)

//     this.email = email;
//     this.password = password;
// };

// User.prototype.changeEmail = function (newEmail) {
//     this.email = newEmail;
    
// }

// const Mango = new User({ email: 'mango@gmail.com', password: '1111' });


// Mango.changeEmail('varewka77777777')
// console.log(Mango)




// -----------------------MODULE 5 / 1-----------------------------------=---------------------------------------------------------

// Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// pizzaPalace.order("Four meats")
// console.log(pizzaPalace.order("Big Mike"))

// ----------------------------------------------------------------------------------------------------------------------------------

// -----------------------------MODULE 5 / 2-------------------------------------------------------------------------------------------

// Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого сервісу доставки їжі.
//  Виконай рефакторинг методів об'єкта customer, розставивши відсутні this під час звернення до властивостей об'єкта.

// Після оголошення об'єкта ми додали виклики методів у тій послідовності, в якій твій код перевірятимуть тести.
//  Будь ласка, нічого там не змінюй.

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750

// -------------------------------------------------------------------------------------------------------------------------

// -----------------------------------MODUL 5 / 3------------------------------------------------------------------------------


// Тестувальники знайшли баги в коді сервісу зберігання історії замовлень їжі.
// Тобі необхідно виправити їх, правильно розставивши this в методах об'єкта historyService, щоб методи почали працювати правильно.


// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// historyService.getOrdersByEmail("solomon@topmail.net")
// console.log(historyService.getOrdersByEmail("solomon@topmail.net"))

// ---------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------MODULE 5 / 4-------------------------------------------------------------------------

// Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;

// console.log(child.hasOwnProperty("age"))

// -------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------MODULE 5 / 5-------------------------------------------------------------------------------

// Зміни код, побудувавши ланцюжок прототипів таким чином,
//     щоб об'єкт ancestor був прототипом для parent, а той, своєю чергою, був прототипом для child.

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// // Change code above this line

// console.log(ancestor.isPrototypeOf("parent"))
// console.log(parent.isPrototypeOf("child"))
// console.log(ancestor.hasOwnProperty("surname"))

// ------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------MODULE 5 / 6----------------------------------------------------------------------------------

// Використовуючи ключове слово class, оголоси клас Car з порожнім тілом.

// class Car {}

// const car1 = new Car()
// console.log (car1)

// ------------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------MODULE 5 / 7-----------------------------------------------------------------------------------

// Додай класу Car метод constructor, який приймає три параметри:

// brand - марка автомобіля.
// model - модель автомобіля.
// price - ціна автомобіля.
// Клас Car повинен створювати об'єкт з однойменними властивостями brand, model і price,
//  значеннями яких повинні бути передані аргументи під час його виклику з оператором new.

// class Car {
//     constructor(brand, model, price) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
// }

// const car1 = new Car("Audi", "Q3", 36000);

// console.log(car1)

// --------------------------------------------------------------------------------------------------------------------------------------

// ------------------------------------MODULE 5 / 8------------------------------------------------------------------------------------------

// Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр - об'єкт з властивостями brand, model і price.
// Деструктуризуй об'єкт в сигнатурі (підписі) конструктора.

// class Car {
//   // Change code below this line
//     constructor({ brand, model, price } = {}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
  // Change code above this line
// }

// --------------------------------------------------------------------------------------------------------------------------------

// ----------------------------------MODULE 5 / 9-----------------------------------------------------------------------------------

// Додай класу Car два методи.

// getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
// changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його викликати на newPrice.

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//     }
    
   
//   // Change code below this line
//  getPrice() {
//         return this.price
//     }

//  changePrice(newPrice) {
//         this.price = newPrice
//     }


//   // Change code above this line
// }
// ------------------------------------------------------------------------------------------------------------------------

// -------------------------------------MODULE 5 / 10-------------------------------------------------------------------------

// Оголоси наступні методи класу:

// getItems() - повертає масив поточних товарів у властивості items об'єкта, який викликає цей метод.
// addItem(newItem) - приймає новий товар newItem і додає його в масив товарів у властивості items об'єкта,
//  який викликає цей метод.
//     removeItem(itemToRemove) - приймає товар itemToRemove і видаляє його з масиву товарів у властивості items об'єкта,
//  який викликає цей метод.
// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести.
// Будь ласка, нічого там не змінюй.


// class Storage {
//     constructor(items) {
//         this.items = items
//     }

//     getItems() {
//         return this.items
//     }

//     addItem(newItem) {
//         this.items.push(newItem)
//     }

//     removeItem(itemToRemove) {
//         // this.items = this.items.filter(el => el !== itemToRemove)

//         if (this.items.includes(itemToRemove)) {
//             this.items.splice(this.items.indexOf(itemToRemove), 1)
//         }

//     }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// ------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------MODULE 5 / 11------------------------------------------------------------------------

// Напиши клас StringBuilder, який приймає один параметр initialValue - довільний рядок, який записується у властивість value об'єкта,
//  що створюється.

// Оголоси наступні методи класу:

// getValue() - повертає поточне значення властивості value.
//     padEnd(str) - отримує параметр str(рядок) і додає його в кінець значення властивості value об'єкта,
// який викликає цей метод.
//     padStart(str) - отримує параметр str(рядок) і додає його на початок значення властивості value об'єкта,
// який викликає цей метод.
//     padBoth(str) - отримує параметр str(рядок) і додає його на початок і в кінець значення властивості value об'єкта,
// який викликає цей метод.
// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести.
// Будь ласка, нічого там не змінюй.

// class StringBuilder {
//     constructor(initialValue) {
//        this.value = initialValue;
//     };

//     getValue() {
//         return this.value
//     }

//     padEnd(str) {
//         this.value += str
//     }

//     padStart(str) {
//         this.value = str + this.value
//     }

//     padBoth(str) {
//         this.value = str + this.value + str

//     }

// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


// -----------------------------------------------------------------------------------------------------------------------
// Напишіть метод callTotalPrice(stoneName), який приймає назву каменю ш розраховує і повертає загальну вартість каменів
// з такм ім"ям, ціною та кількістю з властивості stones.

// const chopShop = {
//     stones: [
//         { name: 'Emerald', price: 1300, quantity: 4 },
//         { name: 'Diamond', price: 2700, quantity: 3 },
//         { name: 'Sapphire', price: 1400, quantity: 7 },
//         { name: 'Ruby', price: 800, quantity: 2 },
        
//     ],

//     callTotalPrice(stoneName) {
        
//         const item = this.stones.find((stone) => stone.name === stoneName)
//         return item.price * item.quantity
        
        
//     }
// }

// console.log(chopShop.callTotalPrice('Emerald')) //5200
// console.log(chopShop.callTotalPrice('Diamond')) //8100
// console.log(chopShop.callTotalPrice('Sapphire')) //9800
// console.log(chopShop.callTotalPrice('Ruby')) //1600

// -------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------MODULE 5 / 12-------------------------------------------------------------------------------

// Виконай рефакторинг класу Car таким чином, щоб властивість brand була приватною, і додай два методи для публічного інтерфейсу,
//     для читання і зміни цієї властивості.

// getBrand() - повертає значення приватної властивості brand.
// changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand.

// class Car {
//   // Change code below this line
//     #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//     }
    
//     getBrand() {
//         return this.#brand
//     }

//     changeBrand(newBrand) {
//         this.#brand = newBrand
//     }

//   // Change code above this line
// }

// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 }))

// ------------------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------MODULE 5 / 13----------------------------------------------------------------------------------

// Виконай рефакторинг класу Storage, зробивши властивість items приватною.

// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності,
//     в якій твій код перевірятимуть тести.Будь ласка, нічого там не змінюй.

// class Storage {
//   // Change code below this line
//     #items;

//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// ------------------------------------------------------------------------------------------------------------------

// ---------------------------------------MODULE 5 / 14-----------------------------------------------------------------

// Виконай рефакторинг класу StringBuilder, зробивши властивість value приватною.

// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності,
//     в якій твій код перевірятимуть тести.Будь ласка, нічого там не змінюй.

// class StringBuilder {
//   // Change code below this line
//     #value;

//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// -----------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------------MODULE 5 / 15--------------------------------------------------------------------------

// Виконай рефакторинг класу Car.Зроби властивості model і price приватними, а також #brand.
// Стандартизуй публічний інтерфейс класу, замінивши вже оголошені методи на гетери та сетери brand,
//     model і price, для взаємодії з приватними властивостями.

// class Car {
//   // Change code below this line
//     #brand;
//     #model;
//     #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }

// ------------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------MODULE 5 / 16-------------------------------------------------------------------------------

// Виконай рефакторинг класу Car. Додай публічну статичну властивість MAX_PRICE зі значенням 50000 - максимально допустима ціна автомобіля.

// Додай сетеру price перевірку значення параметра newPrice, що передається.
//  Якщо воно більше за MAX_PRICE, сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля.

// class Car {
//   // Change code below this line
//   #price;

//     static MAX_PRICE = 50000;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//     }
    
//       set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) this.#price = newPrice;
//   }

// //   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// -----------------------------------------------------------------------------------------------------------------------

// ------------------------------------------MODULE 5 / 17-------------------------------------------------------------------

// Додай класу Car публічний статичний метод checkPrice(price), що приймає ціну автомобіля.
// Метод повинен порівняти значення параметра price і приватної статичного властивості MAX_PRICE.

// Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
// В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".
// Під оголошенням класу ми додали ініціалізацію екземпляра і виклики методів, щоб показати,
// як буде використовуватися метод checkPrice(price).

// class Car {
//     static #MAX_PRICE = 50000;
    
//   // Change code below this line
// static checkPrice(price) {
//         if (price > Car.#MAX_PRICE) {
//             return `Error! Price exceeds the maximum`
//         } else {
//             return `Success! Price is within acceptable limits`
//         }
//     }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// ---------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------MODULE 6 / 18------------------------------------------------------------------

// У застосунку потрібен адміністратор з можливістю додавати пошти користувачів у чорний список.

// Оголоси клас Admin, який наслідує від класу User
// Додай класу Admin публічну статичну властивість AccessLevel(рівень доступу),
//     значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}

// class User {
//     constructor({ email }={}) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line

// class Admin extends User {
//     constructor({ ...restProps }) {
//         super(restProps)
//     }
//     static AccessLevel = { BASIC: "basic", SUPERUSER: "superuser" }
        
// }

// console.log(Admin.AccessLevel.BASIC)
// console.log(Admin.AccessLevel.SUPERUSER)

// ------------------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------MODULE 5 / 19----------------------------------------------------------------------------------


// Додай класу Admin метод constructor, який приймає один параметр - об'єкт налаштувань з двома властивостями email і accessLevel.
//  Додай класу Admin публічну властивість accessLevel, значення якої буде передаватися під час виклику конструктора.

// Щоб показати, як буде використовуватися клас Admin, ми додали ініціалізацію екземпляра під оголошенням класу.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line
//     constructor({accessLevel, ...restProps }) {
//         super(restProps)

//         this.accessLevel = accessLevel;
//     }

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// ------------------------------------------------------------------------------------------------------------------------------------

// -----------------------------------------MODULE 5 / 20----------------------------------------------------------------------------------

// Додай класу Admin наступні властивості і методи.

// Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів.
// Значення за замовчуванням — це порожній масив.
// Публічний метод blacklist(email) для додавання пошти у чорний список.
// Метод повинен додавати значення параметра email в масив,
//     що зберігається у властивості blacklistedEmails.
// Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку.
// Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається у властивості blacklistedEmails,
//     і повертати true або false.
// Після оголошення класу ми додали ініціалізацію екземпляра і виклики методів у тій послідовності,
//     в якій твій код перевірятимуть тести.Будь ласка, нічого там не змінюй.


// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line
//   blacklistedEmails = [];
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
 

//     blacklist(email) {
//         this.email = email;
//         this.blacklistedEmails.push(email)
//     }

//     isBlacklisted(email) {
//         this.email = email;
//        return this.blacklistedEmails.includes(email)
//     }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// --------------------------------------------------------------------------------------------------------------------------------