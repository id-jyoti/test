export const meta=  {
  type:  `suggestion`,
  schema:[],
  docs:  {
    recommended:false,
    description:`Disallow object and array as function parameter.`,
    category:   `Best Practices`,
  },
};
export const create=u2=>{
  return {
    CallExpression: on_call (A.suggest (u2)),
  };
};

const on_call=z1=>o2=>{
  A.each (z1) (actor (o2.arguments));
};

const actor=  o1=>{
  return A.each (actee) (o1);
};

const actee=  o2=>{
  switch (true) {
  case A.is (`ObjectExpression`) (o2.type): {
    return act2 (o2);
  }
  case A.is (`ArrayExpression`) (o2.type): {
    return act2 (o2);
  }
  case A.is (`CallExpression`) (o2.type): {
    return act1 (o2);
  }
  default: {
    return {};
  }
  }
};

const act2=   o2=>{
  const parent=o2.parent;
  switch (true) {
  case A.is (`MemberExpression`) (parent.callee.type) && A.is (`O`) (parent.callee.object.name): {
    return {};
  }
  default: {
    return {
      node:   o2,
      message:`Invalid argument.`,
    };
  }
  }
};

const act1=   o2=>{
  switch (true) {
  case A.is (`MemberExpression`) (o2.callee.type) && A.is (`O`) (o2.callee.object.name): {
    return {
      node:   o2,
      message:`Invalid argument.`,
    };
  }
  default: {
    return {};
  }
  }
};

const A=      await import (`../a.js`);
