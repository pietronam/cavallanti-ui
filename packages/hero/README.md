# Hero Component

The `Hero` component is a React component used to display a hero section on a webpage. It consists of a large title (`heroText`) and a subtitle (`subtitleText`) in a centered layout.

## Installation

You can use the `Hero` component in your project by importing it from the appropriate package.

```bash
npm install @cavallanti-ui/hero
```

## Usage

To use the `Hero` component, simply import it into your React file and pass the `heroText` and `subtitleText` props.

### Example

```tsx
import { Hero } from "@cavallanti-ui/hero";

function App() {
  return (
    <div>
      <Hero 
        heroText="Welcome to Our Website" 
        subtitleText="We are glad to have you here!" 
      />
    </div>
  );
}
```

## Props

| Prop            | Type   | Description                                                      |
|-----------------|--------|------------------------------------------------------------------|
| `heroText`      | `string` | The main title text that appears prominently at the top of the hero section. |
| `subtitleText`  | `string` | The subtitle text that appears below the main title. |

## Styles

The `Hero` component uses inline styles for layout:

- The outer container (`div`) is centered both vertically and horizontally with a `flexbox` layout, applying padding for spacing.
- The `heroText` is wrapped in the `Header` component, which is styled with an extra-large (`xl`) size.
- The `subtitleText` is placed below the hero text in a simple `span` element.

## Customization

You can adjust the styles of the `Hero` component by passing custom CSS or applying additional styles to its parent or child elements.

## Example Output

This component will render a centered hero section like the following:

- **Main Title**: "Welcome to Our Website" (in a large header)
- **Subtitle**: "We are glad to have you here!" (in a smaller text)