function chain(ob) {
  function Gup(x) {
    this.x = x;
    for (let prop in ob) {
      this[prop] = function (){
        return this.x === undefined ? new Gup(ob[prop](...arguments)) : new Gup(ob[prop](this.x,...arguments))
      }
    }
    this.execute = function() { return this.x} 
  }

  return new Gup()
}
