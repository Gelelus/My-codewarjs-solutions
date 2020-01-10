function whoIsWinner(p){
  var a = ['','','','','','',''];
  var b = 'ABCDEFG';
  
  for(let i = 0; i < p.length;i++){
    a[b.indexOf(p[i][0])] += p[i][2]
    let check1 = a[b.indexOf(p[i][0])];
    let check2 = '';
    let check3 = '';
    let check4 = '';
    let id = check1.length-1;
    if(/RRRR|YYYY/.test(check1)){return /YYYY/.test(check1)  ? 'Yellow' : 'Red'}
    for(let element of a){check2 += element[id]||1}
    if(/RRRR|YYYY/.test(check2)){return /YYYY/.test(check2)  ? 'Yellow' : 'Red'}
    let c = b.indexOf(p[i][0]) - id;
    for(let m = c >= 0 ? [c,0] : [0,-c] ;m[0] < 7 ;m = [m[0]+1,m[1]+1]){check3 += a[m[0]][m[1]]||1}//???
    if(/RRRR|YYYY/.test(check3)){return /YYYY/.test(check3)  ? 'Yellow' : 'Red'}
    c = b.indexOf(p[i][0]) + id;
    for(let m = c <= 6 ? [c,0] : [6,c-6]; m[0] > -1 ;m = [m[0]-1,m[1]+1]){check4 += a[m[0]][m[1]]||1}//???
    if(/RRRR|YYYY/.test(check4)){return /YYYY/.test(check4) ? 'Yellow' : 'Red'}
  }
  return 'Draw';
}
 
