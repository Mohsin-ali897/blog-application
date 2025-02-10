import Blog from "./components/blog";
import { client } from "@/sanity/lib/client";
import { BlogType } from "@/type";
import Contact from "./components/contact";

export default async function Home() {
  const query = `*[_type == 'Blog'] | order(_updatedAt asc){
    Tittle,
    paragraph,
    'slug': slug.current,
    Poster,
  }`;
  
  const data: BlogType[] = await client.fetch(query);
  console.log(data)
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8">
        {data.map((blog: BlogType) => (
          <Blog blogs={[blog]} key={blog.slug} />
        ))}
      </div>
      
      {/* Contact Section */}
      <div className="mt-16">
        <Contact />
      </div>
    </div>
  );
}
