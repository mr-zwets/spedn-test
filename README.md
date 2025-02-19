## Spedn Experimentation

✅ test the compiler CLI output </br>
✅ test JS compiler service </br>
✅ test creating a Contract class </br> 
✅ test contract instantiation with contractParams

todo: </br>
- create testnet transaction

### Differences from docs

- I fixed the import `BchjsRts` to `BchJsRts`
- I updated the bchjs API url
- I used top-level await
- I explicitly accessed the contract from the module`
- I fixed the generating the public-key-hash with BCH-JS: `bchjs.HDNode.toIdentifier(alice)`