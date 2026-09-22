export class LRUCache<K, V> {
  private readonly capacity: number;

  private readonly cache: Map<K, V>;

  constructor(capacity: number) {
    if (!Number.isInteger(capacity) || capacity <= 0) {
      throw new Error("Capacity must be a positive integer.");
    }
    this.capacity = capacity;
    this.cache = new Map<K, V>();
  }

  get(key: K): V | -1 {
    if (!this.cache.has(key)) {
      return -1;
    }

    const value = this.cache.get(key)!;
    this.cache.delete(key);
    this.cache.set(key, value);

    return value;
  }

  put(key: K, value: V): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size === this.capacity) {
      const lruKey = this.cache.keys().next().value as K;
      this.cache.delete(lruKey);
    }

    this.cache.set(key, value);
  }
}
