// import { login } from "@lib/data/customer"
// import { LOGIN_VIEW } from "@modules/account/templates/login-template"
// import ErrorMessage from "@modules/checkout/components/error-message"
// import { SubmitButton } from "@modules/checkout/components/submit-button"
// import Input from "@modules/common/components/input"
// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import { useActionState } from "react"

// type Props = {
//   setCurrentView: (view: LOGIN_VIEW) => void
// }

// const Login = ({ setCurrentView }: Props) => {
//   const [message, formAction] = useActionState(login, null)

//   return (
//     <div
//       className="max-w-sm w-full flex flex-col items-center"
//       data-testid="login-page"
//     >
//       <h1 className="text-large-semi uppercase mb-6">Welcome back</h1>
//       <p className="text-center text-base-regular text-ui-fg-base mb-8">
//         Sign in to access an enhanced shopping experience.
//       </p>
//       <form className="w-full" action={formAction}>
//         <div className="flex flex-col w-full gap-y-2">
//           <Input
//             label="Email"
//             name="email"
//             type="email"
//             title="Enter a valid email address."
//             autoComplete="email"
//             required
//             data-testid="email-input"
//           />
//           <Input
//             label="Password"
//             name="password"
//             type="password"
//             autoComplete="current-password"
//             required
//             data-testid="password-input"
//           />
//         </div>
//         <ErrorMessage error={message} data-testid="login-error-message" />
//         <SubmitButton data-testid="sign-in-button" className="w-full mt-6">
//           Sign in
//         </SubmitButton>
//       </form>
//       <span className="text-center text-ui-fg-base text-small-regular mt-6">
//         Not a member?{" "}
//         <button
//           onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
//           className="underline"
//           data-testid="register-button"
//         >
//           Join us
//         </button>
//         .
//       </span>
//       <div>
//           <ul>
//             <li>
//               <LocalizedClientLink
//                 href="/termsandconditions"
//                 className="hover:text-ui-fg-base"
//                 target="_blank" // Remove this line if you want to open in the same tab
//                 rel="noreferrer"
//               >
//                 Terms and Conditions
//               </LocalizedClientLink>
//             </li>
//           </ul>
//         </div>
//     </div>
//   )
// }

// export default Login


import { login } from "@lib/data/customer"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import Input from "@modules/common/components/input"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useActionState } from "react"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(login, null)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-full max-w-md p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Welcome back
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Sign in to access an enhanced shopping experience.
          </p>
        </div>

        {/* Error Message */}
        {message && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm text-center">
            <ErrorMessage error={message} data-testid="error-message" />
          </div>
        )}

        {/* Form */}
        <form className="w-full" action={formAction}>
          <div className="space-y-4">
            <div className="space-y-4">
              <Input
                label="Email"
                name="email"
                type="email"
                title="Enter a valid email address."
                autoComplete="email"
                required
                data-testid="email-input"
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-sm sm:text-base
                  focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none
                  transition-all duration-200 placeholder:text-gray-400
                  hover:border-gray-300"
              />
              <Input
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                data-testid="password-input"
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-sm sm:text-base
                  focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none
                  transition-all duration-200 placeholder:text-gray-400
                  hover:border-gray-300"
              />
            </div>

            <SubmitButton
              data-testid="sign-in-button"
              // className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700
              //   text-white font-semibold py-3 px-6 rounded-lg text-sm sm:text-base
              //   transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg
              //   focus:outline-none focus:ring-4 focus:ring-blue-500/25
              //   disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none
              //   active:scale-100"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700
                text-white font-semibold py-4 px-6 rounded-xl text-sm sm:text-base
                transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl
                focus:outline-none focus:ring-4 focus:ring-blue-500/25
                disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none
                active:scale-100 relative overflow-hidden
                before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] 
                hover:before:translate-x-[100%] before:transition-transform before:duration-700"
            >
              Sign in
            </SubmitButton>
          </div>
        </form>

        {/* Register Link */}
        <div className="pt-4 border-t border-gray-100 text-center">
          <p className="text-xs sm:text-sm text-gray-600">
            Not a member?{" "}
            <button
              onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
              className="text-blue-600 hover:text-blue-700 underline font-medium
                transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/25 rounded"
              data-testid="register-button"
            >
              Join us
            </button>
            .
          </p>
        </div>

        {/* Terms */}
        <div className="text-center">
          <p className="text-xs text-gray-400 leading-relaxed">
            By continuing, you agree to our{" "}
            <LocalizedClientLink
              href="/terms"
              className="text-gray-500 hover:text-gray-700 underline
                transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400/25 rounded"
            >
              Terms and Conditions
            </LocalizedClientLink>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login