
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from '@clerk/nextjs';

export default function Header() {
  return (
    <header className="p-6 bg-gradient-to-r from-gray-700 to-gray-900 shadow-xl flex justify-between items-center ">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
        Recipe Viewer
      </h1>

      <div className="flex items-center space-x-3">
        <SignedOut>
          <SignInButton>
            <button className="px-6 py-2 bg-gradient-to-r from-orange-700 to-red-800 hover:from-orange-600 hover:to-red-600 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="px-6 py-2 bg-gradient-to-r from-amber-700 to-orange-800 hover:from-amber-600 hover:to-orange-600 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton 
            afterSignOutUrl="/" 
            appearance={{
              elements: {
                avatarBox: "w-10 h-10 hover:scale-110 transition-transform duration-300"
              }
            }}
          />
        </SignedIn>
      </div>
    </header>
  );
}