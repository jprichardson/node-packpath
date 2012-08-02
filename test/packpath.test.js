var assert = require('assert');
var faux_module_parent = require('faux-module-parent');


var T = function(expr) { assert(expr); }

describe('packpath', function(){
    describe('+ self()', function(){
        it('should return the directory of the package.json for faux-module-self', function(){ 
            //console.log(faux_module_parent.self());
            //console.log(faux_module_parent.selfFromPackPath());
            T(faux_module_parent.self() === faux_module_parent.selfFromPackPath());
        });
    });

    describe('+ parent()', function(){
        it('should return the directory of the package.json for faux-module-parent', function(){ 
            //console.log(faux_module_parent.parent());
            //console.log(faux_module_parent.parentFromPackPath());
            T(faux_module_parent.parent() === faux_module_parent.parentFromPackPath());
        });
    });
});