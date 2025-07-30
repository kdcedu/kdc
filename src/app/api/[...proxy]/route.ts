import { NextRequest, NextResponse } from 'next/server';

const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL;
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
  if (!WP_API_URL) {
    return NextResponse.json(
        { success: false, message: 'WordPress API URL chưa được cấu hình.' },
        { status: 500 }
    );
  }

  const path = req.nextUrl.pathname.replace('/api', '');
  const targetUrl = `${WP_API_URL}${path}${req.nextUrl.search}`;

  const headers = new Headers();
  if (req.headers.get('authorization')) {
    headers.set('Authorization', req.headers.get('authorization') as string);
  }

  headers.set('Accept-Encoding', 'identity'); 

  try {
    const apiResponse = await fetch(targetUrl, {
      method: 'GET',
      headers: headers,
      redirect: 'follow',
    });

    const contentType = apiResponse.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
        const data = await apiResponse.json();
        return NextResponse.json(data, { 
            status: apiResponse.status,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    } else {
        return new NextResponse(apiResponse.body, {
            status: apiResponse.status,
            statusText: apiResponse.statusText,
            headers: apiResponse.headers,
        });
    }

  } catch (error) {
    console.error(`Lỗi Proxy GET cho ${targetUrl}:`, error);
    return NextResponse.json(
      { success: false, message: 'Lỗi từ proxy server.' },
      { status: 500 }
    );
  }
}

// PUT, DELETE
// export async function GET(req: NextRequest) { ... }
