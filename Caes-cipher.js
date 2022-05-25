function londre20(str) {
  //
  const Acode = 'A'.charCodeAt();
  const Ncode = 'N'.charCodeAt();
  const Zcode = 'Z'.charCodeAt();
  return [...str]
    .map(function (e) {
      const code = e.charCodeAt();
      if (Acode <= code && code <= Zcode) {
        if (code < Ncode) {
          return String.fromCharCode(code + 13);
        } else {
          return String.fromCharCode(code - 13);
        }
      } else {
        return e;
      }
    })
    .join('');
}
londre20('UKRAINE VS SOVIETUNION');
