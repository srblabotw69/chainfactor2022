import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Invoice { 'name' : string, 'details' : List }
export type InvoiceId = number;
export type List = [] | [[string, List]];
export interface _SERVICE {
  'create' : ActorMethod<[Invoice], InvoiceId>,
  'createNFT' : ActorMethod<[InvoiceId], undefined>,
  'delete' : ActorMethod<[InvoiceId], boolean>,
  'read' : ActorMethod<[InvoiceId], [] | [Invoice]>,
  'readText' : ActorMethod<[InvoiceId], string>,
  'update' : ActorMethod<[InvoiceId, Invoice], boolean>,
}
