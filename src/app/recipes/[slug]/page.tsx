import recipes from '@/data/recipes.json';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Recipe {
  slug: string;
  title: string;
  image: string;
  ingredients: string[];
  steps: string[];
}

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Make the component async to await params
export default async function RecipePage({ params }: PageProps) {
  // Await the params to resolve the Promise
  const { slug } = await params;
  const recipe = recipes.find((r: Recipe) => r.slug === slug);

  if (!recipe) {
    notFound(); // Triggers 404 page
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