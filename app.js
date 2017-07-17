'use strict';
$(document).ready(function() {
  // hamburger handler
  $(function(){
    $('.fa-navicon').on('click', function(event){
      event.preventDefault();
      $('.navList').slideToggle();
    })
  })
});

function projectEntry(rawDataObj) {
  this.title = rawDataObj.title;
  this.completedOn = rawDataObj.completedOn;
  this.image = rawDataObj.image;
  this.projectUrl = rawDataObj.projectUrl;
  // ProjectEntry.push(this);
}

// ProjectEntry.all = [];
