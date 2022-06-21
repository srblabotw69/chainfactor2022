import List "mo:base/List";
import Option "mo:base/Option";
import Trie "mo:base/Trie";
import Nat32 "mo:base/Nat32";

import ExpCycles "mo:base/ExperimentalCycles";
import Debug "mo:base/Debug";
import Error "mo:base/Error";
import dip721_nft_container "canister:dip721_nft_container";
 
actor Chainfactor {
 
  // The type of a invoice identifier.
  public type InvoiceId = Nat32;

  // The type of a invoice.
  public type Invoice = {
    name : Text;
    details : List.List<Text>;
  };

  // The next available invoice identifier.
  private stable var next : InvoiceId = 0;

  // The invoice data store.
  private stable var invoices : Trie.Trie<InvoiceId, Invoice> = Trie.empty();

  private func invoice_get(invoiceId : InvoiceId) : ?Invoice = Trie.get(invoices, key(invoiceId), Nat32.equal);

  /**
   * High-Level API
   */

  // Create a invoice.
  public func create(invoice : Invoice) : async InvoiceId {
    let invoiceId = next;
    next += 1;
    invoices := Trie.replace(
      invoices,
      key(invoiceId),
      Nat32.equal,
      ?invoice,
    ).0;
    return invoiceId;
  };

  // Read a invoice.
  public query func read(invoiceId : InvoiceId) : async ?Invoice {
    let result = Trie.find(invoices, key(invoiceId), Nat32.equal);
    return result;
  };

  // Read a invoice.
  public query func readText(invoiceId : InvoiceId) : async Text {
    let result = Trie.find(invoices, key(invoiceId), Nat32.equal);
 
    let myget = Trie.get(invoices, key(invoiceId), Nat32.equal);

    switch (invoice_get(invoiceId)) {
      case null { Debug.print("null"); return "null"; };  
      case (?invoice) {
        Debug.print("Invoice Name: " # invoice.name);
        return invoice.name;
      };
    };
  };

  public func createNFT(id : InvoiceId) {
    Debug.print("Starting createNFT function");
    Debug.print( await readText(id) );
    dip721_nft_container.createNFT( await readText(id) );
  };

  // Update a invoice.
  public func update(invoiceId : InvoiceId, invoice : Invoice) : async Bool {
    let result = Trie.find(invoices, key(invoiceId), Nat32.equal);
    let exists = Option.isSome(result);
    if (exists) {
      invoices := Trie.replace(
        invoices,
        key(invoiceId),
        Nat32.equal,
        ?invoice,
      ).0;
    };
    return exists;
  };

  // Delete a invoice.
  public func delete(invoiceId : InvoiceId) : async Bool {
    let result = Trie.find(invoices, key(invoiceId), Nat32.equal);
    let exists = Option.isSome(result);
    if (exists) {
      invoices := Trie.replace(
        invoices,
        key(invoiceId),
        Nat32.equal,
        null,
      ).0;
    };
    return exists;
  };

  /**
   * Utilities
   */

  // Create a trie key from a invoice identifier.
  private func key(x : InvoiceId) : Trie.Key<InvoiceId> {
    return { hash = x; key = x };
  };
};
