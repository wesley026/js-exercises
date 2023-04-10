const getTheTitles = function(array) {
    let titles = [];
    for (let i = 0; i < array.length; i++) {
      titles.push(array[i].title);
    }
    // array[i].title refers to the value of "title" of
    // the ith idex in array 
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
