describe("First simple test", function () {

    var value;

    beforeEach(function () {
        value = 0;
    });

    it("increments value", function () {
        value++;

        expect(value).toEqual(1);
    })

    it("decrements value", function () {
        value--;
        expect(value).toEqual(-1);
        //expect(value).toEqual(0);
    })
});