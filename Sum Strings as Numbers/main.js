function sumStrings(a,b) { 
  let x = '';
  let n = 0;
  for(let i = 1;a.length - i >-1 || b.length - i>-1;i++){
    x = ((+a[a.length-i]||0) + (+b[b.length-i]||0) + n%2)%10+x;
    n = (+a[a.length-i]||0) + (+b[b.length-i]||0) + n%2 > 9 ? 1 : 0
  }
  return n==1 ? 1+x : x.slice(x.split('').map(function(a){return !!+a}).indexOf(true))
  }
