"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Anime {
  id: number
  title: string
  image: string
  rating: number
  year: number
  rank?: number
}

interface AnimeCardProps {
  anime: Anime
  showRank?: boolean
}

export function AnimeCard({ anime, showRank = false }: AnimeCardProps) {
  return (
    <Link href={`/anime/${anime.id}`}>
      <Card className="w-48 bg-gray-900 border-gray-800 hover:bg-gray-800 transition-colors cursor-pointer group relative overflow-hidden">
        {showRank && anime.rank && (
          <div className="absolute top-2 left-2 z-10">
            <Badge variant="destructive" className="bg-red-600 text-white font-bold text-lg px-2 py-1">
              #{anime.rank}
            </Badge>
          </div>
        )}
        <CardContent className="p-0">
          <div className="relative aspect-[2/3] overflow-hidden">
            <Image
              src={anime.image || "/placeholder.svg"}
              alt={anime.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="p-3">
            <h3 className="font-semibold text-sm mb-1 line-clamp-2">{anime.title}</h3>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>{anime.year}</span>
              <span className="flex items-center">
                <span className="text-yellow-500 mr-1">★</span>
                {anime.rating}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
