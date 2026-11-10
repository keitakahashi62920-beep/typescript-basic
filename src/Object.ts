const user:{readonly name:string,age?:number,Country?:string} = {
  name: '侍太郎',
  age: 20,
  Country: 'Japan'
};
//user.name = '侍花子'; // This would cause a compile error
user.age = 25; // This would cause a compile error
console.log(user);