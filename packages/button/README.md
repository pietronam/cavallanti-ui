## Button Component

### Description
The `Button` component is a customizable button element that allows you to adjust the button's text color, background color, and define an action when clicked.

### Props

| Prop        | Type                  | Description                                            | Required |
|-------------|-----------------------|--------------------------------------------------------|----------|
| `label`     | `string`              | The text that will be displayed inside the button.     | Yes      |
| `color`     | `string`              | The color of the text inside the button.               | Yes      |
| `bgColor`   | `string`              | The background color of the button.                   | Yes      |
| `onClick`   | `() => void`          | The function to be executed when the button is clicked. | Yes      |

### Usage

```tsx
import { Button } from 'your-package-name';

const handleClick = () => {
  console.log('Button clicked!');
};

<Button 
  label="Click Me" 
  color="white" 
  bgColor="blue" 
  onClick={handleClick} 
/>
```

### Example

```tsx
import React from 'react';
import { Button } from 'your-package-name';

const App = () => {
  const handleButtonClick = () => {
    alert('Button has been clicked!');
  };

  return (
    <div>
      <Button 
        label="Submit" 
        color="white" 
        bgColor="green" 
        onClick={handleButtonClick} 
      />
    </div>
  );
};

export default App;
```

### Styling
- The button has a padding of `10px` and rounded corners with a `border-radius` of `10px`.
- The button's text color and background color can be customized through the `color` and `bgColor` props.