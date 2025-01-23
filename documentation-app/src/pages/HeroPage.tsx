export const HeroPage = () => {
    return (
        <><h1 id="hero-component">Hero Component</h1>
            <p>The <code>Hero</code> component is a React component used to display a hero section on a webpage. It consists of a large title (<code>heroText</code>) and a subtitle (<code>subtitleText</code>) in a centered layout.</p>
            <h2 id="installation">Installation</h2>
            <p>You can use the <code>Hero</code> component in your project by importing it from the appropriate package.</p>
            <h2 id="usage">Usage</h2>
            <p>To use the <code>Hero</code> component, simply import it into your React file and pass the <code>heroText</code> and <code>subtitleText</code> props.</p>
            <h2 id="props">Props</h2>
            <table>
                <thead>
                    <tr>
                        <th>Prop</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>heroText</code></td>
                        <td><code>string</code></td>
                        <td>The main title text that appears prominently at the top of the hero section.</td>
                    </tr>
                    <tr>
                        <td><code>subtitleText</code></td>
                        <td><code>string</code></td>
                        <td>The subtitle text that appears below the main title.</td>
                    </tr>
                </tbody>
            </table>
            <h2 id="styles">Styles</h2>
            <p>The <code>Hero</code> component uses inline styles for layout:</p>
            <ul>
                <li>The outer container (<code>div</code>) is centered both vertically and horizontally with a <code>flexbox</code> layout, applying padding for spacing.</li>
                <li>The <code>heroText</code> is wrapped in the <code>Header</code> component, which is styled with an extra-large (<code>xl</code>) size.</li>
                <li>The <code>subtitleText</code> is placed below the hero text in a simple <code>span</code> element.</li>
            </ul>
            <h2 id="customization">Customization</h2>
            <p>You can adjust the styles of the <code>Hero</code> component by passing custom CSS or applying additional styles to its parent or child elements.</p>
            <h2 id="example-output">Example Output</h2>
            <p>This component will render a centered hero section like the following:</p>
            <ul>
                <li><strong>Main Title</strong>: &quot;Welcome to Our Website&quot; (in a large header)</li>
                <li><strong>Subtitle</strong>: &quot;We are glad to have you here!&quot; (in a smaller text)</li>
            </ul>
        </>)
}