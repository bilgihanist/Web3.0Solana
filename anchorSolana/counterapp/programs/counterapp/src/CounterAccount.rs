// #[derive(Accounts)]
// pub struct Create<'info> {

//     #[account(init,payer= user, space = 16+16)]
//     pub counter_account: Account<'info, CounterAccount>,

//     #[account(mut)]
//     pub user: Signer<'info>,

//     pub system_program: Program<'info, System>,
// }

// #[account]
// pub struct CounterAccount {
//     pub count: u64,
// }

