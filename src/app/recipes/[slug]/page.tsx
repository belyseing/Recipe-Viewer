import recipes from '@/data/recipes.json';
import Image from 'next/image';
import Link from 'next/link';
// This imports a helper function called notFound() from Next.js.
// If something isn’t found (like a missing recipe), you can call notFound() to show a 404 page 
import { notFound } from 'next/navigation';

interface Recipe {
  // A slug is a simple word or phrase that appears in the website address (URL) to identify something.

// For example:
// In the website address www.myrecipes.com/recipes/chocolate-cake
// The slug is chocolate-cake
// It’s like a nickname or label for the recipe in the URL.
  slug: string;
  title: string;
  image: string;
  ingredients: string[];
  steps: string[];
}

// The page must find the recipe with the slug "chocolate-cake" and show it.
interface PageProps {
  // Imagine params is a small package with info inside.
  params: Promise<{
    slug: string;
  }>;
}


// params holds details from the URL — for example, if the URL is /recipes/chocolate-cake,
//  params contains "chocolate-cake" as the slug.
export default async function RecipePage({ params }: PageProps) {
  const { slug } = await params;
  // This line is searching through a list of recipes and finding the one that matches the name in the URL (called a "slug"). Once it finds the matching recipe, it saves it into a variable so you can use it and show it on the page.
  const recipe = recipes.find((r: Recipe) => r.slug === slug);

  if (!recipe) {
    notFound(); 
  }

  return (
    <main className="min-h-screen pb-16" style={{ backgroundImage: "url('/images/background.jpg')" }}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-block mb-6 text-amber-600 hover:text-amber-800 font-medium transition-colors duration-200"
        >
          ← Back to Recipes
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-72 w-full">
            <Image
              src={`/images/${recipe.image}`}
              alt={recipe.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">{recipe.title}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-amber-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-amber-800 mb-4 border-b border-amber-200 pb-2">
                  Ingredients
                </h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-5 h-5 bg-amber-500 rounded-full mr-3 flex-shrink-0 mt-1"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-orange-800 mb-4 border-b border-orange-200 pb-2">
                  Steps
                </h2>
                <ol className="space-y-4">
                  {recipe.steps.map((step, i) => (
                    <li key={i} className="flex">
                      <span className="inline-block w-6 h-6 bg-orange-500 rounded-full mr-3 flex-shrink-0 text-white font-medium text-center">
                        {i + 1}
                      </span>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}