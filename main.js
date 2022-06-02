// условие

// if(1 == 2){
//     console.log('привет');
// }else{
//     console.log('пока');
// }

// var a = prompt('введите слово привет');

// if(a == 'good'){
//     console.log('well');
// }else{
//     console.log('bad');
// }

// var x = +prompt('введит вашу оценку');

// if(x === 5){
//     console.log('вы лучший');
// }else if(x == 4){
//     console.log('вы молодец');
// }else if(x == 3){
//     console.log('ну пойдет');
// }else{
//     console.log('что-то нето');
// }

// var secret = prompt('write secret word')

// if(secret == 'admin' || secret == 'админ' || secret == 'ayubkhan'){
//     console.log('доступ открыт');
// }else{
//     console.log('доступ закрыт');
// }

// || - оператор ИЛИ
// && - оператор И 
// ! - оператор не - ставиться перед значенеим или функцией - возвращает противоположеноое значение 
// isNaN(000)- отдаст FALSE
// isNaN('000')- отдаст FALSE
// isNaN(asddd)- отдаст TREU
// isNaN('asddd')- отдаст TREU



// var a = +prompt('введите первое число');
// var b = +prompt('введите второе число');

// if(a > b && !isNaN(a) && !isNaN(b) ){
//     console.log(a + ' больше ' + b);
// }else if(b > a && !isNaN(a) && !isNaN(b) ){
//     console.log(b + ' больше ' + a);
// }else if(b == a && !isNaN(a) && !isNaN(b) ){
//     console.log(a + ' равно ' + b);
// }else{
//     console.log('вы ввели не числа');
// }




// var num = +prompt('введите день недели')

// switch (num) {
//     case 1:
//         alert('monday')
//         break;
//     case 2:
//         alert('tuesday')    
//         break;
//     case 3:
//         alert('wednesday')        
//         break;
//     case 4:
//         alert('thursday')        
//         break;
//     default:
//         alert('has not this day of week')    
// }


// if(5 === 5){
//     console.log('good');
// }else{
//     console.log('bad');
// }



// var x = 5 === 5 ? 'good' : 'bad';
// console.log(x);

var a = +prompt('введите первое число');
var b = +prompt('введите второе число');
var c = +prompt('введите третие число');

if(a > b > c && !isNaN(a) && !isNaN(b) && !isNaN(c) ){
    alert('среднее число' + c )
}else if(b < a < c && !isNaN(a) && !isNaN(b) && !isNaN(c)){
    alert('среднее число' + b )
}else if(c > a < b && !isNaN(a) && !isNaN(b) && !isNaN(c)){
    alert('среднее число' + a )
}else{
    console.log('problem');
}