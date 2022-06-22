import { HTMLInputTypeAttribute } from "react";

// Form Information
// Loan Application Form
type LoanApplicationFormInfo = {
    amount: string;
    tenor: { value: string; label: string };
    interest: string;
    purpose: string;
    termsAndCondition: boolean;
};

type PersonalDetailsFormInfo = {
    firstName: string;
    lastName: string;
    title: string;
    middleName: string;
    emailAddress: string;
    phoneNumber: string;
    gender: { value: string; label: string } | Record;
    dateOfBirth: string;
    IdissueDate: string;
    IdexpiryDate:string;
    maritalStatus: { value: string; label: string } | Record;
    cscsNumber: string;
    residentialAddress: string;
    picture: string | null;
    proofOfIdentification: string | null;
    proofOfResidence: string | null;
    salarySlips: string | null;
    bvn: string;
    documentType: { value: string; label: string } | Record;
    documentRefNumber: string;
};

type EmploymentDetailsFormInfo = {
    jobTitle:string ;
    companyName: string ;
    natureOfBusiness: string ;
    companyPhoneNumber:string ;
    companyEmailAddress: string ;
    grossIncome:string;
    companyAddress:string ;
};

type CreateAccountFormData = {
    // cscsAccountNumber: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    bvn: string;
    password: string;
    dateOfBirth: string;
    gender: { value: string; label: string } | Record;
    confirmPassword: string;
};

type EditPersonalDetailsInfo = {
    fullname: string;
    emailAddress: string;
    phoneNumber: string;
    gender: { value: string; label: string } | Record;
    dateOfBirth: string;
    maritalStatus: { value: string; label: string } | Record;
    cscsNumber: string;
    residentialAddress: string;
    picture: FileList;
    proofOfIdentification: FileList;
    proofOfResidence: FileList;
    salarySlips: FileList;
};

type LoginInfo = {
    usernameOrEmail: string;
    password: string;
};

/* Props */
// TextFields
// Single TexField
type SingleTextFieldProps = {
    id?: string;
    name?: string;
    type?: React.HTMLInputTypeAttribute;
    placeholder?: string;
    label?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    value?: string;
    maxLength?: number;
};

/* Validation Error Types */
// Loan Application
type LoanApplicationValidationErrors = {
    amount?: string;
    tenor?: Record<string, any> | undefined;
    intrest?: string;
    narration?: string;
};

// state
// modal state
interface ModalState {
    isOpen: boolean;
    isCancellable: boolean;
    // callBack: () => void | undefined;
    modalName: string;
}

// auth state
interface AuthState {
    accessToken: string | null;
    refreshToken: string | null;
    user: {
        title: string | null;
        customerNo: string | null;
        name: string | null;
        firstName: string | null;
        lastName: string | null;
        middleName: string | null;
        maritalStatus: string | null;
        dateOfBirth: string | null;
        gender: string | null;
        phoneNumber: string | null;
        email: string | null;
        bvn: string | null;
        residentialAddress: string | null;
        cscsNumber: string | null;
        identificationDocType?: string | null;
        identificationDocRef?: string | null;
        identificationIssueDate?: string | null;
        identificationDocExpiryDate?: string | null;
        identificationDocumentImage?: string | null;
        proofOfAddressImage?: string | null;
        picture?: string | null;
        employmentInfo: {
            jobTitle:string|null,
            natureOfBusiness:string |null,
            companyName:string |null,
            companyPhoneNumber:string | null,
            companyEmail:string | null,
            companyAddress:string | null,
            grossIncome: string | null,
        };
    } | null;

    isSuccess: boolean;
    isError: boolean;
    isLoading: boolean;
    errorMessage: string;
    requestStatus: number;
}

// signUpInfo state
interface SignUpInfoState {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    gender: { value: string; label: string } | Record;
    email: string;
    bvn: string;
    phoneNumber: string;
    password: string;
    emailCode: string;
    smsCode: string;
}

// Requests
interface TokenResponse {
    access_token: string;
    expires_in: number;
    refresh_expires_in: number;
    refresh_token: string;
    token_type: string;
    "not-before-policy": number;
    session_state: string;
    scope: string;
}

interface UserResponse {
    sub: string;
    email_verified: boolean;
    name: string;
    preferred_username: string;
    given_name: string;
    family_name: string;
    email: string;
}

interface UserInfoAppResponse {
    customerNo: string | null;
    name: string | null;
    firstName: string | null;
    lastName: string | null;
    otherName: string | null;
    maritalStatus: string | null;
    dob: string | null;
    gender: string | null;
    phoneRef: string | null;
    email: string | null;
    bvn: string | null;
    address: string | null;
    memberShipNo: string | null /* cscsNumber */;
    // employment Info
    employerName: string | null;
    occupationCode: string | null /* Job title*/;
    employerAddress: string | null;
    officeEmail: string | null;
    officePhoneNo: string | null;
    grossAnnualIncome: number | null;
    natureOfBuss: string | null /* nature of business*/;
    // documents
    kycdocs: [
        ProofOfIdentificationFromGetUserAppResponse,
        ProofOfAddressFromGetUserAppResponse,
        PictureFromGetUserAppResponse
    ];
}

type ProofOfIdentificationFromGetUserAppResponse = {
    documentType: string | null;
    documentReference: string | null;
    documentIssueDate: string | null;
    documentExpiryDate: string | null;
    documentImage: string | null;
};

type ProofOfAddressFromGetUserAppResponse = {
    documentType: "Proof of Address";
    documentImage: string | null;
};

type PictureFromGetUserAppResponse = {
    documentType: "Photo";
    documentImage: string | null;
};
