let yourHeight = prompt('Введите свой рост в метрах (0.0):');
let yourWeight = prompt('Введите свой вес в кг:');
let isMassOver = yourWeight/(yourHeight*yourHeight);

if (isMassOver <= 19) {
    alert('У Ваш  дефицит веса');
}    
else if (isMassOver <= 26) {
    alert('Ваш вес в норме');
} 
else if (isMassOver >= 30){
    alert('У Ваш ожирение I степени');
}
else if (isMassOver >= 26){
    alert('Ваш вес больше нормы');
}
console.log(isMassOver);
alert('Индекс массы тела =' +  Math.round(isMassOver));






