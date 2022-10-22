let mycontactpagenav = "Contact page";
document.querySelector(".nav-link.contactnav").innerHTML = mycontactpagenav;
const mypara = p;
document.querySelector(".container.contactpage p").innerHTML = mypara;
function setAction(form) {
    form.action = "register.html";
    alert(form.action);
    return false;
}
/**class Contact
 {      //private instance members (fields)
        private fullName: string;
        private contactNumber: string;
        private emailAddress: string;

        //public properties
        get FullName():string
        {
            return this.fullName;
        }

        set FullName(name: string)
        {
            this.fullName = name;
        }
        get ContactNumber():string
        {
            return this.contactNumber;
        }

        set ContactNumber(contactNumber: string)
        {
            this.contactNumber = contactNumber;
        }
        get EmailAddress():string
        {
            return this.emailAddress;
        }

        set EmailAddress(emailAddress: string)
        {
            this.emailAddress = emailAddress;
        }

        //constructor
     
        constructor(fullName: string = "unknown name", contactNumber: string = "no contact number", emailAddress: string = "unknown email")
        {
            this.FullName = fullName;
            this.ContactNumber = contactNumber;
            this.EmailAddress = emailAddress;
        }

        //public methods
       /**
        public toString(): string
        {
            let outputString = "";
            outputString += `Full Name      :  ${this.FullName}\n`;
            outputString += `Contact Number :  ${this.ContactNumber}\n`;
            outputString += `Email Address  :  ${this.EmailAddress}\n`;
            return outputString;
        }

        //private methods


    }*/ 
//# sourceMappingURL=contact.js.map