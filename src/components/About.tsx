import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="section-container relative bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            プロフィール
          </h2>
          <div className="w-24 h-0.5 bg-gray-300 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-300 shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              基本情報
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <div>
                <span className="text-gray-500 text-sm">氏名</span>
                <p className="text-gray-800 font-medium">奧村 宗久（おくむら むねひさ）</p>
              </div>
              <div>
                <span className="text-gray-500 text-sm">生年月日</span>
                <p className="text-gray-800 font-medium">1974年2月24日生（満51歳）</p>
              </div>
              <div>
                <span className="text-gray-500 text-sm">連絡先</span>
                <p className="text-gray-800 font-medium">Email：okumuram.gm@gmail.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-300 shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              学歴
            </h3>
            <div className="space-y-4 text-gray-600">
              <div>
                <p className="text-gray-500 text-sm">1992年3月</p>
                <p className="text-gray-800 font-medium">和歌山県立桐蔭高等学校 卒業</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">1992年4月</p>
                <p className="text-gray-800 font-medium">明治大学 理工学部 電子通信工学科 入学</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">1996年3月</p>
                <p className="text-gray-800 font-medium">明治大学 理工学部 電子通信工学科 卒業</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-300 shadow-sm"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            志望動機
          </h3>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              20年以上、ソフトウェア開発とプロジェクトマネジメントの世界で働いてきました。
            </p>
            <p>
              キャリアを振り返ると、<strong className="text-gray-800">3つの大きな転換点</strong>があります。
            </p>
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">1. 開発者としての基礎固め（ジャストシステム時代）</h4>
              <p className="mb-3">
                大学を卒業してから16年間、C++でデスクトップアプリケーション開発に携わりました。一太郎や花子といった、多くの人に使われる大規模ソフトウェアの開発を通じて、<strong className="text-gray-800">品質へのこだわり</strong>と<strong className="text-gray-800">技術の基礎</strong>をしっかり学べた時期です。
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">2. ECビジネスへの挑戦（コマース21時代）</h4>
              <p className="mb-3">
                プロジェクトマネージャーとして、アパレル企業のECサイト構築を数多く手がけました。ここで学んだのは、<strong className="text-gray-800">お客様との距離感を掴むこと</strong>。表面的な要望だけでなく、その裏にある本当のニーズを読み取る力が身についた時期でした。技術とビジネスの橋渡し役として、やりがいを感じていました。
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">3. SaaSプロダクトの立ち上げ（バリューコマース時代）</h4>
              <p className="mb-3">
                Yahoo!ショッピング向けのSaaSプロダクトを0から立ち上げ。巨大プラットフォームで、<strong className="text-gray-800">どうやったらユーザーが離脱せずに購入まで進んでくれるか</strong>。そんな視点で企画・開発を進めました。ユーザー体験とビジネス成果、両方を追いかける面白さを実感できました。
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">休職期間について</h4>
              <p>
                2023年末から約2年間、父の介護のために実家に戻っていました。おかげさまで入院の目処が立ち、このタイミングで転職活動を再開することにしました。
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-300 shadow-sm"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            自己PR・今後やっていきたいこと
          </h3>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">若手育成に力を入れたい</h4>
              <p className="mb-3">
                51歳になって思うのは、<strong className="text-gray-800">自分が成長するよりも、若手が成長する姿を見る方が嬉しい</strong>ということ。
              </p>
              <p className="mb-3">
                昔は「背中を見て学べ」みたいな指導をしていましたが（笑）、今の時代はもっと<strong className="text-gray-800">相手に寄り添って、その人に合った育て方</strong>をする必要があると感じています。優しく見守ることも、時には厳しく伝えることも。そうやってメンバーが成長し、チーム全体が強くなっていくのが理想です。
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">技術もマネジメントも、両方やっていきたい</h4>
              <p className="mb-3">
                10年以上、要件定義や設計といった上流工程を担当してきましたが、<strong className="text-gray-800">コーディングも好き</strong>なんです。新人時代に身につけたスキルも、まだまだブラッシュアップできると思っています。
              </p>
              <p className="mb-3">
                最近の技術トレンド、特にAIを活用した開発やクラウドネイティブな設計にも興味津々。新しいことを学ぶのは楽しいですし、<strong className="text-gray-800">必要なときは自分でコードも書ける「プレイングマネージャー」</strong>として活躍できればと考えています。
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-3">チーム全体で成果を出したい</h4>
              <p>
                結局のところ、<strong className="text-gray-800">一人で頑張るより、みんなで成果を出す方が楽しい</strong>んですよね。
              </p>
              <p className="mt-3">
                色々なメンバーと切磋琢磨しながら、チーム全体のパフォーマンスを上げていく。個人のスキルアップも大事ですが、それがチームやビジネスの成果につながってこそ意味がある。そんな風に思っています。
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About

