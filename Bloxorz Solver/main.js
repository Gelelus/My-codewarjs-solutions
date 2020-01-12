function bloxSolver(arr){
  function search(mass,w){
    for(let i = 0;i < mass.length;i++){
      if(mass[i].includes(w)){return [i,mass[i].indexOf(w)]} 
    }}
    
  const start = search(arr,'B')
  const end = search(arr,'X').join('')
  const map = new Map([['',start]]);
  let sequences = [''];
  let veto = new Set();
  
  function AvaliableCoord(coord){ //return true if cord is available
    if(coord.join('').includes('-') ||  [coord[1],coord[3]].includes(arr[0].length) || [coord[0],coord[2]].includes(arr.length)){
      return false
    }
    if(coord.length === 4 && `${arr[coord[0]][coord[1]]}${arr[coord[2]][coord[3]]}`.includes('0')) {
      return false
    }
    if(coord.length === 2 && arr[coord[0]][coord[1]] === '0'){
      return false
    }
    return !veto.has(coord.join(',')) 
  }
  
  function move(sequence){
     let cord = map.get(sequence)
     if (cord.length === 2){// _
                           // |_| position
         if(AvaliableCoord([cord[0],cord[1]+1,cord[0],cord[1]+2])){//R move
           map.set(sequence+'R',[cord[0],cord[1]+1,cord[0],cord[1]+2]);
           sequences.push(sequence+'R')
           veto.add([cord[0],cord[1]+1,cord[0],cord[1]+2].join(','))
         }
         if(AvaliableCoord([cord[0]+1,cord[1],cord[0]+2,cord[1]])){//D move
           map.set(sequence+'D',[cord[0]+1,cord[1],cord[0]+2,cord[1]]);
           sequences.push(sequence+'D')
           veto.add([cord[0]+1,cord[1],cord[0]+2,cord[1]].join(','))
         }
         if(AvaliableCoord([cord[0]-2,cord[1],cord[0]-1,cord[1]])){//U move
           map.set(sequence+'U',[cord[0]-2,cord[1],cord[0]-1,cord[1]]);
           sequences.push(sequence+'U')
           veto.add([cord[0]-2,cord[1],cord[0]-1,cord[1]].join(','))
         }
         if(AvaliableCoord([cord[0],cord[1]-2,cord[0],cord[1]-1])){//L move
           map.set(sequence+'L',[cord[0],cord[1]-2,cord[0],cord[1]-1]);
           sequences.push(sequence+'L')
           veto.add([cord[0],cord[1]-2,cord[0],cord[1]-1].join(','))
         }
     }
     else if (cord.length === 4){// _ _
      if(cord[0] === cord[2]){  // |_|_| position
         if(AvaliableCoord([cord[0],cord[1]+2])){//R move 
           sequences.push(sequence+'R')
           if([cord[0],cord[1]+2].join('') === end){return true} 
           veto.add([cord[0],cord[1]+2].join(','))
           map.set(sequence+'R',[cord[0],cord[1]+2]);
         }
         if(AvaliableCoord([cord[0]+1,cord[1],cord[2]+1,cord[3]])){//D move
           map.set(sequence+'D',[cord[0]+1,cord[1],cord[2]+1,cord[3]]);
           sequences.push(sequence+'D')
           veto.add([cord[0]+1,cord[1],cord[2]+1,cord[3]].join(','))
         }
         if(AvaliableCoord([cord[0]-1,cord[1],cord[2]-1,cord[3]])){//U move
           map.set(sequence+'U',[cord[0]-1,cord[1],cord[2]-1,cord[3]]);
           sequences.push(sequence+'U')
           veto.add([cord[0]-1,cord[1],cord[2]-1,cord[3]].join(',')) //ошибка с кордами фикс
         }
         if(AvaliableCoord([cord[0],cord[1]-1])){//L move
           sequences.push(sequence+'L')
           if([cord[0],cord[1]-1].join('') === end){return true}  
           veto.add([cord[0],cord[1]-1].join(','))
           map.set(sequence+'L',[cord[0],cord[1]-1]);
         }
      }    // |_|          
      else{// |_| position
         if(AvaliableCoord([cord[0],cord[1]+1,cord[2],cord[3]+1])){//R move
           map.set(sequence+'R',[cord[0],cord[1]+1,cord[2],cord[3]+1]);
           sequences.push(sequence+'R')
           veto.add([cord[0],cord[1]+1,cord[2],cord[3]+1].join(','))
         }
         if(AvaliableCoord([cord[0]+2,cord[1]])){//D move
           sequences.push(sequence+'D')
           if([cord[0]+2,cord[1]].join('') === end){return true}
           map.set(sequence+'D',[cord[0]+2,cord[1]]);
           veto.add([cord[0]+2,cord[1]].join(','))
         }
         if(AvaliableCoord([cord[0]-1,cord[1]])){//U move
           sequences.push(sequence+'U')
           if([cord[0]-1,cord[1]].join('') === end){return true}
           map.set(sequence+'U',[cord[0]-1,cord[1]]);
           veto.add([cord[0]-1,cord[1]].join(','))
         }
         if(AvaliableCoord([cord[0],cord[1]-1,cord[2],cord[3]-1])){//L move
           map.set(sequence+'L',[cord[0],cord[1]-1,cord[2],cord[3]-1]);
           sequences.push(sequence+'L')
           veto.add([cord[0],cord[1]-1,cord[2],cord[3]-1].join(','))
         }
      } 
    }
   }
   
   for(;;!sequences.length === 0){
     if(move(sequences[0])){break}
     sequences.shift()
  }

  return sequences[sequences.length-1]
  }
