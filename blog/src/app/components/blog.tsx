import { urlFor } from "@/sanity/lib/image";
import { BlogType } from "@/type";
import Link from "next/link";
import React from "react";

const Blog = ({ blogs }: { blogs: BlogType[] }) => {
  if (!blogs || !Array.isArray(blogs)) {
    return <p className="text-center text-gray-500">Loading blogs...</p>;
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Grid Layout */}
        <div className="">
          {blogs.map((data) => (
            <div
              key={data.slug}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <img
                className="w-full h-52 sm:h-60 object-cover"
                src={urlFor(data.Poster).url()}
                alt={data.Tittle}
              />

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h1 className="text-lg sm:text-xl font-bold text-gray-900 mt-2 line-clamp-2">
                  {data.Tittle}
                </h1>
                <p className="text-gray-600 mt-3 text-sm sm:text-base line-clamp-3">
                  {data.paragraph}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4">
                  <Link
                    href={`/blog/${data.slug}`}
                    className="text-blue-600 font-medium text-sm hover:underline"
                  >
                    Learn More →
                  </Link>
                  <div className="flex items-center text-gray-400 space-x-3 text-xs sm:text-sm">
                    {/* Views */}
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </div>

                    {/* Comments */}
                    <div className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
