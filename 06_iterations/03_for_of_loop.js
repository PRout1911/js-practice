//for - of loop
const element = [1, 2, 3, 4, 5]
for (const x of element) {
    console.log(x);
}

const string = "Priyanka Rout"
for (const i of string) {
    console.log(`Values in string is: ${i}`);
}

const map = new Map()//maps are iterable, contains unique (key, value) pair
map.set('IND', 'India')
map.set('USA', 'America')
map.set('FRA', 'France')
for (const [key, values] of map) {
    console.log(key, '=>', values)
}

//objects are not iterable using for-of loop