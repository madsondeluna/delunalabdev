import type { Metadata } from "next";
import { opinions } from "@/data/opinions";
import { notFound } from "next/navigation";

const BASE_URL = "https://delunalab.dev";

export function generateStaticParams() {
  return opinions.map((o) => ({ slug: o.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = opinions.find((o) => o.slug === params.slug);
  if (!post) return {};
  const url = `${BASE_URL}/opinions/${post.slug}/`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: ["Madson de Luna"],
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function OpinionPage({ params }: { params: { slug: string } }) {
  const post = opinions.find((o) => o.slug === params.slug);
  if (!post) notFound();

  return (
    <main
      style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "120px 2.5rem 100px",
      }}
    >
      <a
        href="/#opinions"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.6875rem",
          color: "var(--muted)",
          letterSpacing: "0.08em",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "3rem",
          transition: "color 0.2s ease",
        }}
        className="link-muted"
      >
        &#8592; opinions
      </a>

      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          marginBottom: "2rem",
        }}
      >
        {post.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.625rem",
              color: "var(--muted)",
              border: "1px solid var(--border)",
              padding: "2px 8px",
              borderRadius: "2px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 5vw, 3.25rem)",
          fontWeight: 300,
          lineHeight: 1.1,
          letterSpacing: "-0.02em",
          color: "var(--text)",
          marginBottom: "1.5rem",
        }}
      >
        {post.title}
      </h1>

      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          marginBottom: "3.5rem",
          borderBottom: "1px solid var(--border)",
          paddingBottom: "2rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6875rem",
            color: "var(--muted)",
          }}
        >
          {post.date}
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6875rem",
            color: "var(--muted)",
          }}
        >
          {post.readTime} read
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        {post.content.split("\n\n").map((paragraph, i) => (
          <p
            key={i}
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              color: i === 0 ? "var(--text)" : "var(--muted)",
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </main>
  );
}
