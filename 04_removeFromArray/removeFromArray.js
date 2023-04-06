const removeFromArray = function(array,...args) {
    // arbitary number of arguements
    let arr = [];
    // intialize new empty array
    for (item of array)
    {
        if (!args.includes(item)){
            arr.push(item);
        }
    }

    // loop through each element in array and if the arguements don't include the 
    // item that is being looped through 
    // add that item into the empty array 

    // using for-of to loop through each object in the array instead of the weird forEach function 
    // for-in to refer to index

    return arr ;

    
};

// Do not edit below this line
module.exports = removeFromArray;
