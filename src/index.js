module.exports = function toReadable (number) {
    let a = []; 
    let arrStr = [];
    let str;
    let arrUnits = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten',
    'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    let arrTens = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
    let h = 'hundred';
    let numlen = String(number).length;
    
    for (i = 0; i < numlen; i++){
        a[i] = number%10; 
        number = Math.floor(number/10);
    }
    if (numlen == 1 && a[0] == 0) return str = 'zero';
    if (a[1] === 1) {a[1] = a[0] + 10; a[0] = 0; }
    for (i = 0; i < numlen; i++){
        
        if (i === 1) {
            if (a[i] > 1 && a[i] < 10) arrStr[i] = arrTens[a[i]-2];
            else arrStr[i] = arrUnits[a[i]];
        }
        else arrStr[i] = arrUnits[a[i]];     
        if (i === 2) {arrStr[i] = arrStr[i] + ' ' + h; }
                
    }   
    arrStr.reverse();
    str = arrStr.filter(s => s !=='zero').join(' ');
    return str;
}
