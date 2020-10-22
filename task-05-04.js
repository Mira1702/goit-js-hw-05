class StringBuilder  {
    value = ''
    constructor (value) {   
      this.value = value;   
    }
    get val() {
      return this.value;
    }
    set val(value) {
      this.value = value;
    }
    append(str) {   
      this.value += str;
    }
    prepend(str) {
      this.value = str + this.value;
    }
    pad(str) {
      this.append(str);
      this.prepend(str);
    }
  } 
  console.log(typeof StringBuilder);
  // 'function'
  const builder = new StringBuilder('.');
  builder.append('^');
  console.log(builder.value); // '.^'
  builder.prepend('^');
  console.log(builder.value); // '^.^'
  builder.pad('=');
  console.log(builder.value); // '=^.^='
                                                                                    