// exercise 2
console.log("_______________Exercise 2________________");
let person = "Sameer Katija";
console.log(`Hello ${person}, would you like to learn some Python today?`);
// exercise 3
console.log("_______________Exercise 3________________");
let TitleCase = person
  .toLowerCase()
  .split(" ")
  .map((idx) => idx.charAt(0).toUpperCase() + idx.slice(1))
  .join(" ");
console.log(
  `Lower Case: ${person.toLowerCase()} \nUpper Case: ${person.toUpperCase()} \nTitle Case: ${TitleCase}`
);
// exercise 4
console.log("_______________Exercise 4________________");
console.log(
  "Albert Einstein once said, A person who never made a mistake never tried anything new."
);
//exercise 5
let famous_person = "Albert Einstein";
let message = "A person who never made a mistake never tried anything new.";
console.log("_______________Exercise 5________________");
console.log(`${famous_person} once said, ${message}`);
// exercise 6
console.log("_______________Exercise 6________________");
console.log(`${person} \t is the nameof person`);

//exercise 7 & 8
console.log("_______________Exercise 7 & 8________________");
console.log(5 + 3);
console.log(10 - 2);
console.log(2 * 2);
console.log(16 / 2);

//exercise 9
console.log("_______________Exercise 09________________");
let fav_num = 11;
console.log(`My favourite number is ${fav_num}`);

//exercise 10
console.log("_______________Exercise 10________________");
// this statement is written to print 8 by adding 5 plus 3
console.log(5 + 3);
// this statement is written to print 8 by substracting 10 minus 2
console.log(10 - 2);

//exercise 11
const names = ["Kulvinder", "Araiz", "Attique", "Sooraj"];
console.log("_______________Exercise 11________________");
names.map((name) => console.log(name));

//exercise 12
console.log("_______________Exercise 12________________");
names.map((name) => console.log(`Hello ${name}, I am honored to have you`));

//exercise 13
const transportation = ["Bugatti", "Lembogerni", "farerri"];
console.log("_______________Exercise 13________________");
transportation.map((transport) =>
  console.log(`I would like to own a ${transport}`)
);

//exercise 14
let invitees = ["Sir Zia", "Sir Daniyal", "Sir Ali"];
console.log("_______________Exercise 14________________");
invitees.map((name) =>
  console.log(`Dear ${name}, I would love to have you on dinner with me.`)
);
//exercise 15
console.log("_______________Exercise 15________________");
console.log(`${invitees.slice(-1)} will not be able to join the dinner`);
invitees = invitees.slice(0, -1);
invitees.push("Sir Anees");
console.log(
  `Dear ${invitees.slice(-1)}, I would love to have you on dinner with me.`
);

// exercise 16
invitees.push("Sir Awais");
invitees.push("Sir Adil");
invitees.push("Miss Hira");
console.log("_______________Exercise 16________________");
invitees.map((name) =>
  console.log(
    `Dear ${name}, I would love to inform you that we have a bigger dinner table now.`
  )
);

invitees.unshift("Sir Asim");
invitees.push("Sir Atif");
invitees.splice(3, 0, "Sir Ishaq");

invitees.map((name) =>
  console.log(`Dear ${name}, I would love to have you on dinner with me.`)
);

let count = invitees.length;
//exercise 17
console.log("_______________Exercise 17________________");
console.log("I can only invite two peoples now");
console.log(`I am sorry, I can't invite you ${invitees.pop()}`);
console.log(`I am sorry, I can't invite you ${invitees.pop()}`);
console.log(`I am sorry, I can't invite you ${invitees.pop()}`);
console.log(`I am sorry, I can't invite you ${invitees.pop()}`);
console.log(`I am sorry, I can't invite you ${invitees.pop()}`);
console.log(`I am sorry, I can't invite you ${invitees.pop()}`);
console.log(`I am sorry, I can't invite you ${invitees.pop()}`);
invitees.map((name) =>
  console.log(`Dear ${name}, I would love to have you on dinner with me.`)
);
invitees.pop();
invitees.pop();
console.log("Invitees list: ", invitees);

