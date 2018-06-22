for(i = 1; i <= 100; i++){
  if(i % 3 === 0 && i != 0){
  if(i % 5 === 0){
    alert("fizzbuzz");
  }
  else {
    alert("fizz");
  }
}
else if(i % 5 === 0){
  alert("buzz");
}
  
  console.log(i);
}