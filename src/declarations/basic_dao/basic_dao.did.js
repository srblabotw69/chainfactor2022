export const idlFactory = ({ IDL }) => {
  return IDL.Service({ 'createDAO' : IDL.Func([IDL.Text], [], ['oneway']) });
};
export const init = ({ IDL }) => { return []; };
