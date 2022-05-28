import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

// paths
import { paths } from "./utils/constants/allPaths";

// components
const ProtectedRoute = lazy(
    () => import("./components/shared/ProtectedRoutes/ProtectedRoute")
);

// pages
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
const EmailVerification = lazy(() => import("./pages/EmailVerification"));
const LoanApplication = lazy(() => import("./pages/LoanApplication"));
const PhoneVerification = lazy(() => import("./pages/PhoneVerification"));
const Login = lazy(() => import("./pages/Login"));
const LoanPaymentOptions = lazy(() => import("./pages/LoanPaymentOptions"));
const UpdateProfile = lazy(() => import("./pages/UpdateProfile"));
const LoanInformation = lazy(() => import("./pages/LoanInformation"));
const TotalLoanInformation = lazy(() => import("./pages/TotalLoanInformation"));
const LoanContract = lazy(() => import("./pages/LoanContract"));
const TotalAdminDashboard = lazy(() => import("./pages/TotalAdminDashboard"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const TermLoan = lazy(() => import("./pages/TermLoan"));
const EditEmploymentDetails= lazy(()=> import ("./pages/EditEmploymentDetails"));
const EditPersonalDetails = lazy (()=> import ("./pages/EditPersonalDetails"))

function AppRouter() {
    return (
        <>
            <Routes>
                <Route
                    path={paths.CREATE_ACCOUNT}
                    element={
                        <React.Suspense>
                            <CreateAccount />
                        </React.Suspense>
                    }
                />
                <Route
                    path={paths.EMAIL_VERIFICATION}
                    element={
                        <React.Suspense>
                            <EmailVerification />
                        </React.Suspense>
                    }
                />

                <Route
                    path={paths.LOAN_APPLICATION}
                    element={
                        <React.Suspense>
                            <LoanApplication />
                        </React.Suspense>
                    }
                />
                <Route
                    path={paths.LOGIN}
                    element={
                        <React.Suspense>
                            <Login />
                        </React.Suspense>
                    }
                />
                <Route
                    path={paths.PHONE_VERIFICATION}
                    element={
                        <React.Suspense>
                            <PhoneVerification />
                        </React.Suspense>
                    }
                />
                <Route
                    path={paths.LOAN_PAYMENT_OPTIONS}
                    element={
                        <React.Suspense>
                            <LoanPaymentOptions />
                        </React.Suspense>
                    }
                />
                <Route
                    path={paths.LOAN_INFORMATION}
                    element={
                        <React.Suspense>
                            <LoanInformation />
                        </React.Suspense>
                    }
                />

                <Route
                    path={paths.TOTAL_LOAN_INFORMATION}
                    element={
                        <React.Suspense>
                            <TotalLoanInformation />
                        </React.Suspense>
                    }
                />

                <Route
                    path={paths.LOAN_CONTRACT}
                    element={
                        <React.Suspense>
                            <LoanContract />
                        </React.Suspense>
                    }
                />

                <Route
                    path={paths.TOTAL_ADMIN_DASHBOARD}
                    element={
                        <React.Suspense>
                            <TotalAdminDashboard />
                        </React.Suspense>
                    }
                />

                <Route
                    path={paths.USER_DASHBOARD}
                    element={
                        <React.Suspense>
                            {/* <ProtectedRoute> */}
                            <Dashboard />
                            {/* </ProtectedRoute> */}
                        </React.Suspense>
                    }
                />

                <Route
                    path={paths.UPDATE_PROFILE.base + "/*"}
                    element={<UpdateProfile />}
                />

                <Route
                    path={paths.TERM_LOAN}
                    element={
                        <React.Suspense>
                            <TermLoan />
                        </React.Suspense>
                    }
                />

                <Route 
                path ={paths.EDIT_PERSONAL_DETAILS}
                element ={<EditPersonalDetails/>}
                />


                <Route
                path ={paths.EDIT_EMPLOYMENT_DETAILS}
                element = {<EditEmploymentDetails/>}
                />
            </Routes>
        </>
    );
}

export default AppRouter;
