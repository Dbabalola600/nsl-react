import React from "react";
import Status from "./Status";


function StatusType(prop:{status:boolean}) {
    const PendingApproval = (
        <div>
            <h3 className="flex justify">
                <div className="  w-3.5 h-3.5  bg-red-400 border-2 border-gray-10 rounded-full " />
                <h3>Pending Approval </h3>
                <div />
            </h3>
        </div>
    )
    const PendingContractApproval = (
        <div>
                <h3 className="flex justify-between">
                    <div className="flex justify-between">
                        <div className="bottom-1   w-3.5 h-3.5 bg-red-900 border-2 border-gray-10 rounded-full " />
                        <h3>Pending Contract Approval</h3>
                    </div>
                </h3>
            </div>
    )


    return prop.status ? PendingContractApproval : PendingApproval;
}



export default StatusType;



