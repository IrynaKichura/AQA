// const array = [ 'apple', 'banana', 'cherry' ];
// console.log(array[2]);

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// for (const fruit of array) {
//     console.log(fruit);
// }


// array.forEach((fruit, index) => {
//     console.log(`${index}: ${fruit}`);
// })

// const array2 = [ 1,2,3,4 ];
// const array3 = array2.map((number)=>{
//     return number*2;
// });
// console.log(array3);

//split
//  const str = "Hello, how are you?";
//  const words = str.split(" ");
//  console.log(words);
//join
// const array = [ 'apple', 'banana', 'cherry' ];
//     let joinedStr = array.join(" "); 
//      console.log(joinedStr);
//      joinedStr = array.join();      
//     console.log(joinedStr);
//     console.log(typeof(joinedStr));
//     const index = array.indexOf('banana');
//     console.log(index);

    //  const array = [ ['apple', 'banana'], [3,4,],['cherry', 'banana'] ];
    //  for (const subArray of array) {
    //     subArray.forEach((element) => {
    //         console.log(element); 
    //     })
    // }

    // const array5 = [ ['apple', 'banana', [1,2,7]], [3,4,],['cherry', 'banana'] ].flat();
    // console.log(array5);

    // const array5 = [ ['apple', 'banana', [1,2,7]], [3,4,],['cherry', 'banana'] ]
    // console.log(array5[0][2][0]);

     const array = [ 1, 0, -7,2,7, 8,4,];
        const filteredArray = array.filter((number) => number > 0);
        console.log(filteredArray.sort());