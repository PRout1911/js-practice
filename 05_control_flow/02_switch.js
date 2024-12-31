//int
const month = 2
switch (month) {
    case 1:
        console.log('January');
        break; //if we do not apply break statement after the case then it will print all the afterwards case EXCEPT DEFAULT
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    default:
        console.log('Default case matched!');
        break;
}

//string
const str = 'mar'
switch (str) {
    case "jan":
        console.log('January');
        break; //if we do not apply break statement after the case then it will print all the afterwards case EXCEPT DEFAULT
    case "feb":
        console.log('February');
        break;
    case "mar":
        console.log('March');
        break;
    default:
        console.log('Default case matched!');
        break;
}