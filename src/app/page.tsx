// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import { Recipe } from '@/types/recipe';
import recipes from '@/data/recipes.json';
import Header from './components/Header';
import { ChefHat, Lock, ArrowRight } from 'lucide-react';
import { GiForkKnifeSpoon } from "react-icons/gi";

const ProfessionalSignInButton = () => (
  <SignInButton>
    <button className="bg-gradient-to-r  to-green-500 from-orange-800 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-3 mx-auto">
      <Lock className="w-5 h-5" />
      <span>Sign In to Continue</span>
      <ArrowRight className="w-5 h-5" />
    </button>
  </SignInButton>
);

export default function Home() {
  return (
    <div className="min-h-screen"
     style={{ backgroundImage: "url('/images/background.jpg')" }}>
      
      <Header />

      <SignedOut>
        <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 animate-pulse">
              <ChefHat className="w-16 h-16 text-orange-400" />
            </div>
            <div className="absolute bottom-20 right-10 animate-pulse delay-1000">
              <ChefHat className="w-12 h-12 text-red-400" />
            </div>
          </div>

          <div className="text-center max-w-lg mx-auto relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br  from-green-500 to-orange-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl animate-pulse">
              <GiForkKnifeSpoon  className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-400 bg-clip-text text-transparent mb-4">
              Recipes 
            </h1>

            <div className="w-32 h-1 bg-gradient-to-r from-orange-800 to-red-500 mx-auto rounded-full mb-6"></div>

            {/* <h2 className="text-2xl font-light text-slate-700 mb-4">
              Unlock Your Culinary Journey
            </h2>

            <p className="text-slate-600 mb-8 leading-relaxed">
              Access premium recipes from world-renowned chefs
            </p> */}

            <ProfessionalSignInButton />

            {/* <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all">
                <ChefHat className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                <p className="text-sm text-slate-700">Premium Recipes</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all">
                <Lock className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-sm text-slate-700">Secure Access</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all">
                <ArrowRight className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-sm text-slate-700">Instant Access</p>
              </div>
            </div> */}
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <main className="px-4 py-8">
          <div className="relative flex items-center mb-12">
           
            <div className="w-[700px] h-40 bg-gradient-to-r from-black rounded-r-full p-4 relative z-0 flex items-center justify-center">
         <p className="text-2xl font-bold text-white drop-shadow mb-2 text-center">
         Welcome to Flavor Haven!
         </p>
        </div>

            <div className="relative w-96 h-96 rounded-full overflow-hidden -ml-20 flex-shrink-0 z-10">
            </div>

           
            <div className="flex flex-col justify-between ml-4 w-40 h-[400px]">
              <div className="relative w-full h-40 rounded-full overflow-hidden border-2 border-white shadow-lg">
                <Image
                  src="/images/recipes.jpg"
                  alt="Top image"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>

              <div className="relative w-full h-40 rounded-full overflow-hidden border-2 border-white shadow-lg">
                <Image
                  src="/images/recipe.jpg"
                  alt="Bottom image"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <h1 className="font-bold text-6xl pb-6 text-orange-500  font-serif">
              Recipe List
            </h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recipes.map((recipe: Recipe) => (
                <li
                  key={recipe.slug}
                  className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-100"
                >
                  <Link
                    href={`/recipes/${recipe.slug}`}
                    className="block h-full p-4"
                  >
                    <div className="flex items-center gap-6 ">
                      <div className="relative  w-32 h-32 rounded-full overflow-hidden border-4 border-orange-400 flex-shrink-0">
                        <Image
                          src={`/images/${recipe.image}`}
                          alt={recipe.title}
                          fill
                          sizes="128px"
                          className="object-cover"
                          priority
                        />
                      </div>

                      <div className="flex flex-col">
                        <h2 className="font-bold text-xl text-black">
                          {recipe.title}
                        </h2>
                        <button className="mt-3 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 w-fit">
                          View Ingredients
                        </button>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </SignedIn>
    </div>
  );
}
