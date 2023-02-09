const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
<h1>My Dynamic Section</h1>
<p>Extra text added inside paragraph
<ul>
    <li>First Item</li>
    <li>second Item</li>
    <li>third Item</li>
    <li>fourth Item</li>
    </ul>
`
main.appendChild(section);