use anchor_lang::{prelude::*, solana_program::entrypoint::ProgramResult};

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod counterapp {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]


pub struct Initialize {}
////////////////////////////////////////////////////////////////


#[derive(Accounts)]
pub struct Create<'info> {

    #[account(init, payer=user, space = 16+16)]
    pub counter_account: Account<'info, CounterAccount>,

    #[account(mut)]
    pub user: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[account]
pub struct CounterAccount {
    pub count: u64,
}
/////////////////////////////////////////////////////////////////////

pub fn create(ctx: Context<Create>) -> ProgramResult {
    let counter_account = &mut ctx.accounts.counter_account;
    counter_account.count = 0;
    Ok(())

}