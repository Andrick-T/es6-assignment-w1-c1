//Authour: Tchoukeu Andrick
const student1 = { name: 'Marie', age: 22, city: 'Yaounde', skills:
['HTML', 'CSS'] };
const student2 = { name: 'Paul', age: 25, city: 'Douala', skills:
['Python', 'SQL'] };

//used object destructuring to extract the city property from the student object and return it
const getCity = ({city}) => {city;
console.log(city);}

//used object destructuring to extract the name, age, and skills properties from the student object and combine them with the extraSkills array to create a profile string
const buildProfile = (student, extraSkills) => {
    const {name, age, skills} = student;
    let allSkills = [...skills, ...extraSkills];
    return `${name} (${age}) from ${getCity(student)} | Skills: ${allSkills.join(', ')}`;
}

//used object destructuring to extract the name properties from both student objects and combine them to create a new object with a merged name and a fixed city
const mergeStudents = (s1, s2) => {
    const {name: name1} = s1;
    const {name: name2} = s2;
    return {
        name: `${name1} & ${name2}`,
        city: 'Cameroon'
    };
};

console.log(buildProfile(student1, ['JavaScript', 'React']));
console.log(mergeStudents(student1, student2));