//exercise 18
console.log("_______________Exercise 18________________");
let locations = ["italy", "china", "india", "sirilanka", "nepal"];
console.log("Location: ", locations);
console.log("Sorted Location: ", locations.slice().sort());
console.log("Original Location: ", locations);
console.log("Sorted Reverse Location: ", locations.slice().sort().reverse());
console.log("Original Location: ", locations);
console.log("Reversed Order of Location: ", locations.reverse());
console.log("Re-Reversed Order of Location: ", locations.reverse());
console.log("Sorted Location: ", locations.sort());
console.log("Sorted Reverse Location: ", locations.reverse());

//exercise 19
console.log("_______________Exercise 19________________");
console.log(`I am inviting ${count} number of peoples`);
//exercise 20
console.log("_______________Exercise 20________________");
let languages = ["Urdu", "Hindi", "Punjabi", "english"];
console.log(languages);
//exercise 21
console.log("_______________Exercise 21________________");
let insan = {
  name: "Sameer",
  languages: languages,
};
console.log(insan);
//exercise 22
console.log("_______________Exercise 22________________");
console.log(invitees[23]);

//exercise 23
console.log("_______________Exercise 23 & 24________________");
let car = "subaru";

console.log("Is car == 'subaru' : ", car === "subaru" ? "true" : "fasle");
console.log("Is car == 'sabaru' : ", car === "sabaru" ? "true" : "fasle");
console.log("0 == '0': ", 0 == "0" ? "true" : "False");
console.log("0 === '0': ", 0 === "0" ? "true" : "False");
console.log("NUll === Null: ", null === null ? "true" : "False");
console.log(
  "undefined === undefined: ",
  undefined === undefined ? "true" : "False"
);
console.log(
  "Infinity === Infinity: ",
  Infinity === Infinity ? "true" : "False"
);
console.log("Object === Object: ", person === Object ? "true" : "False");
console.log("True === False: ", true === false ? "true" : "False");
console.log("Object === Object: ", person === Object ? "true" : "False");

//exercise 24
console.log(
  "Is car == 'subaru' : ",
  car.toLowerCase() === "subaru" ? "true" : "fasle"
);

console.log(
  "Is car !== 'subaru' : ",
  car.toLowerCase() !== "subaru" ? "true" : "fasle"
);
console.log(
  "length of invitees > length of locations: ",
  invitees.length > locations.length ? "true" : "false"
);
console.log(
  "length of invitees < length of locations: ",
  invitees.length < locations.length ? "true" : "false"
);
console.log(
  "type of invitees = array: ",
  typeof locations == "array" ? "true" : "false"
);
console.log(
  "type of invitees = object: ",
  typeof locations == "object" ? "true" : "false"
);
console.log(
  "is france in locations: ",
  "france" in locations ? "true" : "false"
);
console.log(
  "is france a string and in locations: ",
  typeof "france" === "string" && "france" in locations ? "true" : "false"
);
//exercise 25
console.log("_______________Exercise 25________________");
let alien_color = "green";
if (alien_color === "green") console.log("player just earned 5 points");
if (alien_color === "red")
  console.log("if you are seeing this that means i am wrong");

//exercise 26
console.log("_______________Exercise 26________________");
if (alien_color === "green")
  console.log("player just earned 5 points for shooting the alien.");
else console.log("player just earned 10 points");

//exercise 27
console.log("_______________Exercise 27________________");
if (alien_color === "green") console.log("player just earned 5 points");
else if (alien_color === "yellow") console.log("player just earned 10 points");
else if (alien_color === "red") console.log("player just earned 15 points");
//exercise 28
console.log("_______________Exercise 28________________");
let age = 22;
if (age < 2) console.log("person is a baby");
else if (age >= 2 && age < 4) console.log("person is a toddler");
else if (age >= 4 && age < 13) console.log("person is a kid");
else if (age >= 13 && age < 20) console.log("person is a teenager");
else if (age >= 20 && age < 65) console.log("person is a adult");
else console.log("Person is an elder");
//exercise 29
console.log("_______________Exercise 29________________");
let favorite_fruits = ["mango", "peach", "banana"];

if (favorite_fruits.includes("mango"))
  console.log(`such as You really like mangos!`);
if (favorite_fruits.includes("peach"))
  console.log(`such as You really like peach!`);
if (favorite_fruits.includes("banana"))
  console.log(`such as You really like banana!`);
