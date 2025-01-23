export const FooterPage = () => {
    return (
        <><h2 id="footer-component">Footer Component</h2>
            <p>The <code>Footer</code> component is a React functional component that displays a footer section with a list of social media links. It accepts an array of social media items and renders them as clickable links.</p>
            <h3 id="props">Props</h3>
            <p>The component expects a single prop:</p>
            <ul>
                <li><strong><code>socials</code></strong> (<code>Array</code>): An array of objects representing social media items. Each object should have the following properties:<ul>
                    <li><strong><code>name</code></strong> (<code>string</code>): The name of the social media platform (e.g., &quot;Facebook&quot;, &quot;Twitter&quot;).</li>
                    <li><strong><code>link</code></strong> (<code>string</code>): The URL of the social media profile or page.</li>
                </ul>
                </li>
            </ul>
            <h3 id="styling">Styling</h3>
            <p>The <code>Footer</code> component uses inline styles for layout and design:</p>
            <ul>
                <li>The outer <code>div</code> is styled to be a flex container with a gray background and centered content.</li>
                <li>The inner <code>div</code> (for the social media links) is also a flex container with a gap between the individual links.</li>
            </ul>
            <p>You can customize these styles by modifying the <code>footerStyle</code> and <code>socialsStyle</code> objects directly in the component or by passing custom styles via props.</p>
            <h3 id="notes">Notes</h3>
            <ul>
                <li>The links open in a new tab, as the <code>target=&quot;_blank&quot;</code> attribute is set for each <code>a</code> tag.</li>
                <li>The <code>Footer</code> component expects a non-empty <code>socials</code> array. It will not render anything if the array is empty or undefined.</li>
            </ul>
        </>)
}