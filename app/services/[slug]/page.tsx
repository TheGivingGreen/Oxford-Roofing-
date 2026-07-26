import type { Metadata } from "next";
import { ApprovedServicePage } from "@/components/service-pages/approved-service-page";
import { ServiceDetailPage } from "@/components/simple-pages";
import { approvedServicePages } from "@/lib/approved-service-pages";
import { services } from "@/lib/data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const approvedPage = approvedServicePages[slug];

  return approvedPage ? approvedPage.metadata : {};
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const approvedPage = approvedServicePages[slug];

  if (approvedPage) {
    return <ApprovedServicePage data={approvedPage} />;
  }

  return <ServiceDetailPage slug={slug} />;
}
