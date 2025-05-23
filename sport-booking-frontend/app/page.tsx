'use client'
import axios from "@/app/util/axios.customize";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetchHelloWorld = async () => {

      const res = await axios.get(`/v1/api/`);
      console.log("Check URL?:>>", process.env.NEXT_PUBLIC_BACKEND_URL)
      console.log(res)
    }
    fetchHelloWorld();
  }, [])
  return (
    <div>
      <p>This is line of page</p>
    </div>
  );
}
