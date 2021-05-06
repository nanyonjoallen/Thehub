function testTemp(t) {
    let result= '';
    var t=33;
    if (t==35){
      result = ('watch your temperature');
    }
    else if(t>=37){
      result = 'please test for covid-19';
    }
    else{
        result = 'your temperature is normal';
    } 
    return result;
}
  
  console.log(testTemp);
  // output

