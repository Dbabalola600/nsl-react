import React from "react";

// custom hooks
import useForms from "../../../services/customHooks/useForms";

// validation
import { loanApplicationValidation } from "../../../utils/validation/loanApplication";

function Form() {
    const onSubmitForm = () => {
        setTimeout(() => {
            setSubmitButtonDisabled(false);
        }, 10000);
    };

    const {
        formFields,
        handleFormChanges,
        handleFormSubmit,
        validationErrors,
        isSubmitButtonDisabled,
        setSubmitButtonDisabled,
    } = useForms({
        initialValues: {
            amount: 0.0,
            tenor: "",
            interest: "",
            narration: "",
        },
        validation: loanApplicationValidation,
        callback: onSubmitForm,
    });
    console.log(isSubmitButtonDisabled);

    return (
        <form
            action="/"
            className="w-full py-20 space-y-16  text-darkTextColor"
            onSubmit={handleFormSubmit}
        >
            <div className=" border-0 border-b-2 border-underlineColor">
                <label htmlFor="amount"></label>
                <input
                    type="number"
                    name="amount"
                    id="LoanApplication__amount"
                    className="outline-none pb-4  w-full"
                    placeholder="Amount"
                    value={formFields.amount}
                    onChange={handleFormChanges}
                />
                {validationErrors.amount && (
                    <p className="text-xs text-red-900 ">
                        {validationErrors.amount}
                    </p>
                )}
            </div>

            <div className=" border-0 border-b-2  border-underlineColor ">
                <label htmlFor="tenor"></label>
                <input
                    type="text"
                    name="tenor"
                    id="LoanApplcation_tenor"
                    className="outline-none pb-4  border-0 "
                    placeholder="Tenor"
                    value={formFields.tenor}
                    onChange={handleFormChanges}
                />
                {validationErrors.tenor && (
                    <p className="text-xs text-red-900 ">
                        {validationErrors.tenor}
                    </p>
                )}
            </div>

            <div className=" border-0 border-b-2  border-underlineColor ">
                <label htmlFor="interest"></label>
                <input
                    type="text"
                    name="interest"
                    id="LoanApplication__interest"
                    className="outline-none pb-4 border-0  w-full"
                    placeholder="Interest-15%"
                    value={formFields.interest}
                    onChange={handleFormChanges}
                />
                {validationErrors.interest && (
                    <p className="text-xs text-red-900 ">
                        {validationErrors.interest}
                    </p>
                )}
            </div>

            <div className=" border-0 border-b-2  border-underlineColor ">
                <label htmlFor="narration"></label>
                <textarea
                    name="narration"
                    id="LoanApplcation_narration"
                    className="outline-none bg-bgColor pb-4  resize-none h-32 p-3 w-full border-0 "
                    placeholder="Narration"
                    value={formFields.narration}
                    onChange={handleFormChanges}
                ></textarea>
                {validationErrors.narration && (
                    <p className="text-xs text-red-900 ">
                        {validationErrors.narration}
                    </p>
                )}
            </div>

            <button
                className={`w-full md:w-1/2 btn1 bg-darkTextColor `}
                type="submit"
                disabled={isSubmitButtonDisabled}
            >
                Proceed
            </button>
        </form>
    );
}

export default Form;
