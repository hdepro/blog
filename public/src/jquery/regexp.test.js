const regexp = require("./regexp")
// @ponicode
describe("regexp.stripAndCollapse", () => {
    test("0", () => {
        let callFunction = () => {
            regexp.stripAndCollapse("Dillenberg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            regexp.stripAndCollapse("elio@example.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            regexp.stripAndCollapse("Elio")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            regexp.stripAndCollapse(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
