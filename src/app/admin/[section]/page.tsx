import { notFound } from "next/navigation";
import { adminSections, getAdminSection } from "@/lib/admin";
import { AdminTable } from "@/components/admin/AdminTable";

interface Props {
  params: Promise<{ section: string }>;
}

export function generateStaticParams() {
  return adminSections.map((s) => ({ section: s.slug }));
}

export default async function AdminSectionPage({ params }: Props) {
  const { section } = await params;
  const data = getAdminSection(section);
  if (!data) notFound();

  return (
    <div className="p-6 lg:p-10">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow text-[0.55rem] text-gold-deep">House Management</p>
          <h1 className="mt-3 font-serif text-4xl">{data.title}</h1>
          <p className="mt-2 text-sm font-light text-stone">{data.blurb}</p>
        </div>
        <button className="eyebrow h-11 bg-ink px-6 text-[0.6rem] text-white transition-colors hover:bg-gold hover:text-ink">
          + New {data.title.replace(/s$/, "").replace("Academy Enrollment", "Enrollment")}
        </button>
      </header>
      <div className="mt-8">
        <AdminTable columns={data.columns} rows={data.rows} />
      </div>
      <p className="mt-6 text-xs font-light text-mist">
        Showing {data.rows.length} records · Preview data — full CRUD activates
        with the Supabase connection.
      </p>
    </div>
  );
}
