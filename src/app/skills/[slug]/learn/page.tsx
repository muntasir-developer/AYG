import { notFound } from "next/navigation";
import { getProgramBySlug, getCategoryById } from "@/lib/catalog";
import LearnHubView from "@/components/LearnHubView";

// Render on-demand with ISR caching (avoids a build-time DB request burst).
export const revalidate = 3600;

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const program = await getProgramBySlug("skill", slug);
  if (!program) return notFound();
  const category = await getCategoryById(program.category_id);

  return (
    <LearnHubView
      name={program.name}
      categoryKey={category?.key ?? ""}
      backHref={`/skills/${slug}`}
    />
  );
};

export default Page;
