# chainfactor

Welcome to your new chainfactor project. This project is for Supernova hackathon June 20, 2022. The following code is a proof of concept and is to demonstrate the creation and connectivtiy of the various canisters. This projects uses the following dfinity motoko tutorials:  
- superheroes
- dip-721-nft-container
- basic_dao

Chainfactor app combines the canisters to form this proof of concept app.  It provides a user interface to input invoices and then demonstrate that it can use the invoice data and details to deploy and mint a nft.  It then also creates a basic dao programmically with motoko (rather than running as   canisters independently via command line). This combinations of canisters using motoko forms the basic foundation of the chainfactor app.  


## Installation

Install React:

  npm install --save react react-dom

Install Typescript:

  npm install --save-dev typescript ts-loader

Install Bootstrap: 

  npm install react-bootstrap bootstrap

start and deploy DFX:

  dfx start --background

  dfx deploy
 
## Version

Ensure dfinity is version 0.10.0

To check:  
dfx --version

## Chainfactor canisters:

After chainfactor is deployed to dfx local then the below links would display on command line.  The chainfactor_assets link would display the user interface to create and read an invoice.  Then enter the invoice number in the createNFT inputbox and then press the button to create NFT based on the invoice data. The same is applyed to the createDAO inputbox and submit button.   

**IMPORTANT: **the NFT and DAO outputs and statuses are only displayed on commandline.  


## After dfx deploy, the following URLs would display on command line:

Frontend:

chainfactor_assets: http://127.0.0.1:8000/?canisterId=ryjl3-tyaaa-aaaaa-aaaba-cai
  
Candid:

basic_dao: http://127.0.0.1:8000/?canisterId=rkp4c-7iaaa-aaaaa-aaaca-cai&id=rno2w-sqaaa-aaaaa-aaacq-cai

chainfactor: http://127.0.0.1:8000/?canisterId=rkp4c-7iaaa-aaaaa-aaaca-cai&id=rrkah-fqaaa-aaaaa-aaaaq-cai

dip721_nft_container: http://127.0.0.1:8000/?canisterId=rkp4c-7iaaa-aaaaa-aaaca-cai&id=r7inp-6aaaa-aaaaa-aaabq-cai
