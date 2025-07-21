"use client"

import { AnimeCard } from "./anime-card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

interface Anime {
  id: number
  title: string
  image: string
  rating: number
  year: number
  rank?: number
}

interface AnimeCarouselProps {
  title: string
  animes: Anime[]
  showRank?: boolean
}

export function AnimeCarousel({ title, animes, showRank = false }: AnimeCarouselProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-4 pb-4">
          {animes.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} showRank={showRank} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  )
}
