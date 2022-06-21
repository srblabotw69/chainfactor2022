export const idlFactory = ({ IDL }) => {
  const List = IDL.Rec();
  List.fill(IDL.Opt(IDL.Tuple(IDL.Text, List)));
  const Invoice = IDL.Record({ 'name' : IDL.Text, 'details' : List });
  const InvoiceId = IDL.Nat32;
  return IDL.Service({
    'create' : IDL.Func([Invoice], [InvoiceId], []),
    'createNFT' : IDL.Func([InvoiceId], [], ['oneway']),
    'delete' : IDL.Func([InvoiceId], [IDL.Bool], []),
    'read' : IDL.Func([InvoiceId], [IDL.Opt(Invoice)], ['query']),
    'readText' : IDL.Func([InvoiceId], [IDL.Text], ['query']),
    'update' : IDL.Func([InvoiceId, Invoice], [IDL.Bool], []),
  });
};
export const init = ({ IDL }) => { return []; };
