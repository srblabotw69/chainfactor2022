import Types "./types";
import Utils "./utils";
 
import Nat "mo:base/Nat";
import Nat64 "mo:base/Nat64";
import List "mo:base/List";
import Principal "mo:base/Principal";
import Debug "mo:base/Debug";
import ExpCycles "mo:base/ExperimentalCycles";
 
actor Dip721NFTWrapper {
  
  // The type of a invoice identifier.
  public type InvoiceId = Nat32;

  // The type of a invoice.
  public type Invoice = {
    name : Text;
    superpowers : List.List<Text>;
  };

 // public shared(msg) func createNFT( invoice : chainfactor.Invoice )   {
 // public shared(msg) func createNFT( id : InvoiceId )   {
 public shared(msg) func createNFT( data : Text )   {
    Debug.print("Starting createNFT function"); 

    let logoResult : Types.LogoResult = {
      logo_type = "image/png";
      data = data;
    };
 
    let init : Types.Dip721NonFungibleToken = {
      logo = logoResult;
      name = "ChainFactor";
      symbol = "CF";
      maxLimit = 100;
    };

    Debug.print("msg.caller: " # debug_show(msg.caller));
    // var custodian : Principal = msg.caller;
    var custodian : Principal = Principal.fromText("r7inp-6aaaa-aaaaa-aaabq-cai");
 
    var custodians = List.make<Principal>(custodian);
    
    Debug.print("Cycle Balance: " # Nat.toText(ExpCycles.balance()));
    //Debug.print("Cycle Available: " # Nat.toText(ExpCycles.available()));
    ExpCycles.add(500_000_000_000);
 
    // Intialize   
    let mynft = await Utils.Dip721NFT(custodian: Principal, init : Types.Dip721NonFungibleToken);

    let myname : Text = await mynft.nameDip721();
    Debug.print("NFT Name created: " # myname);
    Debug.print("Here are the NFT data: " # data);

    let key_val : Types.MetadataKeyVal = {
      key = "key";
      val = #TextContent("Text");
    };

    let mykey_val_data = [key_val];

    let metadatapart = {
      purpose : Types.MetadataPurpose = #Preview;
      key_val_data: [Types.MetadataKeyVal] = mykey_val_data;
      data : Blob = Principal.toBlob(custodian);
    };

    //let metadata : Types.MetadataDesc = [metadatapart : Types.MetadataPart];
    let metadata = [metadatapart];
  
    ExpCycles.add(500_000_000_000);
 
    // Debug.print(debug_show(custodian));
    //     Debug.print(debug_show(metadata));
    //           Debug.print(debug_show(custodians));
    let receipt : Types.MintReceipt = await mynft.mintDip721(custodian: Principal, metadata: Types.MetadataDesc);

    Debug.print(debug_show(receipt));


  };

  public shared(msg) func getNFT(invoice : ?Invoice ) : async Text {
    Debug.print(" ");
    Debug.print("Starting getNFT function"); 
    Debug.print("Caller is: " # Principal.toText(msg.caller)); 
    Debug.print("Invoice is: " # debug_show(invoice));
  
    let logoResult : Types.LogoResult = {
      logo_type = "image/png";
      data = "data";
    };
 
    let init : Types.Dip721NonFungibleToken = {
      logo = logoResult;
      name = "ChainFactor";
      symbol = "CF";
      maxLimit = 100;
    };

    var custodian : Principal = msg.caller;
    var custodians = List.make<Principal>(custodian);
    
    Debug.print("Cycle Balance: " # Nat.toText(ExpCycles.balance()));
    //Debug.print("Cycle Available: " # Nat.toText(ExpCycles.available()));
    ExpCycles.add(500_000_000_000);
 
    // Intialize   
    let mynft = await Utils.Dip721NFT(custodian: Principal, init : Types.Dip721NonFungibleToken);
    let myname : Text = await mynft.nameDip721();
    Debug.print("Name: " # myname);
 
     Debug.print("Cycle Balance: " # Nat.toText(ExpCycles.balance()));
    //Debug.print("Cycle Available: " # Nat.toText(ExpCycles.available()));
 
 
    // let mybal : Nat64 = await mynft.balanceOfDip721( custodian : Principal );
    // Debug.print(Nat64.toText(mybal) # "\n");
  // return Nat64.toText(mybal);

    return ("myText");
 };
}