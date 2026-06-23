"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Info } from "lucide-react";
import CatalogListView from "@/components/CatalogListView";
import { AFTER10_TRACKS } from "@/lib/after10";
import { boardByKey } from "@/lib/boards";

function BoardNote({ boardKey }: { boardKey: string | null }) {
  const board = boardByKey(boardKey);
  if (!board) return null;
  return (
    <div className="mb-5 rounded-xl border border-emerald-400/30 bg-emerald-950/30 p-4">
      <div className="flex items-center gap-2 mb-1.5">
        <Info className="w-4 h-4 text-emerald-300 shrink-0" />
        <span className="text-sm font-semibold text-white">
          Stream guidance for {board.full}
        </span>
      </div>
      <p className="text-sm text-slate-300 leading-relaxed">{board.streamTip}</p>
    </div>
  );
}

function StreamsInner() {
  const boardKey = useSearchParams().get("board");
  return (
    <CatalogListView
      {...AFTER10_TRACKS.streams}
      note={<BoardNote boardKey={boardKey} />}
    />
  );
}

export default function Page() {
  return (
    <Suspense>
      <StreamsInner />
    </Suspense>
  );
}
