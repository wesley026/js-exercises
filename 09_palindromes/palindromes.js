const palindromes = function (str) {
    // need to filte non-aplphanumetic characters

    // matches all non-alphanumetic characters and underscore by searching globally 
    // turns the inputted str to all lower case  and replace all the matched non-alphanumeric characters 
    // stored in reg with  empty char/ string
    let reg = /[\W_]/g;
    let smallStr = str.toLowerCase().replace(reg,"");
    
    let  reversed  = smallStr.split("").reverse().join("");
    if (reversed == smallStr) return true;
    
        
        return false;
    
};

// Do not edit below this line
module.exports = palindromes;
