import { NextResponse } from "next/server";

// add regex to match all other routes except signin and signup
const signedInPages = ["/", "/playlist", "/library"];

export default function middleware(req) {
  if (signedInPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.TRAX_ACCESS_TOKEN;
    if (!token) {
      return NextResponse.redirect("/signin");
    }
  }
}
