import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_pro': 'price_1TkIHlJHSIlJE9eJxcUPfaFC',
    'seeker_premium': 'price_1TkIdyJHSIlJE9eJ8WChOV7U',
    'recruiter_growth': 'price_1TkIHlJHSIlJE9eJxcUPfaFC',
    'recruiter_enterprise': 'price_1TkIdyJHSIlJE9eJ8WChOV7U'
}