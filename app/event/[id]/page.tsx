'use client';

import { useParams } from "next/navigation";
import { technologies } from "@/lib/data";
import ResearchShowcase from "@/components/showcase/show";

export default function TechnologyDetailPage() {
  const { id } = useParams();
  const techId = Number(id);
  const technology = technologies.find((t) => t.id === techId);

  if (!technology) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Technology not found</h1>
        <p className="text-gray-600">Please go back and select another technology.</p>
      </div>
    );
  }

  return <ResearchShowcase technology={technology} />;
}
