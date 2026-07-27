import { cn } from "@/lib/utils";
import type { Cell } from "@/lib/admin";

const toneClass = {
  default: "text-ink",
  gold: "text-gold-deep font-medium",
  muted: "text-mist",
  success: "text-[#4a7c59]",
  warn: "text-[#a8503c]",
} as const;

export function AdminTable({ columns, rows }: { columns: string[]; rows: Cell[][] }) {
  return (
    <div className="overflow-x-auto border border-hairline bg-white shadow-whisper">
      <table className="w-full min-w-[42rem] text-left text-[0.8rem]">
        <thead>
          <tr className="border-b border-hairline bg-ivory">
            {columns.map((c) => (
              <th key={c} className="eyebrow px-5 py-3.5 text-[0.5rem] font-semibold text-mist">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-hairline-soft">
          {rows.map((row, i) => (
            <tr key={i} className="transition-colors hover:bg-ivory/60">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={cn("px-5 py-4 font-light", toneClass[cell.tone ?? "default"])}
                >
                  {cell.text}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
