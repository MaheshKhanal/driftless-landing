import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.email !== "string" || typeof body.company_name !== "string") {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const email = body.email.trim().toLowerCase();
  const company_name = body.company_name.trim();

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }
  if (!company_name) {
    return NextResponse.json({ error: "invalid_company" }, { status: 400 });
  }

  const { data: existing, error: selectError } = await supabase
    .from("customer-waitlist")
    .select("id")
    .eq("email", email)
    .eq("company_name", company_name)
    .maybeSingle();

  if (selectError) {
    return NextResponse.json({ error: "db_error" }, { status: 500 });
  }

  if (existing) {
    return NextResponse.json({ error: "duplicate" }, { status: 409 });
  }

  const { error: insertError } = await supabase
    .from("customer-waitlist")
    .insert({ email, company_name });

  if (insertError) {
    return NextResponse.json({ error: "db_error" }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
