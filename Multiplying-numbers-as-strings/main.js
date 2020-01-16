function multiply(a, b){
 
 function sum(a,b) { 
  let x = '';
  let n = 0;
  for(let i = 1;a.length - i >-1 || b.length - i>-1;i++){
    x = ((+a[a.length-i]||0) + (+b[b.length-i]||0) + n)%10+x;
    n = (+a[a.length-i]||0) + (+b[b.length-i]||0) + n > 9 ? 1 : 0;
  }
  return  ((n+x).match(/[^0].*/)||'0').toString();
  }
  
  if(a == 0 || b == 0){return '0' }
  a = a.match(/[^0]\d*/).toString();
  b = b.match(/[^0]\d*/).toString();
  let mult = '0';
  let nulls = '';
  for(let i = a.length-1 ;i>-1;i--){
    let n = 0;
    let x = '';
    for(let j = b.length-1;j>-1;j--) {
      x = (a[i]*b[j]+n)%10+x
      n = Math.floor((a[i]*b[j]+n)/10)
    }
    
    mult = sum(n+x+nulls,mult);
    nulls += 0;
  }
  return mult
}
