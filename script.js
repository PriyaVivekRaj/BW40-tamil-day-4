// 1. How to compare two JSON have the same properties without order ?
//     // a. var obj1= {name:"Person 1",age:5};
//     // b.var obj2 = { age: 5, name: "Person 1" };
    const obj1 = {
        name: 'Person1',
        age: '5'
      };
          
      const obj2 = {
        age: '5',
        name: 'Person1'
      };
          
    if (JSON.stringify(obj1) === JSON.stringify(obj2))
        console.log("true");
    else
        console.log("false");
