export const meta=  {
  type:   `layout`,
  schema: [],
  fixable:`whitespace`,
  docs:   {
    recommended:false,
    description:`Wrap plain objects with O.`,
    category:   `Stylistic Issues`,
  },
};
export const create=u2=>{
  const object_expression=o2=>on_compact (A.suggest) (o2) (code.getText (o2)) (`o2`) (`O`);
  const array_expression= o2=>on_compact (A.suggest) (o2) (code.getText (o2).slice (1, - 1)) (`o1`) (`O`);
  const path=             u2.getFilename ();
  const code=             u2.getSourceCode ();
  switch (true) {
  case A.is (true) ((/\.(?:tsx)_/ug).test (path)): {
    return {
      ObjectExpression:object_expression,
      Literal:         on_literal (A.suggest),
      ArrayExpression: array_expression,
    };
  }
  default: {
    return {};
  }
  }
};

const on_compact=z1=>o2=>e2_2=>e2_1=>e2=>{
  const parent=o2.parent ?? {};
  const callee=parent.callee;
  switch (true) {
  case A.is (`CallExpression`) (parent.type) && A.is (`MemberExpression`) (callee.type) && A.is (e2) (callee.object.name) && A.is (e2_1) (callee.property.name): {
    return o2;
  }
  default: {
    const fix=   _1=>turn (_1) (o2) (`${e2}.${e2_1} (${e2_2})`);

    const report={
      node:   o2,
      message:`Wrap plain objects with O.${e2_1}`,
      fix:    fix,
    };

    return z1 (report);
  }
  }
};

const on_literal=z1=>o2=>{
  switch (true) {
  case A.is (false) (o2.value): {
    const fix=   _1=>turn (_1) (o2) (`A2.not ()`);

    const report={
      node:   o2,
      message:`Wrap literal ${o2.value} with A2.not ()`,
      fix:    fix,
    };

    return z1 (report);
  }
  case A.is (true) (o2.value): {
    const fix=   _1=>turn (_1) (o2) (`A2.can ()`);

    const report={
      node:   o2,
      message:`Wrap literal ${o2.value} with A2.can ()`,
      fix:    fix,
    };

    return z1 (report);
  }
  default: {
    return o2;
  }
  }
};

const turn=      u2=>o2=>e2=>{
  return u2.replaceText (o2, e2);
};

const A=         await import (`../a.js`);
