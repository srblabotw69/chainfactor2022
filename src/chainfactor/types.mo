import Text "mo:base/Text";
import List "mo:base/List";
import Nat32 "mo:base/Nat32";

module {
  // The type of a invoice identifier.
  public type InvoiceId = Nat32;

  // The type of a invoice.
  public type Invoice = {
    name : Text;
    details : List.List<Text>;
  };
};
