
    function nameTest(name1)
    {
        let regex = /^[a-zA-Z ]{2,30}$/;
        return regex.test(name1);  
    }
    function emailTest(email) {
        let regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.com]$/;
        return regex.test(email);
    }

    function passwordTest(password) {
        let regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        return regex.test(password);
    }

    function phoneNumberTest(number) {
        let regex = /^[(0/91)]?[7-9][0-9]{9}$/;
        return regex.test(number);
    }

    function ticketTest(number) {
        if(number>500)
        return false;
        else
        return true;
    }
   