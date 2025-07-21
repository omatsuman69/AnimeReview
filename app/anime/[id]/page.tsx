import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Play, Plus, ThumbsUp, ThumbsDown, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// ダミーデータ
const animeDetails = {
  1: {
    id: 1,
    title: "進撃の巨人",
    originalTitle: "Attack on Titan",
    description:
      "人類と巨人の壮絶な戦いを描いた話題作。壁に囲まれた世界で生きる人類の運命とは？エレン・イェーガーを主人公に、人類の生存をかけた戦いが始まる。",
    longDescription:
      "107年前、巨人の出現により人類は滅亡の淵に立たされた。生き残った人類は、三重の巨大な壁を築き、壁外への自由と引き換えに侵略を防いでいた。だが、自由を夢見る10歳の少年エレン・イェーガーは、仮初めの平和に満足し外の世界へ出ることを諦めた人々に違和感を覚える。そんな中、人類最強の兵士リヴァイ兵長率いる調査兵団が壁外調査から帰還する。",
    image: "/placeholder.svg?height=600&width=400",
    bannerImage: "/placeholder.svg?height=400&width=1200",
    rating: 9.2,
    year: 2013,
    status: "完結",
    episodes: 87,
    studio: "WIT Studio / MAPPA",
    genre: ["アクション", "ドラマ", "ファンタジー", "軍事"],
    director: "荒木哲郎",
    cast: ["梶裕貴", "石川由依", "井上麻里奈", "小林ゆう"],
  },
}

const reviews = [
  {
    id: 1,
    user: "アニメ太郎",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2024年1月15日",
    content:
      "最高傑作！最初から最後まで息つく暇もない展開で、毎話が映画レベルのクオリティ。特に最終シーズンの作画と演出は圧巻でした。",
    likes: 24,
    dislikes: 2,
  },
  {
    id: 2,
    user: "レビュー花子",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 4,
    date: "2024年1月10日",
    content:
      "ストーリーは素晴らしいが、途中でかなり重い展開が続くので心の準備が必要。でも最後まで見る価値は絶対にある作品です。",
    likes: 18,
    dislikes: 1,
  },
  {
    id: 3,
    user: "アニオタ次郎",
    avatar: "/placeholder.svg?height=40&width=40",
    rating: 5,
    date: "2024年1月5日",
    content:
      "巨人の謎が明かされていく過程が本当に面白い。伏線回収も見事で、何度見返しても新しい発見がある。間違いなく名作。",
    likes: 31,
    dislikes: 0,
  },
]

export default function AnimeDetailPage({ params }: { params: { id: string } }) {
  const anime = animeDetails[1] // 実際はparams.idを使用

  if (!anime) {
    return <div>アニメが見つかりません</div>
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-sm p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-red-600">AnimeReview</h1>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative h-96 mt-16">
        <Image src={anime.bannerImage || "/placeholder.svg"} alt={anime.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </section>

      {/* Content */}
      <div className="px-4 md:px-8 -mt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Poster and Actions */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Image
                src={anime.image || "/placeholder.svg"}
                alt={anime.title}
                width={400}
                height={600}
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="mt-6 space-y-3">
                <Button size="lg" className="w-full bg-red-600 hover:bg-red-700">
                  <Play className="mr-2 h-5 w-5" />
                  視聴する
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                >
                  <Plus className="mr-2 h-5 w-5" />
                  マイリストに追加
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Details and Reviews */}
          <div className="lg:col-span-2 space-y-8">
            {/* Anime Info */}
            <div>
              <h1 className="text-4xl font-bold mb-2">{anime.title}</h1>
              <p className="text-xl text-gray-400 mb-4">{anime.originalTitle}</p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-1" />
                  <span className="text-xl font-bold">{anime.rating}</span>
                </div>
                <Badge variant="secondary">{anime.year}</Badge>
                <Badge variant="secondary">{anime.status}</Badge>
                <Badge variant="secondary">{anime.episodes}話</Badge>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {anime.genre.map((g) => (
                  <Badge key={g} variant="outline" className="border-gray-600">
                    {g}
                  </Badge>
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{anime.longDescription}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">制作会社:</span>
                  <span className="ml-2">{anime.studio}</span>
                </div>
                <div>
                  <span className="text-gray-400">監督:</span>
                  <span className="ml-2">{anime.director}</span>
                </div>
                <div className="md:col-span-2">
                  <span className="text-gray-400">声優:</span>
                  <span className="ml-2">{anime.cast.join(", ")}</span>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl">レビュー ({reviews.length})</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-800 pb-6 last:border-b-0">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.user} />
                        <AvatarFallback>{review.user[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-semibold">{review.user}</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? "text-yellow-500 fill-current" : "text-gray-600"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-400">{review.date}</span>
                        </div>
                        <p className="text-gray-300 mb-3">{review.content}</p>
                        <div className="flex items-center space-x-4">
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            {review.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                            <ThumbsDown className="h-4 w-4 mr-1" />
                            {review.dislikes}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
