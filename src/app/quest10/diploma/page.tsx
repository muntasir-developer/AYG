"use client";
import CatalogListView from "@/components/CatalogListView";
import { AFTER10_TRACKS } from "@/lib/after10";

export default function Page() {
  return <CatalogListView {...AFTER10_TRACKS.diploma} />;
}
