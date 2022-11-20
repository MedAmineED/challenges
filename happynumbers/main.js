// function isHappy(n) {
//     let m = n;
//     let res;
//     let arr = [];
//     let arrSum;
//     let i = 0;
//     while(n >= 1){
        
//         if (n < 10){
//             if(n == 1 || n == 7){
//                 arrSum = true;                                                          console.log('enter in the true1')
//                 break;
//             }
//             else{
//                 arrSum = false;                                                          console.log('enter in the false1');
//                 break;
//             }
//         }if(((m / 10) < 10) && ((m % 10) == 0)){
//             if(((m / 10) == 1) || ((m / 10) == 7)){
//                 arrSum = true;                                                                  console.log('enter in the true2')
//                 break;
//             }
//             else{
//                 arrSum = false;                                                         console.log('enter in the false2')
//                 break;
//             }
//             }
//         while(m >= 10){
//                 res = m % 10;  
//                 arr.push(res);                                                      console.log(arr)
//                 m = Math.floor(m/10); console.log('m div 10 = ', m)
//             if (m < 10){
//                 arr.push(m);
//                                                                                             console.log('mn in if = ', n)
//             }  
//             console.log('array  = ', arr)
//             console.log('n = ', n, ' m = ', m)
            
//         };arr[0] = arr[0] ** 2;
//                 n = arr.reduce((cr, pr) => {
//                 return (cr + pr ** 2) 
//     })
//                                                                                                 console.log('last n in one loope = ', n)
//                                                                                                 console.log('###############################     ', i, '      #########################')
//     i = i+ 1
    
//     }n= m
//                                                                                                 console.log(n)
//     return arrSum;
    
// }
function isHappy(n) {
    let allNum = {};
    let rest = 0;

    if (n < 1) {return false};

    while (n !== 1 && !allNum[n]) {
        allNum[n] = true; 
        rest = 0;
        while (n > 0) {
        rest += Math.pow(n % 10, 2);
        n = Math.floor(n / 10);
    }
    console.log(allNum)
    console.log(!allNum[n])
        n = rest;
    }
    return n === 1;
};

console.log(isHappy(6))