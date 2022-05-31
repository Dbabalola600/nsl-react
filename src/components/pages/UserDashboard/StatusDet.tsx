import React from "react";
import Status from "./Status";
import EmptyStatus from './EmptyStatus';

function StatusDet() {
    return (
        <div className="w-full">
            <div className="space-y-5  p-0  text-sm md:text-md">
                <Status
                    loantype="Land Loan"
                    amount="900,000"
                    statustype={1}
                    statusview={1}
                />
                {/* <Status
                    loantype="School Loan"
                    amount="900,000"
                    statustype={2}
                    statusview={2}
                /> */}
                {/* <EmptyStatus /> */}
            </div>
        </div>
    );
}

export default StatusDet;
