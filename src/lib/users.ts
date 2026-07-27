import "server-only";
import { getSupabaseAdmin } from "./supabase/admin";
import type { User, UpdateProfileRequest } from "@/types/user";

export async function getUserById(userId: string): Promise<User | null> {
  const supabase = getSupabaseAdmin();
  const { data: user, error } = await supabase.from("users").select().eq("id", userId).single();
  if (error) return null;
  return user ? mapUserFromDB(user) : null;
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const supabase = getSupabaseAdmin();
  const { data: user, error } = await supabase.from("users").select().eq("email", email).single();
  if (error) return null;
  return user ? mapUserFromDB(user) : null;
}

export async function updateUserProfile(userId: string, data: UpdateProfileRequest): Promise<User> {
  const supabase = getSupabaseAdmin();
  const { data: user, error } = await supabase
    .from("users")
    .update({
      first_name: data.firstName,
      last_name: data.lastName,
      phone: data.phone,
      preferences: data.preferences,
    })
    .eq("id", userId)
    .select()
    .single();

  if (error) throw new Error(`Failed to update profile: ${error.message}`);
  return mapUserFromDB(user);
}

export async function addAddress(
  userId: string,
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    isDefault: boolean;
  }
) {
  const supabase = getSupabaseAdmin();
  const { data: user, error } = await supabase
    .from("users")
    .select("addresses")
    .eq("id", userId)
    .single();

  if (error) throw new Error("Failed to fetch user");

  const addresses = user?.addresses || [];
  if (address.isDefault) {
    addresses.forEach((a: any) => (a.isDefault = false));
  }
  addresses.push({
    id: `addr-${Date.now()}`,
    ...address,
  });

  const { data: updated, error: updateError } = await supabase
    .from("users")
    .update({ addresses })
    .eq("id", userId)
    .select()
    .single();

  if (updateError) throw new Error("Failed to add address");
  return mapUserFromDB(updated);
}

export async function deleteAddress(userId: string, addressId: string) {
  const supabase = getSupabaseAdmin();
  const { data: user, error } = await supabase
    .from("users")
    .select("addresses")
    .eq("id", userId)
    .single();

  if (error) throw new Error("Failed to fetch user");

  const addresses = (user?.addresses || []).filter((a: any) => a.id !== addressId);

  const { error: updateError } = await supabase
    .from("users")
    .update({ addresses })
    .eq("id", userId);

  if (updateError) throw new Error("Failed to delete address");
}

function mapUserFromDB(user: any): User {
  return {
    id: user.id,
    email: user.email,
    firstName: user.first_name,
    lastName: user.last_name,
    phone: user.phone,
    avatar: user.avatar,
    preferences: user.preferences,
    addresses: user.addresses || [],
    createdAt: user.created_at,
    updatedAt: user.updated_at,
  };
}
