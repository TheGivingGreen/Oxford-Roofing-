import { ProjectDetailPage } from "@/components/simple-pages";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectDetailPage slug={slug} />;
}
