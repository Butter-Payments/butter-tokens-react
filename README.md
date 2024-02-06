# Butter Tokens React


A set of React components to integrate Butter Payments tokenization without interrupting the payment flow. 

## Installation

Using [Node Package Manager](https://docs.npmjs.com/)

```sh
npm install --save @butter-payments/butter-tokens-react
```

Using [Yarn](https://classic.yarnpkg.com/en/docs/)

```sh
yarn add @butter-payments/butter-tokens-react
```

## Usage
Simply use the ButterForm component and the CardElement component to get your Stripe payment method. You will be able to grab the Stripe payment method from the onSubmit hook.

```jsx
import {
  ButterForm,
  CardElement,
} from '@butter-payments/butter-tokens-react';

const App = () => {
  const handleSubmit = (event, paymentMethod) => {
    // Handle your business logic and continue the payment here with the newly created payment method
    console.log(paymentMethod);
  }

  return (
    <ButterForm merchantKey={xxx} onSubmit={handleSubmit}>
      <MyComponent />
      <button type="submit">
        Submit
      </button>
    </ButterForm>
  );
};

### Styling

Minimal styling is applied to the components to make it easier to match your branding.
The ButterForm component accepts style and className props. 

