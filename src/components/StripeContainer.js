import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51J8hdEJogErFHKKnbK4R4qGjHgRX3c9MvFPYbX7Y9p8ig7UERcTXvmEShFrnB6IqZauxcmTrQM8lD03hrVYRbzFx00XGF4kGsv"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}