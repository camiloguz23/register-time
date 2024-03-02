import { mongodbConnect, timeModel } from '@/database';
import { TimeRegister } from '@/shared';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');
  console.log('api', email);
  try {
    await mongodbConnect();

    const timeDate: TimeRegister | null = await timeModel.findOne({ nombre: email });

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
