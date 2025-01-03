//1 : simple for loop
for (let i = 1; i <= 5; i++) {
    console.log(`Value is: ${i}`);
}

//2 : for & if nested
for (let index = 1; index <= 5; index++) {
    console.log(index);
    if(index == 3){
        console.log('3 detected!');
    }
}

//3 : multiple for loop
for (let i = 1; i <= 5; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 20; j >= 15; j--) {
       console.log(`Inner loop value: ${j}, Outer loop value: ${i}`);
    }
}

//4 : for loop with array
const myArr = ['apple', 'mango', 'guava', 'kiwi']
for (let index = 0; index < myArr.length; index++) {
    console.log(`Array value at ${index} position is: ${myArr[index]}`);
}

//5 : break 
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break// break the statements after the condition
    }
   console.log(`Value of i is ${index}`);
}

//6 : continue
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue//continue the rest statements after the breaking just the condition 
    }
   console.log(`Value of i is ${index}`);
}