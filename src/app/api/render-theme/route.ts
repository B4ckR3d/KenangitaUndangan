import { NextResponse } from "next/server";
import { renderPhpTheme } from "@/lib/themeEngine";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const theme = searchParams.get("theme") || "";
  const to = searchParams.get("to") || "Tamu Undangan";
  const slug = searchParams.get("slug") || "demo";

  try {
    const renderedHtml = await renderPhpTheme({
      slug,
      themeName: theme,
      inviteName: to,
    });

    return new NextResponse(renderedHtml, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    });
  } catch (error: any) {
    console.error("Theme Render Error:", error);
    return new NextResponse(
      `<h1>Error Rendering Theme</h1><pre>${error?.message || error}</pre>`,
      { status: 500, headers: { "Content-Type": "text/html" } }
    );
  }
}
