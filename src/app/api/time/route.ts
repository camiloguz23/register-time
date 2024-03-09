import { mongodbConnect, timeModel } from '@/database';
import { TimeRegister } from '@/shared';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
  try {
    await mongodbConnect();

    const timeDate: TimeRegister | null = await timeModel.findOne({ email });

    return NextResponse.json(timeDate, {
      status: 200
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'error serve' },
      {
        status: 500
      }
    );
  }
}

export async function POST(request: NextRequest) {
  await mongodbConnect();
  const data = await request.json();

  const timeDate = await timeModel.create(data);

  return NextResponse.json(timeDate);
}

export async function PUT(request: NextRequest) {
  try {
    await mongodbConnect();
    const data = request.json();
  } catch (error) {
    return NextResponse.json(
      { error: 'error serve' },
      {
        status: 500
      }
    );
  }
}