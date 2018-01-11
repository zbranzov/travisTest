var Myplugin = require("nativescript-myplugin").Myplugin;
var myplugin = new Myplugin();

describe("greet function", function() {
    it("exists", function() {
        expect(myplugin.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(myplugin.greet()).toEqual("Hello, NS");
    });
});