if (favorite_fruits.includes("mangoa")) console.log(`I never run`);
if (favorite_fruits.includes("mangol")) console.log(`I never run`);
//exercise 30
console.log("_______________Exercise 30________________");
let username = ["us1", "us2", "us3", "us4", "admin"];
for (let i = 0; i < username.length; i++) {
  if (username[i] === "admin")
    console.log("Hello admin, would you like to see a status report?");
  else
    console.log("Greetings, ", username[i], ", thank you for logging in again");
}
//exercise 31
console.log("_______________Exercise 31________________");
username = [];
if (username.length < 1) console.log("We need to find some users!");
//exercise 32
console.log("_______________Exercise 32________________");
let current_users = ["us1", "us2", "us3", "us4", "admin"];
let new_users = ["us11", "us22", "us3", "us44", "admin"];

new_users.map((idx) => {
  if (current_users.includes(idx.toLowerCase())) {
    console.log(idx, " you will need to enter a new username");
  } else console.log("username is available");
});
//exercise 33
console.log("_______________Exercise 33________________");
let ordinal = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < ordinal.length; i++) {
  if (ordinal[i] === 1) console.log(ordinal[i] + "st");
  else if (ordinal[i] === 2) console.log(ordinal[i] + "nd");
  else console.log(ordinal[i] + "th");
}

//exercise 34
console.log("_______________Exercise 34________________");
const pizza = ["malai boti", "supreme", "cheese"];

console.log(
  "I seriously very much love pizza that is mild in spice and has some juicy stuff and filled crust, such as"
);
pizza.map((idx) => console.log(`I really love ${idx}`));

//exercise 35
console.log("_______________Exercise 35________________");
let animal = ["dog", "cat", "rabbit"];
let statement = {
  dog: "A dog will make a great pet",
  cat: "cat is funny",
  rabbit: "rabbit is fluffy",
};
animal.map((idx) => console.log(`${statement[idx]}`));

//exercise 36 and 37
console.log("_______________Exercise 36 & 37________________");
const make_shirt = (size = "L", text = "I love Js") => {
  console.log(
    `The size selected is ${size} and the message that will be printed is: ${text}`
  );
};
make_shirt("M", "I love Js");

//exercise 38
console.log("_______________Exercise 38________________");
const describe_city = (city, country = "Pakistan") => {
  console.log(`${city} is in ${country}`);
};

describe_city("Lahore");
describe_city("Peshawar");
describe_city("Peris", "France");

//exercise 39
console.log("_______________Exercise 39________________");
const city_country = (city, country = "Pakistan") => {
  console.log(`"${city}, ${country}"`);
};
city_country("Lahore");
//exercise 40
console.log("_______________Exercise 40________________");
const make_album = (artist_name, album_title, track = 0) => {
  console.log({
    "Artist Name": artist_name,
    "Album Title": album_title,
    track: track,
  });
};
make_album("Sameer", "ajeeb dastan hy");
make_album("Sooraj", "Waqat asan hy");
make_album("laiba", "Zindgi haseen ha");
make_album("amna", "Zindgi haseen ha", 20);

//exercise 41
console.log("_______________Exercise 41________________");
const magician = ["john", "joe", "jim"];
const show_magicians = (arr) => {
  arr.map((idx) => console.log(idx));
};
show_magicians(magician);

//exercise 42
console.log("_______________Exercise 42 & 43________________");
const make_great = (arr) => {
  let magician1 = [];
  for (let i = 0; i < arr.length; i++) {
    magician1.push("The Great " + arr[i]);
  }
  show_magicians(magician1);
};
make_great(magician);
console.log("Original Array");
show_magicians(magician);

//exercise 44
console.log("_______________Exercise 44________________");

const sandwich = (...args) => {
  console.log("Ingreidents you want are: ");
  args.map((idx) => console.log(idx));
};
sandwich("tikka", "masala");

//exercise 45
console.log("_______________Exercise 45________________");
const make_car = (manufacturer, model, args) => {
  let obj = { manufacturer, model };
  //   console.log(Object.entries(args));
  Object.entries(args).map((idx) => (obj[idx[0]] = idx[1]));
  console.log(obj);
};
make_car("honda", "17", { doors: 2, wheels: 4 });
