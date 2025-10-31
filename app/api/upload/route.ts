import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as any;
    if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

    const buffer = Buffer.from(await file.arrayBuffer());

    const result: any = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream({ folder: "products" }, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
      stream.end(buffer);
    });

    return NextResponse.json({ url: result.secure_url, public_id: result.public_id });
  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
