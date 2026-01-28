'use client';

import { useParams } from "next/navigation";
import { technologies } from "@/lib/data";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function TechnologyDetailPage() {
  const { id } = useParams();
  const techId = Number(id);
  const technology = technologies.find((tech) => tech.id === techId);

  // ✅ State for modal image
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // ✅ Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (!technology) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-700">Technology not found</h2>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-slate-900 text-white py-10 px-6 border-b-4 border-blue-600">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            {technology.name}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[85%] mx-auto py-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Main Section */}
          <div className="lg:col-span-3 space-y-10">
            

            {technology.currentGap && (
              <section>
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-900">
                  Current Gap
                </h2>
                <div className="bg-gray-50 border-l-4 border-blue-600 p-6">
                  <p className="text-gray-800 leading-relaxed text-justify">
                    {technology.currentGap}
                  </p>
                </div>
              </section>
            )}

            {technology.technology && (
              <Section title="1. Introduction" text={technology.technology} />
            )}
            {technology.novelty && (
              <Section title="2. Innovation & Novel Contributions" text={technology.novelty} />
            )}
            {technology.details && (
              <Section title="3. Methodology & Technical Details" text={technology.details} />
            )}
            {technology.fieldApplication && (
              <Section title="4. Applications & Use Cases" text={technology.fieldApplication} />
            )}
            {technology.limitations && (
              <Section title="5. Limitations & Future Work" text={technology.limitations} />
            )}

            {Array.isArray(technology.references) &&  technology.references?.length > 0 && (
              <section className="border-t-2 border-gray-200 pt-8">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">References</h2>
                <ol className="space-y-3">
                  {technology.references.map((ref, i) => {
                    const [key, value] = Object.entries(ref)[0];
                    return (
                      <li key={i} className="flex gap-3 text-sm">
                        <span className="font-mono text-gray-500 min-w-[2rem]">[{i + 1}]</span>
                        <a
                          href={value}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline leading-relaxed break-all"
                        >
                          {key}
                        </a>
                      </li>
                    );
                  })}
                </ol>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 space-y-4 sticky top-6">
              <Info label="Category" value={technology.category.replace(/-/g, " ")} />
              <Info label="Institution" value={technology.institution || technology.country} />
              {technology.status && (
                <div className="border-t border-slate-200 pt-4">
                  <h3 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
                    Status
                  </h3>
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">
                    {technology.status}
                  </span>
                </div>
              )}
            </div>

            {/* ✅ Figures with Click-to-Zoom */}
            {Array.isArray(technology.images) &&  technology.images?.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 px-4 py-3 border-b border-slate-200">
                  <h3 className="text-xs uppercase tracking-wider text-slate-700 font-semibold">
                    Figures
                  </h3>
                </div>
                <div className="p-4 space-y-4">
                  {technology.images.map((img, index) => (
                    <figure key={index} className="space-y-2">
                      <div
                        className="relative h-48 bg-slate-100 rounded overflow-hidden border border-slate-200 cursor-pointer"
                        onClick={() => setSelectedImage(img)}
                      >
                        <Image
                          src={img}
                          alt={`Figure ${index + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <figcaption className="text-xs text-slate-600 text-center">
                        Figure {index + 1}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* ✅ Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[90vw] h-[80vh] max-w-5xl">
            <Image
              src={selectedImage}
              alt="Expanded view"
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </main>
  );
}

/* ---------- Reusable Small Components ---------- */
function Section({ title, text }: { title: string; text: string }) {
  return (
    <section>
      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-900">
        {title}
      </h2>
      <p className="text-gray-800 leading-relaxed text-justify whitespace-pre-line">{text}</p>
    </section>
  );
}

function Info({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="border-t border-slate-200 pt-4">
      <h3 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
        {label}
      </h3>
      <p className="text-sm font-medium text-slate-900">{value}</p>
    </div>
  );
}
