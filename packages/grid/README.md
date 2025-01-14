# Grid Component

The `Grid` component is a simple, reusable layout component for creating responsive grid-based designs in React. It allows you to define the number of columns and the gap between grid items. The component uses CSS Grid under the hood to arrange its children in a grid layout.

## Props

| Name      | Type       | Description                                                    | Required |
|-----------|------------|----------------------------------------------------------------|----------|
| `columns` | `number`   | The number of columns in the grid.                             | ✅       |
| `gap`     | `number`   | The space between the grid items.                             | ✅       |
| `children`| `ReactNode`| The content to be displayed inside the grid. This can be any valid React children (e.g., elements, text, components). | ❌       |

## Example Usage

```tsx
import { Grid } from 'your-package';

const App = () => {
  return (
    <Grid columns={3} gap={20}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
      <div>Item 5</div>
    </Grid>
  );
}
