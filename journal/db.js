/* ==============================================
   HALNIP Journal — Data Layer v3
   posts.json (GitHub) が正とする。なければ SEED にフォールバック。
   ============================================== */
const HALNIP_DB = (function () {
  const KEY         = 'halnip_journal_posts';
  const SESSION_KEY = 'halnip_admin_session';
  const ADMIN_PASS  = 'HnImanon21';
  const POSTS_URL   = '/journal/posts.json';

  /* ── SEED: posts.json が存在しない間のフォールバック ── */
  const SEED = [
    {
      id: 'seed_007', tag: 'RELEASE',
      date: '2026-08-03',
      title: 'ハルニップ株式会社、福岡拠点を開設 ― CIC Fukuokaにて活動開始',
      titleEn: 'HALNIP Inc. Opens Fukuoka Office at CIC Fukuoka',
      thumbnail: 'https://raw.githubusercontent.com/halnip/halnip-website/main/CIC_Fukuoka_01.jpg',
      excerpt: 'ハルニップ株式会社は、2026年8月3日、福岡市中央区天神のONE FUKUOKA BLDG. 7階（CIC Fukuoka内）に福岡拠点を開設しました。九州・福岡をASEANクロスボーダービジネスの戦略的拠点として、地域の産官学との連携を強化します。',
      excerptEn: 'HALNIP Inc. has opened its Fukuoka office at CIC Fukuoka (ONE FUKUOKA BLDG. 7F, Tenjin) on August 3, 2026, positioning Fukuoka as a strategic hub for Japan-ASEAN cross-border business.',
      body: '<p style="font-size:1.05em; line-height:2; border-left:3px solid #B8952A; padding-left:1.2em; margin-bottom:2em; color:#3a3228;">ハルニップ株式会社は、2026年8月3日、福岡県福岡市中央区天神のONE FUKUOKA BLDG. 7階（<strong>CIC Fukuoka</strong>内）に福岡拠点を開設しました。東京（千葉・松戸）に続く第二拠点として、九州・福岡を日本とASEANを結ぶクロスボーダービジネスの戦略的拠点に位置づけます。</p><figure style="margin:0 0 2.5em; padding:0;"><img src="https://raw.githubusercontent.com/halnip/halnip-website/main/CIC_Fukuoka_01.jpg" alt="CIC Fukuoka 入居" style="width:100%; display:block; border-radius:2px;"><figcaption style="font-size:0.78em; color:#8a7a68; margin-top:0.7em; text-align:center;">CIC Fukuokaにて（2026.08.03）</figcaption></figure><h2 style="font-size:1.1em; letter-spacing:0.12em; border-bottom:1px solid #d4c9b8; padding-bottom:0.5em; margin:2.5em 0 1.2em;">CIC Fukuokaとは</h2><p style="line-height:2; margin-bottom:2.5em;">CIC（Cambridge Innovation Center）は、MITの周辺に誕生したグローバルなイノベーション・エコシステムです。CIC Fukuokaは、スタートアップ・大企業・研究機関・行政が集結する九州最大級のイノベーション拠点として、福岡市の天神ビジネスセンターに位置しています。</p><figure style="margin:0 0 2.5em; padding:0;"><img src="https://raw.githubusercontent.com/halnip/halnip-website/main/CIC_Fukuoka_02.jpg" alt="CIC Fukuoka エントランス" style="width:100%; display:block; border-radius:2px;"><figcaption style="font-size:0.78em; color:#8a7a68; margin-top:0.7em; text-align:center;">CIC Fukuoka エントランス</figcaption></figure><h2 style="font-size:1.1em; letter-spacing:0.12em; border-bottom:1px solid #d4c9b8; padding-bottom:0.5em; margin:2.5em 0 1.2em;">代表コメント</h2><div style="background:#fff; border:1px solid #e0d8cc; padding:2em 2.2em 1.8em; margin-bottom:2.5em;"><p style="line-height:2.1; margin-bottom:1.2em;">ハルニップ株式会社は、ハラル市場（ないしASEAN市場）に挑戦をする日本の企業であり、またそのような企業を支援するブリッジカンパニーです。</p><p style="line-height:2.1; margin-bottom:1.8em;">今回、九州・福岡をASEANクロスボーダーの戦略的拠点ととらえ、今後福岡の産官学ステークホルダーとの連携を強化し、具体的なクロスボーダーの取り組みを加速させてまいります。</p><div style="border-top:1px solid #e0d8cc; padding-top:1.2em; text-align:right;"><p style="margin:0; font-size:1em; font-weight:600; color:#1a1610; letter-spacing:0.05em;">今野 広樹</p><p style="margin:0.3em 0 0; font-size:0.8em; color:#8a7a68; letter-spacing:0.08em;">ハルニップ株式会社　代表取締役</p></div></div><h2 style="font-size:1.1em; letter-spacing:0.12em; border-bottom:1px solid #d4c9b8; padding-bottom:0.5em; margin:2.5em 0 1.5em;">拠点情報</h2><table style="width:100%; border-collapse:collapse; font-size:0.9em; line-height:1.9;"><tbody><tr style="border-bottom:1px solid #e8dfd0;"><td style="padding:0.9em 1em 0.9em 0; color:#8a7a68; white-space:nowrap; width:100px; vertical-align:top;">拠点名</td><td style="padding:0.9em 0;">ハルニップ株式会社 福岡拠点</td></tr><tr style="border-bottom:1px solid #e8dfd0;"><td style="padding:0.9em 1em 0.9em 0; color:#8a7a68; white-space:nowrap; vertical-align:top;">所在地</td><td style="padding:0.9em 0;">〒810-0001<br>福岡県福岡市中央区天神一丁目11番1号<br>ONE FUKUOKA BLDG. 7階（CIC Fukuoka内）</td></tr><tr><td style="padding:0.9em 1em 0.9em 0; color:#8a7a68; white-space:nowrap; vertical-align:top;">開設日</td><td style="padding:0.9em 0;">2026年8月3日</td></tr></tbody></table>',
      bodyEn: '', published: true
    },
    {
      id: 'insight_003', tag: 'INSIGHT', category: 'CROSS-BORDER',
      date: '2026-07-01',
      title: '日本×ASEAN 越境ビジネスの最前線',
      titleEn: 'Japan × ASEAN: Unlocking Cross-Border Business Opportunities',
      thumbnail: 'https://raw.githubusercontent.com/halnip/halnip-website/main/images/Bizcon_03.jpg',
      excerpt: '急成長するASEAN市場は、日本企業にとって大きなチャンスを秘めています。越境事業展開で成果を出すための市場参入戦略と現地連携のポイントを紹介します。',
      excerptEn: "Southeast Asia's rapid growth presents significant opportunities for Japanese companies. We outline strategies for successful market entry and cross-border business deployment.",
      body: '', bodyEn: '', published: true
    },
    {
      id: 'insight_002', tag: 'INSIGHT', category: 'INNOVATION',
      date: '2026-06-15',
      title: 'イノベーション・エコシステムの設計と構築',
      titleEn: 'Building Innovation Ecosystems: Beyond Corporate R&D',
      thumbnail: 'https://raw.githubusercontent.com/halnip/halnip-website/main/images/Bizcon_01.jpg',
      excerpt: '大企業・スタートアップ・研究機関をつなぐオープンイノベーション。エコシステムの設計から新事業の事業化まで、先進企業の取り組みを分析します。',
      excerptEn: 'Open innovation and ecosystem building are the new competitive frontiers. We analyze how leading companies are designing partnerships and commercializing new businesses.',
      body: '', bodyEn: '', published: true
    },
    {
      id: 'insight_001', tag: 'INSIGHT', category: 'SMART CITY',
      date: '2026-06-01',
      title: '都市の未来を変えるスマートシティ戦略',
      titleEn: 'The Future of Urban Transformation: Smart City Strategy',
      thumbnail: 'https://raw.githubusercontent.com/halnip/halnip-website/main/images/Bizcon_02.jpg',
      excerpt: 'データとテクノロジーを活用し、都市・地域の社会課題を解決するスマートシティ構想。成功するためのグランドデザインと実装のポイントを解説します。',
      excerptEn: 'How can cities leverage data and technology to solve mobility, environment, and healthcare challenges? We explore the key elements of successful smart city initiatives.',
      body: '', bodyEn: '', published: true
    },
    {
      id: 'seed_006', tag: 'RELEASE',
      date: '2026-06-09',
      title: 'SENSETIERロールオン2製品、ムスリムフレンドリー（成分ハラル）認定を取得',
      titleEn: 'SENSETIER Roll-on Fragrances Receive Muslim-Friendly (Halal Ingredient) Certification',
      thumbnail: 'https://raw.githubusercontent.com/halnip/halnip-website/main/images/%E5%95%86%E5%93%81%E7%94%BB%E5%83%8F_BREEZE%20in%20Caldera%20Flora.png',
      excerpt: 'ハルニップ株式会社のフレグランスブランドSENSETIERより展開するロールオンフレグランス2製品が、一般社団法人ハラル・ジャパン協会によるムスリムフレンドリー（成分ハラル）認定を取得しました。',
      excerptEn: 'Two roll-on fragrances from SENSETIER, the fragrance brand of HALNIP Inc., have received Muslim-Friendly (Halal Ingredient) certification from the Halal Japan Association.',
      body: '<p style="font-size:1.05em; line-height:2; border-left:3px solid #B8952A; padding-left:1.2em; margin-bottom:2em; color:#3a3228;">ハルニップ株式会社のフレグランスブランド<strong>SENSETIER</strong>より展開するロールオンフレグランス2製品が、一般社団法人ハラル・ジャパン協会による<strong>ムスリムフレンドリー（成分ハラル）認定</strong>を取得しました。</p><p style="line-height:2; margin-bottom:2.5em;">ムスリム市場への本格展開を基本方針に掲げるハルニップ株式会社にとって、化粧品における成分ハラル認定の取得は、創業来めざしてきた姿への確かな一歩です。「文化を紡ぎ、未来を創る」というミッションが、かたちになり始めた瞬間でもあります。</p><h2 style="font-size:1.1em; letter-spacing:0.12em; border-bottom:1px solid #d4c9b8; padding-bottom:0.5em; margin:2.5em 0 1.5em;">認定取得製品</h2><div style="border:1px solid #e0d8cc; padding:1.6em 1.8em; margin-bottom:1.2em; background:#faf8f4;"><p style="font-size:0.7em; letter-spacing:0.3em; text-transform:uppercase; color:#B8952A; margin:0 0 0.4em;">Fragrance 01</p><p style="font-size:1.3em; font-weight:600; letter-spacing:0.05em; margin:0 0 0.8em; color:#1a1610;">BREEZE in Caldera Flora　ロールオン</p><p style="line-height:1.9; font-size:0.95em; margin:0 0 0.8em; color:#4a3f32;">阿蘇のカルデラに広がる大草原と、風に揺れる野花。とてつもなく長い年月をかけて形成された火山性大地が育む、唯一無二の風土の記憶を香りに宿した一本です。</p><figure style="margin:1em 0 0.8em; padding:0;"><img src="https://raw.githubusercontent.com/halnip/halnip-website/main/images/%E5%95%86%E5%93%81%E7%94%BB%E5%83%8F_BREEZE%20in%20Caldera%20Flora.png" alt="BREEZE in Caldera Flora ロールオン" style="width:100%; display:block; border-radius:2px;"></figure><p style="font-size:0.82em; display:inline-block; background:#e8f4ef; color:#2e7d5e; padding:0.2em 0.8em; border-radius:2px; letter-spacing:0.08em; margin:0;">MF ムスリムフレンドリー（成分ハラル）認定</p></div><div style="border:1px solid #e0d8cc; padding:1.6em 1.8em; margin-bottom:2.5em; background:#faf8f4;"><p style="font-size:0.7em; letter-spacing:0.3em; text-transform:uppercase; color:#B8952A; margin:0 0 0.4em;">Fragrance 02</p><p style="font-size:1.3em; font-weight:600; letter-spacing:0.05em; margin:0 0 0.8em; color:#1a1610;">DAWN in Alps　ロールオン</p><p style="line-height:1.9; font-size:0.95em; margin:0 0 0.8em; color:#4a3f32;">北アルプスの夜明け。3,000メートル級の峰々に朝の光が差し込む、静謐で荘厳な瞬間。日本が世界に誇る雄大な自然の息吹を、一筋の香りに込めました。</p><figure style="margin:1em 0 0.8em; padding:0;"><img src="https://raw.githubusercontent.com/halnip/halnip-website/main/images/%E5%95%86%E5%93%81%E7%94%BB%E5%83%8F_DAWN%20in%20Alps.png" alt="DAWN in Alps ロールオン" style="width:100%; display:block; border-radius:2px;"></figure><p style="font-size:0.82em; display:inline-block; background:#e8f4ef; color:#2e7d5e; padding:0.2em 0.8em; border-radius:2px; letter-spacing:0.08em; margin:0;">MF ムスリムフレンドリー（成分ハラル）認定</p></div><h2 style="font-size:1.1em; letter-spacing:0.12em; border-bottom:1px solid #d4c9b8; padding-bottom:0.5em; margin:2.5em 0 1.2em;">ムスリムフレンドリー認定とは</h2><p style="line-height:2; margin-bottom:1.2em;">一般社団法人ハラル・ジャパン協会によるムスリムフレンドリー（成分ハラル）認定は、製品に使用される成分に限定し、イスラム法に基づくハラル基準に適合していることを認定するものです。</p><p style="line-height:2; margin-bottom:2.5em;">ハラル認証と並ぶ重要な指標として、ムスリム消費者が安心して使用できる製品の目安となっており、東南アジアをはじめとするムスリム市場における信頼性の基盤となります。</p><h2 style="font-size:1.1em; letter-spacing:0.12em; border-bottom:1px solid #d4c9b8; padding-bottom:0.5em; margin:2.5em 0 1.5em;">代表コメント</h2><div style="background:#fff; border:1px solid #e0d8cc; padding:2em 2.2em 1.8em; margin-bottom:2.5em;"><p style="line-height:2.1; margin-bottom:1.2em;">阿蘇と北アルプス。どちらも、気の遠くなるような時間をかけて形成された、日本が世界に誇る奇跡のような大自然です。この風土が持つ力は、日本国内にとどまらず、世界のどこに届けても通じる文化資源だと確信しています。</p><p style="line-height:2.1; margin-bottom:1.2em;">今回のムスリムフレンドリー認定取得は、化粧品市場においてムスリムの皆さまに安心してお使いいただける第一歩です。ハルニップの基本方針はムスリム市場への本格展開。その実現に向けた、小さくとも確かな前進だと受け止めています。</p><p style="line-height:2.1; margin-bottom:1.8em;">「文化を紡ぎ、未来を創る」——このミッションを体現するための歩みは、こうして一つひとつ積み重ねられていきます。</p><div style="border-top:1px solid #e0d8cc; padding-top:1.2em; text-align:right;"><p style="margin:0; font-size:1em; font-weight:600; color:#1a1610; letter-spacing:0.05em;">今野 広樹</p><p style="margin:0.3em 0 0; font-size:0.8em; color:#8a7a68; letter-spacing:0.08em;">ハルニップ株式会社　代表取締役</p></div></div><h2 style="font-size:1.1em; letter-spacing:0.12em; border-bottom:1px solid #d4c9b8; padding-bottom:0.5em; margin:2.5em 0 1.5em;">SENSETIER について</h2><div style="border:1px solid #e0d8cc; padding:1.6em 1.8em; margin-bottom:2.5em; background:#faf8f4;"><p style="font-size:0.7em; letter-spacing:0.3em; text-transform:uppercase; color:#B8952A; margin:0 0 0.4em;">Fragrance Brand</p><p style="font-size:1.35em; font-weight:600; letter-spacing:0.05em; margin:0 0 0.8em; color:#1a1610;">SENSETIER</p><p style="line-height:1.9; font-size:0.95em; margin:0; color:#4a3f32;">「土地の記憶」を香りに宿すフレグランスブランド。日本各地の風土・記憶・物語を香りというかたちで表現し、ムスリムフレンドリーな処方でグローバルに届けます。ハルニップ株式会社のFragrance事業として展開しています。</p></div><h2 style="font-size:1.1em; letter-spacing:0.12em; border-bottom:1px solid #d4c9b8; padding-bottom:0.5em; margin:2.5em 0 1.5em;">会社概要</h2><table style="width:100%; border-collapse:collapse; font-size:0.9em; line-height:1.9;"><tbody><tr style="border-bottom:1px solid #e8dfd0;"><td style="padding:0.9em 1em 0.9em 0; color:#8a7a68; white-space:nowrap; width:120px; vertical-align:top;">社名</td><td style="padding:0.9em 0;">ハルニップ株式会社（HALNIP Inc.）</td></tr><tr style="border-bottom:1px solid #e8dfd0;"><td style="padding:0.9em 1em 0.9em 0; color:#8a7a68; white-space:nowrap; vertical-align:top;">本社所在地</td><td style="padding:0.9em 0;">千葉県松戸市</td></tr><tr style="border-bottom:1px solid #e8dfd0;"><td style="padding:0.9em 1em 0.9em 0; color:#8a7a68; white-space:nowrap; vertical-align:top;">代表取締役</td><td style="padding:0.9em 0;">今野広樹</td></tr><tr><td style="padding:0.9em 1em 0.9em 0; color:#8a7a68; white-space:nowrap; vertical-align:top;">事業内容</td><td style="padding:0.9em 0;">ハラル対応ライフスタイルブランドの企画・開発・販売（SENSETIER／What\'s Pēpen 他）</td></tr></tbody></table>',
      bodyEn: '', published: true
    },
    {
      id: 'seed_005', tag: 'RELEASE',
      date: '2026-03-14',
      title: 'SENSETIERブランドローンチのお知らせ',
      titleEn: 'SENSETIER Brand Launch Announcement',
      thumbnail: 'https://raw.githubusercontent.com/halnip/halnip-website/main/images/sensetier_logo.jpg',
      excerpt: 'ハルニップ株式会社は、フレグランスブランド「SENSETIER（サンセティエ）」を正式ローンチしました。「土地の記憶」を香りに宿した、100%天然精油による5階層の調香が、あなたの日常に新しい調律体験をもたらします。',
      excerptEn: 'HALNIP Inc. is proud to announce the official launch of SENSETIER — a fragrance brand born from the memory of the land. Crafted with 100% natural essential oils in a unique 5-layer composition, SENSETIER brings a new tuning experience to your everyday life.',
      body: '<p style="font-size:1.05em; line-height:2; border-left:3px solid #B8952A; padding-left:1.2em; margin-bottom:2em; color:#3a3228;">ハルニップ株式会社は、2026年3月14日、フレグランスブランド<strong>SENSETIER（サンセティエ）</strong>を正式にローンチしました。「自分の機嫌は自分でとる。」をコンセプトに、大自然の力を借りた香りであなたの感情の波をそっと調律します。</p><h2 style="font-size:1.1em; letter-spacing:0.12em; border-bottom:1px solid #d4c9b8; padding-bottom:0.5em; margin:2.5em 0 1.2em;">SENSETIERとは</h2><p style="line-height:2; margin-bottom:1.2em;">SENSETIER（サンセティエ）は、土地の記憶を香りで再現することで、ナチュラルヒーリングの力を使った「調律」ができるプロダクトです。日本各地の風土・自然・物語を100%天然精油による独自の5階層ブレンド技術で昇華し、あなたの日常に「整い」をもたらします。</p><p style="line-height:2; margin-bottom:2.5em;">フラッグシップアイテムとしてロールオンを展開しながら、ブレンドエッセンシャルオイルや周辺アイテムも同時にリリース。あらゆるシーンと気分に寄り添う、3つの調律体験をご用意しています。</p><h2 style="font-size:1.1em; letter-spacing:0.12em; border-bottom:1px solid #d4c9b8; padding-bottom:0.5em; margin:2.5em 0 1.2em;">ローンチラインナップ</h2><p style="line-height:2; margin-bottom:1.8em;">ローンチ時点では、以下2テロワールをロールオン・エッセンシャルオイルでオンラインショップにてお取り扱いいたします。</p><div style="border:1px solid #e0d8cc; padding:1.6em 1.8em; margin-bottom:1.2em; background:#faf8f4;"><p style="font-size:0.7em; letter-spacing:0.3em; text-transform:uppercase; color:#B8952A; margin:0 0 0.4em;">Terroir 01</p><p style="font-size:1.35em; font-weight:600; letter-spacing:0.08em; margin:0 0 0.5em; color:#1a1610;">DAWN in Alps</p><p style="line-height:1.9; font-size:0.95em; margin:0; color:#4a3f32;">北アルプスで迎える、澄み切った夜明け。鋭い冷気と静寂が雑念を払い、心身を凛と研ぎ澄ます、至高の集中。</p></div><div style="border:1px solid #e0d8cc; padding:1.6em 1.8em; margin-bottom:2.5em; background:#faf8f4;"><p style="font-size:0.7em; letter-spacing:0.3em; text-transform:uppercase; color:#B8952A; margin:0 0 0.4em;">Terroir 02</p><p style="font-size:1.35em; font-weight:600; letter-spacing:0.08em; margin:0 0 0.5em; color:#1a1610;">BREEZE in Caldera Flora</p><p style="line-height:1.9; font-size:0.95em; margin:0; color:#4a3f32;">阿蘇カルデラを吹き抜ける、生命力溢れる風。大地の地熱と花々の息吹が呼び覚ます、内なる活力と前向きな自信。</p></div><h2 style="font-size:1.1em; letter-spacing:0.12em; border-bottom:1px solid #d4c9b8; padding-bottom:0.5em; margin:2.5em 0 1.5em;">代表コメント</h2><div style="background:#fff; border:1px solid #e0d8cc; padding:2em 2.2em 1.8em; margin-bottom:2.5em;"><p style="line-height:2.1; margin-bottom:1.2em;">SENSETIERは、「自分の機嫌は自分でとる」という想いから生まれたブランドです。日々の忙しさの中で感情が揺らぐのは、懸命に生きている証。そんな瞬間に、日本の誇る大地の香りがそっと寄り添い、本来の自分へと戻る助けになれれば、これほど嬉しいことはありません。</p><div style="border-top:1px solid #e0d8cc; padding-top:1.2em; text-align:right;"><p style="margin:0; font-size:1em; font-weight:600; color:#1a1610;">今野 広樹</p><p style="margin:0.3em 0 0; font-size:0.8em; color:#8a7a68;">ハルニップ株式会社　代表取締役</p></div></div><p style="text-align:center; margin-top:2em;"><a href="https://sensetier.com" target="_blank" rel="noopener" style="display:inline-block; padding:0.85em 2.5em; background:#B8952A; color:#fff; font-size:0.8rem; letter-spacing:0.2em; text-decoration:none; text-transform:uppercase;">SENSETIER ONLINE SHOP</a></p>',
      bodyEn: '', published: true
    },
    {
      id: 'seed_004', tag: 'RELEASE',
      date: '2026-02-28',
      title: "第５回やさシティ、まつど。ビジネスプランコンテストにて、What's Pēpenがオーディエンス賞を受賞しました",
      titleEn: '',
      thumbnail: 'https://raw.githubusercontent.com/halnip/halnip-website/main/images/Bizcon_01.jpg',
      excerpt: "2026年2月、松戸市主催「第5回やさシティ、まつど。ビジネスプランコンテスト」にて、What's Pēpenがオーディエンス賞を受賞しました。",
      excerptEn: '',
      body: '<p style="font-size:1.05em; line-height:2; border-left:3px solid #B8952A; padding-left:1.2em; margin-bottom:2em; color:#3a3228;">2026年2月28日、松戸市主催「第5回やさシティ、まつど。ビジネスプランコンテスト」のファイナル審査会にて、ハルニップ株式会社のFood事業<strong>What\'s Pēpen</strong>が<strong>オーディエンス賞</strong>を受賞しました。</p><p style="line-height:2; margin-bottom:2.5em;">35名の応募者の中から選ばれた8名のファイナリストとして登壇し、60名の市民審査員（観覧者）による直接投票の結果、最も多くの支持を集めた事業者に贈られる「オーディエンス賞」をいただきました。</p><figure style="margin:0 0 2.5em; padding:0;"><img src="https://raw.githubusercontent.com/halnip/halnip-website/main/images/Bizcon_03.jpg" alt="会場の様子" style="width:100%; display:block;"><figcaption style="font-size:0.78em; color:#8a7a68; margin-top:0.7em; text-align:center;">第5回やさシティ、まつど。ビジネスプランコンテスト（2026.02.28）</figcaption></figure><h2 style="font-size:1.1em; letter-spacing:0.12em; border-bottom:1px solid #d4c9b8; padding-bottom:0.5em; margin:2.5em 0 1.5em;">代表コメント</h2><div style="background:#fff; border:1px solid #e0d8cc; padding:2em 2.2em 1.8em; margin-bottom:2.5em;"><p style="line-height:2.1; margin-bottom:1.8em;">「オーディエンス賞」は、会場にお越しいただいた市民の皆さまの直接投票によって決まる賞です。審査員だけでなく、生活者の視点で共感していただけたことが、何より嬉しく、励みになりました。</p><div style="border-top:1px solid #e0d8cc; padding-top:1.2em; text-align:right;"><p style="margin:0; font-size:1em; font-weight:600; color:#1a1610;">今野 広樹</p><p style="margin:0.3em 0 0; font-size:0.8em; color:#8a7a68;">ハルニップ株式会社　代表取締役</p></div></div>',
      bodyEn: '', published: true
    },
    {
      id: 'seed_003', tag: 'RELEASE',
      date: '2026-01-05',
      title: 'ハルニップ株式会社、正式設立のご報告',
      titleEn: 'HALNIP Inc. officially established',
      thumbnail: 'https://raw.githubusercontent.com/halnip/halnip-website/main/images/logo_green.svg',
      excerpt: 'この度、ハルニップ株式会社が正式に設立されました。日本とムスリム市場を繋ぐ新たな挑戦が始まります。',
      excerptEn: 'HALNIP Inc. has been officially established. A new challenge bridging Japan and the Muslim market begins.',
      body: '<p style="font-size:1.05em; line-height:2; border-left:3px solid #B8952A; padding-left:1.2em; margin-bottom:2em; color:#3a3228;">ハルニップ株式会社（本社：千葉県松戸市、代表取締役：今野広樹）は、「文化を紡ぎ、未来を創る」をミッションに掲げ、日本の優れた技術・文化をムスリム市場へ届けるライフスタイルブランド事業を展開します。</p><p style="line-height:2; margin-bottom:2.5em;">社名「HALNIP」は、<strong>ハラル（Halal）× ニッポン（Nippon）</strong>を組み合わせた造語です。ムスリムの価値観と日本の文化・技術が交差するところに、新しい市場と共生の未来を描いています。</p><h2 style="font-size:1.1em; letter-spacing:0.12em; border-bottom:1px solid #d4c9b8; padding-bottom:0.5em; margin:2.5em 0 1.5em;">代表メッセージ</h2><div style="background:#fff; border:1px solid #e0d8cc; padding:2em 2.2em 1.8em; margin-bottom:2.5em;"><p style="line-height:2.1; margin-bottom:1.8em;">SENSETIERは、「自分の機嫌は自分でとる」という想いから生まれたブランドです。日々の忙しさの中で感情が揺らぐのは、懸命に生きている証。そんな瞬間に、日本の誇る大地の香りがそっと寄り添い、本来の自分へと戻る助けになれれば、これほど嬉しいことはありません。</p><div style="border-top:1px solid #e0d8cc; padding-top:1.2em; text-align:right;"><p style="margin:0; font-size:1em; font-weight:600; color:#1a1610;">今野 広樹</p><p style="margin:0.3em 0 0; font-size:0.8em; color:#8a7a68;">ハルニップ株式会社　代表取締役</p></div></div><h2 style="font-size:1.1em; letter-spacing:0.12em; border-bottom:1px solid #d4c9b8; padding-bottom:0.5em; margin:2.5em 0 1.5em;">会社概要</h2><table style="width:100%; border-collapse:collapse; font-size:0.9em; line-height:1.9;"><tbody><tr style="border-bottom:1px solid #e8dfd0;"><td style="padding:0.9em 1em 0.9em 0; color:#8a7a68; white-space:nowrap; width:120px; vertical-align:top;">社名</td><td style="padding:0.9em 0;">ハルニップ株式会社（HALNIP Inc.）</td></tr><tr style="border-bottom:1px solid #e8dfd0;"><td style="padding:0.9em 1em 0.9em 0; color:#8a7a68; white-space:nowrap; vertical-align:top;">本社所在地</td><td style="padding:0.9em 0;">千葉県松戸市</td></tr><tr style="border-bottom:1px solid #e8dfd0;"><td style="padding:0.9em 1em 0.9em 0; color:#8a7a68; white-space:nowrap; vertical-align:top;">代表取締役</td><td style="padding:0.9em 0;">今野広樹</td></tr><tr><td style="padding:0.9em 1em 0.9em 0; color:#8a7a68; white-space:nowrap; vertical-align:top;">事業内容</td><td style="padding:0.9em 0;">ハラル対応ライフスタイルブランドの企画・開発・販売（SENSETIER／What\'s Pēpen 他）</td></tr></tbody></table>',
      bodyEn: '', published: true
    }
  ];

  /* ── ストレージ ── */
  function _load() {
    try {
      const r = localStorage.getItem(KEY);
      return r ? JSON.parse(r) : null;
    } catch { return null; }
  }
  function _save(posts) { localStorage.setItem(KEY, JSON.stringify(posts)); }

  /* ── posts.json からリモートデータを取得してlocalStorageを更新 ── */
  function _fetchRemote() {
    return fetch(POSTS_URL + '?_=' + Date.now(), { cache: 'no-store' })
      .then(r => { if (!r.ok) throw new Error('no-remote'); return r.json(); })
      .then(data => { if (Array.isArray(data) && data.length) _save(data); });
  }

  /* ── ページロード時にバックグラウンドで同期（公開ページ用） ── */
  _fetchRemote().catch(() => {
    if (!_load()) _save(SEED); // posts.json未作成時のフォールバック
  });

  /* ── 管理画面用: 最新データを取得してからコールバック ── */
  function refresh(cb) {
    _fetchRemote()
      .catch(() => { if (!_load()) _save(SEED); })
      .finally(() => cb && cb());
  }

  /* ── CRUD ── */
  function getPosts()          { return _load() || SEED; }
  function getPublishedPosts() { return getPosts().filter(p => p.published).sort((a,b) => new Date(b.date)-new Date(a.date)); }
  function getPostById(id)     { return getPosts().find(p => p.id === id) || null; }

  function savePost(post) {
    const all = getPosts(), idx = all.findIndex(p => p.id === post.id);
    if (idx >= 0) all[idx] = post; else all.unshift(post);
    _save(all); return post;
  }
  function deletePost(id) { _save(getPosts().filter(p => p.id !== id)); }
  function generateId()   { return Date.now().toString(36) + Math.random().toString(36).slice(2,6); }

  /* ── 認証 ── */
  function checkPassword(pw) { return pw === ADMIN_PASS; }
  function isLoggedIn()      { return sessionStorage.getItem(SESSION_KEY) === '1'; }
  function login()           { sessionStorage.setItem(SESSION_KEY, '1'); }
  function logout()          { sessionStorage.removeItem(SESSION_KEY); }

  /* ── データ I/O ── */
  function exportJSON()     { return JSON.stringify(getPosts(), null, 2); }
  function importJSON(json) { _save(JSON.parse(json)); }

  /* ── GitHub API: posts.json を更新 ── */
  async function publishToGitHub(token) {
    const owner = 'halnip', repo = 'halnip-website', path = 'journal/posts.json';
    const api   = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
    const hdrs  = {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json'
    };

    // 既存ファイルのSHAを取得（更新に必要）
    let sha;
    const getRes = await fetch(api, { headers: hdrs });
    if (getRes.ok) {
      sha = (await getRes.json()).sha;
    } else if (getRes.status !== 404) {
      throw new Error('GitHub API ' + getRes.status);
    }

    // UTF-8 JSON を Base64 エンコード
    const content = btoa(unescape(encodeURIComponent(JSON.stringify(getPosts(), null, 2))));
    const body    = { message: 'Update posts [admin panel]', content };
    if (sha) body.sha = sha;

    const putRes = await fetch(api, { method: 'PUT', headers: hdrs, body: JSON.stringify(body) });
    if (!putRes.ok) {
      const e = await putRes.json().catch(() => ({}));
      throw new Error(e.message || 'GitHub PUT error: ' + putRes.status);
    }
  }

  return {
    refresh,
    getPosts, getPublishedPosts, getPostById,
    savePost, deletePost, generateId,
    checkPassword, isLoggedIn, login, logout,
    exportJSON, importJSON, publishToGitHub
  };
})();
