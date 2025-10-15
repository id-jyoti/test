export const meta=  {
  type:   `layout`,
  schema: [],
  fixable:`code`,
  docs:   {
    recommended:false,
    description:`Enforce alignment at \`=\` operator`,
    category:   `Stylistic Issues`,
  },
};
export const create=u2=>{
  const code=u2.getSourceCode ();
  return {
    Program:       on_program (A.suggest (u2)) (code),
    BlockStatement:on_section (A.suggest (u2)) (code),
  };
};

const on_program= z1=>u2=>o2=>{
  actor (z1) (u2) (find_export (o2.body));
  actor (z1) (u2) (find (o2.body));

  return o2;
};

const on_section= z1=>u2=>o2=>{
  actor (z1) (u2) (find (o2.body));

  return o2;
};

const actor=      z1=>u2=>o1=>{
  const kept=A.each (keep) (o1);
  switch (true) {
  case kept.length > 0: {
    const use= _1=>_1.id.range.at (1) - _1.id.range.at (0);
    const map= _1=>actee (u2) (_1) (max);
    const diff=A.each (use) (kept);
    const max= Math.max (... diff);
    return A.each (z1) (A.each (map) (kept));
  }
  default: {
    return [];
  }
  }
};

const actee=      u2=>o2=>i1=>{
  const init=        o2.init;
  const id=          o2.id;
  const init_range=  init.range;
  const id_range=    id.range;
  const init_range_0=init_range.at (0);
  const id_range_0=  id_range.at (0);
  const gap=         (id_range_0 + i1 + `=`.length) - init_range_0;
  switch (true) {
  case gap < 0: {
    const fix=_1=>turn (_1) (init_range_0 + gap) (init_range_0) (``);
    return {
      message:`Extra spaces.`,
      loc:    {
        start:u2.getLocFromIndex (init_range_0 + gap),
        end:  u2.getLocFromIndex (init_range_0),
      },
      fix: fix,
    };
  }
  case gap > 0: {
    const fix=_1=>turn (_1) (init_range_0) (init_range_0) (` `.repeat (gap));
    return {
      message:`Fewer spaces.`,
      loc:    {
        start:u2.getLocFromIndex (init_range_0),
        end:  u2.getLocFromIndex (init_range_0),
      },
      fix: fix,
    };
  }
  default: {
    return {};
  }
  }
};

const turn=       _u2=>i1_1=>i1=>e2=>{
  const range=[
    i1_1,
    i1,
  ];

  return _u2.replaceTextRange (range, e2);
};

const keep=       o2=>{
  const init=o2.init;
  const id=  o2.id;
  return {
    init:init,
    id:  id,
  };
};

const pure=       o2=>{
  const init=o2.init;
  const id=  o2.id;
  switch (true) {
  case A.is (true) (Boolean (init)) && A.is (true) (Boolean (id)): {
    return true;
  }
  default: {
    return false;
  }
  }
};

const from_export=o2=>{
  switch (true) {
  case A.is (`ExportNamedDeclaration`) (o2.type): {
    return true;
  }
  default: {
    return false;
  }
  }
};

const from=       o2=>{
  switch (true) {
  case A.is (`VariableDeclaration`) (o2.type): {
    return true;
  }
  default: {
    return false;
  }
  }
};

const find_export=o2=>{
  const map=_1=>_1.declaration;
  return find (A.each (map) (o2.filter (from_export)));
};

const find=       o2=>{
  const map=_1=>_1.declarations.at (- 1);
  return A.each (map) (o2.filter (from)).filter (pure);
};

const A=          await import (`../a.js`);
