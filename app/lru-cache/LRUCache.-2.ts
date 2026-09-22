import { LRUCache } from './LRUCache';

const cache = new LRUCache<string, number>(2);

cache.put("A", 10);
cache.put("B", 20);

console.log("get('A'):", cache.get("A")); 

cache.put("C", 30);

console.log("get('B'):", cache.get("B"));
console.log("get('C'):", cache.get("C")); 
console.log("get('A'):", cache.get("A")); 