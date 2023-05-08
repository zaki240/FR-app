import pb from "@/lib/pocketbase";
import { useState } from "react";
export default function useLogout(){
  const [tes, setTes] = useState(0);
    function logout() {
        pb.authStore.clear();
        setTes(Math.random());
      }
      return logout;
}