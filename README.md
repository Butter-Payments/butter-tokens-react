# Butter Vaulting React


A set of React components to integrate Butter Payments vaulting without interrupting the payment flow. 

## Installation

Using [Node Package Manager](https://docs.npmjs.com/)

```sh
npm install --save @butter-payments/butter-vaulting-react
```

Using [Yarn](https://classic.yarnpkg.com/en/docs/)

```sh
yarn add @butter-payments/butter-vaulting-react
```

## Usage
Simply use the ButterForm component and the CardElement component to get your Stripe payment method. You will be able to grab the Stripe payment method from the onSubmit hook.

### ButterForm
**Props**
- merchantKey (string, required: The merchant key provided by Butter
- sourceId (string, required): The sourceId provided by Butter
Requires a button component with type submit to trigger the form submission.


### Example 

```jsx
import {
  ButterForm,
  CardElement,
} from '@butter-payments/butter-vaulting-react';

const App = () => {
  const handleSubmit = (event, paymentMethod) => {
    // Handle your business logic and continue the payment here with the newly created payment method
    console.log(paymentMethod);
  }

  return (
    <ButterForm merchantKey='xxx' sourceId='xxx' onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit">
        Submit
      </button>
    </ButterForm>
  );
};
```

### Styling
Minimal styling is applied to the components to make it easier to match your branding.

