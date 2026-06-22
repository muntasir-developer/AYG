import { notFound } from "next/navigation";
import { getProgramBySlug, getCategoryById } from "@/lib/catalog";
import CatalogDetailView from "@/components/CatalogDetailView";

// Render on-demand with ISR caching (avoids hammering the DB at build time).
export const revalidate = 3600;

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const program = await getProgramBySlug("skill", slug);
  if (!program) return notFound();

  const category = await getCategoryById(program.category_id);

  return (
    <CatalogDetailView
      program={program}
      categoryLabel={category?.label ?? ""}
      backHref="/skills"
      backLabel="Back to Skills"
    />
  );
};

export default Page;
