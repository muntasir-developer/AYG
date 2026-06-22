import { notFound } from "next/navigation";
import { getProgramBySlug, getCategoryById } from "@/lib/catalog";
import CatalogDetailView from "@/components/CatalogDetailView";
import { AFTER10_TRACKS } from "@/lib/after10";

const T = AFTER10_TRACKS.diploma;

// Render on-demand with ISR caching (avoids a build-time DB request burst).
export const revalidate = 3600;

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const program = await getProgramBySlug(T.stream, slug);
  if (!program) return notFound();
  const category = await getCategoryById(program.category_id);
  return (
    <CatalogDetailView
      program={program}
      categoryLabel={category?.label ?? ""}
      backHref={T.basePath}
      backLabel={`Back to ${T.backLabel}`}
      ctaLabel="Start Learning for Free"
      ctaHref={`${T.basePath}/${slug}/learn`}
    />
  );
};

export default Page;
