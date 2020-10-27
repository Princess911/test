function mean1(){
    var sum=0,len=arguments.length;
    for(var i=0;i<len;i++){
    sum=sum+arguments[i];}
    return sum/len;
    }
    var A=mean1(1,2,3,4,5);
    console.log(A);