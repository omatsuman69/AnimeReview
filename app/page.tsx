import { AnimeCarousel } from "@/components/anime-carousel"
import { Button } from "@/components/ui/button"
import { Play, Info } from "lucide-react"
import Image from "next/image"

// ダミーデータ
const featuredAnime = {
  id: 1,
  title: "進撃の巨人",
  description: "人類と巨人の壮絶な戦いを描いた話題作。壁に囲まれた世界で生きる人類の運命とは？",
  image: "/placeholder.svg?height=600&width=1200",
  rating: 9.2,
  year: 2013,
  genre: ["アクション", "ドラマ", "ファンタジー"],
}

const newAnime = [
  { id: 1, title: "進撃の巨人", image: "/placeholder.svg?height=300&width=200", rating: 9.2, year: 2013 },
  { id: 2, title: "鬼滅の刃", image: "/placeholder.svg?height=300&width=200", rating: 8.9, year: 2019 },
  { id: 3, title: "呪術廻戦", image: "/placeholder.svg?height=300&width=200", rating: 8.7, year: 2020 },
  { id: 4, title: "チェンソーマン", image: "/placeholder.svg?height=300&width=200", rating: 8.5, year: 2022 },
  { id: 5, title: "スパイファミリー", image: "/placeholder.svg?height=300&width=200", rating: 8.8, year: 2022 },
  { id: 6, title: "東京リベンジャーズ", image: "/placeholder.svg?height=300&width=200", rating: 8.3, year: 2021 },
]

const favoriteAnime = [
  { id: 7, title: "ワンピース", image: "/placeholder.svg?height=300&width=200", rating: 9.0, year: 1999 },
  { id: 8, title: "ナルト", image: "/placeholder.svg?height=300&width=200", rating: 8.8, year: 2002 },
  { id: 9, title: "ドラゴンボール", image: "/placeholder.svg?height=300&width=200", rating: 9.1, year: 1986 },
  { id: 10, title: "僕のヒーローアカデミア", image: "/placeholder.svg?height=300&width=200", rating: 8.6, year: 2016 },
  { id: 11, title: "ハイキュー!!", image: "/placeholder.svg?height=300&width=200", rating: 8.9, year: 2014 },
  { id: 12, title: "約束のネバーランド", image: "/placeholder.svg?height=300&width=200", rating: 8.4, year: 2019 },
]

const topRanking = [
  { id: 1, title: "進撃の巨人", image: "/placeholder.svg?height=300&width=200", rating: 9.2, year: 2013, rank: 1 },
  { id: 13, title: "鋼の錬金術師", image: "/placeholder.svg?height=300&width=200", rating: 9.3, year: 2003, rank: 2 },
  { id: 14, title: "デスノート", image: "/placeholder.svg?height=300&width=200", rating: 9.1, year: 2006, rank: 3 },
  { id: 7, title: "ワンピース", image: "/placeholder.svg?height=300&width=200", rating: 9.0, year: 1999, rank: 4 },
  { id: 2, title: "鬼滅の刃", image: "/placeholder.svg?height=300&width=200", rating: 8.9, year: 2019, rank: 5 },
  { id: 11, title: "ハイキュー!!", image: "/placeholder.svg?height=300&width=200", rating: 8.9, year: 2014, rank: 6 },
  { id: 8, title: "ナルト", image: "/placeholder.svg?height=300&width=200", rating: 8.8, year: 2002, rank: 7 },
  {
    id: 5,
    title: "スパイファミリー",
    image: "/placeholder.svg?height=300&width=200",
    rating: 8.8,
    year: 2022,
    rank: 8,
  },
  { id: 3, title: "呪術廻戦", image: "/placeholder.svg?height=300&width=200", rating: 8.7, year: 2020, rank: 9 },
  {
    id: 10,
    title: "僕のヒーローアカデミア",
    image: "/placeholder.svg?height=300&width=200",
    rating: 8.6,
    year: 2016,
    rank: 10,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/80 to-transparent p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-red-600">AnimeReview</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-300">
              ホーム
            </a>
            <a href="#" className="hover:text-gray-300">
              アニメ
            </a>
            <a href="#" className="hover:text-gray-300">
              ランキング
            </a>
            <a href="#" className="hover:text-gray-300">
              マイリスト
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src={featuredAnime.image || "/placeholder.svg"}
          alt={featuredAnime.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">{featuredAnime.title}</h2>
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-yellow-500 text-black px-2 py-1 rounded font-bold">★ {featuredAnime.rating}</span>
            <span>{featuredAnime.year}</span>
            <div className="flex space-x-2">
              {featuredAnime.genre.map((g) => (
                <span key={g} className="bg-gray-700 px-2 py-1 rounded text-sm">
                  {g}
                </span>
              ))}
            </div>
          </div>
          <p className="text-lg mb-6 text-gray-200">{featuredAnime.description}</p>
          <div className="flex space-x-4">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              <Play className="mr-2 h-5 w-5" />
              再生
            </Button>
            <Button size="lg" variant="outline" className="border-gray-500 text-white hover:bg-gray-800 bg-transparent">
              <Info className="mr-2 h-5 w-5" />
              詳細情報
            </Button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="px-4 md:px-8 space-y-12 pb-16">
        <AnimeCarousel title="新着アニメ" animes={newAnime} />
        <AnimeCarousel title="お気に入り" animes={favoriteAnime} />
        <AnimeCarousel title="TOP10ランキング" animes={topRanking} showRank />
      </div>
    </div>
  )
}
