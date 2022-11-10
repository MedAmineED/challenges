function rgb(r, g, b){
    let myArg = [r, g, b];
    let rest;
    let allrest = [];
    let allHex = [];
    let hexLetter = ["A", "B", "C", "D", "E", "F"];
    let myHex;

    for (let i = 0; i < myArg.length; i++){
        if (myArg[i] <= 0) {
            rest = String(0).padStart(2, '0');
            allrest.push(rest);
    }   else if (myArg[i] < 10 && myArg[i] > 0) {
                                    rest = String(myArg[i]).padStart(2, '0');
                                    allrest.push(rest);
    }   else if (myArg[i] >= 10 && myArg[i] < 16) {
                                    rest = "0" + hexLetter[myArg[i] % 10];
                                    allrest.push(rest);
    }
        else if (myArg[i] >= 16 && myArg[i] <= 255){
                                    while (myArg[i] > 0) {
                                            rest = myArg[i] % 16;
                                            myArg[i] = Math.floor(myArg[i] / 16);
                                        if (rest > 9) {
                                                rest = hexLetter[rest % 10];
                                                }
                                            allrest.unshift(rest);
                                        }
        }else{
            rest = "FF";
            allrest.push(rest);
            }

    myHex = allrest.join("");
    allHex.push(myHex);
    allrest=[];
}
    return allHex.join("");
}

console.log(rgb(141,286,107))