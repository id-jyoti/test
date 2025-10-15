export const meta=  {
  type:   `suggestion`,
  fixable:`code`,
  docs:   {
    description: `Sort exports.`,
  },
};
export const create=u2=>{
  const code=u2.sourceCode;
  return {
    Program: on_program (A.suggest (u2)) (code),
  };
};

const on_program=z1=>u2=>o2=>{
  const list=pick (o2);
  const kept=A.each (keep) (list);
  return A.each (z1) (A.order (actor (u2)) (A.sort (sort) (kept)) (kept));
};

const actor=     u2=>o2_1=>o2=>{
  switch (true) {
  case Object.is (o2_1.name, o2.name): {
    return {};
  }
  default: {
    const fix=_1=>_1.replaceText (o2_1.link, u2.getText (o2.link));
    return {
      node:   o2.link,
      message:`Misarranged.`,
      fix:    fix,
    };
  }
  }
};

const sort=      o2_1=>o2=>{
  const setting={
    usage:            `search`,
    sensitivity:      `variant`,
    numeric:          true,
    localeMatcher:    `lookup`,
    ignorePunctuation:false,
    collation:        `default`,
    caseFirst:        `upper`,
  };

  return o2.name.localeCompare (o2_1.name, undefined, setting);
};

const keep=      o2=>{
  const declaration=o2.declaration.declarations.at (- 1);
  return {
    name:declaration.id.name,
    link:o2,
  };
};

const pick=      o2=>{
  return o2.body.filter (find);
};

const find=      o2=>{
  switch (true) {
  case A.is (`ExportNamedDeclaration`) (o2.type): {
    return true;
  }
  default: {
    return false;
  }
  }
};

const A=         await import (`../a.js`);
