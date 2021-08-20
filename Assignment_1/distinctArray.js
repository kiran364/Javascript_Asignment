// Javascript program to check if all array
// elements are distinct
function checkUniqueness(arr)
{
    let n = arr.length;
 
    // Put all array elements in a map
    let s = new Set();
    for (let i = 0; i < n; i++) {
        s.add(arr[i]);
    }
 
    // If all elements are distinct, size of
    // set should be same array.
    return (s.size == arr.length);
}
 
// Driver code
    const arrOne = [1, 4, 6, 2, 3];
 
    if (checkUniqueness(arrOne)) {
        console.log("All Elements are Distinct");
    }
    else {
        console.log("Not all Elements are Distinct");
    }