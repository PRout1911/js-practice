const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
console.log(buttons);
console.log(body);

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e.target);

    // switch () {
    //     case value:
            
    //         break;
    
    //     default:
    //         break;
    // }
    // if (e.target.id === 'grey') {
    //   body.style.backgroundColor = 'grey';
    // } else if (e.target.id === 'yellow') {
    //   body.style.backgroundColor = 'yellow';
    // } else if (e.target.id === 'blue') {
    //   body.style.backgroundColor = 'blue';
    // } else if (e.target.id === 'purple') {
    //   body.style.backgroundColor = 'purple';
    // }
  });
});
