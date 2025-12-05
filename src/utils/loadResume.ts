// 履歴書mdファイルを読み込むユーティリティ

import resumeMarkdown from '../assets/resume.md?raw'

export function loadResume(): string {
  return resumeMarkdown
}

