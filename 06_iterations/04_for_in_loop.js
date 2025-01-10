//for-in loop
//objects
const myObject = {
    game1: 'pubg',
    game2: 'valorant',
    game3: 'free fire',
}
for (const key in myObject) {
    // console.log(`${key} is for ${myObject[key]}`);
}

//arrays
const programming = ["js", "rb", "py", "java"]
for (const key in programming) {
    console.log(programming[key]);
}

//maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const [key, values] in map) {
    // console.log(key, '=>', values)//no output
}
//Hence, can't use for-in to iterate maps