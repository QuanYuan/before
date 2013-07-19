describe("checkURL", function() {

    it("determines whether URL is valid", function() {
        expect(CreditCard.cleanNumber("123 4-5")).toEqual("12345");
    });
});