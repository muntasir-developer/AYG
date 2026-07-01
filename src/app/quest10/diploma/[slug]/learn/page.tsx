import { notFound } from "next/navigation";
import { getProgramBySlug, getCategoryById } from "@/lib/catalog";
import LearnHubView from "@/components/LearnHubView";
import { AFTER10_TRACKS } from "@/lib/after10";

const T = AFTER10_TRACKS.diploma;
export const revalidate = 3600;

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const program = await getProgramBySlug(T.stream, slug);
  if (!program) return notFound();
  const category = await getCategoryById(program.category_id);

  return (
    <LearnHubView
      name={program.name}
      slug={program.slug}
      categoryKey={category?.key ?? ""}
      backHref={`${T.basePath}/${slug}`}
    />
  );
};

export default Page;
