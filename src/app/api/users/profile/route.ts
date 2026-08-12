import { NextRequest, NextResponse } from "next/server";
import { getUserById, updateUserProfile, addAddress, deleteAddress } from "@/lib/users";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  try {
    const userId = request.headers.get("x-user-id");
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user = await getUserById(userId);
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    return NextResponse.json({ success: true, user }, { status: 200 });
  } catch (error) {
    console.error("[api/users/profile] request failed:", error);
    return NextResponse.json({ error: "Failed to fetch profile" }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const userId = request.headers.get("x-user-id");
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await request.json();
    const user = await updateUserProfile(userId, body);

    return NextResponse.json({ success: true, user }, { status: 200 });
  } catch (error) {
    console.error("[api/users/profile] request failed:", error);
    return NextResponse.json(
      { error: "Failed to update profile" },
      { status: 500 }
    );
  }
}
