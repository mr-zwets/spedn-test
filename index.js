import { Spedn } from "@spedn/sdk";
import { BchjsRts } from "@spedn/rts-bchjs";
import BCHJS from "@psf/bch-js";

async function main() {

   const compiler = new Spedn();
   /* use compiler */
   compiler.dispose();

}
main();

const bchRts = new BchjsRts("bch");
