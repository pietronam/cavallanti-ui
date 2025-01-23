export const GridPage = () => {
    return (
        <><h1 id="grid-component">Grid Component</h1>
            <p>The <code>Grid</code> component is a simple, reusable layout component for creating responsive grid-based designs in React. It allows you to define the number of columns and the gap between grid items. The component uses CSS Grid under the hood to arrange its children in a grid layout.</p>
            <h2 id="props">Props</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Required</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>columns</code></td>
                        <td><code>number</code></td>
                        <td>The number of columns in the grid.</td>
                        <td>✅</td>
                    </tr>
                    <tr>
                        <td><code>gap</code></td>
                        <td><code>number</code></td>
                        <td>The space between the grid items.</td>
                        <td>✅</td>
                    </tr>
                    <tr>
                        <td><code>children</code></td>
                        <td><code>ReactNode</code></td>
                        <td>The content to be displayed inside the grid. This can be any valid React children (e.g., elements, text, components).</td>
                        <td>❌</td>
                    </tr>
                </tbody>
            </table>
        </>)
}