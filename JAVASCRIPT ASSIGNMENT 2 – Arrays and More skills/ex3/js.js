var Name = [];
while(1){
   enter = prompt("enter name : ");
   if(enter!=""){
    Name[Name.length]=enter;
   }
   else{
       break;
   }
}
Name.sort();
document.write(Name.join("-"));
