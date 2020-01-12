const Minor = function(M,j) {
 const Mc = M.slice();
 for (let i = 0;i < Mc.length;i++){
 Mc[i] = M[i].slice();
 Mc[i].splice(j, 1);
 }
 Mc.splice(0, 1);
 return(Mc);
 }
function determinant(m) {
 if (m.length > 1) {
 let sum = 0;
 for (let j = 0; j < m.length; j++){sum += ((-1)**j)*m[0][j]*determinant(Minor(m,j))}
 return sum}
 else {return Number(m)}
 } 
