function escape(maze) {
  var plas = function(a,b){
     if (a == b){return 'F'}
     else {
     if(/<\^|\^>|>v|v</.test(a+b)){return 'RF'}
     if(/<v|\^<|>\^|v>/.test(a+b)){return 'LF'}
     if(/<>|\^v|><|v\^/.test(a+b)){return 'BF'}
   } 
  }
  var search = function(maze){
  for(let i = 0;i < maze.length;i++){
    if (/[>v^<]/.test(maze[i])){
      if(i == 0 || i == maze.length-1 || maze[i].search(/[>v^<]/) == 0 || maze[i].search(/[>v^<]/) == maze[0].length-1){
        return 0
      }
      else {return [i,maze[i].search(/[>v^<]/)]}
    }
  }
  }
  var turnMove = function(maze,m){
  
  let c = search(maze)
  if(c == 0){mov.push(m)}
  else{
    if(maze[c[0]-1][c[1]] == ' '){
      turnMove(maze.map(function(a,i){
        if(i == c[0]){return a.replace(/[>v^<]/,'#')}
        else if (i == c[0]-1){return a.replace(a.slice(0,c[1]+1),a.slice(0,c[1])+'^')}
        else {return a}}),m + plas(maze[c[0]][c[1]],'^'));
    }
    if(maze[c[0]+1][c[1]] == ' '){
      turnMove(maze.map(function(a,i){
       if(i == c[0]){return a.replace(/[>v^<]/,'#')}
       else if (i == c[0]+1){return a.replace(a.slice(0,c[1]+1),a.slice(0,c[1])+'v')}
       else {return a}}),m + plas(maze[c[0]][c[1]],'v'));
    }
    if(maze[c[0]][c[1]+1] == ' '){
      turnMove(maze.map(function(a,i){if(i==c[0]){return a.replace(/[>v^<] /,'#>')}
                    else {return a}}),m + plas(maze[c[0]][c[1]],'>'));
    }
    if(maze[c[0]][c[1]-1] == ' '){
      turnMove(maze.map(function(a,i){if(i==c[0]){return a.replace(/ [>v^<]/,'<#')}
                    else {return a}}),m + plas(maze[c[0]][c[1]],'<'));
    }
    }
  }
  let mov = [];
  turnMove(maze,'')
  if(mov.length>1){mov = mov.reduce(function (a,n){if(n.length < a.length){a = n}return a})}
  if(mov.length == 0){return mov}
  return mov.toString();
}
