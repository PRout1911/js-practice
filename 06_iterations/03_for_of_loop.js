//for - of loop
const element = [1, 2, 3, 4, 5]
for (const x of element) {
    console.log(x);
}

const string = "Priyanka Rout"
for (const i of string) {
    console.log(`Values in string is: ${i}`);
}

//map
const map = new Map()//maps are iterable, contains unique (key, value) pair
map.set('IND', 'India')
map.set('USA', 'America')
map.set('FRA', 'France')
for (const k of map) {
    console.log(k);// prints ['key', 'value']
}
for (const [key, values] of map) {
    console.log(key, '=>', values)//prints key and values separately
}

//objects
const myObject = {
    game1: 'pubg',
    game2: 'valorant'
}
for (const [key, value] of myObject) {
    console.log(key, ':-', value);// ERROR : myObject is not iterable
}
//Hence, objects are not iterable using for-of loop