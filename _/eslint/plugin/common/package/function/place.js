export const meta=  {
  type:  `problem`,
  schema:[],
  docs:  {
    recommended:false,
    description:`Disallow non lambda functions at places.`,
    category:   `Best Practices`,
  },
};
export const create=u2=>{
  const on_call=o2=>A.each (on_value (A.suggest (u2))) (o2.arguments);
  const on_list=o2=>A.each (on_value (A.suggest (u2))) (o2.elements);
  return {
    VariableDeclaration:on_variable (A.suggest (u2)),
    Property:           on_property (A.suggest (u2)),
    FunctionExpression: on_function (A.suggest (u2)),
    FunctionDeclaration:on_function (A.suggest (u2)),
    CallExpression:     on_call,
    ArrayExpression:    on_list,
  };
};

const on_variable=z1=>o2=>{
  const parent=o2.parent;
  switch (true) {
  case A.is (`BlockStatement`) (parent.type): {
    const declarations=o2.declarations;
    const declaration= declarations.at (- 1);
    return actor (z1) (declaration.init);
  }
  default: {
    return o2;
  }
  }
};

const on_property=z1=>o2=>{
  return on_value (z1) (o2.value);
};

const on_value=   z1=>o2=>{
  switch (true) {
  case is_function (o2): {
    return actee (z1) (o2);
  }
  default: {
    return o2;
  }
  }
};

const on_function=z1=>o2=>{
  const report={
    node:   o2,
    message:`Disallowed.`,
  };

  return z1 (report);
};

const actor=      z1=>o2=>{
  const body=extract (o2);
  switch (true) {
  case A.is (`BlockStatement`) (body.type): {
    return actee (z1) (o2);
  }
  default: {
    return o2;
  }
  }
};

const actee=      z1=>o2=>{
  return z1 (act (o2));
};

const act=        o2=>{
  const parent=o2.parent;
  const type=  parent?.type;
  switch (true) {
  case A.is (`AwaitExpression`) (type) || A.is (`CallExpression`) (type): {
    return {
      node:   o2,
      message:`Disallowed as parameter.`,
    };
  }
  case A.is (`VariableDeclarator`) (type): {
    return {
      node:   o2,
      message:`Disallowed as variable.`,
    };
  }
  case A.is (`ObjectExpression`) (type): {
    return {
      node:   o2,
      message:`Disallowed as object's key's value.`,
    };
  }
  case A.is (`ArrayExpression`) (type): {
    return {
      node:   o2,
      message:`Disallowed as array's value.`,
    };
  }
  case A.is (`Property`) (type): {
    return {
      node:   o2,
      message:`Disallowed as key.`,
    };
  }
  default: {
    return {
      node:   o2,
      message:`Disallowed ${o2.type}.`,
    };
  }
  }
};

const is_function=o2=>{
  switch (true) {
  case A.is (`AsyncArrowFunctionExpression`) (o2.type): {
    return true;
  }
  case A.is (`ArrowFunctionExpression`) (o2.type): {
    return true;
  }
  case A.is (`AsyncFunctionExpression`) (o2.type): {
    return true;
  }
  case A.is (`FunctionDeclaration`) (o2.type): {
    return true;
  }
  case A.is (`FunctionExpression`) (o2.type): {
    return true;
  }
  default: {
    return false;
  }
  }
};

const extract=    o2=>{
  switch (true) {
  case A.is (`AsyncArrowFunctionExpression`) (o2.type): {
    return extract (o2.body);
  }
  case A.is (`ArrowFunctionExpression`) (o2.type): {
    return extract (o2.body);
  }
  default: {
    return o2;
  }
  }
};

const A=          await import (`../a.js`);
