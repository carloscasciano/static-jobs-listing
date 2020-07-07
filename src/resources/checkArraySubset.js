export const checkArraySubset = (subset, mainset) => {
    let comparisonArray = []
    subset.forEach(element => {
        comparisonArray = comparisonArray.concat(mainset.indexOf(element)) 
    });
    console.log(comparisonArray)


    return !comparisonArray.includes(-1)
}