/**
 * Created by lixin on 5/7/17.
 */

import Hello from './hello.jsx';
import Header from './ui/header/header.jsx';

function myFunction() {
    document.getElementById("demo").innerHTML = "paragraph changed.";
}
window.myFunction = myFunction;