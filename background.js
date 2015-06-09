var q = require('q'); 

//Create new GET
var xhr = new XMLHttpRequest();

//GET request for Bookmarks
var bookmarkTreeNodes = chrome.bookmarks.getTree(
  function(bookmarkTreeNodes) {
     console.log(bookmarkTreeNodes);
  });
}

//send Bookmarks data to server 
$.ajax({
  type: 'POST', 
  url: '//localhost:8080/api/bookmarks'
  data: [bookmarkTreeNodes]
}); 

