$(document).ready(function() {

  function reveal(card, text) {
    $(card).click(function() {
      $(text).toggle()
    })
  }

  reveal(".c1", ".t1")
  reveal(".c2", ".t2")
});

