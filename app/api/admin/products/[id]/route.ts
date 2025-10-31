import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoDB";
import Product from "@/models/product";
import { requireAdmin } from "@/utils/adminAuth";

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  const body = await req.json();
  await connectToDB();
  const updated = await Product.findByIdAndUpdate(params.id, body, { new: true }).lean();
  if (!updated) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(updated);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  await connectToDB();
  const removed = await Product.findByIdAndDelete(params.id).lean();
  if (!removed) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ ok: true });
}
