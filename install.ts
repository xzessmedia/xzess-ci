import s from 'shelljs';
var path = require('path');
var addToPath = require('add-to-path');
s.echo('Installing App into Path Variable..');
var restorePath = addToPath(path.join('./','bin'));