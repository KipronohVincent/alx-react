import $ from 'jquery';
import _ from 'lodash';
import "../body/body.css";

$('body').append("<button>Click here to get started</button");
$('body').append("<p id='count'></p>");

let count = 0;
let infoClick = "";
let display = document.getElementById('count');
function updateCounter() {
    count++;
    infoClick = `${count} clicks on the button`;
    display.innerHTML = infoClick;
};

$('button').on('click', _.debounce(function()  {
    updateCounter();
}, 300));
