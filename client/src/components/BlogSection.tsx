import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { sanityClient, type BlogPost } from "@/lib/sanity";

export default function BlogSection() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const { data: posts = [] } = useQuery<BlogPost[]>({
    queryKey: ["sanity-blogs"],
    queryFn: async () =>
      sanityClient.fetch(
        `*[_type == "blogPost"] | order(publishedAt desc){ "slug": slug.current, title, excerpt, content, publishedAt }`,
      ),
  });

  if (!posts.length) return null;

  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8">Latest Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => {
            const expanded = openSlug === post.slug;
            return (
              <Card key={post.slug}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {expanded ? post.content : post.excerpt}
                  </p>
                  <Button
                    variant="link"
                    className="px-0"
                    onClick={() => setOpenSlug(expanded ? null : post.slug)}
                  >
                    {expanded ? "Read Less" : "Read More"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

