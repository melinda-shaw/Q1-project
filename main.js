// // here's one thought
// var q3 = {
//   question: "dksldll";
//   answer: [{
//       yes: 'text her'
//     },
//     {
//       no: 'loser'
//     }
//   ]
// }


// https://getbootstrap.com/docs/4.0/components/alerts/#events
// Event	Description
// close.bs.alert	This event fires immediately when the close instance method is called.
// closed.bs.alert	This event is fired when the alert has been closed (will wait for CSS transitions to complete).

$('#myAlert').on('closed.bs.alert', function() {
  // do something…
})
