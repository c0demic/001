/**
 * Created by lixin on 5/7/17.
 */

import MainHeader from 'approot/js/ui/header/header.jsx';
import hello from 'approot/js/hello.jsx';

function myFunction() {
    document.getElementById("demo").innerHTML = "paragraph changed.";
}
window.myFunction = myFunction;