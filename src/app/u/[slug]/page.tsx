"use client";

import { use, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function PureThemeRenderer({ slug }: { slug: string }) {
  const searchParams = useSearchParams();
  const themeParam = searchParams.get("theme");
  const toParam = searchParams.get("to") || "Tamu Undangan";

  const themeQuery = themeParam ? `&theme=${encodeURIComponent(themeParam)}` : "";
  const renderUrl = `/api/render-theme?slug=${encodeURIComponent(slug)}&to=${encodeURIComponent(toParam)}${themeQuery}`;

  return (
    <iframe
      src={renderUrl}
      className="w-full h-screen border-none bg-slate-950 overflow-x-hidden"
      title={`Undangan ${slug}`}
    />
  );
}

export default function InvitationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center font-sans text-xs">
          Memuat Tema Undangan...
        </div>
      }
    >
      <PureThemeRenderer slug={slug} />
    </Suspense>
  );
}
