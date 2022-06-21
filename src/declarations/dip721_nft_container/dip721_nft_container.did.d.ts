import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Invoice { 'superpowers' : List, 'name' : string }
export type List = [] | [[string, List]];
export interface _SERVICE {
  'createNFT' : ActorMethod<[string], undefined>,
  'getNFT' : ActorMethod<[[] | [Invoice]], string>,
}
