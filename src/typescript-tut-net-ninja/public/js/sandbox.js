"use strict";
//const logDetails = (uid: string | number, item: string) => {
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
//const greet = (user: { name: string; uid: string | number }) => {
//const greet = (user: { name: string; uid: StringOrNum }) => {
const greet = (user) => {
    console.log(`${user.name} says hello`);
};
const greetAgain = (user) => {
    console.log(`${user.name} says hello`);
};
