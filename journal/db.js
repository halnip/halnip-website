/* ==============================================
   HALNIP Journal — LocalStorage Data Layer
   ============================================== */
const HALNIP_DB = (function () {
  const KEY           = 'halnip_journal_posts';
  const SESSION_KEY   = 'halnip_admin_session';
  const ADMIN_PASS    = 'HnImanon21'; // ← 変更可

  const SEED = [
    {
      id: 'seed_001',
      tag: 'RELEASE',
      date: '2025-05-01',
      title: 'SENSETIERがマレーシアで正式ローンチ',
      titleEn: 'SENSETIER officially launched in Malaysia',
      thumbnail: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&q=80',
      excerpt: '自社ブランドSENSETIERが、マレーシア市場にて正式にローンチしました。',
      excerptEn: 'Our flagship brand SENSETIER has officially launched in Malaysia.',
      body: '<p>自社ブランドSENSETIERが、マレーシア市場にて正式にローンチしました。SENSETIERは、100%天然精油を使用した香りのライフスタイルブランドです。</p><p>今回のマレーシアローンチは、HALNIPがムスリム市場への本格展開を始める記念すべき第一歩となります。製品はすべてハラール認証に配慮した処方で開発されており、マレーシア・クアラルンプールを中心に展開を開始します。</p><p>オンラインショップ（sensetier.com）では現在、DAWNとBREEZEの2製品をお取り扱い中です。ぜひご覧ください。</p>',
      bodyEn: '<p>Our flagship brand SENSETIER has officially launched in Malaysia. SENSETIER is a lifestyle brand using 100% natural essential oils.</p><p>This Malaysian launch marks our first major step into the Muslim market. All products are developed with Halal-conscious formulations, and we are beginning our expansion centered in Kuala Lumpur.</p><p>DAWN and BREEZE are currently available on our online shop at sensetier.com. We hope you will take a look.</p>',
      published: true
    },
    {
      id: 'seed_002',
      tag: 'JOURNAL',
      date: '2025-04-15',
      title: 'ムスリム市場インサイト：東南アジア消費者に響くものとは',
      titleEn: 'Muslim market insight: What resonates with Southeast Asian consumers',
      thumbnail: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900&q=80',
      excerpt: 'マレーシア・インドネシアでのフィールドリサーチから見えてきた知見を共有します。',
      excerptEn: 'We share our findings from field research across Malaysia and Indonesia.',
      body: '<p>マレーシア・インドネシアでのフィールドリサーチから、東南アジアのムスリム消費者が大切にしている価値観や購買行動に関するインサイトをご紹介します。</p><h2>「品質×ストーリー」への共感</h2><p>現地のコンシューマーインタビューを通じて最も強く感じたのは、製品の品質だけでなく、その背景にあるストーリーへの関心の高さです。特に日本のクラフツマンシップへの信頼感は非常に高く、「日本製」というだけで大きなブランド価値を持ちます。</p><h2>ハラール対応への期待</h2><p>ムスリム消費者にとって、ハラール対応は最低限の要件です。しかし同時に、「ハラールであること」だけでは差別化にはなりません。ハラールを前提としたうえで、いかに高品質で感性に訴える体験を届けるかが鍵となります。</p>',
      bodyEn: '<p>From field research in Malaysia and Indonesia, we share insights about the values and purchasing behaviors of Southeast Asian Muslim consumers.</p><h2>Resonance with "Quality × Story"</h2><p>Through consumer interviews on site, we found strong interest not just in product quality but in the story behind each product. Trust in Japanese craftsmanship is particularly high — the "Made in Japan" label carries significant brand value.</p><h2>Expectations for Halal Compliance</h2><p>For Muslim consumers, Halal compliance is a baseline requirement. But being Halal alone is not a differentiator. The key is delivering high-quality, emotionally resonant experiences on top of Halal certification.</p>',
      published: true
    },
    {
      id: 'seed_003',
      tag: 'RELEASE',
      date: '2025-03-20',
      title: 'ハルニップ株式会社、正式設立のご報告',
      titleEn: 'HALNIP Co., Ltd. officially established',
      thumbnail: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=900&q=80',
      excerpt: 'この度、ハルニップ株式会社が正式に設立されました。日本とムスリム市場を繋ぐ新たな挑戦が始まります。',
      excerptEn: 'We are pleased to announce the official establishment of HALNIP Co., Ltd.',
      body: '<p>この度、ハルニップ株式会社が2026年1月5日に正式に設立されました。日本とムスリム市場を繋ぐブリッジカンパニーとして、新たな一歩を踏み出します。</p><h2>設立の背景</h2><p>日本では少子高齢化と市場縮小により、伝統的な技術や文化が担い手を失い、消滅の危機に直面しています。一方、マレーシアやインドネシアを中心とするムスリム市場は年々成長を続けており、日本の価値ある資源を届ける新たな機会が生まれています。</p><h2>今後の展望</h2><p>まずは自社ブランドSENSETIERのマレーシア展開を推進しつつ、日本の伝統産業との連携を強化し、「文化の継承」と「新市場創造」を両立するビジネスモデルを確立していきます。今後ともHALNIPをよろしくお願いいたします。</p>',
      bodyEn: '<p>HALNIP Co., Ltd. was officially established on January 5, 2026. We take our first step as a bridge company connecting Japan and the Muslim market.</p><h2>Background</h2><p>In Japan, traditional crafts and culture are losing their successors due to aging demographics and a shrinking market. Meanwhile, the Muslim market centered on Malaysia and Indonesia continues to grow, creating new opportunities to bring Japan\'s valuable resources to the world.</p><h2>Future Plans</h2><p>We will first focus on expanding our brand SENSETIER in Malaysia, while strengthening ties with Japan\'s traditional industries to establish a business model that achieves both cultural preservation and new market creation. We look forward to your continued support of HALNIP.</p>',
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
