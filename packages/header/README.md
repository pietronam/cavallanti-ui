# `Header` Component

A flexible React component for rendering a semantic header element (`h1`, `h2`, `h3`, or `h4`) with customizable font styles and sizes. It allows you to control the size of the header using predefined size options and the ability to pass in custom children content.

## Installation

To use this component in your project, install it using npm or yarn:

```bash
npm install @your-monorepo/header
# or
yarn add @your-monorepo/header
```

## Usage

You can use the `Header` component anywhere in your React app. The component accepts the following props:

### Props

| Name       | Type                                | Description                                                                 |
|------------|-------------------------------------|-----------------------------------------------------------------------------|
| `size`     | `"sm" | "md" | "lg" | "xl"`       | Defines the header size. Options are: `"sm"`, `"md"`, `"lg"`, and `"xl"`. |
| `fontFamily` | `string` (optional)                | Optional. Defines the font family for the header. If not provided, defaults to `inherit`. |
| `children` | `ReactNode` (optional)              | The content to be displayed inside the header. This can be text, JSX elements, etc. |

### Example

```tsx
import { Header } from '@your-monorepo/header';

function App() {
  return (
    <div>
      <Header size="xl" fontFamily="Arial, sans-serif">This is an Extra Large Header</Header>
      <Header size="lg">This is a Large Header</Header>
      <Header size="md" fontFamily="Times New Roman">This is a Medium Header</Header>
      <Header size="sm">This is a Small Header</Header>
    </div>
  );
}
```

### Explanation of `size` prop:

- `"sm"`: Will render an `h4` tag (small header).
- `"md"`: Will render an `h3` tag (medium header).
- `"lg"`: Will render an `h2` tag (large header).
- `"xl"`: Will render an `h1` tag (extra-large header).

## Styling

You can optionally pass a custom `fontFamily` to the `Header` component, which will be applied to the header tag.

If no `fontFamily` is provided, the component will inherit the font family from its parent component.

## Example with Custom Font:

```tsx
<Header size="lg" fontFamily="Verdana, Geneva, sans-serif">
  This is a Large Header with Custom Font
</Header>
```
