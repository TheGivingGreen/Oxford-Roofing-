import { ServiceDetailPage } from "@/components/simple-pages";
import { services } from "@/lib/data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ServiceDetailPage slug={slug} />;
}
