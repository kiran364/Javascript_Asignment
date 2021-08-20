

// Javascript program to count the number
// of occurrence of a word in
// the given string given string
	
	function countOccurrences(paragraph, love, you)
	{
		// split the string by spaces in a
	let a = paragraph.split(" ");

	// search for pattern in a
	let count = 0;
    let count1 = 0;
	for (let i = 0; i < a.length; i++)
	{
	// if match found increase count
	if (a[i].includes(love))
		count++;

    if (a[i].includes(you))
        count1++;
	}

    if(count < count1)
	return count1;

    return count;
	}
	// Driver code
	let para = " I love love love teaching. If you do not love teaching what else can you love. I love JavaScript you ";
    word1 = 'love';
    word2 = 'you';
	const result = countOccurrences(para, word1, word2);
    console.log(result)
