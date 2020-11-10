describe('Testing the login page', ()=>{
    it("should check the right format of name", ()=>{
        const res = nameTest("sushank");
        expect(res).toBeTruthy();
    })
    it("should check the wrong format of name", ()=>{
        const res = nameTest("sushank123");
        expect(res).toBeFalsy();
    })
    it("should check the right format of password", ()=>{
        const res = passwordTest("sushank@123");
        expect(res).toBeTruthy();
    })
    it("should check the wrong format of password", ()=>{
        const res = passwordTest("sushank @ 123");
        expect(res).toBeFalsy();
    })
});

describe('Testing the sign up page', ()=>{
    it("should check the right format of name", ()=>{
        const res = nameTest("sushank");
        expect(res).toBeTruthy();
    })
    it("should check the wrong format of name", ()=>{
        const res = nameTest("sushank123");
        expect(res).toBeFalsy();
    })
    it("should check the right format of email", ()=>{
        const res = emailTest("ysushank@gmail.com");
        expect(res).toBeTruthy();
    })
    it("should check the wrong format of email", ()=>{
        const res = emailTest("ysushank@gmail");
        expect(res).toBeFalsy();
    })
    it("should check the right format of phone number", ()=>{
        const res = phoneNumberTest("8971204899");
        expect(res).toBeTruthy();
    })
    it("should check the wrong format of phone number", ()=>{
        const res = phoneNumberTest("89712048999");
        expect(res).toBeFalsy();
    })
    it("should check the right format of password", ()=>{
        const res = passwordTest("sushank@123");
        expect(res).toBeTruthy();
    })
    it("should check the wrong format of password", ()=>{
        const res = passwordTest("sushank @ 123");
        expect(res).toBeFalsy();
    })
});


describe('Testing the ticket booking page', ()=>{
    it("should check the right format of name", ()=>{
        const res = nameTest("sushank");
        expect(res).toBeTruthy();
    })
    it("should check the wrong format of name", ()=>{
        const res = nameTest("sushank123");
        expect(res).toBeFalsy();
    })
    it("should check the right format of email", ()=>{
        const res = emailTest("ysushank@gmail.com");
        expect(res).toBeTruthy();
    })
    it("should check the wrong format of email", ()=>{
        const res = emailTest("ysushank@gmail");
        expect(res).toBeFalsy();
    })
    it("should check the right format of phone number", ()=>{
        const res = phoneNumberTest("8971204899");
        expect(res).toBeTruthy();
    })
    it("should check the wrong format of phone number", ()=>{
        const res = phoneNumberTest("89712048999");
        expect(res).toBeFalsy();
    })
    it("should check the correct number of tickets", ()=>{
        const res = ticketTest(3);
        expect(res).toBeTruthy();
    })
    it("should check the wrong number of tickets", ()=>{
        const res = ticketTest(512);
        expect(res).toBeFalsy();
    })
});