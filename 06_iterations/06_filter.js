const arr = ["js", "ruby", "java", "python", "cpp"]
const val = arr.forEach( (i) => {})
console.log(arr);//this would show undefined as forEach doesn't return any value

//filter : it is used to filterize the result as per need
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num) => {return num > 4})//scope is used hence return keyword
const newNum = myNums.filter( (nums) => nums > 4 )

//example
const books = [
    { title: 'Book1', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book2', genre: 'NonFiction', publish: 1992, edition: 2008 },
    { title: 'Book3', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book4', genre: 'NonFiction', publish: 1989, edition: 2010 },
    { title: 'Book5', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book6', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book7', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book8', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book9', genre: 'NonFiction', publish: 1981, edition: 1989 },
];
let myBooks = books.filter( (book) => book.genre === 'Fiction')
myBooks = books.filter( (book) => {return book.publish <= 2000 && book.edition >= 2000})
console.log(myBooks);