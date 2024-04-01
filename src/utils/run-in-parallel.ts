export async function runInParallel<T>({
  start,
  end,
  batchSize,
  callback,
}: {
  start: number;
  end: number;
  batchSize: number;
  callback: (index: number) => Promise<T>;
}): Promise<T[]> {
  const totalItems = end - start + 1;
  const batches = Math.ceil(totalItems / batchSize);

  const results: T[] = [];

  for (let i = 0; i < batches; i++) {
    const batchStart = start + i * batchSize;
    const batchEnd = Math.min(start + (i + 1) * batchSize - 1, end);

    const batchResults: Promise<T>[] = [];

    for (let itemIndex = batchStart; itemIndex <= batchEnd; itemIndex++) {
      console.log(`Processing item ${itemIndex} of ${totalItems}`);

      batchResults.push(
        callback(itemIndex).catch((reason) => {
          console.log(`Error in callback for item ${itemIndex}: ${reason}`);
          return [] as T;
        }),
      );
    }

    // Execute the promises in parallel for the current batch
    const batchData = await Promise.all(batchResults);

    // Push the batch data into the results array in order
    results.push(...batchData);
  }

  return results;
}
