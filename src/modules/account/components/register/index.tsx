// "use client"

// import { useActionState } from "react"
// import Input from "@modules/common/components/input"
// import { LOGIN_VIEW } from "@modules/account/templates/login-template"
// import ErrorMessage from "@modules/checkout/components/error-message"
// import { SubmitButton } from "@modules/checkout/components/submit-button"
// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import { signup } from "@lib/data/customer"

// type Props = {
//   setCurrentView: (view: LOGIN_VIEW) => void
// }

// const Register = ({ setCurrentView }: Props) => {
//   const [message, formAction] = useActionState(signup, null)

//   return (
//     <div
//       className="max-w-sm flex flex-col items-center"
//       data-testid="register-page"
//     >
//       <h1 className="text-large-semi uppercase mb-6">
//         Become a HitlerAbi Store Member
//       </h1>
//       <p className="text-center text-base-regular text-ui-fg-base mb-4">
//         Create your HitlerAbi Store Member profile, and get access to an enhanced
//         shopping experience.
//       </p>
//       <form className="w-full flex flex-col" action={formAction}>
//         <div className="flex flex-col w-full gap-y-2">
//           <Input
//             label="First name"
//             name="first_name"
//             required
//             autoComplete="given-name"
//             data-testid="first-name-input"
//           />
//           <Input
//             label="Last name"
//             name="last_name"
//             required
//             autoComplete="family-name"
//             data-testid="last-name-input"
//           />
//           <Input
//             label="Email"
//             name="email"
//             required
//             type="email"
//             autoComplete="email"
//             data-testid="email-input"
//           />
//           <Input
//             label="Phone"
//             name="phone"
//             type="tel"
//             autoComplete="tel"
//             data-testid="phone-input"
//           />
//           <Input
//             label="Password"
//             name="password"
//             required
//             type="password"
//             autoComplete="new-password"
//             data-testid="password-input"
//           />
//         </div>
//         <ErrorMessage error={message} data-testid="register-error" />
//         <span className="text-center text-ui-fg-base text-small-regular mt-6">
//           By creating an account, you agree to HitlerAbi Store&apos;s{" "}
//           <LocalizedClientLink
//             href="/content/privacy-policy"
//             className="underline"
//           >
//             Privacy Policy
//           </LocalizedClientLink>{" "}
//           and{" "}
//           <LocalizedClientLink
//             href="/content/terms-of-use"
//             className="underline"
//           >
//             Terms of Use
//           </LocalizedClientLink>
//           .
//         </span>
//         <SubmitButton className="w-full mt-6" data-testid="register-button">
//           Join
//         </SubmitButton>
//       </form>
//       <span className="text-center text-ui-fg-base text-small-regular mt-6">
//         Already a member?{" "}
//         <button
//           onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
//           className="underline"
//         >
//           Sign in
//         </button>
//         .
//       </span>
//     </div>
//   )
// }

// export default Register


"use client"

import { useActionState } from "react"
import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { signup } from "@lib/data/customer"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(signup, null)

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 sm:p-6 lg:p-8">
      <div className="w-full max-w-md lg:max-w-lg bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 space-y-6">
        {/* Header Section */}
        <div className="text-center space-y-3">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Join Our Store
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">
            Create your member profile and get access to an enhanced shopping experience with exclusive benefits.
          </p>
        </div>

        {/* Error Message */}
        {message && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl text-sm">
            <ErrorMessage error={message} data-testid="register-error" />
          </div>
        )}

        {/* Registration Form */}
        <div className="space-y-6" data-testid="register-page">
          <div className="space-y-4">
            {/* Name Fields Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="First name"
                name="first_name"
                required
                autoComplete="given-name"
                data-testid="first-name-input"
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm sm:text-base
                  focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none
                  transition-all duration-200 placeholder:text-gray-400
                  hover:border-gray-300"
              />
              <Input
                label="Last name"
                name="last_name"
                required
                autoComplete="family-name"
                data-testid="last-name-input"
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm sm:text-base
                  focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none
                  transition-all duration-200 placeholder:text-gray-400
                  hover:border-gray-300"
              />
            </div>

            {/* Email Field */}
            <Input
              label="Email address"
              name="email"
              required
              type="email"
              autoComplete="email"
              data-testid="email-input"
              className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm sm:text-base
                focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none
                transition-all duration-200 placeholder:text-gray-400
                hover:border-gray-300"
            />

            {/* Phone Field */}
            <Input
              label="Phone number (optional)"
              name="phone"
              type="tel"
              autoComplete="tel"
              data-testid="phone-input"
              className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm sm:text-base
                focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none
                transition-all duration-200 placeholder:text-gray-400
                hover:border-gray-300"
            />

            {/* Password Field */}
            <Input
              label="Create password"
              name="password"
              required
              type="password"
              autoComplete="new-password"
              data-testid="password-input"
              className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl text-sm sm:text-base
                focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 focus:outline-none
                transition-all duration-200 placeholder:text-gray-400
                hover:border-gray-300"
            />
          </div>

          {/* Terms and Privacy */}
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-center">
              By creating an account, you agree to our{" "}
              <LocalizedClientLink
                href="/content/privacy-policy"
                className="text-blue-600 hover:text-blue-700 underline font-medium
                  transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/25 rounded"
              >
                Privacy Policy
              </LocalizedClientLink>{" "}
              and{" "}
              <LocalizedClientLink
                href="/content/terms-of-use"
                className="text-blue-600 hover:text-blue-700 underline font-medium
                  transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/25 rounded"
              >
                Terms of Use
              </LocalizedClientLink>
              .
            </p>
          </div>

          {/* Submit Button */}
          <SubmitButton 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700
              text-white font-semibold py-4 px-6 rounded-xl text-sm sm:text-base
              transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl
              focus:outline-none focus:ring-4 focus:ring-blue-500/25
              disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none
              active:scale-100 relative overflow-hidden
              before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] 
              hover:before:translate-x-[100%] before:transition-transform before:duration-700"
            data-testid="register-button"
          >
            <span className="relative z-10">Create Account</span>
          </SubmitButton>
        </div>

        {/* Sign In Link */}
        <div className="pt-6 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
              className="text-blue-600 hover:text-blue-700 underline font-medium
                transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/25 rounded
                hover:scale-105 inline-block"
            >
              Sign in here
            </button>
          </p>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-center">
          <div className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-blue-50 border border-blue-100">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-xs font-medium text-blue-800">Exclusive Deals</span>
          </div>
          
          <div className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-green-50 border border-green-100">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <span className="text-xs font-medium text-green-800">Free Shipping</span>
          </div>
          
          <div className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-purple-50 border border-purple-100">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span className="text-xs font-medium text-purple-800">Wishlist</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register