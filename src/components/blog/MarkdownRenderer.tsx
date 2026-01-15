import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import type { Components } from "react-markdown";

interface MarkdownRendererProps {
  content: string;
}

const components: Components = {
  h1: ({ children }) => (
    <h1 className="text-3xl md:text-4xl font-bold mb-6 mt-8 text-foreground first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4 text-foreground scroll-mt-20">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-3 text-foreground">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg font-semibold mt-6 mb-2 text-foreground">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-muted-foreground leading-relaxed mb-4">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground ml-4">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside space-y-2 mb-4 text-muted-foreground ml-4">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-accent hover:text-accent/80 underline underline-offset-4 transition-colors"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-foreground">{children}</strong>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-accent pl-4 py-2 my-6 italic text-muted-foreground bg-accent/5 rounded-r-lg">
      {children}
    </blockquote>
  ),
  code: ({ className, children }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code className="bg-accent/10 px-1.5 py-0.5 rounded text-accent font-mono text-sm">
          {children}
        </code>
      );
    }
    return <code className={className}>{children}</code>;
  },
  pre: ({ children }) => (
    <pre className="glass-card rounded-xl p-4 overflow-x-auto my-6 text-sm">
      {children}
    </pre>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-8">
      <table className="w-full border-collapse glass-card rounded-lg overflow-hidden">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-accent/10">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 text-left font-semibold text-foreground border-b border-border">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-muted-foreground border-b border-border/50">
      {children}
    </td>
  ),
  tr: ({ children }) => (
    <tr className="hover:bg-accent/5 transition-colors">{children}</tr>
  ),
  hr: () => <hr className="my-8 border-border/50" />,
  img: ({ src, alt }) => (
    <figure className="my-8">
      <img
        src={src}
        alt={alt || ""}
        className="rounded-xl w-full glass-card"
        loading="lazy"
      />
      {alt && (
        <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
          {alt}
        </figcaption>
      )}
    </figure>
  ),
};

export const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight, rehypeSlug]}
      components={components}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
