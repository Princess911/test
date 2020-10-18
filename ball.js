//John
var arr = [89,120,30];
  var sum = 0;
  for(var i=0;i<arr.length;i++){
      sum += arr[i];
  }
  var avg1 = sum/arr.length;
  
  console.log( avg1 );
  
  //Mike
  var arr = [116,94,123];
  var sum = 0;
  for(var i=0;i<arr.length;i++){
      sum += arr[i];
  }
  var avg2 = sum/arr.length;
  console.log(avg2);

  //Mary
  var arr = [97,134,105];
  var sum = 0;
  for(var i=0;i<arr.length;i++){
      sum += arr[i];
  }
  var avg3 = sum/arr.length;
  console.log(avg3);
  
  var max;
  var name;
  if(avg1 >= avg2){
  max = avg1 ;
  name = "分数为：" ;
  }else{
  max = avg2 ;
  name = "分数为：" ; 
  }
  if(max < avg3){
  max = avg3 ;
  name = "分数为：" ;
  }
  console.log(name + max);

