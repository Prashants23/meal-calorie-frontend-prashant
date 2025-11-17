import { api } from "@/lib/api";
import { CalorieRequest, CalorieResult } from "@/types";

const getToken = () => {
  if (typeof window === "undefined") return null;

  const auth = localStorage.getItem("auth-storage");
  if (!auth) return null;

  const parsed = JSON.parse(auth);
  return parsed?.state?.token || null;
};

export const calorieService = {
  async getCalories(request: CalorieRequest): Promise<CalorieResult> {
    const token = getToken();
    if (!token) throw new Error("Authentication required. Please log in again.");

    const response = await api.post<CalorieResult>("/get-calories", request, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return { ...response, timestamp: new Date().toISOString() };
  },
};
