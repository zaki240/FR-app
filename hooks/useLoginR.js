import { useMutation } from "react-query";
import pb from "@/lib/pocketbase";

export default function useLoginR() {
  async function login({ email, password }) {
    const authData = await pb
      .collection("users_owner")
      .authWithPassword(email, password);
  }
  return useMutation(login);
}
