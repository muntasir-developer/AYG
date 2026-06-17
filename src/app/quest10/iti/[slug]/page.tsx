import { notFound } from "next/navigation";
import { getPrograms, getProgramBySlug, getCategoryById } from "@/lib/catalog";
import CatalogDetailView from "@/components/CatalogDetailView";
import { AFTER10_TRACKS } from "@/lib/after10";

const T = AFTER10_TRACKS.iti;

export async function generateStaticParams() {
  const programs = await getPrograms(T.stream);
  return programs.map((p) => ({ slug: p.slug }));
}

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
    />
  );
};

export default Page;
