import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  // Clean up existing data
  await prisma.review.deleteMany();
  await prisma.user.deleteMany();
  await prisma.animeTitle.deleteMany();
  console.log('Cleaned up existing data.');

  // Create Users
  const user1 = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@example.com',
    },
  });
  const user2 = await prisma.user.create({
    data: {
      name: 'Bob',
      email: 'bob@example.com',
    },
  });
  console.log(`Created users`);

  // Create Anime Titles
  const anime1 = await prisma.animeTitle.create({
    data: {
      title: '葬送のフリーレン',
      description: '魔王を倒した勇者一行の後日譚を描くファンタジー。',
      imageUrl: '/placeholder.svg',
    },
  });

  const anime2 = await prisma.animeTitle.create({
    data: {
      title: '【推しの子】',
      description: '芸能界の闇と光を描くサスペンス＆アイドルストーリー。',
      imageUrl: '/placeholder.svg',
    },
  });

  const anime3 = await prisma.animeTitle.create({
    data: {
      title: '呪術廻戦',
      description: '人間の負の感情から生まれる呪霊と呪術師の戦いを描く。',
      imageUrl: '/placeholder.svg',
    },
  });
  console.log(`Created anime titles`);

  // Create Reviews
  await prisma.review.createMany({
    data: [
      {
        rating: 5,
        comment: '毎回泣ける。ヒンメルの言葉が心に響きます。',
        userId: user1.id,
        animeTitleId: anime1.id,
      },
      {
        rating: 4,
        comment: '戦闘シーンも素晴らしいが、キャラクターの心情描写が丁寧。',
        userId: user2.id,
        animeTitleId: anime1.id,
      },
      {
        rating: 5,
        comment: '衝撃の展開！アイの魅力と謎が物語を牽引している。',
        userId: user1.id,
        animeTitleId: anime2.id,
      },
      {
        rating: 4,
        comment: '作画が神。領域展開のシーンは鳥肌モノ。',
        userId: user2.id,
        animeTitleId: anime3.id,
      },
    ],
  });
  console.log(`Created reviews`);

  console.log(`Seeding finished.`);
}

main()
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 