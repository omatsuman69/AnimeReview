import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const animeTitles = await prisma.animeTitle.findMany();
    return NextResponse.json(animeTitles);
  } catch (error) {
    console.error('Error fetching anime titles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch anime titles' },
      { status: 500 }
    );
  }
} 