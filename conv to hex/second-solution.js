function rgb(r, g, b){
    let myNum = [r, g, b];
    let myHexArr = [];
        for (let i = 0; i < myNum.length; i++){
                    myNum[i] < 0? myHexArr.push("00"): 
                    myNum[i] > 255? myHexArr.push("FF"): 
                    myHexArr.push(("0"+(Number(myNum[i]).toString(16))).slice(-2).toUpperCase());
    }   return myHexArr.join("");
}


console.log(rgb(141,286,107))