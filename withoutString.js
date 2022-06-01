function withoutString(base, remove){
  let blen = base.length;
  let rlen = remove.length;
  let lowbase = base.toLowerCase();
  let lowrem = remove.toLowerCase();
  let baseWithoutRemove = "";

  for (let i = 0; i < blen; i++) {
   
    if (i <= blen - rlen) {
      //temp is same length as 'remove' (rlen)
      let temp = lowbase.substring(i, i + rlen);
      //if temp's characters are NOT equal to 'remove's',
      if (temp != lowrem)
        //they are to be returned
        baseWithoutRemove += base.substring(i, i + 1);
      else {
        //i returns 'base' but with length of 'remove'
        i = i + rlen - 1;
      }
    }
    
    else {
      let temp2 = lowbase.substring(i, i + 1);
      if (temp2 != lowrem)
        baseWithoutRemove += base.substring(i, i + 1);
    }
  }
  return baseWithoutRemove;
}
