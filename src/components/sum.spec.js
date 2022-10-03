const { sum } =  require("./sum");

it("Suming 5 + 2 will return 7", () => {
    expect(sum(5, 2)).toBe(7)
})