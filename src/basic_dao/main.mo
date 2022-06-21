import Types "./types";
import Utils "./utils";
 
import Nat "mo:base/Nat";
import Nat8 "mo:base/Nat8";
import Nat64 "mo:base/Nat64";
import List "mo:base/List";
import Principal "mo:base/Principal";
import Debug "mo:base/Debug";
import ExpCycles "mo:base/ExperimentalCycles";
 
actor basic_dao_wrapper {
  

 // public shared(msg) func createNFT( invoice : chainfactor.Invoice )   {
 // public shared(msg) func createNFT( id : InvoiceId )   {
 public shared(msg) func createDAO( data : Text )   {
    Debug.print("Starting createDAO function"); 
 
    Debug.print("msg.caller: " # debug_show(msg.caller));
    // var custodian : Principal = msg.caller;
    var custodian : Principal = Principal.fromText("r7inp-6aaaa-aaaaa-aaabq-cai");
 
    var custodians = List.make<Principal>(custodian);
    

    let acc : Types.Account = { 
        owner : Principal = custodian; 
        tokens : Types.Tokens = Types.oneToken;
    };

    let ppl : Types.ProposalPayload = {
        method : Text = "method";
        canister_id : Principal = custodian ;
        message : Blob = Principal.toBlob(custodian);
      };

  
    let vot :  List.List<Principal> = List.make<Principal>(custodian);

    let prop : Types.Proposal = {
      id : Nat = 1;
      votes_no : Types.Tokens = Types.oneToken;
      voters : List.List<Principal> = vot;
      state : Types.ProposalState = #accepted;
      timestamp : Int = 1;
      proposer : Principal = custodian;
      votes_yes : Types.Tokens = Types.oneToken;
      payload : Types.ProposalPayload = ppl;
    };

    let sp : Types.SystemParams = {
      transfer_fee: Types.Tokens = Types.oneToken;
      proposal_vote_threshold: Types.Tokens = Types.oneToken;
      proposal_submission_deposit: Types.Tokens = Types.oneToken;
    };

     let init : Types.BasicDaoStableStorage = {
      accounts: [Types.Account] = [acc];
      proposals: [Types.Proposal] = [prop];
      system_params: Types.SystemParams = sp;
    };

    Debug.print("Cycle Balance: " # Nat.toText(ExpCycles.balance()));
    //Debug.print("Cycle Available: " # Nat.toText(ExpCycles.available()));
    ExpCycles.add(500_000_000_000);
 
    // Intialize   
    let mydao = await Utils.DAO(init : Types.BasicDaoStableStorage);

    let sysparam : Types.SystemParams = await mydao.get_system_params();
    Debug.print(debug_show( sysparam ));



    // let myname : Text = await mynft.nameDip721();
    // Debug.print("NFT Name created: " # myname);
    // Debug.print("Here are the NFT data: " # data);

    // let key_val : Types.MetadataKeyVal = {
    //   key = "key";
    //   val = #TextContent("Text");
    // };

    // let mykey_val_data = [key_val];

    // let metadatapart = {
    //   purpose : Types.MetadataPurpose = #Preview;
    //   key_val_data: [Types.MetadataKeyVal] = mykey_val_data;
    //   data : Blob = Principal.toBlob(custodian);
    // };

    // //let metadata : Types.MetadataDesc = [metadatapart : Types.MetadataPart];
    // let metadata = [metadatapart];
  
    // ExpCycles.add(500_000_000_000);
 
    // // Debug.print(debug_show(custodian));
    // //     Debug.print(debug_show(metadata));
    // //           Debug.print(debug_show(custodians));
    // let receipt : Types.MintReceipt = await mynft.mintDip721(custodian: Principal, metadata: Types.MetadataDesc);

    // Debug.print(debug_show(receipt));


  }; 
}