## Footer Component

The `Footer` component is a React functional component that displays a footer section with a list of social media links. It accepts an array of social media items and renders them as clickable links.

### Props

The component expects a single prop:

- **`socials`** (`Array`): An array of objects representing social media items. Each object should have the following properties:
  - **`name`** (`string`): The name of the social media platform (e.g., "Facebook", "Twitter").
  - **`link`** (`string`): The URL of the social media profile or page.

#### Example:

```js
const socialsData = [
  { name: 'Facebook', link: 'https://www.facebook.com/yourprofile' },
  { name: 'Twitter', link: 'https://twitter.com/yourprofile' },
];
```

### Usage

To use the `Footer` component, pass an array of social media objects as the `socials` prop:

```js
import Footer from 'path/to/Footer';

function App() {
  const socialsData = [
    { name: 'Facebook', link: 'https://www.facebook.com/yourprofile' },
    { name: 'Twitter', link: 'https://twitter.com/yourprofile' },
  ];

  return (
    <div>
      <Footer socials={socialsData} />
    </div>
  );
}
```

### Styling

The `Footer` component uses inline styles for layout and design:

- The outer `div` is styled to be a flex container with a gray background and centered content.
- The inner `div` (for the social media links) is also a flex container with a gap between the individual links.

You can customize these styles by modifying the `footerStyle` and `socialsStyle` objects directly in the component or by passing custom styles via props.

### Notes

- The links open in a new tab, as the `target="_blank"` attribute is set for each `a` tag.
- The `Footer` component expects a non-empty `socials` array. It will not render anything if the array is empty or undefined.
