var ConsoleReporter = jasmineRequire.ConsoleReporter();
var options = {
       timer: new jasmine.Timer,
          print: function () {
                    console.log.apply(console,arguments)
          }};
consoleReporter = new ConsoleReporter(options); // initialize ConsoleReporter
jasmine.getEnv().addReporter(consoleReporter); //add reporter to execution environment

describe("Test jasmine and our code", function() {
    it("Check if basic assertions work", function() {
        expect(false).toBe(true);
    });
    it("Access a function from another file", function() {
        expect(sum(2, 4) == 6).toBe(true);
    });
});
