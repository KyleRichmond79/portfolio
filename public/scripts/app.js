'use strict';
let projects = [];

$(document).ready(function() {
  // hamburger handler
  $(function(){
    $('.fa-navicon').on('click', function(event){
      event.preventDefault();
      $('.navList').slideToggle();
    })
  })
});

function ProjectEntry(rawDataObj) {
  this.title = rawDataObj.title;
  this.completedOn = rawDataObj.completedOn;
  this.image = rawDataObj.image;
  this.category = rawDataObj.category;
  this.projectUrl = rawDataObj.projectUrl;
}

ProjectEntry.prototype.toHtml = function() {
  let myProjectEntry = $('#myProjectEntryList-template').html();
  let compiled = Handlebars.compile(myProjectEntry);
  $('#articles').append(compiled(this));
};

rawData.forEach(function(ProjectEntryObject) {
  projects.push(new ProjectEntry(ProjectEntryObject));
});

projects.forEach(function(ProjectEntry){
  $('#articles').append(ProjectEntry.toHtml());
});

ProjectEntry.fetchAll = function() {
  if(localStorage.rawData){
    ProjectEntry.loadAll(JSON.parse(localStorage.rawData));
  } else {
    $.getJSON('rawData.json')
    .then(function(data){
      localStorage.setItem('rawData', JSON.stringify(data))
      console.log('SUCCESS' + data);
      ProjectEntry.loadAll(JSON.parse(localStorage.rawData))
    }, function(err) {
      console.error('There has been an error' + err);
    })
  }
};
