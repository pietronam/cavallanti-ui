export const NavbarPage = () => {
    return (
        <>
            <h2 id="-navbar-component"><code>Navbar</code> Component</h2>
            <h3 id="description">Description</h3>
            <p>The <code>Navbar</code> component is a responsive and customizable navigation bar designed for React applications. It accepts a header text and a list of navigation links and renders them in a structured layout. The component consists of two main sections: the header and the links. The header displays a title, while the links section renders a list of clickable navigation items.</p>
            <h3 id="props">Props</h3>
            <p>The <code>Navbar</code> component accepts the following props:</p>
            <ul>
                <li><code>headerText</code> (string, <strong>required</strong>): The text that will be displayed as the title of the navigation bar.</li>
                <li><code>links</code> (array of objects, <strong>required</strong>): An array of objects, where each object represents a navigation link. Each object should contain the following properties:<ul>
                    <li><code>name</code> (string, <strong>required</strong>): The name of the link that will be displayed.</li>
                    <li><code>link</code> (string, <strong>required</strong>): The URL that the link points to.</li>
                </ul>
                </li>
            </ul>
            <h3 id="styles">Styles</h3>
            <p>The <code>Navbar</code> component is styled using inline styles. Here&#39;s a breakdown of the key styles:</p>
            <ul>
                <li><p><strong>Navbar</strong>: </p>
                    <ul>
                        <li>Displayed as a <code>flex</code> container with padding of 20px.</li>
                        <li>Background color is set to <code>gray</code>.</li>
                    </ul>
                </li>
                <li><p><strong>Header Section</strong>: </p>
                    <ul>
                        <li>Displays the header text using a flex container.</li>
                    </ul>
                </li>
                <li><p><strong>Links Section</strong>: </p>
                    <ul>
                        <li>Displays the links as flex items with a gap of 20px between each link.</li>
                        <li>The links are aligned to the right using <code>justifyContent: &quot;end&quot;</code>.</li>
                        <li>The container grows to take up available space using <code>flexGrow: 1</code>.</li>
                    </ul>
                </li>
            </ul>
            <h3 id="customization">Customization</h3>
            <p>You can customize the appearance of the <code>Navbar</code> component by overriding the inline styles in the component or by adding additional classes or style properties based on your specific requirements.</p>

        </>
    )
}