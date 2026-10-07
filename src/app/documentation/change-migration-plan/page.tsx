import Navbar from "@/components/Navbar";
import DocumentationContent from "@/components/documentation/DocumentationContent";
import { documentationMetadata, getDocumentationExample } from "@/data/documentation";

const item = getDocumentationExample("change-migration-plan");

export const metadata = documentationMetadata(item.title, item.summary, `/documentation/${item.slug}`);

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <DocumentationContent item={item} />
    </main>
  );
}
