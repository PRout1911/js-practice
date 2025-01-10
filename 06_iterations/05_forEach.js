//foreach

// function
const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach( function(val){//since it's a callback function it doesn't require function name
    console.log(val); //js, ruby, java, python, cpp
} )

// arrow function
coding.forEach( (val) => {
    console.log(val); //js, ruby, java, python, cpp
})

//passing a function
function example(val){
    console.log(val); //js, ruby, java, python, cpp
}
coding.forEach(example)

//more paramter that can be passed in foreach
coding.forEach( (val, index, arr)=> {
    console.log(val, index, arr); 
    /*js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]*/
} )

//array of objects
const myCoding = [{
        langName: "javascript",
        langFileName: "js"
    },
    {
        langName: "java",
        langFileName: "java"
    },
    {
        langName: "python",
        langFileName: "py"
}]
myCoding.forEach( (item) => {
    console.log(item.langName);
    console.log(item.langFileName);
} )