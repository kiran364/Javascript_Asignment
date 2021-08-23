const users = [
	{
		name:'Brook', 
		scores:75,
		skills:['HTM', 'CSS', 'JS'],
		age:16
	},
	{
		name:'Alex', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	}, 
	{
		name:'David', 
		scores:75,
		skills:['HTM', 'CSS'],
		age:22
	}, 
	{
		name:'John', 
		scores:85,
		skills:['HTM'],
		age:25
	},
	{
		name:'Sara',
		scores:95,
		skills:['HTM', 'CSS', 'JS'],
		age: 26
	},
	{
		name:'Martha', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	},
	{
		name:'Thomas',
		scores:90,
		skills:['HTM', 'CSS', 'JS'],
		age:20
	}
];
// function for users who has  scoresGreaterThan85, 
isScore = (x) => {
    return x.scores > 85;
}
const output = users.filter(isScore);
console.log(output);

// Write a function which addUser to the user array only if the user does not exist.
 
addUser = (users, name, scores, skills, age) => {
    const found = users.some(el => el.name === name);
    if (!found) users.push({ name: name, scores: scores, skills: skills, age: age});
    return users;
  }

console.log(addUser(users, 'tushar', 100, ['js','html'], 23));

//	Write a function which addUserSkill which can add skill to a user only if the user exist. 

updateSkills = (name, skills) => {
   for(let i=0; i < users.length; i++) {
       if(users[i].name == name){
           users[i].skills = skills;
           break;
       }
   }
    return users;
  }

console.log(updateSkills('tushar', ['js','html', 'Docker']));