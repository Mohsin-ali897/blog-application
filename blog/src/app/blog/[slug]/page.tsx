
import Commentbox from "@/app/components/commentbox";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
export default async function page({ params: { slug } }: { params: { slug: string } }) {
   const query = `*[_type == 'Blog' && slug.current == "${slug}"]{
     Tittle, paragraph, Poster, Block
   }[0]`;

   const data = await client.fetch(query);

   return (
     <article className="mt-12 mb-24 px-4 sm:px-6 md:px-12 flex flex-col gap-y-8">
       {/* Blog Title */}
       <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-dark dark:text-light text-center">
         {data.Tittle}
       </h1>
      
       {/* Featured Image */}
       <div className="w-full flex justify-center">
         <Image
           src={urlFor(data.Poster).url()}
           width={800}
           height={450}
           alt={data.Tittle}
           className="rounded-lg shadow-lg object-cover w-full max-w-4xl"
         />
       </div>
      
       {/* Blog Summary Section */}
       <section className="px-4 sm:px-8">
         <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary text-center">
           Summary
         </h2>
         <p className="text-base sm:text-lg md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
           {data.paragraph}
         </p>
       </section>
      
       {/* Main Body of Blog */}
       <section className="text-lg leading-normal text-dark/80 dark:text-light/80 px-4 sm:px-8">
         <PortableText value={data.Block} />
        <Commentbox />
       </section>
     </article>
   );
 }
