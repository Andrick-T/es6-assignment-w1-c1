 const student1 = { name: 'Marie', age: 22, city: 'Yaounde', skills:
['HTML', 'CSS'] };
const student2 = { name: 'Paul', age: 25, city: 'Douala', skills:
['Python', 'SQL'] };

const getCity = (student) => {
    const {city} = student;
    console.log(city);
    return city;
};

const buildProfile = (student, extraSkills) => {
    const {name, age, skills} = student;
    let allSkills = [...skills, ...extraSkills];
    return `${name} (${age}) from ${getCity(student)} | Skills: ${allSkills.join(', ')}`;
}

const mergeStudents = (s1, s2) => {
    return {
        name: s1.name + ' & ' + s2.name,
        city: 'Cameroon'
    };
};

console.log(buildProfile(student2, ['JavaScript', 'React']));
console.log(mergeStudents(student1, student2));
