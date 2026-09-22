
"use client";

import { useEffect, useRef } from "react";
import { LRUCache } from "./lru-cache/LRUCache";

export default function Home() {
  const hasLoggedOutput = useRef(false);

  useEffect(() => {
    if (hasLoggedOutput.current) {
      return;
    }

    hasLoggedOutput.current = true;

    const cache = new LRUCache<string, number>(2);

    cache.put("A", 10);
    cache.put("B", 20);
    console.log("get('A'):", cache.get("A"));

    cache.put("C", 30);
    console.log("get('B'):", cache.get("B"));
    console.log("get('C'):", cache.get("C"));
    console.log("get('A'):", cache.get("A"));
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Saidul hasan jahid</h1>
    </div>
  );
}
