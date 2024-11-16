type StringOrNum = string | number;
type ObjWithName = { name: string, uid: StringOrNum};

//const logDetails = (uid: string | number, item: string) => {
const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

//const greet = (user: { name: string; uid: string | number }) => {
//const greet = (user: { name: string; uid: StringOrNum }) => {
const greet = (user: ObjWithName) => {
  console.log(`${user.name} says hello`);
};

const greetAgain = (user: ObjWithName) => {
  console.log(`${user.name} says hello`);
}