const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;
document.querySelector('#start').addEventListener('click', function(){
    if(!intervalId){
        intervalId = setInterval(changeBGcolor, 1000);
    }
    function changeBGcolor(){
        document.body.style.backgroundColor = randomColor();
    }
});

document.querySelector('#stop').addEventListener('click', function(){
        clearInterval(intervalId);
        intervalId = null;//so that the value doesn't get overwrite everytime
});