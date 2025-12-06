// 履歴書mdファイルをパースしてデータを抽出するユーティリティ

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import type { ReactNode } from 'react'

export interface BasicInfo {
  氏名: string
  生年月日: string
  性別?: string
  現住所?: string
  連絡先: string
  最寄駅?: string
  通勤時間?: string
  扶養家族?: string
}

export interface Education {
  年月: string
  学歴: string
}

export interface Career {
  年月: string
  職歴: string
}

export interface Qualification {
  取得年月: string
  資格名: string
}

export interface ResumeData {
  basicInfo: BasicInfo
  education: Education[]
  careers: Career[]
  qualifications: Qualification[]
  motivation: string
  selfPR: string
  hobbies: string
}

export function parseResume(markdown: string): ResumeData {
  const lines = markdown.split('\n')
  const data: Partial<ResumeData> = {
    basicInfo: {} as BasicInfo,
    education: [],
    careers: [],
    qualifications: [],
    motivation: '',
    selfPR: '',
    hobbies: '',
  }

  let currentSection = ''
  let motivationLines: string[] = []
  let selfPRLines: string[] = []
  let hobbiesLines: string[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // セクションの検出
    if (line.trim().startsWith('## 【基本情報】')) {
      currentSection = 'basicInfo'
      continue
    } else if (line.trim().startsWith('## 【学歴】')) {
      currentSection = 'education'
      continue
    } else if (line.trim().startsWith('## 【職歴】')) {
      currentSection = 'careers'
      continue
    } else if (line.trim().startsWith('## 【保有資格】')) {
      currentSection = 'qualifications'
      continue
    } else if (line.trim().startsWith('## 【志望動機】')) {
      currentSection = 'motivation'
      motivationLines = []
      continue
    } else if (line.trim().startsWith('## 【自己PR・今後やっていきたいこと】')) {
      currentSection = 'selfPR'
      selfPRLines = []
      continue
    } else if (line.trim().startsWith('## 【趣味・プライベート】')) {
      currentSection = 'hobbies'
      hobbiesLines = []
      continue
    } else if (line.trim().startsWith('---') && currentSection !== '') {
      // セクション終了
      if (currentSection === 'motivation') {
        data.motivation = motivationLines.join('\n')
      } else if (currentSection === 'selfPR') {
        data.selfPR = selfPRLines.join('\n')
      } else if (currentSection === 'hobbies') {
        data.hobbies = hobbiesLines.join('\n')
      }
      currentSection = ''
      continue
    }

    // セクションごとの処理
    if (currentSection === 'basicInfo') {
      // テーブル行のパース
      if (line.trim().startsWith('|') && !line.trim().startsWith('|---')) {
        const cells = line.split('|').map(c => c.trim()).filter(c => c)
        if (cells.length >= 2 && cells[0] !== '項目') {
          const key = cells[0].replace(/\*\*/g, '').trim()
          let value = cells[1].replace(/\*\*/g, '').trim()
          
          if (key === '氏名') data.basicInfo!.氏名 = value
          else if (key === '生年月日') data.basicInfo!.生年月日 = value
          else if (key === '性別') data.basicInfo!.性別 = value
          else if (key === '現住所') data.basicInfo!.現住所 = value.replace(/<br>/g, '\n')
          else if (key === '連絡先') {
            // Emailのみ抽出
            const emailMatch = value.match(/Email[：:]\s*([^\s<]+)/)
            if (emailMatch) {
              data.basicInfo!.連絡先 = `Email：${emailMatch[1]}`
            } else {
              data.basicInfo!.連絡先 = value
            }
          }
          else if (key === '最寄駅') data.basicInfo!.最寄駅 = value
          else if (key === '通勤時間') data.basicInfo!.通勤時間 = value
          else if (key === '扶養家族') data.basicInfo!.扶養家族 = value
        }
      }
    } else if (currentSection === 'education') {
      if (line.trim().startsWith('|') && !line.trim().startsWith('|---')) {
        const cells = line.split('|').map(c => c.trim()).filter(c => c)
        if (cells.length >= 2 && cells[0] !== '年月') {
          data.education!.push({
            年月: cells[0],
            学歴: cells[1],
          })
        }
      }
    } else if (currentSection === 'careers') {
      if (line.trim().startsWith('|') && !line.trim().startsWith('|---')) {
        const cells = line.split('|').map(c => c.trim()).filter(c => c)
        if (cells.length >= 2 && cells[0] !== '年月') {
          data.careers!.push({
            年月: cells[0],
            職歴: cells[1],
          })
        }
      }
    } else if (currentSection === 'qualifications') {
      if (line.trim().startsWith('|') && !line.trim().startsWith('|---')) {
        const cells = line.split('|').map(c => c.trim()).filter(c => c)
        if (cells.length >= 2 && cells[0] !== '取得年月') {
          data.qualifications!.push({
            取得年月: cells[0],
            資格名: cells[1],
          })
        }
      }
    } else if (currentSection === 'motivation') {
      if (line.trim() && !line.trim().startsWith('##')) {
        motivationLines.push(line)
      }
    } else if (currentSection === 'selfPR') {
      if (line.trim() && !line.trim().startsWith('##')) {
        selfPRLines.push(line)
      }
    } else if (currentSection === 'hobbies') {
      if (line.trim() && !line.trim().startsWith('##') && !line.trim().startsWith('|')) {
        hobbiesLines.push(line)
      }
    }
  }

  // 最後のセクションの処理
  if (motivationLines.length > 0) {
    data.motivation = motivationLines.join('\n').trim()
  }
  if (selfPRLines.length > 0) {
    // 改行を正しく処理し、空行を削除
    data.selfPR = selfPRLines.join('\n').trim()
  }
  if (hobbiesLines.length > 0) {
    data.hobbies = hobbiesLines.join('\n').trim()
  }

  return data as ResumeData
}

// Markdownコンポーネント用の設定
export const markdownComponents: any = {
  p: ({ children }: { children?: ReactNode }) => {
    // childrenが配列の場合、各要素を処理
    if (Array.isArray(children)) {
      return <p className="mb-3 text-gray-600 leading-relaxed">{children}</p>
    }
    return <p className="mb-3 text-gray-600 leading-relaxed">{children}</p>
  },
  h3: ({ children }: { children?: ReactNode }) => <h3 className="text-lg font-semibold text-gray-700 mb-3">{children}</h3>,
  h4: ({ children }: { children?: ReactNode }) => <h4 className="text-lg font-semibold text-gray-700 mb-3">{children}</h4>,
  strong: ({ children }: { children?: ReactNode }) => <strong className="text-gray-800 font-semibold">{children}</strong>,
  em: ({ children }: { children?: ReactNode }) => <em className="text-gray-800">{children}</em>,
  ul: ({ children }: { children?: ReactNode }) => <ul className="list-disc list-inside space-y-2 text-gray-600">{children}</ul>,
  li: ({ children }: { children?: ReactNode }) => <li className="text-gray-600">{children}</li>,
}

// Markdownテキストの前処理関数（**を正しく処理）
export function preprocessMarkdown(text: string): string {
  // 改行を正規化し、**が正しくパースされるようにする
  // 連続する改行を1つに統一
  return text.replace(/\n{3,}/g, '\n\n').trim()
}

export { ReactMarkdown, remarkGfm, rehypeRaw }

