## `Navbar` Component

### Description

The `Navbar` component is a responsive and customizable navigation bar designed for React applications. It accepts a header text and a list of navigation links and renders them in a structured layout. The component consists of two main sections: the header and the links. The header displays a title, while the links section renders a list of clickable navigation items.

### Props

The `Navbar` component accepts the following props:

- `headerText` (string, **required**): The text that will be displayed as the title of the navigation bar.
- `links` (array of objects, **required**): An array of objects, where each object represents a navigation link. Each object should contain the following properties:
  - `name` (string, **required**): The name of the link that will be displayed.
  - `link` (string, **required**): The URL that the link points to.

### Example Usage

```tsx
import { Navbar } from "@cavallanti-ui/navbar";

const links = [
  { name: "Home", link: "/home" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

function App() {
  return (
    <Navbar headerText="My Website" links={links} />
  );
}
```

### Styles

The `Navbar` component is styled using inline styles. Here's a breakdown of the key styles:

- **Navbar**: 
  - Displayed as a `flex` container with padding of 20px.
  - Background color is set to `gray`.
  
- **Header Section**: 
  - Displays the header text using a flex container.

- **Links Section**: 
  - Displays the links as flex items with a gap of 20px between each link.
  - The links are aligned to the right using `justifyContent: "end"`.
  - The container grows to take up available space using `flexGrow: 1`.

### Customization

You can customize the appearance of the `Navbar` component by overriding the inline styles in the component or by adding additional classes or style properties based on your specific requirements.