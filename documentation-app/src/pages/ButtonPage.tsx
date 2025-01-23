export const ButtonPage = () => {
    return (
        <><h2 id="button-component">Button Component</h2>
            <h3 id="description">Description</h3>
            <p>The <code>Button</code> component is a customizable button element that allows you to adjust the button&#39;s text color, background color, and define an action when clicked.</p>
            <h3 id="props">Props</h3>
            <table>
                <thead>
                    <tr>
                        <th>Prop</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Required</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>label</code></td>
                        <td><code>string</code></td>
                        <td>The text that will be displayed inside the button.</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td><code>color</code></td>
                        <td><code>string</code></td>
                        <td>The color of the text inside the button.</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td><code>bgColor</code></td>
                        <td><code>string</code></td>
                        <td>The background color of the button.</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td><code>onClick</code></td>
                        <td><code>() =&gt; void</code></td>
                        <td>The function to be executed when the button is clicked.</td>
                        <td>Yes</td>
                    </tr>
                </tbody>
            </table>
            <h3 id="styling">Styling</h3>
            <ul>
                <li>The button has a padding of <code>10px</code> and rounded corners with a <code>border-radius</code> of <code>10px</code>.</li>
                <li>The button&#39;s text color and background color can be customized through the <code>color</code> and <code>bgColor</code> props.</li>
            </ul></>)
}