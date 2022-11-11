// function addition(num1, num2) {
//     if( Number.isFinite(num1) && Number.isFinite(num2) ) {
//         document.write(num1+num2);//
//     }
//     else {
//         document .write("Inputs are not numbers");
//     }
// }

// addition(43,90);

// //Joel Example of a two arguements function
// function addition(numb1, numb2) {
//     if((Number.isFinite(numb1)) &&
//     (Number.isFinite(numb2)) ) return numb1 + numb2;
//     return `${numb1} / ${numb2} is not a number`;
// }
// console.log(addition(8, 7));

// let marks = 50;
// // switch (marks) {
// //     case 100:
// //     case 95:
// //     document.write("Grade A");
// //     break;
// //     case 91:
// //     case 90:
// //     case 87:
// //     document.write("Grade B");

// //     break;
// //     case 98:
// //     document.write("Passed");
// //     break;
// //     case 49:
// //     document.write("Failed");
// //     break;
// // //     default:
// // //     document.write("Not found");
// // // }

// // // My way of getting the result
// // let marks = 50
// // switch (marks) {
// //     case 100:
// //     case 91:
// //     document.write("Your're awesome")
// //     break;
// //     case 90:
// //     case 70:
// //         document.write("Distintion")
// //     break;
// //     case 69:
// //     case 50:
// //         document.write("Passed")
// //         break;
// //         case 49:
// //         case 0:
// //             document.write("Display you Failed")
// // }

// // //Joels Way of the reults Quicker
// // let marks = 71;
// // switch(true) {
// //     case marks <= 49:
// //         console.log("You failed");
// //     break;
// //     case (marks >= 50) && (marks <= 69):
// //         console.log("Passed");
// //     break;
// //     case (marks >= 70) && (marks <= 90):
// //         console.log("Distinction");
// //     break;
// //     case (marks >= 91) && (marks <= 100):
// //         console.log("You're awesome");
// //     break;
// // }

// /*
// Different loop in JS:
// - for
// - for in: Loop through object's properties
// - for of: Loop through the values
// - while
// - do while
// // */
// // //Joels Way
// // for (let i =0; i<10; i+=2){
// //     // if( i % 2 === 0)
// // //     // console.log(i);
// // // }
// // // // if(i == 5) break ;
// // // if(i==4) continue ;
// // // console.log(i)


// // // Johns shortcut
// // //Don't use if you can't explain
// // for (let i = 0; i<10; i+=2){
// //     if( (i%2))
// //     console.log(i);
// // }

// // //Display
// // async function displayData() {
// //     let results = await fetchData();
// //     if (displayData.gender === 'male') {
// //         console.log(results)
// // }
// // }


// // for in
// let person = {
//     name: 'David',
//     surname: 'Brian',
//     address: {
//         streetName: 'Pretoria rd',
//         country:'South Africa',
//         complexName: 'PTA',
//     }
// }

// for(let data in person){
//     if (data != 'address')
//     console.log('${data'): ${person[data]}
// }

// for(let i =0; i<SVGAnimatedNumberList.length; i++){
//     console.log(numbers[i]);
// }


// console.log(person.address)
// // console.log(person);

// console.log(
//     `
//     Name:${person.name}
//     Surname: ${person.surname}
//     Address: ${person.address}
//     `
//     );

//while
let cnt = 0
while (true) {
    if(cnt < Number.legnth){
        console.log(numbers[cnt]);
    }else {
        break;
    }
console.log(cnt);
cnt++;
}