export const suggest=u2=>o2=>{
  switch (true) {
  case `node` in o2: {
    return u2.report (o2);
  }
  case `loc` in o2: {
    return u2.report (o2);
  }
  default: {
    return o2;
  }
  }
};
export const sort=   z1=>o1=>{
  // eslint-disable-next-line @typescript-eslint/max-params
  const use=(o2, o2_1)=>z1 (o2_1) (o2);
  return o1.toSorted (use).toReversed ();
};
export const order=  z1=>o1_1=>o1=>{
  // eslint-disable-next-line @typescript-eslint/max-params
  const map=(_2, _1)=>z1 (o1_1.at (_1)) (_2);
  return o1.map (map);
};
export const is=     a2=>a1=>{
  return Object.is (a2, a1);
};
export const each=   z1=>o1=>{
  const map=x1=>z1 (x1);
  return o1.map (map);
};

// const note=   code.getAllComments ().map (n=>{
//   return n.value.trim ();
// });

// const jsx=    (note.find (n=>{
//   return n.startsWith (`@jsx `);
// }) ?? ``).replaceAll (`@jsx `, ``);

// const marker= o2=>e2=>{
//   switch (true) {
//   case jsx.startsWith (`${e2}.`):
//     code.markVariableAsUsed (e2, o2);

//     return true;
//   default:
//     return false;
//   }
// };

// export const to=        o2=>{
//   return Generator.default.default (o2).code;
// };

// const Generator= await import (`@babel/generator`);
