import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function() {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append(`<button>Click here to get started</button>`);
  $('body').append(`<p id='count'></p>`);
  $('body').append('<p>Copyright - Holberton School</p>');
});

// increments and renders a counter for each time a button is clicked
function updateCounter() {
  $(document).ready(function() {
    let counter = $('#count').html()
    $('button').click(function() {
        counter++;
        $('#count').html(`${counter} clicks on the button`);
    });
  });
}

_.debounce(updateCounter, 250);
updateCounter();
