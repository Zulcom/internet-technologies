var former = console.log;
console.log = function (msg) {
    former(msg);  //maintains existing logging via the console.
    var msgSpan = document.createElement('pre');
    msgSpan.innerText = msg;
    document.querySelector('.console-container').appendChild(msgSpan);
};
document.addEventListener('DOMContentLoaded', function() {
    console.log('Сейчас: ' +new Date().toString());
    var dict = [
        {name: "apple", count: 5, price: 70},
        {name: "orange", count: 10, price: 90}
    ];
    var result = 0;
    dict.forEach(function (el) {
        result += el.price * el.count;
    });
    console.log('result: ' + result);
    var obj = [];
    obj.push({
       bill:dict,
        result:result
    });
    console.log('stringifyed:');
    console.log(JSON.stringify(obj));
});