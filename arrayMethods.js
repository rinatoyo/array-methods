// DO NOT MODIFY
var genericNumberArray = [1, 2, 3, 4, 5];
var colors = ['Blue', 'Red', 'Yellow', 'Charlie'];
var scrambledWords = ['win', 'the', 'for', 'burritos'];
var phoneNumber = [9, 0, 3, 5, 7, 6, 8];
var orderQueue = [{ takeOut: 'Ice Cream' }, { takeOut: 'Medium Salad'}, { takeOut: 'Burger'}];
var mixedNums = [5, 81, 40, 4, 805, 10, 76, 21, 3, 2, 7, 1, 7];
var mixedWords = ['Dont', 'You', 'Forget', 'About', 'Me'];
var fruitCollection = ['Apple', 'Scissors', 'Pug', 'Lady Bug', 'Banana', 'Pear'];
var gemBox = ['Ruby', 'Diamond', 'Diamond', 'Emerald', 'Moonstone', 'Pizza', 'Sneaker', 'Sapphire', 'Baby', 'Jeans', 'Soda Can', 'Boat'];
var upToTen = [1, 2, 9, 10];
var brownOnly = ['brown', 'brownish', 'ad8fy7iuhj23nrsf', 9813, {}, undefined,  'brown'];
var orderedValues = [4, 5, 6, 7, 8, 9, 10];
var friends = ['Todd', 'Jacoby', 'Miko', 'Joseph', 'Kevin', 'Todd C.'];
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var bulkNumbers = [5, 5, 6, 6, 9, 9, 2, 2, 2, 5, 2];

// do your work below!

//push
let nameArray = [];
let fullName = nameArray.push('Rina', 'Toyoshiba');
console.log(nameArray);

let missingNum = genericNumberArray.push(6,7,8,9,10);
console.log(genericNumberArray);

//pop
let popResult = colors.pop();
console.log(colors);

console.log(popResult);

//reverse
let backwards = scrambledWords.reverse();
console.log(scrambledWords);

let numberPhone = phoneNumber.reverse();
console.log(phoneNumber);

//shift
let nextOrder = orderQueue.shift();
console.log(orderQueue);

console.log(nextOrder);

//sort
let sortNum = mixedNums.sort();
console.log(mixedNums);

let sortWords = mixedWords.sort();
console.log(mixedWords);

//splice
let notFruit = fruitCollection.splice(1,3);
console.log(fruitCollection);

gemBox.splice(5,2);
gemBox.splice(-4,4);
console.log(gemBox);

upToTen.splice(2,0,3,4,5,6,7,8);
console.log(upToTen);

brownOnly.splice(1,5,'brown','brown','brown');
console.log(brownOnly);

//unshift
let orderedValuesNewLength = orderedValues.unshift(1,2,3);
console.log(orderedValues);

//concat

let randomThingsArray = genericNumberArray.concat(colors);
console.log(randomThingsArray);

let updatedOrders = orderQueue.concat({takeOut: 'Sushi'},{takeOut: 'Ramen'});
console.log(updatedOrders);

//join
let sentence = scrambledWords.join(' ');
console.log(sentence);

let myFruits = fruitCollection.join(' + ');
console.log(myFruits);

//slice
let favoriteFriends = friends.slice(1,3);
console.log(favoriteFriends);
console.log(friends);

let owesMoney = friends.slice(3,6);