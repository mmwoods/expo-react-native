# Transaction

Displays a transaction with the associated company/user image, title, and amount.

## Usage

```tsx
<Transaction
  key="1234"
  title="Uber EATS"
  amount={20.55}
  image="uberLogo.png"
  type="deduction"
/>
```

## Props

| Prop   | Type     | Description                | Required |
| ------ | -------- | -------------------------- | -------- |
| title  | `string` | Name of the Company/User.  | `true`   |
| amount | `number` | Amount of the deduction.   | `true`   |
| type   | `string` | Type of transaction.       | `true`   |
| image  | `string` | Image of the Company/User. | `false`  |
