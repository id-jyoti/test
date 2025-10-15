export const setting=z1=>o2_2=>o2_1=>o2=>{
  const settings=       {};
  const ignores=        [];

  const languageOptions={
    sourceType:   `module`,
    parserOptions:o2_2,
    parser:       z1,
    globals:      {
      ... Globals.browser,
      ... Globals.node,
    },
    ecmaVersion: `latest`,
  };

  const linterOptions=  {
    reportUnusedDisableDirectives:true,
    noInlineConfig:               false,
  };

  const result=         detect (o2_1) (o2);
  switch (true) {
  case Object.keys (result).length > 0: {
    // eslint-disable-next-line no-undefined
    globalThis.console.log (JSON.stringify (result, undefined, 1));
    break;
  }
  default: {
    break;
  }
  }
  return [
    {
      settings:       settings,
      rules:          o2,
      plugins:        o2_1,
      name:           `main`,
      linterOptions:  linterOptions,
      languageOptions:languageOptions,
      ignores:        ignores,
      files:          [
        `**/*.tsx`,
        `**/*.ts`,
      ],
    },
  ];
};
export const plugins=x1_=>{
  return {
    "perfectionist":     Plugin.perfectionist (``),
    "jsx-a11y":          Plugin.jsx_a11y (``),
    "common":            Plugin.common (``),
    "@typescript-eslint":Plugin.typescript (``),
    "@stylistic":        Plugin.stylistic (``),
  };
};
export const detect= o2_1=>o2=>{
  const tool_name=Object.keys (o2_1);

  const rule_list=tool_name.flatMap (_1=>{
    const action=__1=>({
      rule:rules[__1],
      k:   _1,
      a:   __1,
    });

    const rules= o2_1[_1].rules;
    const ruler= Object.keys (rules);
    return ruler.map (action);
  });

  const filter=   _1=>Object.is (rule_active (`${_1.k}/${_1.a}`) (o2), false);

  const reduce=   (_1, _2)=>({
    ... _1,
    ... _2,
  });

  const map=      _1=>({
    [`${_1.k}/${_1.a}`]: [
      2,
    ],
  });

  const act=      {};
  return (
    rule_list
      .filter (rule_usable (o2))
      .filter (filter)
      .map (map)

      .reduce (reduce, act)
  );
};
export const az=     o2_=>{
  const use= {
    warnOnUnsupportedTypeScriptVersion:true,
    tsconfigRootDir:                   Path.resolve (dirname),
    sourceType:                        `module`,
    requireConfigFile:                 false,
    projectFolderIgnoreList:           [],
    project:                           `./tsconfig.json`,
    lib:                               [
      `esnext`,
    ],
    jsxPragma:            `C_3`,
    jsxFragmentName:      `C.$3`,
    extraFileExtensions:  [],
    emitDecoratorMetadata:true,
    ecmaVersion:          `latest`,
    ecmaFeatures:         {
      jsx:          true,
      impliedStrict:true,
      globalReturn: true,
    },
    createDefaultProgram:false,
    cacheLifetime:       36,
    allowReserved:       true,
  };

  const list=plugins (``);

  const act= {
    ... Typescript.rule_over,
    ... Typescript.rule,
    ... Stylistic.rule,
    ... Perfectionist.rule,
    ... Jsx_a11y.rule,
    // ... Common.rule,
    ... Javascript.rule_over,
    ... Javascript.rule,
    ... {
      "perfectionist/sort-jsx-props": [
        0,
      ],
      "no-ternary": [
        0,
      ],
      "no-console": [
        0,
      ],
      "@typescript-eslint/strict-boolean-expressions": [
        0,
      ],
      "@typescript-eslint/no-unnecessary-condition": [
        0,
      ],
      "@typescript-eslint/naming-convention": [
        0,
      ],
      "@typescript-eslint/max-params": [
        0,
      ],
    },
  };

  return setting (Parser.typescript (``)) (use) (list) (act);
};

const rule_usable=  o2_1=>o2=>{
  switch (true) {
  case Object.is (true, o2.rule.meta?.deprecated): {
    const name=`${o2.k}/${o2.a}`;
    const by=  (o2.rule.meta?.replacedBy ?? []).join (` `);
    switch (true) {
    case Object.is (true, rule_active (name) (o2_1)): {
      globalThis.console.log (`deprecated:`, name, by);

      return false;
    }
    default: {
      return false;
    }
    }
  }
  default: {
    return true;
  }
  }
};

const rule_active=  i2=>o2=>{
  switch (true) {
  case i2 in o2: {
    return true;
  }
  default: {
    return false;
  }
  }
};

const Url=          await import (`node:url`);
const Path=         await import (`node:path`);
const Globals=         await import (`globals`);
const Typescript=   await import (`./_/eslint/config/plugin/typescript`);
const Stylistic=    await import (`./_/eslint/config/plugin/stylistic`);
const Perfectionist=await import (`./_/eslint/config/plugin/perfectionist`);
const Jsx_a11y=     await import (`./_/eslint/config/plugin/jsx-a11y`);
const Javascript=   await import (`./_/eslint/config/plugin/javascript`);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Common=       await import (`./_/eslint/config/plugin/common`);
const Plugin=       await import (`./_/eslint/config/plugin`);
const Parser=       await import (`./_/eslint/config/parser`);
const filename=     Url.fileURLToPath (import.meta.url);
const dirname=      Path.dirname (filename);
export default az (1);
