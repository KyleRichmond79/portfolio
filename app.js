'use strict';
function projectEntry(name, text, image, path) {
  this.name = name;
  this.text = text;
  this.image = image;
  this.path = path;
  ProjectEntry.push(this);
}

ProjectEntry.all = [];
