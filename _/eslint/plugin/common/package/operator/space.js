export const meta=  {
  type:   `layout`,
  schema: [],
  fixable:`whitespace`,
  docs:   {
    recommended:false,
    description:`Disallow spaces before assignment operators.`,
    category:   `Stylistic Issues`,
  },
};
export const create=u2=>{
  const code=u2.getSourceCode ();
  return {
    VariableDeclaration: on_variable (A.suggest (u2)) (code),
  };
};

const on_variable=z1=>u2=>o2=>{
  return A.each (z1) (A.each (each (u2)) (o2.declarations));
};

const turn=       u2=>e2_1=>e2=>{
  const range=[
    e2.range.at (1),
    e2_1.range.at (0),
  ];

  return u2.replaceTextRange (range, ``);
};

const each=       u2=>o2=>{
  switch (true) {
  case A.is (null) (o2.init): {
    return {};
  }
  default: {
    const sign=u2.getTokenBefore (o2.init);
    const name=u2.getTokenBefore (sign);
    switch (true) {
    case (sign.range[0] - name.range[1]) > 0: {
      const fix=_u2=>turn (_u2) (sign) (name);
      return {
        node:   sign,
        message:`Disallowed spaces.`,
        loc:    {
          start:name.loc.end,
          end:  sign.loc.start,
        },
        fix: fix,
      };
    }
    default: {
      return {};
    }
    }
  }
  }
};

const A=          await import (`../a.js`);
