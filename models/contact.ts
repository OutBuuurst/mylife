export default class Contact {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string | null;
    website: string | null;
    instagram: string | null;
    birthday: string | null;
    homeAddress: string | null;
    profession: string | null;
    businessAddress: string | null;
    faith: string | null;
    groupId: number | null;

    constructor(
        id: number,
        firstName: string,
        lastName: string,
        phone: string,
        email: string | null,
        website: string | null,
        instagram: string | null,
        birthday: string | null,
        homeAddress: string | null,
        profession: string | null,
        businessAddress: string | null,
        faith: string | null,
        groupId: number | null,
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.website = website;
        this.instagram = instagram;
        this.birthday = birthday;
        this.homeAddress = homeAddress;
        this.profession = profession;
        this.businessAddress = businessAddress;
        this.faith = faith;
        this.groupId = groupId;
    }
}