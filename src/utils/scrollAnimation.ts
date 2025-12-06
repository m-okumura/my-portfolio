// Intersection Observer APIを使用したスクロールアニメーション

export function initScrollAnimation() {
  // DOMが完全に読み込まれているか確認
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return
  }

  // Intersection Observerのオプション設定
  const observerOptions: IntersectionObserverInit = {
    root: null, // ビューポートを基準にする
    rootMargin: '0px', // マージンなし
    threshold: 0.1, // 要素の10%が表示されたら発火
  }

  // Intersection Observerのコールバック関数
  const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 要素がビューポートに入ったらfade-inクラスを追加
        entry.target.classList.add('fade-in')
        // 一度アニメーションが実行されたら、オブザーバーから削除（パフォーマンス向上）
        observer.unobserve(entry.target)
      }
    })
  }

  // Intersection Observerインスタンスを作成
  const observer = new IntersectionObserver(observerCallback, observerOptions)

  // アニメーション対象の要素を取得
  const animateElements = document.querySelectorAll('[data-scroll-animate]')

  // 各要素をオブザーバーに登録
  animateElements.forEach((element) => {
    observer.observe(element)
  })

  // クリーンアップ関数を返す（必要に応じて）
  return () => {
    animateElements.forEach((element) => {
      observer.unobserve(element)
    })
  }
}

