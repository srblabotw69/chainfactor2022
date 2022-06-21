export const idlFactory = ({ IDL }) => {
  const List = IDL.Rec();
  List.fill(IDL.Opt(IDL.Tuple(IDL.Text, List)));
  const Invoice = IDL.Record({ 'superpowers' : List, 'name' : IDL.Text });
  return IDL.Service({
    'createNFT' : IDL.Func([IDL.Text], [], ['oneway']),
    'getNFT' : IDL.Func([IDL.Opt(Invoice)], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
