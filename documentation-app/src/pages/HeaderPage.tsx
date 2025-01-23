export const HeaderPage = () => {
    return (
        <><h1 id="-header-component"><code>Header</code> Component</h1>
            <p>A flexible React component for rendering a semantic header element (<code>h1</code>, <code>h2</code>, <code>h3</code>, or <code>h4</code>) with customizable font styles and sizes. It allows you to control the size of the header using predefined size options and the ability to pass in custom children content.</p>
            <h2 id="installation">Installation</h2>
            <p>To use this component in your project, install it using npm or yarn:</p>
            <h2 id="usage">Usage</h2>
            <p>You can use the <code>Header</code> component anywhere in your React app. The component accepts the following props:</p>
            <h3 id="props">Props</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>size</code></td>
                        <td>`&quot;sm&quot;</td>
                        <td>&quot;md&quot;</td>
                        <td>&quot;lg&quot;</td>
                        <td>&quot;xl&quot;`</td>
                        <td>Defines the header size. Options are: <code>&quot;sm&quot;</code>, <code>&quot;md&quot;</code>, <code>&quot;lg&quot;</code>, and <code>&quot;xl&quot;</code>.</td>
                    </tr>
                    <tr>
                        <td><code>fontFamily</code></td>
                        <td><code>string</code> (optional)</td>
                        <td>Optional. Defines the font family for the header. If not provided, defaults to <code>inherit</code>.</td>
                    </tr>
                    <tr>
                        <td><code>children</code></td>
                        <td><code>ReactNode</code> (optional)</td>
                        <td>The content to be displayed inside the header. This can be text, JSX elements, etc.</td>
                    </tr>
                </tbody>
            </table>
            <h3 id="explanation-of-size-prop-">Explanation of <code>size</code> prop:</h3>
            <ul>
                <li><code>&quot;sm&quot;</code>: Will render an <code>h4</code> tag (small header).</li>
                <li><code>&quot;md&quot;</code>: Will render an <code>h3</code> tag (medium header).</li>
                <li><code>&quot;lg&quot;</code>: Will render an <code>h2</code> tag (large header).</li>
                <li><code>&quot;xl&quot;</code>: Will render an <code>h1</code> tag (extra-large header).</li>
            </ul>
            <h2 id="styling">Styling</h2>
            <p>You can optionally pass a custom <code>fontFamily</code> to the <code>Header</code> component, which will be applied to the header tag.</p>
            <p>If no <code>fontFamily</code> is provided, the component will inherit the font family from its parent component.</p>
        </>)
}