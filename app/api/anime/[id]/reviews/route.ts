import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const animeId = parseInt(params.id, 10);

    if (isNaN(animeId)) {
      return NextResponse.json({ error: 'Invalid anime ID' }, { status: 400 });
    }

    const reviews = await prisma.review.findMany({
      where: {
        animeTitleId: animeId,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(reviews);
  } catch (error) {
    console.error(`Error fetching reviews for anime ID ${params.id}:`, error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const animeId = parseInt(params.id, 10);
    if (isNaN(animeId)) {
      return NextResponse.json({ error: 'Invalid anime ID' }, { status: 400 });
    }

    const body = await request.json();
    const { rating, comment, userId } = body;

    if (
      typeof rating !== 'number' ||
      typeof comment !== 'string' ||
      typeof userId !== 'number'
    ) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    // Check if user and anime title exist
    const userExists = await prisma.user.findUnique({ where: { id: userId } });
    const animeExists = await prisma.animeTitle.findUnique({ where: { id: animeId } });

    if (!userExists || !animeExists) {
      return NextResponse.json({ error: 'User or Anime not found' }, { status: 404 });
    }

    const newReview = await prisma.review.create({
      data: {
        rating,
        comment,
        userId,
        animeTitleId: animeId,
      },
    });

    return NextResponse.json(newReview, { status: 201 });
  } catch (error) {
    console.error(`Error creating review for anime ID ${params.id}:`, error);
    return NextResponse.json(
      { error: 'Failed to create review' },
      { status: 500 }
    );
  }
} 