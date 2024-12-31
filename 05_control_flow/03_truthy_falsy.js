//truthy values : "0", "false", " ", [], {}, function(){}
//falsy values  : 0, false, 0n, "", null, undefined, NaN

const user = "priyanka@123" //: true//0 : false //[] : true 
if (user) {
    console.log("true");
}else{
    console.log('false');
}