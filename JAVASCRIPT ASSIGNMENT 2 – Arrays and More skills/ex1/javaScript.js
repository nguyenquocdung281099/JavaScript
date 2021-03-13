//Create an integer array with 10 elements and the fill the data for this array.
var integerArray = [1,2,4,5,40,2,5,6,8,10];
// Write a function to print all member of array to screen
var printArray = function(arrayName){
    document.write(arrayName.join("-"));
}
// 3.	Write a function to permit user enter a value and find this is exits in array or not.
var searchMember = function(arrayName){
    var search = prompt("enter member you want search : ");
    var result = false;
    for(var i =0; i < arrayName.length ;i++)
    {
        if(search == arrayName[i])
        {
            result =true;
             alert("Members you need to find in position: "+ i );
             break;
        }
    }
    if(result==false){
        alert("not have this member in array");
    }
}
//Write a function to find the maximum value in this array
var maximumArray = function (arrayName) {
    var max =-Infinity;
   for (const key in arrayName) {
         if(arrayName[key]>max)
         {
             max = arrayName[key];
         }
   }
   document.write("<br> maximum of array is : "+ max);
    
}
// sum array 
var sumArray = function (arrayName) {
    var sum =0;
    for (const key in arrayName) {
              sum+= arrayName[key];
    }
    document.write("<br>sum = "+ sum);
}
// Write a function to sort all elements of array by descending\
//way1
var comparision = function(x, y){
	return y-x;
};

var sortArray = function(arrayName){
    arrayName.sort(comparision);
    printArray(arrayName);
}
//way2----->>>>>> 
// var sortArray = function(arrayName){
//     var index =0;
//     var swap =0;
//     var array2 = [];
//     for (const key in arrayName) {
//         array2[array2.length] = arrayName[key];
//     }
//     for(var i =0; i<array2.length;i++)
//     {
//         for(var j =1;j<array2.length;j++)
//         {
//             if(array2[j-1] < array2[j])
//             {
//               swap = array2[j];
//               array2[j]= array2[j-1];
//               array2[j-1]=swap;
//             }
//         }
//     }
//     document.write("<br>after sort ")
//     printArray(array2);
// }

var programArray = function(arrayname){
    
    var index = parseInt(prompt("enter number :  1 – Print Array  2- Search a member  3- Find Maximum Number  4-sort array by descending"));
    switch(index){
        case 1:
            printArray(arrayname);
            break;
        case 2:
            searchMember(arrayname);
            break;
        case 3:
            maximumArray(arrayname);
            break;
        case 4:
            sortArray(arrayname);
            break; 
    }
}
window.onload = programArray(integerArray);

