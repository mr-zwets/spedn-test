import { Spedn } from "@spedn/sdk";
import { BchJsRts } from "@spedn/rts-bchjs";

const compiler = new Spedn();
const bchRts = new BchJsRts("bch");

// provide bchRts to get 'activated module'
const myContract = await compiler.compileFile("bch", "./contracts/myContract.spedn", bchRts);

console.log(myContract.ExpiringTip.params);

compiler.dispose();

