// HALNIP Contact Form — Google Apps Script
// ※ デプロイ: デプロイを管理 → 編集 → バージョン「新しいバージョン」→ デプロイ

const SHEET_NAME   = 'お問い合わせ';
const NOTIFY_EMAIL = 'info@halnip.com';

// ウェブアプリ経由（JSONP）で呼ばれる
function doGet(e) {
  try {
    const p  = e.parameter;
    const cb = p.callback || 'callback';
    processForm(p);
    return ContentService
      .createTextOutput(cb + '({"status":"ok"})')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  } catch (err) {
    const cb = (e.parameter && e.parameter.callback) || 'callback';
    return ContentService
      .createTextOutput(cb + '({"status":"error","message":"' + err.message + '"})')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
}

// 直接テスト用（エディタの「実行」ボタンで使用）
function testDirect() {
  processForm({ name: '直接テスト', company: 'テスト会社', email: NOTIFY_EMAIL, category: 'other', message: 'エディタから直接実行したテストです' });
}

// 共通処理
function processForm(p) {
  // 個人Gmailから halnip.com のスプレッドシートへ直接書き込む
  const SPREADSHEET_ID = '1an-Cfv3nI0rxDkOyH4hePn7YMBkP2hGr1Bv3dSDfhEU';
  const ss    = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['受信日時', 'お名前', '会社名', 'メールアドレス', 'お問い合わせ種別', '内容']);
    sheet.getRange(1, 1, 1, 6).setFontWeight('bold').setBackground('#1a3e2a').setFontColor('#ffffff');
    sheet.setFrozenRows(1);
  }

  sheet.appendRow([
    new Date(),
    p.name     || '',
    p.company  || '',
    p.email    || '',
    p.category || '',
    p.message  || ''
  ]);

  MailApp.sendEmail({
    to:      NOTIFY_EMAIL,
    subject: `【HALNIP お問い合わせ】${p.name} 様 (${categoryLabel(p.category)})`,
    body: [
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `HALNIP ウェブサイト お問い合わせ`,
      `━━━━━━━━━━━━━━━━━━━━━━`,
      `お名前　　: ${p.name}`,
      `会社名　　: ${p.company || '（未入力）'}`,
      `メール　　: ${p.email}`,
      `種別　　　: ${categoryLabel(p.category)}`,
      ``,
      `【お問い合わせ内容】`,
      p.message,
      ``,
      `受信日時　: ${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}`,
      `━━━━━━━━━━━━━━━━━━━━━━`
    ].join('\n')
  });
}

function categoryLabel(val) {
  return { business: '事業提携について', brand: 'ブランドに関するお問い合わせ', media: '取材・メディア', other: 'その他' }[val] || val || '未選択';
}
