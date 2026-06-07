/* ==============================================
   HALNIP Journal — LocalStorage Data Layer
   ============================================== */
const HALNIP_DB = (function () {
  const KEY           = 'halnip_journal_posts';
  const SESSION_KEY   = 'halnip_admin_session';
  const ADMIN_PASS    = 'HnImanon21'; // ← 変更可

  const SEED = [
    {
      id: 'seed_003',
      tag: 'RELEASE',
      date: '2026-01-05',
      title: 'ハルニップ株式会社、正式設立のご報告',
      titleEn: 'HALNIP Inc. officially established',
      thumbnail: 'https://raw.githubusercontent.com/halnip/halnip-website/main/images/logo_green.svg',
      excerpt: 'この度、ハルニップ株式会社が正式に設立されました。日本とムスリム市場を繋ぐ新たな挑戦が始まります。',
      excerptEn: 'HALNIP Inc. has been officially established. A new challenge bridging Japan and the Muslim market begins.',
      body: `<p style="font-size:1.05em; line-height:2; border-left:3px solid #B8952A; padding-left:1.2em; margin-bottom:2em; color:#3a3228;">ハルニップ株式会社（本社：千葉県松戸市、代表取締役社長：今野広樹）は、「文化を紡ぎ、未来を創る」をミッションに掲げ、日本の優れた技術・文化をムスリム市場へ届けるライフスタイルブランド事業を展開します。</p><p style="line-height:2; margin-bottom:2.5em;">社名「HALNIP」は、<strong>ハラル（Halal）× ニッポン（Nippon）</strong>を組み合わせた造語です。ムスリムの価値観と日本の文化・技術が交差するところに、新しい市場と共生の未来を描いています。</p><h2 style="font-size:1.1em; letter-spacing:0.12em; border-bottom:1px solid #d4c9b8; padding-bottom:0.5em; margin:2.5em 0 1.2em;">私たちが解決したい課題</h2><p style="line-height:2; margin-bottom:1.2em;">日本では少子高齢化と市場縮小により、伝統的な技術や文化が担い手を失い、消滅の危機に直面しています。国内需要だけでは支えきれないこれらの価値ある資源を、成長性の高いムスリム市場（マレーシア・インドネシアなど）へ届けることが、新たな可能性の扉を開くと私たちは考えています。</p><p style="line-height:2; margin-bottom:2.5em;">HALNIPは、ムスリムの文化や価値観に即したローカライゼーションを行い、「文化の継承」と「新市場創造」を両立します。さらに、海外で評価されたプロダクトや知恵を日本に還流することで、新たな共感と理解を生み、多文化・多宗教共生社会の実現にも貢献していきます。</p><h2 style="font-size:1.1em; letter-spacing:0.12em; border-bottom:1px solid #d4c9b8; padding-bottom:0.5em; margin:2.5em 0 1.5em;">展開するブランド・事業</h2><div style="border:1px solid #e0d8cc; padding:1.6em 1.8em; margin-bottom:1.2em; background:#faf8f4;"><p style="font-size:0.7em; letter-spacing:0.3em; text-transform:uppercase; color:#B8952A; margin:0 0 0.4em;">Fragrance</p><p style="font-size:1.35em; font-weight:600; letter-spacing:0.05em; margin:0 0 0.8em; color:#1a1610;">SENSETIER</p><p style="line-height:1.9; font-size:0.95em; margin:0; color:#4a3f32;">「土地の記憶」を香りに宿すフレグランスブランド。日本各地の風土・記憶・物語を香りというかたちで表現し、ムスリムフレンドリーな処方でグローバルに届けます。</p></div><div style="border:1px solid #e0d8cc; padding:1.6em 1.8em; margin-bottom:1.8em; background:#faf8f4;"><p style="font-size:0.7em; letter-spacing:0.3em; text-transform:uppercase; color:#B8952A; margin:0 0 0.4em;">Food</p><p style="font-size:1.35em; font-weight:600; letter-spacing:0.05em; margin:0 0 0.8em; color:#1a1610;">What's Pēpen</p><p style="line-height:1.9; font-size:0.95em; margin:0; color:#4a3f32;">日本から生まれた新しい世界のポケットフード。薬膳の知恵とグルテンフリーを掛け合わせたインクルーシブな食品ブランドとして、食文化・宗教の垣根を越えた食体験を提供します。</p></div><p style="line-height:2; margin-bottom:2.5em; font-size:0.95em; color:#5c4a32; background:#f2ede4; padding:1.2em 1.5em; border-left:3px solid #d4c9b8;">ファッション・アパレルを含む総合ライフスタイルブランドとして、順次新事業を立ち上げていきます。将来的には、ハラル市場から日本へのブランド・製品・サービスの<strong>逆輸入</strong>も見据えた、双方向のブランド事業展開を推進します。</p><h2 style="font-size:1.1em; letter-spacing:0.12em; border-bottom:1px solid #d4c9b8; padding-bottom:0.5em; margin:2.5em 0 1.5em;">代表メッセージ</h2><div style="background:#fff; border:1px solid #e0d8cc; padding:2em 2.2em 1.8em; margin-bottom:2.5em;"><p style="line-height:2.1; margin-bottom:1.2em;">これまで、全国の都市・地域を舞台としたまちづくりや新規事業創造に取り組んできました。そこで見えてきたのは、地域の文化や技術といった"光る原石"が、高齢化や人口減少によって途絶えつつある現実です。</p><p style="line-height:2.1; margin-bottom:1.2em;">一方で、たとえスモールビジネスであっても、地域に根ざした活動が人々の暮らしにとって重要な生業であり、強い影響を与えることを何度も目の当たりにしました。</p><p style="line-height:2.1; margin-bottom:1.2em;">視野を東南アジアに広げると、インドネシアの人口は3億人目前。マレーシアではイスラム金融をはじめとする新たな市場の仕組みが進化し、ASEAN諸国の経済はシームレスな連携によって力強く成長しています。</p><p style="line-height:2.1; margin-bottom:1.8em;">日本の未来を考えるとき、必要なことの一つが「核心となるアイデンティティを守りつつ、それを形を変えて存続させること」です。その一つの方法こそが、ハラル市場へのローカライゼーションを通じた海外展開であり、HALNIPの挑戦です。</p><div style="border-top:1px solid #e0d8cc; padding-top:1.2em; text-align:right;"><p style="margin:0; font-size:1em; font-weight:600; color:#1a1610; letter-spacing:0.05em;">今野 広樹</p><p style="margin:0.3em 0 0; font-size:0.8em; color:#8a7a68; letter-spacing:0.08em;">ハルニップ株式会社　代表取締役</p></div></div><h2 style="font-size:1.1em; letter-spacing:0.12em; border-bottom:1px solid #d4c9b8; padding-bottom:0.5em; margin:2.5em 0 1.5em;">会社概要</h2><table style="width:100%; border-collapse:collapse; font-size:0.9em; line-height:1.9;"><tbody><tr style="border-bottom:1px solid #e8dfd0;"><td style="padding:0.9em 1em 0.9em 0; color:#8a7a68; white-space:nowrap; width:120px; vertical-align:top;">社名</td><td style="padding:0.9em 0;">ハルニップ株式会社（HALNIP Inc.）</td></tr><tr style="border-bottom:1px solid #e8dfd0;"><td style="padding:0.9em 1em 0.9em 0; color:#8a7a68; white-space:nowrap; vertical-align:top;">本社所在地</td><td style="padding:0.9em 0;">千葉県松戸市</td></tr><tr style="border-bottom:1px solid #e8dfd0;"><td style="padding:0.9em 1em 0.9em 0; color:#8a7a68; white-space:nowrap; vertical-align:top;">代表取締役</td><td style="padding:0.9em 0;">今野広樹</td></tr><tr style="border-bottom:1px solid #e8dfd0;"><td style="padding:0.9em 1em 0.9em 0; color:#8a7a68; white-space:nowrap; vertical-align:top;">ミッション</td><td style="padding:0.9em 0;">文化を紡ぎ、未来を創る</td></tr><tr style="border-bottom:1px solid #e8dfd0;"><td style="padding:0.9em 1em 0.9em 0; color:#8a7a68; white-space:nowrap; vertical-align:top;">ビジョン</td><td style="padding:0.9em 0;">Bridging cultures beyond borders</td></tr><tr style="border-bottom:1px solid #e8dfd0;"><td style="padding:0.9em 1em 0.9em 0; color:#8a7a68; white-space:nowrap; vertical-align:top;">事業内容</td><td style="padding:0.9em 0;">ハラル対応ライフスタイルブランドの企画・開発・販売、日本文化・技術のムスリム市場向けローカライゼーション</td></tr><tr><td style="padding:0.9em 1em 0.9em 0; color:#8a7a68; white-space:nowrap; vertical-align:top;">主要ブランド</td><td style="padding:0.9em 0;">SENSETIER（フレグランス）、What's Pēpen（食品）</td></tr></tbody></table>`,
      bodyEn: '',
      published: true
    }
  ];

  function _load() {
    try {
      const r = localStorage.getItem(KEY);
      if (r === null) return null;          // 未初期化
      const parsed = JSON.parse(r);
      return Array.isArray(parsed) ? parsed : null;
    } catch { return null; }
  }
  function _save(posts) { localStorage.setItem(KEY, JSON.stringify(posts)); }

  function getPosts() {
    const loaded = _load();
    if (loaded === null) { _save(SEED); return SEED; }  // 初回 or 破損 → シード
    return loaded;
  }
  function getPublishedPosts() { return getPosts().filter(p => p.published).sort((a, b) => new Date(b.date) - new Date(a.date)); }
  function getPostById(id)     { return getPosts().find(p => p.id === id) || null; }

  function savePost(post) {
    const all = getPosts(), idx = all.findIndex(p => p.id === post.id);
    if (idx >= 0) all[idx] = post; else all.unshift(post);
    _save(all); return post;
  }
  function deletePost(id) { _save(getPosts().filter(p => p.id !== id)); }
  function generateId()   { return Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

  function checkPassword(pw)  { return pw === ADMIN_PASS; }
  function isLoggedIn()       { return sessionStorage.getItem(SESSION_KEY) === '1'; }
  function login()            { sessionStorage.setItem(SESSION_KEY, '1'); }
  function logout()           { sessionStorage.removeItem(SESSION_KEY); }

  function exportJSON()       { return JSON.stringify(getPosts(), null, 2); }
  function importJSON(json)   { _save(JSON.parse(json)); }
  function resetToSeed()      { _save(SEED); }

  return { getPosts, getPublishedPosts, getPostById, savePost, deletePost, generateId, checkPassword, isLoggedIn, login, logout, exportJSON, importJSON, resetToSeed };
})();
