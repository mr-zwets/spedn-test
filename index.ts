import { Spedn } from "@spedn/sdk";
import { BchJsRts } from "@spedn/rts-bchjs";
import BCHJS from "@psf/bch-js";

const compiler = new Spedn();
const bchRts = new BchJsRts("bch");
const bchjs = new BCHJS({ restURL: "https://api.fullstack.cash/v5/" });

// provide bchRts to get 'activated module'
const myContract = await compiler.compileFile("bch", "./contracts/myContract.spedn", bchRts);
const ExpiringTip = myContract.ExpiringTip;
compiler.dispose();

const mnemonic = "draw parade crater busy book swim soldier tragic exit feel top civil";
const wallet = bchjs.HDNode.fromSeed(await bchjs.Mnemonic.toSeed(mnemonic), "testnet");
const alice = bchjs.HDNode.derivePath(wallet, "m/44'/145'/0'/0/0");
const bob = bchjs.HDNode.derivePath(wallet, "m/44'/145'/1'/0/0");

console.log(ExpiringTip.params);
// Object {alice: "Ripemd160", bob: "Ripemd160"}

const contractParams = {
   alice: bchjs.HDNode.toIdentifier(alice), // Ripemd160 hash of Alice's public key
   bob:   bchjs.HDNode.toIdentifier(bob) // Ripemd160 hash of Bob's public key
}
const tip = new ExpiringTip(contractParams);

console.log(tip.getAddress("mainnet"));

const coins = await tip.findCoins("mainnet");
console.log('utxos: ' + coins);

console.log(tip.challengeSpecs);
console.log(tip.challengeSpecs.receive);
