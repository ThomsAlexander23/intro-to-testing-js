//Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// function test for sayHello function
describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return "Hello, Jane!" when called with Jane', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!" when called with Alex', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!" when called with Pat', function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('it should require a parameter "name" when called', function() {
        expect(sayHello(name)).toBe("Hello, " + name + "!");
    });
    it('should return "Hello, World! when empty', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when called with true', function(){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World" when called with false', function() {
    expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return "Hello, World" when called with null', function() {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return "Hello, 5" when called with the number 5', function() {
        expect(sayHello(5)).toBe("Hello, 5!");
    });
    it('should return "Hello, 2.17" when called with 2.17', function() {
        expect(sayHello(2.17)).toBe("Hello, 2.17!");
    });
});