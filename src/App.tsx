import { FormEvent } from "react";
import ButterForm from "./components/ButterForm";
import CardElement from "./components/CardElement";

function App() {
  const handleSubmit = (event: FormEvent | unknown, paymentMethod: unknown) => {
    if (event instanceof Error) {
      // Handle error
      console.error(event);
    } else {
      // Handle payment
      console.log(paymentMethod);
    }
  };
  return (
    <>
      <ButterForm
        onSubmit={handleSubmit}
        sourceId="xxx"
        merchantKey="us_proxy_VupgZzNhCKmCQhgtr5BbGE"
      >
        <CardElement />
        <button type="submit">Submit</button>
      </ButterForm>
    </>
  );
}

export default App;
