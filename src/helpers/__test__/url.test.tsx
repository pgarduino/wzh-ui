import { queryString } from "../url";

describe("test function queryString", () => {
    it("should completed=false queryString", () => {
        expect(queryString({ completed: false })).toBe('completed=false');
    });
});
