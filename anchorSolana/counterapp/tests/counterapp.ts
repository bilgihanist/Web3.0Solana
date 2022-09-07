// import * as anchor from "@project-serum/anchor";
// import { Program } from "@project-serum/anchor";
// import { Counterapp } from "../target/types/counterapp";

// describe("counterapp", () => {
  // Configure the client to use the local cluster.
  // anchor.setProvider(anchor.AnchorProvider.env());

  // const program = anchor.workspace.Counterapp as Program<Counterapp>;

//   it("Is initialized!", async () => {
//     // Add your test here.
//     const tx = await program.methods.initialize().rpc();
//     console.log("Your transaction signature", tx);
//   });
// });
//   const provider = anchor.Provider.env()
//   anchor.setProvider(provider);

//   const program = anchor.workspace.Counterapp as Program<Counterapp>;
//   const counterAccount = anchor.web3.Keypair.generate();

//   it('Is initialized!', async () => {
//     await program.rpc.create({
//       accounts: {
//         counterAccount: counterAccount.publicKey,
//         user: provider.wallet.publicKey,
//         systemProgram: anchor.web3.SystemProgram.programId,
//       },
//       signers: [counterAccount]
//     } as any)
//   });

//   it("Increment counter", async () => {
//     await program.rpc.increment({
//       accounts: {
//         counterAccount: counterAccount.publicKey
//       }
//     } as any)
//   })

//   it("Fetch account", async () => {
//     const account: any = await program.account.counterAccount.fetch(counterAccount.publicKey)
//     console.log(account.count)
//   })

// });


////

import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { Counterapp } from '../target/types/counterapp';

describe('counterapp', () => {
  const provider = anchor.Provider.env()
  anchor.setProvider(provider);

  const program = anchor.workspace.Counterapp as Program<Counterapp>;
  const counterAccount = anchor.web3.Keypair.generate();

  it('Is initialized!', async () => {
    await program.rpc.create({
      accounts: {
        counterAccount: counterAccount.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      },
      signers: [counterAccount]
    } as any)
  });

  it("Increment counter", async () => {
    await program.rpc.increment({
      accounts: {
        counterAccount: counterAccount.publicKey
      }
    } as any)
  })

  it("Fetch account", async () => {
    const account: any = await program.account.counterAccount.fetch(counterAccount.publicKey)
    console.log(account.count)
  })

});