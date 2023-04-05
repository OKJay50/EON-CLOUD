const Avalanche = require('avalanche');
const crypto = require('crypto');
const { HttpAgent } = require('@dfinity/agent');
const network_id = 'local';
const node_api = 'http://localhost:9650';
const polygon_network_id = '0x89';
const polygon_node_api = 'https://rpc-mainnet.maticvigil.com';
const BLOCK_REWARD = 10;
const TARGET_HASH = '0000'; // difficulty target for POA
const ENCRYPTION_KEY = 'my-secret-key';
const encrypted = crypto.createCipher('aes-256-cbc', ENCRYPTION_KEY);
const decrypted = crypto.createDecipher('aes-256-cbc', ENCRYPTION_KEY);

const avalanche = new Avalanche(network_id, node_api);
const polygon = new Avalanche(polygon_network_id, polygon_node_api);
const wallet = avalanche.createWallet();
const address = wallet.getAddress();
const private_key = wallet.getPrivateKey();
const public_key = wallet.getPublicKey();

const readlineSync = require('readline-sync');
const agent = new HttpAgent({ host: "http://localhost:8000" });
exports.agent = agent;


