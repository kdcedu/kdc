import { NextRequest, NextResponse } from 'next/server';

const WP_API_URL = process.env.WORDPRESS_API_URL;
const AUTH_KEY = process.env.AUTH_KEY;

// --- Handler cho các request POT ---
export async function POST(req: NextRequest) {
  const path = req.nextUrl.pathname.replace('/api', '');
  const targetUrl = `${WP_API_URL}${path}`;

  try {
    const body = await req.json();

    // Thêm AUTH_KEY
    const payloadWithAuthKey = {
      ...body,
      AUTH_KEY: AUTH_KEY,
    };

    const apiResponse = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(req.headers.get('authorization') && {
          Authorization: req.headers.get('authorization') as string,
        }),
      },
      body: JSON.stringify(payloadWithAuthKey),
    });

    const data = await apiResponse.json();

    return NextResponse.json(data, { status: apiResponse.status });

  } catch (error) {
    console.error(`API Route Proxy Error for ${path}:`, error);
    return NextResponse.json(
      { success: false, message: 'Lỗi từ proxy server.' },
      { status: 500 }
    );
  }
}

// --- Handler cho các request GET ---
export async function GET(req: NextRequest) {
  const path = req.nextUrl.pathname.replace('/api', '');
  const searchParams = req.nextUrl.search;
  const targetUrl = `${WP_API_URL}${path}${searchParams}`;

  try {
    const apiResponse = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(req.headers.get('authorization') && {
          Authorization: req.headers.get('authorization') as string,
        }),
      },
    });

    const data = await apiResponse.json();

    return NextResponse.json(data, { status: apiResponse.status });

  } catch (error) {
    console.error(`API Route GET Proxy Error for ${path}:`, error);
    return NextResponse.json(
      { success: false, message: 'Lỗi từ proxy server.' },
      { status: 500 }
    );
  }
}

// PUT, DELETE
// export async function GET(req: NextRequest) { ... }
