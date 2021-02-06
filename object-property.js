let newList = [];
const students =  [
    {id: 21, name: 'omor sunny'},
    {id: 31, name: 'manna'},
    {id: 41, name: 'moyouri'},
    {id: 71, name: 'deepjol'}
];
    // for (let i = 0; i < students.length; i++){
    //     let name = students[i].name
    //     newList.push(name)
    // }
const  nemes = students.map(s => s.name)

console.log(nemes)