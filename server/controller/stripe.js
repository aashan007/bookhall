import User from '../models/user';
import Stripe from "stripe"
import queryString from'query-string'


const stripe = Stripe(process.env.STRIPE_SECRET)
export const createConnectAccount = async (req,res) =>{
    console.log(req.user);
    console.log("reached here")

    const user = await User.findById(req.user._id).exec();
    console.log("User ==>",user);

    if(!user.stripe_account_id){
        const account = await stripe.accounts.create({
            type: "Express",
            country: 'IN',
        })

        console.log("Account ==>",account);
        user.stripe_account_id = account.id;
        user.save();
    }

    // create login link based on account id
    let accountLink = await stripe.accountLinks.create({
        account:user.stripe_account_id,

        refresh_url: process.env.STRIPE_REDIRECT_URL,
        return_url:process.env.STRIPE_REDIRECT_URL,
        type: 'account_onboarding'

    });

    //prefill any info such as email

    accountLink = Object.assign({
        "stripe_user[email]":user.email || undefined
    })

    console.log('ACCOUNT LINK ==>',accountLink)

}