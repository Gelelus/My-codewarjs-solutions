function biggestTriangInt(pointsList, center, radius) {
    var d = (a,b) => Math.sqrt((a[0]-b[0])**2+(a[1]-b[1])**2+(a[2]-b[2])**2);
    var s = (a,b,c) => Math.sqrt(((a+b+c)/2)*(((a+b+c)/2)-a)*(((a+b+c)/2)-b)*(((a+b+c)/2)-c));
    pointsList = pointsList.filter(a => d(a,center)<radius);
    if(pointsList==0){return []}
    var BigS = [0];
    var o = 0;
    for(let i=0;i<pointsList.length-2;i++){
      for(let j = i+1;j<pointsList.length-1;j++){
        for(let k = j+1;k<pointsList.length;k++){
          let a = s(d(pointsList[i],pointsList[j]),d(pointsList[i],pointsList[k]),d(pointsList[j],pointsList[k]));
          if(+BigS[0].toFixed(10)<+a.toFixed(10)){BigS = [a,[pointsList[i],pointsList[j],pointsList[k]]]}
          else if(+a.toFixed(10)==+BigS[0].toFixed(10)){BigS[1]=[BigS[1],[pointsList[i],pointsList[j],pointsList[k]]]}
          if(a>10**-8)o++;
        }
      }
    }
    BigS.unshift(o);
    return o>0 ?BigS:[];
}
