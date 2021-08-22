function reverseArray( array ) {
    var reversedArray = [];
  
    while( i = array.pop() )
        reversedArray.push( i );
    
    return reversedArray;
  }
  console.log(reverseArray(["A", "B", "C"]));
  