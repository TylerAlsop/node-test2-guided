const supertest = require("supertest")

const server = require("../index")


test("GET /", async () => {
    // Start by ARRANGing the test data needed
    const endpoint = "/"
    const status = 200

    // Then we ACT on what we're testing
    const res = await supertest(server).get(endpoint)

    // Then ASSERT the res data
    expect(res.statusCode).toBe(status)

    //**** res.type is shorthand for res.headers["content-type"] ****//
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe("Welcome to our API")
    //**** A more general way to test the welcome message would be like this: ****//
    expect(res.body.message).toMatch(/welcome/i)



})