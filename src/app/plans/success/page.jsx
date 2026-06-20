import { stripe } from '@/lib/stripe';
import { redirect } from 'next/navigation';
import Link from 'next/link';

import {
    CircleCheckFill,
    Envelope,
    ArrowLeft
} from '@gravity-ui/icons';

import { createSubscription } from '@/lib/actions/subscriptions';

export default async function Success({ searchParams }) {
    try {
        const params = await searchParams;
        const session_id = params?.session_id;

        if (!session_id) {
            return (
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-red-500">
                            Invalid Session
                        </h1>
                        <p className="mt-2 text-gray-500">
                            No Stripe session id found.
                        </p>
                    </div>
                </div>
            );
        }

        const session = await stripe.checkout.sessions.retrieve(
            session_id,
            {
                expand: ['line_items']
            }
        );

        const status = session?.status;
        const customerEmail =
            session?.customer_details?.email ||
            session?.customer_email;

        const planId = session?.metadata?.planId;

        if (status === 'open') {
            redirect('/');
        }

        if (status !== 'complete') {
            return (
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-yellow-500">
                            Payment Pending
                        </h1>
                        <p className="mt-2 text-gray-500">
                            Your payment has not been completed yet.
                        </p>
                    </div>
                </div>
            );
        }

        let subscriptionResult = null;

        try {
            subscriptionResult = await createSubscription({
                email: customerEmail,
                planId
            });

            console.log(
                'Subscription Created:',
                subscriptionResult
            );
        } catch (dbError) {
            console.error(
                'Subscription Update Failed:',
                dbError
            );
        }

        return (
            <div className="w-full min-h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center p-6">
                <section className="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center">

                    <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CircleCheckFill className="w-8 h-8 text-emerald-500" />
                    </div>

                    <h1 className="text-2xl font-bold mb-2">
                        Payment Successful 🎉
                    </h1>

                    <p className="text-zinc-400 mb-6">
                        Your subscription has been activated successfully.
                    </p>

                    <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-left mb-6">
                        <div className="flex gap-3">
                            <Envelope className="w-4 h-4 mt-1 text-zinc-400" />

                            <div>
                                <p className="text-zinc-400 text-sm">
                                    Email
                                </p>

                                <p className="text-white break-all">
                                    {customerEmail}
                                </p>
                            </div>
                        </div>

                        <div className="border-t border-zinc-800 mt-4 pt-4">
                            <p className="text-zinc-400 text-sm">
                                Plan
                            </p>

                            <p className="font-medium text-emerald-400">
                                {planId}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <Link
                            href="/dashboard"
                            className="block w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-lg font-medium"
                        >
                            Go To Dashboard
                        </Link>

                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back Home
                        </Link>
                    </div>
                </section>
            </div>
        );
    } catch (error) {
        console.error('Success Page Error:', error);

        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="max-w-md text-center">
                    <h1 className="text-2xl font-bold text-red-500">
                        Something went wrong
                    </h1>

                    <p className="mt-3 text-gray-500">
                        We could not verify your payment session.
                    </p>

                    <Link
                        href="/"
                        className="inline-block mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        );
    }
}