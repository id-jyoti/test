export const typescript=   a1_=>{
  return {
    rules: Typescript_eslint_eslint_plugin.default.rules,
  };
};
export const stylistic=    a1_=>{
  return {
    rules: Stylistic_eslint_plugin.default.rules,
  };
};
export const perfectionist=a1_=>{
  return {
    rules: Eslint_plugin_perfectionist.default.rules,
  };
};
export const jsx_a11y=     a1_=>{
  return {
    rules: Eslint_plugin_jsx_a11y.default.rules,
  };
};
export const common=       a1_=>{
  return {
    rules: Eslint_plugin_common.rules,
  };
};

const Eslint_plugin_perfectionist=    await import (`eslint-plugin-perfectionist`);
const Eslint_plugin_jsx_a11y=         await import (`eslint-plugin-jsx-a11y`);
const Eslint_plugin_common=           await import (`eslint-plugin-common`);
const Typescript_eslint_eslint_plugin=await import (`@typescript-eslint/eslint-plugin`);
const Stylistic_eslint_plugin=        await import (`@stylistic/eslint-plugin`);
