import type { Word } from '@/typings'

export async function wordListFetcher(url: string): Promise<Word[]> {
  const URL_PREFIX = ''
  const response = await fetch(URL_PREFIX + url)
  const words: Word[] = await response.json()
  return words
}
