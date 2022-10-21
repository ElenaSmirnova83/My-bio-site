class Contact {
    fullName;
    contactNumber;
    emailAddress;
    //public properties
    get FullName() {
        return this.fullName;
    }
    set FullName(name) {
        this.fullName = name;
    }
    get ContactNumber() {
        return this.contactNumber;
    }
    set ContactNumber(contactNumber) {
        this.contactNumber = contactNumber;
    }
    get EmailAddress() {
        return this.emailAddress;
    }
    set EmailAddress(emailAddress) {
        this.emailAddress = emailAddress;
    }
    //constructor
    /**
     *
     * @param fullName`
     * @param contactNumber
     * @param emailAddress
     */
    constructor(fullName = "unknown name", contactNumber = "no contact number", emailAddress = "unknown email") {
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }
    //public methods
    /**
     * this method overrides the built-in tostring method for the contact class
     * @returns
     */
    toString() {
        let outputString = "";
        outputString += `Full Name      :  ${this.FullName}\n`;
        outputString += `Contact Number :  ${this.ContactNumber}\n`;
        outputString += `Email Address  :  ${this.EmailAddress}\n`;
        return outputString;
    }
}
//# sourceMappingURL=contact.js.map