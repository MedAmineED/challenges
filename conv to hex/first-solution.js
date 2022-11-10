function rgb(r, g, b){
    let myArg = [r, g, b];
    let rest;
    let allrest = [];
    let allHex = [];
    let myHex;

    for (let i = 0; i < myArg.length; i++){
        if (myArg[i] <= 0) {
            rest = String(0).padStart(2, '0');
            allrest.push(rest);
    }   else if (myArg[i] < 10 && myArg[i] > 0) {
                                    rest = String(myArg[i]).padStart(2, '0');
                                    allrest.push(rest);
    }   else if (myArg[i] >= 10 && myArg[i] < 16) {
                                switch(myArg[i]) {
                                    case 10: rest = "0A";
                                        break;
                                    case 11: rest = "0B";
                                        break;
                                    case 12: rest = "0C";
                                        break;
                                    case 13: rest = "0D";
                                        break;
                                    case 14: rest = "0E";
                                        break;
                                    case 15: rest = "0F";
                                        break;
                                            }
                                    allrest.push(rest);
    }
        else if (myArg[i] >= 16 && myArg[i] <= 255){
                                    while (myArg[i] > 0) {
                                        rest = myArg[i] % 16;
                                        myArg[i] = Math.floor(myArg[i] / 16);
                                        if (rest > 9) {
                                                    switch(rest) {
                                                        case 10: rest = "A";
                                                            break;
                                                        case 11: rest = "B";
                                                            break;
                                                        case 12: rest = "C";
                                                            break;
                                                        case 13: rest = "D";
                                                            break;
                                                        case 14: rest = "E";
                                                            break;
                                                        case 15: rest = "F";
                                                            break;
                                                                }
        }

        allrest.unshift(rest);
    }}else{
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