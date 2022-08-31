import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'à',
  'â',
  'b',
  'ch',
  'd',
  'e',
  'è',
  'ê',
  'f',
  'g',
  'i',
  'ì',
  'î',
  'j',
  'k',
  'l',
  'm',
  'm̀',
  'n',
  'ǹ',
  'n̄',
  'o',
  'ò',
  'ô',
  'ọ',
  'ọ̀',
  'ộ',
  'p',
  'r',
  's',
  'sh',
  't',
  'u',
  'ù',
  'û',
  'v',
  'w',
  'y',
  'z',
  '`',
  'ˆ',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
