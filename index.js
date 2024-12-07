const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

 // jQuery to toggle + and x based on collapse state
 $('#netflixInfo').on('show.bs.collapse', function () {
    $('#toggleIcon').text('x');  // Change to "x" when expanded
  });
  
  $('#netflixInfo').on('hide.bs.collapse', function () {
    $('#toggleIcon').text('+');  // Change to "+" when collapsed
  });

 // jQuery to toggle + and x based on collapse state
 $('#netflixInfo1').on('show.bs.collapse', function () {
    $('#toggleIcon1').text('x');  // Change to "x" when expanded
  });
  
  $('#netflixInfo1').on('hide.bs.collapse', function () {
    $('#toggleIcon1').text('+');  // Change to "+" when collapsed
  });

  // jQuery to toggle + and x based on collapse state
 $('#netflixInfo3').on('show.bs.collapse', function () {
  $('#toggleIcon3').text('x');  // Change to "x" when expanded
});

$('#netflixInfo3').on('hide.bs.collapse', function () {
  $('#toggleIcon3').text('+');  // Change to "+" when collapsed
});

 // jQuery to toggle + and x based on collapse state
 $('#netflixInfo5').on('show.bs.collapse', function () {
  $('#toggleIcon5').text('x');  // Change to "x" when expanded
});

$('#netflixInfo5').on('hide.bs.collapse', function () {
  $('#toggleIcon5').text('+');  // Change to "+" when collapsed
});

 // jQuery to toggle + and x based on collapse state
 $('#netflixInfo7').on('show.bs.collapse', function () {
  $('#toggleIcon7').text('x');  // Change to "x" when expanded
});

$('#netflixInfo7').on('hide.bs.collapse', function () {
  $('#toggleIcon7').text('+');  // Change to "+" when collapsed
});

 // jQuery to toggle + and x based on collapse state
 $('#netflixInfo9').on('show.bs.collapse', function () {
  $('#toggleIcon9').text('x');  // Change to "x" when expanded
});

$('#netflixInfo9').on('hide.bs.collapse', function () {
  $('#toggleIcon9').text('+');  // Change to "+" when collapsed
});
