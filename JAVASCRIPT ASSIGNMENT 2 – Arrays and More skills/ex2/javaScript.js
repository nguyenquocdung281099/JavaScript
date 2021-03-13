var n,m;
n= parseInt(prompt("enter n : "));
m = parseInt(prompt("enter m"));

// //1.	Declare a 2 dimension array with n rows and m column.
var integerArray =new Array(n);
for(var i =0; i<integerArray.length;i++)
{
    integerArray[i]=new Array(m);
}

// 2.	Write a function to permit user enter the values for elements of array.
var enterArray2d= function(nameArray){
    for(var i =0; i<nameArray.length;i++){
        for(var j =0;j<nameArray[i].length;j++){
            nameArray[i][j]= prompt("enter value array");
        }
    }
}

// 3.	Write another function to print all the elements of array to screen.
var printArray2d = function(nameArray){
    var result ="array : ";
    for(var i =0; i<nameArray.length;i++)
    { 
        for(var j =0; j<nameArray[i].length;j++)
        {
            result+=(nameArray[i][j]+"  ");
        }
         result+="//  ";
    }
    document.write(result);
}


// 4.	Write a function to calculate the total of elements of array.
var sumArray2d = function(nameArray){
    var sum =0;
    for(var i =0; i<nameArray.length;i++)
    { 
        for(var j =0; j<nameArray[i].length;j++)
        {
            sum+=parseInt(nameArray[i][j]);
        }
         
    }
    document.write("<br>sum ="+sum);
}


// 5.	Write a function to enter a number and then check it is exist in array or not. 
//way 1: 
// var searchMember = function(nameArray){
//     var member = parseInt(prompt("enter member you need search: "));
//     var result =false;
//     for(var i =0; i<nameArray.length;i++)
//     { 
//         for(var j =0; j<nameArray[i].length;j++)
//         {
//            if(member = nameArray[i][j])
//            {
//                result = true;
//                alert("have member");
//                break;
//            }
//         }
//         if(result == true){
//             break;
//         } 
//     }
//     if(result==false){
//         alert("not member");
//     }
// }



//way2
var searchMember= function(arrayName){
    var member = (prompt("enter member : "));
    var flat = arrayName.reduce(function(result,array){
        return result.concat(array);
    })
    console.log(flat);
    console.log(arrayName);
    var isMember= flat.includes(member);
    if(isMember==true){
        alert("Members you need to find in position: ");
    }
    else{
        alert("not have this member in array");
    }
}
// 6.	Write a method to sort the elements of this array by ascending.
var comparision = function(x, y){
	return y-x;
};

var sortArray = function(array2){
    // way-1
    // for (var k =0; k<array2.length;k++) {
    //     for(var i =0; i<array2[k].length;i++)
    // {
    //     for(var j = 1;j<array2[k].length;j++)
    //     {
    //         if(array2[k][j-1] > array2[k][j])
    //         {
    //           swap = array2[k][j];
    //           array2[k][j]= array2[k][j-1];
    //           array2[k][j-1]=swap;
    //         }
    //     }
    // }
    // }
    


    //way2
    for(var i =0;i <array2.length ;i++){
        (array2[i].sort(comparision));
    }
    document.write("<br>after sort ")
    printArray2d(array2);
}

// 7.	Setup a menu for this program.
var programArray = function(arrayName){
    enterArray2d(arrayName);
        var index = parseInt(prompt("enter number :  1 – Print Array  2- Search a member  3- Find sum   4-sort array by descending"));
    switch(index){
        
        case 1:
            printArray2d(arrayName);
            break;
        case 2:
            searchMember(arrayName);
            break;
        case 3:
            sumArray2d(arrayName);
            break; 
        case 4:
            sortArray(arrayName);
            break;
    }
}
window.onload = programArray(integerArray);
