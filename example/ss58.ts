import '@efinity/api-augment'
import { ApiPromise, WsProvider } from '@polkadot/api';
const provider = new WsProvider('wss://rpc.efinity.io/');
const api: ApiPromise = await ApiPromise.create({ provider });
const ss58Prefix = api.consts.system.ss58Prefix;
console.log('api.consts.system.ss58Prefix', ss58Prefix.toNumber());
await api.disconnect();
