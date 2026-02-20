# プラチナカリキュラム：技術選定とメリット総括

## 概要

本ドキュメントは、中小企業向けAI伴走型開発教育「プラチナカリキュラム」における技術選定の根拠と、各視点からのメリットをまとめたものです。

---

## 設計思想

```
【コンセプト】
「顧客接点・顧客体験の強化」
〜 お客様がまた来たくなる仕組みを 〜

・顧客向けアプリの提供（PWA + LINEミニアプリ）
・自動リマインド・通知
・決済のキャッシュレス化
・会員証・クーポンのデジタル化
・AIによるパーソナライズ
・SNSとの連携
```

### ブロンズ〜ゴールドとの違い

```
【ブロンズ〜ゴールド】全員が全部学ぶ
・基礎スキルの土台を作る
・共通の知識を順番に積み上げる
・全員が同じカリキュラムを修了する

【プラチナ】必要なものを選んで学ぶ
・顧客接点は業種・職種・顧客特性で異なる
・飲食店に決済は必要だが、製造業には不要
・歯科にLINE予約は必要だが、ECサイトには不要
・自社に合うモジュールを選択して学ぶ
```

---

## 5ステージの一貫したストーリー

| ステージ | コンセプト | 改善対象 | 学習形態 |
|---|---|---|---|
| ブロンズ | 「あなたの3時間を5分に」 | 個人の業務 | 全員共通 |
| シルバー | 「Excelを送る業務をなくす」 | 組織の業務プロセス | 全員共通 |
| ゴールド | 「二重入力をゼロに」 | 社内システム全体 | 全員共通 |
| **プラチナ** | **「お客様がまた来たくなる仕組みを」** | **顧客接点・顧客体験** | **選択制** |
| ダイヤモンド | 「データが次の一手を教えてくれる」 | 事業価値の創出 | 選択制 |

```
【内から外へ、そしてデータから未来へ】
Bronze  → 自分の業務を効率化
Silver  → 社内の情報共有をデジタル化
Gold    → 社内システム同士を繋ぐ
Platinum → 顧客との接点を作る・強化する（業種に応じて選択）
Diamond → 蓄積データから次の一手を見つける
```

---

## カリキュラム全体における位置づけ

| ステージ | 技術スタック | 改善対象 | ゴール |
|---|---|---|---|
| ブロンズ | Python + Pandas + Pydantic + sqlite3 | 個人の業務 | Excel業務の自動化 + データ検証 |
| シルバー | AppSheet → Django + HTMX + Supabase (JSONB) + Realtime | 組織の業務プロセス | 業務アプリを構築 |
| ゴールド | + requests/httpx + Celery + 外部API + PWA | 社内システム全体 | システム統合と自動化 |
| **プラチナ** | **+ 選択モジュール（下記）** | **顧客接点・顧客体験** | **顧客体験の強化** |
| ダイヤモンド | + scikit-learn + Prophet + Streamlit | 事業価値の創出 | データ駆動経営 |

---

## ゴールドからプラチナへ

### ゴールド修了時点の状況

```
【できていること】
・社内システムが統合されている
・業務データが自動で流れる（Celery）
・社内スタッフはPWAでどこからでもアクセス

【残っている課題】
・顧客との接点は電話・店頭のみ
・予約・注文は手作業で受付
・リマインドは手動で連絡
・決済は現金・カードの対面のみ
・リピート促進は勘と経験頼み
・SNSの活用ができていない
```

### プラチナで解決

```
【After】
・顧客がスマホから予約・注文
・前日に自動でリマインド通知
・オンライン決済で事前精算
・購買履歴に基づいたクーポン配布
・AIがパーソナライズされた提案
・Instagram/Facebookとの連携

→ 「お客様がまた来たくなる仕組み」
→ ただし、すべてが必要なわけではない
→ 自社に合うものを選んで導入する
```

---

## カリキュラム構成：共通基盤 + 選択モジュール

```
┌─────────────────────────────────────────────────────────────┐
│  プラチナカリキュラム                                        │
│                                                               │
│  【共通基盤】（全員必須）                                    │
│  ├ 顧客データベース設計                                     │
│  └ Google AI Studio でプロンプト設計                         │
│                                                               │
│  【選択モジュール】（自社に必要なものを選択）                │
│  ├ A: 決済（Stripe）                                        │
│  ├ B: 通知（Twilio / SendGrid）                             │
│  ├ C: LINE（LIFF + Messaging API）                          │
│  ├ D: AI実装                                                │
│  │   ├ D-1: AppSheet + Gemini（ノーコード）                │
│  │   └ D-2: Django + AI APIs（コード）                     │
│  ├ E: PWA強化                                               │
│  └ F: SNS連携（Meta Graph API）                             │
│                                                               │
│  【共通】（全員必須）                                        │
│  ├ 本番品質と監視                                           │
│  └ 実践プロジェクト                                         │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

### 業種別の選択ガイド

| 業種 | 推奨モジュール | 理由 |
|---|---|---|
| 歯科・医療 | B + C + D-1 | 予約リマインド + LINE予約 + 問診AI |
| 飲食店 | A + C + E + F | モバイルオーダー + LINE + PWA + Instagram |
| 小売・アパレル | A + D-2 + E + F | EC決済 + レコメンドAI + PWA + Instagram |
| 美容サロン | B + C + D-1 + F | 来店提案 + LINE予約 + AI + Instagram |
| カフェ | A + E + F | 事前決済 + PWA + SNS集客 |
| 自動車整備 | B + C + D-1 | 車検リマインド + LINE + 見積もりAI |
| 製造業 | D-2 | 画像認識による検査AI |

### 選択フローチャート

```
Q1: 顧客からオンラインで代金を受け取りますか？
  → はい → モジュールA（Stripe）

Q2: 予約やリマインドの自動送信が必要ですか？
  → はい → モジュールB（Twilio / SendGrid）

Q3: 顧客の多くがLINEを使っていますか？
  → はい → モジュールC（LIFF）

Q4: AI機能を導入しますか？
  → はい → カスタマイズが必要？
    → いいえ → モジュールD-1（AppSheet + Gemini）
    → はい  → モジュールD-2（Django + AI APIs）

Q5: アプリとして配布しますか？
  → はい → モジュールE（PWA強化）

Q6: Instagram / Facebook で集客・発信していますか？
  → はい → モジュールF（SNS連携）
```

---

## Before / After 事例

### 事例1：予約リマインド（歯科・美容・整備）→ モジュールB + C

```
【Before】
1. 電話で予約を受付
2. 前日にスタッフがリマインド電話
3. 電話がつながらないことも多い
4. 無断キャンセルが発生
→ 毎日30分のリマインド作業

【After】
1. LINEミニアプリから予約
2. 前日にLINE/SMS自動リマインド
3. 予約変更もアプリから
4. リマインドにより来店率向上
→ リマインド作業ゼロ、無断キャンセル激減

【技術】
・LIFF（予約フォーム）※最小限のJavaScript
・Twilio SMS / LINE Messaging API（自動通知）
・Celery Beat（スケジュール実行）
```

### 事例2：キャッシュレス決済（飲食・小売）→ モジュールA

```
【Before】
1. レジで現金/カード決済
2. お釣りのやり取り
3. 混雑時に行列
4. 売上集計は閉店後
→ レジ対応に時間がかかる

【After】
1. アプリで事前注文・事前決済
2. 来店時は商品を受け取るだけ
3. 行列なし、接客に集中
4. 売上はリアルタイムで把握
→ 回転率向上、顧客満足度アップ

【技術】
・Stripe（決済API）
・PWA / LIFF（注文アプリ）
・Django + Supabase（注文・決済データ管理）
```

### 事例3：デジタル会員証・クーポン（カフェ・アパレル）→ モジュールC + D

```
【Before】
1. 紙のスタンプカード
2. 忘れる、なくす
3. 全員に同じクーポン配布
4. 効果測定できない
→ リピート率の向上が難しい

【After】
1. LINEでデジタル会員証
2. 購買履歴を自動で記録
3. 購買パターンに合わせた個別クーポン
4. クーポン使用率をリアルタイム分析
→ パーソナライズでリピート率向上

【技術】
・LIFF / PWA（会員証アプリ）
・Django + Supabase（顧客・購買データベース）
・AI（おすすめ商品の提案）
  → D-1: AppSheet + Gemini で設定
  → D-2: Django + Claude API でコード実装
```

### 事例4：顧客対応AI（全業種）→ モジュールD-2

```
【Before】
1. 電話やメールで問い合わせ
2. 営業時間内のみ対応
3. 担当者によって回答品質がばらつく
4. 繁忙期に対応が追いつかない
→ 顧客満足度の低下、機会損失

【After】
1. LINEやWebチャットで24時間受付
2. AIが一次対応（FAQ、在庫確認、予約案内）
3. 複雑な問い合わせは人間にエスカレーション
4. 対応履歴は自動で記録
→ 即時対応で顧客満足度向上

【技術】
・Claude API / Gemini API（対話AI）
・Supabase pgvector（FAQ検索/RAG）
・LINE Messaging API / Web Widget
・Django（APIエンドポイント）
```

### 事例5：PWAで顧客接点（サービス業）→ モジュールE

```
【Before】
1. Webサイトはあるがスマホで使いにくい
2. お気に入り登録してもらえない
3. プッシュ通知が送れない
4. 競合のアプリに流れる
→ 顧客との継続的な接点がない

【After】
1. PWAでアプリライクな体験を提供
2. 「ホーム画面に追加」でアイコン表示
3. Service Workerでオフライン対応
4. LINEとの連携でプッシュ通知代替
→ アプリストア審査なしで即配布

【技術】
・Django + HTMX + PWA
・manifest.json + Service Worker
・LIFF連携（LINE経由での通知）
```

### 事例6：SNS集客の自動化（飲食・美容・アパレル）→ モジュールF

```
【Before】
1. Instagram投稿を手動で作成
2. 複数のSNSにそれぞれ投稿
3. コメント・DMを個別に確認
4. 広告効果が測定できない
→ SNS運用に毎日1時間以上

【After】
1. 投稿の一括管理・予約投稿
2. DM・コメントをSupabaseに集約
3. 広告効果をダッシュボードで確認
4. 顧客データとSNSデータを紐づけ
→ SNS運用の効率化、効果の見える化

【技術】
・Meta Graph API（Instagram / Facebook）
・Django（API連携のハブ）
・Supabase（顧客データとの紐づけ）
```

---

## 職種別・業種別の恩恵

### 飲食店（モジュール A + C + E + F）

| 機能 | 効果 |
|---|---|
| モバイルオーダー | 注文受付の省力化、回転率向上 |
| 事前決済 | レジ待ち解消、会計ミスゼロ |
| クーポン配布 | リピート促進、客単価向上 |
| Instagram連携 | 新メニュー告知、集客 |

### 小売・アパレル（モジュール A + D-2 + E + F）

| 機能 | 効果 |
|---|---|
| デジタル会員証 | 紙カード廃止、顧客データ蓄積 |
| パーソナライズクーポン | 購買履歴に基づいた販促 |
| 在庫確認アプリ | 取り置き依頼がオンラインで完結 |
| Instagram連携 | 新商品告知、コーディネート提案 |

### 歯科・医療（モジュール B + C + D-1）

| 機能 | 効果 |
|---|---|
| LINE予約 | 電話対応削減、24時間予約受付 |
| 自動リマインド | 無断キャンセル削減 |
| 問診AI | 来院前に情報収集、診療効率化 |
| リコール自動化 | 定期検診の来院促進 |

### 美容・サービス（モジュール B + C + D-1 + F）

| 機能 | 効果 |
|---|---|
| 予約システム | ダブルブッキング防止 |
| 施術履歴管理 | 顧客ごとの好み把握 |
| 次回来店提案 | AIが最適な来店タイミングを提案 |
| Instagram連携 | 施術事例の発信、集客 |

### 自動車整備（モジュール B + C + D-1）

| 機能 | 効果 |
|---|---|
| 車検リマインド | 期限前に自動通知 |
| 整備履歴閲覧 | 顧客がアプリで確認 |
| 見積もり依頼 | オンラインで完結 |
| 代車予約 | アプリから空き確認・予約 |

---

## 経営者が得られる恩恵

### 売上への直接効果

```
【リピート率向上】
・パーソナライズクーポンで再来店促進
・来店リマインドで取りこぼしゼロ
・会員ランク制度でロイヤルティ向上

【客単価向上】
・おすすめ商品のAI提案
・セット割引のプッシュ通知
・購買履歴に基づいたアップセル

【新規顧客獲得】
・PWAでQRコード一発配布
・Instagram / Facebook連携による集客
・友達紹介クーポン
```

### コスト削減効果

```
【人件費削減】
・予約受付の自動化
・問い合わせ対応のAI化
・リマインド作業のゼロ化

【機会損失削減】
・24時間予約受付
・無断キャンセルの減少
・在庫切れの事前通知
```

### データ活用

```
・顧客データの蓄積（購買履歴、来店頻度）
・効果測定（クーポン利用率、リピート率）
・SNSのインサイト（投稿効果、フォロワー推移）
・データに基づいた意思決定
```

---

## 技術スタック

### コア構成

```
【シルバー・ゴールドから継続】
Django + HTMX          ... Webアプリフレームワーク
Supabase               ... マネージドPostgreSQL
Celery + Redis         ... バックグラウンド処理・スケジュール
GitHub Codespaces      ... 開発環境
GitHub Copilot         ... AI伴走開発

【プラチナで追加（選択モジュールに応じて）】
Google AI Studio       ... AIプロンプト設計（共通基盤）
Stripe                 ... 決済（モジュールA）
Twilio / SendGrid      ... SMS/メール通知（モジュールB）
LIFF (LINE)            ... LINEミニアプリ（モジュールC）
AppSheet + Gemini      ... ノーコードAI（モジュールD-1）
Claude API / Gemini API... AI API（モジュールD-2）
Supabase pgvector      ... AI用ベクトル検索（モジュールD-2）
Service Worker         ... PWA強化（モジュールE）
Meta Graph API         ... Instagram / Facebook連携（モジュールF）
```

### 技術の追加マトリクス

| モジュール | 技術 | 役割 | 学習時間目安 |
|---|---|---|---|
| **共通** | Google AI Studio | プロンプト設計・テスト | 2〜4時間 |
| **A: 決済** | Stripe | オンライン決済 | 8〜12時間 |
| **B: 通知** | Twilio / SendGrid | SMS/メール自動送信 | 6〜8時間 |
| **C: LINE** | LIFF + Messaging API | LINEミニアプリ | 12〜18時間 |
| **D-1: AI（ノーコード）** | AppSheet + Gemini | ノーコードAI実装 | 6〜10時間 |
| **D-2: AI（コード）** | Claude API / Gemini API + pgvector | カスタムAI実装 | 12〜16時間 |
| **E: PWA** | Service Worker + Web Push | アプリ体験の強化 | 4〜6時間 |
| **F: SNS** | Meta Graph API | Instagram / Facebook連携 | 8〜12時間 |

```
→ すべての技術がシルバー・ゴールドの知識を100%活用
→ Django + HTMX + Supabase の構成は変わらない
→ 追加するのは「顧客との接点」を作る技術のみ
→ 自社に必要なモジュールだけを学ぶ
```

---

## 共通基盤の詳細

### 顧客データベース設計（6〜8時間）

```
・顧客テーブルの設計（Django ORM）
・購買履歴・来店履歴の管理
・セグメント（顧客グループ分け）
・Django Admin での顧客管理画面

目標: 顧客データを適切に管理できるDB設計
```

### Google AI Studio（2〜4時間）

```
【Google AI Studioとは】
ブラウザ上でAIのプロンプトを試作・テストできる無料ツール
→ プログラミング前にAIの挙動を確認できる
→ モジュールD-1（AppSheet）にもD-2（Django）にも活きる

┌─────────────────────────────────────────────────────┐
│ Google AI Studio（ブラウザ）                        │
│                                                     │
│ 1. プロンプトを作成・調整                          │
│ 2. 画像・PDF・テキストで動作確認                   │
│ 3. 最適なプロンプトを完成させる                    │
└─────────────────────────────────────────────────────┘
          ↓ 完成したプロンプトを…

【D-1を選んだ場合】         【D-2を選んだ場合】
AppSheet + Gemini に設定     「Get Code」→ Django に実装

学習内容:
・プロンプトの基本（指示の書き方）
・マルチモーダル（画像、PDF、音声）の動作確認
・トークン数とコストの把握
・プロンプトの改善手法

目標: AIに適切な指示を出せるようになる
```

---

## 選択モジュールの詳細

### モジュールA：決済 - Stripe（8〜12時間）

```python
# views.py - Stripe決済セッションの作成
import stripe
from django.conf import settings

stripe.api_key = settings.STRIPE_SECRET_KEY

def create_checkout_session(request):
    """決済セッションを作成"""
    session = stripe.checkout.Session.create(
        payment_method_types=['card'],
        line_items=[{
            'price_data': {
                'currency': 'jpy',
                'product_data': {'name': '商品名'},
                'unit_amount': 1000,
            },
            'quantity': 1,
        }],
        mode='payment',
        success_url=request.build_absolute_uri('/payment/success/'),
        cancel_url=request.build_absolute_uri('/payment/cancel/'),
    )
    return redirect(session.url)

# Webhook で決済完了を受け取る
@csrf_exempt
def stripe_webhook(request):
    payload = request.body
    sig_header = request.META['HTTP_STRIPE_SIGNATURE']

    event = stripe.Webhook.construct_event(
        payload, sig_header, settings.STRIPE_WEBHOOK_SECRET
    )

    if event['type'] == 'checkout.session.completed':
        session = event['data']['object']
        # 注文を確定処理
        fulfill_order(session)

    return HttpResponse(status=200)
```

```
学習内容:
・Stripeアカウント作成と設定
・Checkout Session（決済ページ）
・Webhookによる決済完了通知
・返金処理
・サブスクリプション（月額課金）

対象業種: 飲食店、小売、EC、サービス業
目標: オンライン決済を実装できる
```

### モジュールB：通知 - Twilio / SendGrid（6〜8時間）

```python
# tasks.py - Celeryでリマインド送信
from celery import shared_task
from twilio.rest import Client
from django.conf import settings

@shared_task
def send_reservation_reminder(phone_number, customer_name, date_time):
    """予約リマインドSMSを送信"""
    client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)

    message = client.messages.create(
        body=f'{customer_name}様、明日 {date_time} のご予約のリマインドです。',
        from_=settings.TWILIO_PHONE_NUMBER,
        to=phone_number
    )
    return message.sid

# スケジュール設定（毎朝9時に翌日の予約をリマインド）
app.conf.beat_schedule = {
    'daily-reminder': {
        'task': 'app.tasks.send_daily_reminders',
        'schedule': crontab(hour='9', minute='0'),
    },
}
```

```
学習内容:
・SMS送信（Twilio）
・メール送信（SendGrid）
・予約リマインドの自動化
・Celery Beatでのスケジュール実行

対象業種: 歯科・医療、自動車整備、美容
目標: 顧客への自動通知を実装できる
```

### モジュールC：LINE - LIFF + Messaging API（12〜18時間）

```
【LIFF = LINE Front-end Framework】

LINEアプリ内でWebページを表示する仕組み
→ 顧客はLINEを開くだけで予約・会員証が使える

┌─────────────────────────────────┐
│ LINE アプリ                        │
│ ┌─────────────────────────────────┐│
│ │ LIFF（Django + HTMXアプリ）    ││
│ │ ・予約フォーム                 ││
│ │ ・会員証表示                   ││
│ │ ・クーポン一覧                 ││
│ └─────────────────────────────────┘│
└─────────────────────────────────┘
          ↓ API
    Django（バックエンド）
          ↓
    Supabase（データベース）
```

```html
<!-- templates/liff_base.html -->
<!-- LIFFはここだけ最小限のJavaScriptが必要 -->
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{% block title %}{% endblock %}</title>
    <script charset="utf-8" src="https://static.line-scdn.net/liff/edge/2/sdk.js"></script>
</head>
<body>
    {% block content %}{% endblock %}

    <script>
    // LIFF SDK初期化（これだけがJavaScript）
    liff.init({ liffId: '{{ liff_id }}' }).then(() => {
        if (!liff.isLoggedIn()) {
            liff.login();
        }
    });
    </script>
</body>
</html>
```

```
学習内容:
・LINE Developersアカウント設定
・LIFF SDKの導入（最小限JS）
・LINEログイン連携
・LINE公式アカウントとの統合
・顧客向けUI（予約、会員証、クーポン）
・Django + HTMXでほぼ全てを実装

対象業種: 顧客接点が必要な全業種（日本国内）
目標: LINE上で動作する顧客向けアプリを作れる
```

### モジュールD-1：AI実装（ノーコード）- AppSheet + Gemini（6〜10時間）

```
【AppSheet + Gemini とは】
Google AI Studio で設計したプロンプトを、
AppSheet上でノーコードでAI機能として実装する方法

┌─────────────────────────────────────────────────────┐
│ Google AI Studio（共通基盤で習得済み）              │
│ → プロンプトの設計・テスト                         │
└─────────────────────────────────────────────────────┘
          ↓ 設計したプロンプトを活用
┌─────────────────────────────────────────────────────┐
│ AppSheet + Gemini                                   │
│ ・画像からのテキスト抽出（OCR）                    │
│ ・問い合わせの自動分類                              │
│ ・センチメント分析                                  │
│ ・商品説明文の自動生成                              │
│ → すべて設定画面から、コード不要                   │
└─────────────────────────────────────────────────────┘
          ↓ データは
┌─────────────────────────────────────────────────────┐
│ Supabase（PostgreSQL）                              │
│ → AppSheetからCloud Database接続で直接読み書き     │
└─────────────────────────────────────────────────────┘

学習内容:
・AppSheet + Gemini の連携設定
・画像分類・テキスト抽出の設定
・自動分類・センチメント分析
・Supabaseとの接続（Cloud Database）

対象: カスタマイズ不要な定型的AI機能
目標: コードを書かずにAI機能を導入できる
```

### モジュールD-2：AI実装（コード）- Django + AI APIs（12〜16時間）

```python
# Google AI Studio の「Get Code」で生成されるコード例
import google.generativeai as genai
import os

genai.configure(api_key=os.environ["GEMINI_API_KEY"])
model = genai.GenerativeModel("gemini-1.5-flash")

def analyze_receipt(image_path):
    """レシート画像を分析（AI Studioで調整したプロンプト）"""
    image = PIL.Image.open(image_path)
    response = model.generate_content([
        "このレシート画像から以下を抽出してJSON形式で返してください：\n"
        "- 店舗名\n- 日付\n- 合計金額\n- 品目リスト",
        image
    ])
    return response.text
```

```python
# views.py - AIパーソナライズ（Claude API）
import anthropic
from django.conf import settings

client = anthropic.Anthropic(api_key=settings.ANTHROPIC_API_KEY)

def get_personalized_recommendation(customer):
    """購買履歴に基づいたおすすめ提案"""
    purchase_history = customer.purchases.order_by('-date')[:10]
    history_text = '\n'.join([
        f"- {p.product.name}（{p.date}）" for p in purchase_history
    ])

    available_products = Product.objects.filter(stock__gt=0)[:20]
    products_text = '\n'.join([
        f"- {p.name}（{p.price}円）" for p in available_products
    ])

    response = client.messages.create(
        model='claude-sonnet-4-20250514',
        max_tokens=1024,
        messages=[{
            'role': 'user',
            'content': f'''以下の顧客の購買履歴に基づいて、おすすめ商品を3つ提案してください。

【購買履歴】
{history_text}

【在庫のある商品】
{products_text}

各おすすめについて、なぜその商品がおすすめなのか理由も添えてください。'''
        }]
    )

    return response.content[0].text

# チャットボット用ビュー
def chatbot_response(request):
    """顧客対応チャットボット"""
    user_message = request.POST.get('message')

    # FAQをベクトル検索（RAG）
    relevant_faqs = search_similar_faqs(user_message)
    context = '\n'.join([f"Q: {faq.question}\nA: {faq.answer}" for faq in relevant_faqs])

    response = client.messages.create(
        model='claude-sonnet-4-20250514',
        max_tokens=1024,
        system=f'''あなたは当店のカスタマーサポートです。
以下のFAQを参考に、お客様の質問に答えてください。

{context}

答えられない質問は「担当者にお繋ぎします」と回答してください。''',
        messages=[{'role': 'user', 'content': user_message}]
    )

    return JsonResponse({'response': response.content[0].text})
```

```
学習内容:
・Google AI Studio「Get Code」→ Django に実装
・Claude API / Gemini API の基本（Pythonで呼び出し）
・顧客対応チャットボット
・購買履歴に基づくおすすめ提案
・画像・PDF分析（レシート読み取り等）
・Supabase pgvector でFAQ検索（RAG基礎）

【学習フロー】
1. AI Studio でプロンプトを試作（共通基盤で習得済み）
2. 「Get Code」でPythonコード取得
3. Django views.py に実装
4. HTMX でUI連携

【D-1との違い】
D-1（AppSheet）: 設定だけ → 手軽だがカスタマイズに限界
D-2（Django）:   コードで実装 → 自由度が圧倒的に高い
  ・複数のAI（Claude + Gemini）を使い分け可能
  ・RAG（知識ベース検索）が可能
  ・独自のビジネスロジックと組み合わせ可能

対象: チャットボット、RAG、パーソナライズなどカスタムAI
目標: AIを活用した顧客体験の向上
```

### モジュールE：PWA強化（4〜6時間）

```
【PWAとは】
Webサイトをアプリのように使えるようにする技術
→ App Storeの審査なしで即配布可能
→ ホーム画面にアイコンが置ける
→ オフラインでも一部機能が使える
```

```python
# views.py - PWA用のmanifest.jsonを動的生成
def manifest(request):
    """PWA用マニフェスト"""
    manifest_data = {
        "name": "店舗名アプリ",
        "short_name": "店舗名",
        "start_url": "/",
        "display": "standalone",
        "background_color": "#ffffff",
        "theme_color": "#0066cc",
        "icons": [
            {"src": "/static/icons/icon-192.png", "sizes": "192x192", "type": "image/png"},
            {"src": "/static/icons/icon-512.png", "sizes": "512x512", "type": "image/png"}
        ]
    }
    return JsonResponse(manifest_data)
```

```javascript
// static/js/service-worker.js（PWA用、これは必要なJS）
const CACHE_NAME = 'v1';
const ASSETS = [
    '/',
    '/static/css/style.css',
    '/offline/'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
            .catch(() => caches.match('/offline/'))
    );
});
```

```
学習内容:
・Service Workerの詳細
・オフライン対応
・プッシュ通知（Web Push API）
・インストールバナーの最適化

対象業種: アプリ配布が必要な業種全般
目標: アプリライクな体験を提供できる
```

### モジュールF：SNS連携 - Meta Graph API（8〜12時間）

```
【できること】
・Instagram投稿の管理・予約投稿
・Facebook ページの管理
・広告効果の測定（インサイト取得）
・カスタムオーディエンス（類似顧客への広告）
・DM・コメントの一元管理

【技術構成】
Meta Graph API       ... 投稿管理、インサイト取得
Meta Marketing API   ... 広告管理、オーディエンス同期
Django Views         ... API連携のハブ
Supabase            ... 顧客データとの紐づけ
```

```python
# views.py - Instagram投稿の取得
import requests
from django.conf import settings

def get_instagram_insights(request):
    """Instagram投稿のインサイトを取得"""
    access_token = settings.META_ACCESS_TOKEN
    ig_user_id = settings.INSTAGRAM_BUSINESS_ACCOUNT_ID

    # 最近の投稿を取得
    url = f"https://graph.facebook.com/v18.0/{ig_user_id}/media"
    params = {
        'fields': 'id,caption,timestamp,like_count,comments_count',
        'access_token': access_token,
        'limit': 10
    }
    response = requests.get(url, params=params)
    posts = response.json().get('data', [])

    return render(request, 'sns/insights.html', {'posts': posts})

def sync_customers_to_audience(request):
    """顧客リストをMeta広告のカスタムオーディエンスに同期"""
    customers = Customer.objects.filter(email__isnull=False)
    # Meta Marketing API でオーディエンス更新
    # → 既存顧客に似た新規顧客へ広告配信
    pass
```

```
学習内容:
・Meta Business Suiteアカウント設定
・Instagram Graph API の基本
・投稿管理・インサイト取得
・カスタムオーディエンス（広告）
・DM一元管理

必要な準備:
・Meta Business Suiteアカウント
・Metaアプリの作成とApp Review
・ビジネス認証（Marketing API使用時）
・プライバシーポリシーの整備

対象業種: 飲食店、美容、アパレル、カフェ
目標: SNSデータとSupabaseを連携し、集客を効率化
```

---

## 共通：本番品質と監視（4〜6時間）

```
・エラートラッキング（Sentry）
  → 本番でエラーが起きたらSlack通知
  → 顧客体験に影響するエラーを即座に検知
・選択モジュールに応じたテスト
  → Stripeテストモード（モジュールA選択時）
  → SMS送信テスト（モジュールB選択時）
  → LIFF動作確認（モジュールC選択時）
・品質レポートの自動生成
  → AIに「今週の品質サマリーを作成して」
  → テストカバレッジの推移
  → エラー発生率の可視化
・セキュリティチェック
  → 顧客データの保護確認
  → APIキーの管理
  → 個人情報の取り扱い

目標: 顧客が安心して使えるアプリを維持できる
```

---

## 共通：実践プロジェクト（15〜20時間）

```
・選択したモジュールを組み合わせて自社アプリを開発
・実際の顧客に使用開始
・効果測定と改善

【プロジェクト例】
歯科（B+C+D-1）:
  LINE予約 + 自動リマインド + 問診AI

飲食店（A+C+E+F）:
  モバイルオーダー + LINE + PWA + Instagram集客

小売（A+D-2+E+F）:
  EC + AIレコメンド + PWA + Instagram連携

美容（B+C+D-1+F）:
  LINE予約 + 来店リマインド + 施術提案AI + Instagram

目標: 実際に顧客が使うアプリを完成させる
```

---

## 学習時間の目安

### 共通部分（全員）

| 内容 | 目安時間 |
|---|---|
| 顧客データベース設計 | 6〜8時間 |
| Google AI Studio | 2〜4時間 |
| 本番品質と監視 | 4〜6時間 |
| 実践プロジェクト | 15〜20時間 |
| **共通小計** | **27〜38時間** |

### 選択モジュール

| モジュール | 目安時間 |
|---|---|
| A: 決済（Stripe） | 8〜12時間 |
| B: 通知（Twilio / SendGrid） | 6〜8時間 |
| C: LINE（LIFF） | 12〜18時間 |
| D-1: AI（AppSheet + Gemini） | 6〜10時間 |
| D-2: AI（Django + AI APIs） | 12〜16時間 |
| E: PWA強化 | 4〜6時間 |
| F: SNS連携（Meta） | 8〜12時間 |

### 業種別の合計時間例

| 業種 | モジュール | 共通 + 選択 |
|---|---|---|
| 歯科（B+C+D-1） | 24〜36時間 | **51〜74時間** |
| 飲食店（A+C+E+F） | 32〜48時間 | **59〜86時間** |
| 小売（A+D-2+E+F） | 32〜46時間 | **59〜84時間** |
| 美容（B+C+D-1+F） | 32〜48時間 | **59〜86時間** |
| 製造業（D-2のみ） | 12〜16時間 | **39〜54時間** |

```
週5時間ペース → 約2〜4.5ヶ月（選択モジュール数による）
週10時間ペース → 約1〜2.5ヶ月（選択モジュール数による）
```

---

## コスト構造

### ツール費用（選択モジュールに応じて変動）

| 項目 | 月額/費用 | モジュール |
|---|---|---|
| Supabase（Pro） | $25 | 共通 |
| Railway / Render | 無料〜$20 | 共通 |
| GitHub Copilot Pro | $10 | 共通 |
| Google AI Studio | 無料 | 共通 |
| Stripe | 決済額の3.6% | A |
| Twilio SMS | 約¥10/通 | B |
| SendGrid | 無料〜$20 | B |
| LINE公式アカウント | 無料〜¥5,000 | C |
| AppSheet | 無料〜$10 | D-1 |
| Claude API | 従量課金（$3-15/100万トークン） | D-2 |
| Gemini API | 無料枠あり | D-1, D-2 |
| Meta Business Suite | 無料（広告費は別途） | F |
| **共通のみ** | **$35〜55** | |
| **全モジュール選択時** | **$60〜120 + 従量** | |

### ROI（投資対効果）

```
【コスト例：月額$80（約12,000円）】

【効果例】
・リピート率5%向上 → 月20人追加来店 × 客単価3,000円 = 60,000円増収
・予約リマインドで無断キャンセル50%減 → 月10件 × 5,000円 = 50,000円損失回避
・問い合わせAI対応 → 月10時間削減 × 時給1,500円 = 15,000円人件費削減
・Instagram効果的運用 → 月間フォロワー増加、新規来店5名 = 15,000円増収

→ 月140,000円の効果 vs 月12,000円のコスト
→ ROI 1,000%以上
```

---

## 注意点・課題

### 1. 決済（Stripe）の注意点 ─ モジュールA

```
・本番運用にはStripeアカウントの本人確認が必要
・資金の入金サイクル（通常1週間程度）を理解
・返金・チャージバック対応のフロー整備
・PCI DSSコンプライアンス（Stripeが対応）
```

### 2. 通知（Twilio/SendGrid）の注意点 ─ モジュールB

```
・SMS送信コストの管理
・オプトアウト（配信停止）機能の実装
・迷惑メール判定を避ける設定
・顧客の同意取得（オプトイン）
```

### 3. LINEミニアプリの注意点 ─ モジュールC

```
・LINE公式アカウントの料金プラン確認
・月間メッセージ数の上限に注意
・LINEのガイドライン遵守
・LIFF SDK初期化には最小限JSが必要
```

### 4. AIの注意点 ─ モジュールD

```
・AIは間違える（ハルシネーション）
・重要な対応は人間のバックアップ付き
・顧客データをAIに送る際のプライバシー考慮
・API利用料のモニタリング
・D-1（AppSheet）とD-2（Django）の使い分け判断
```

### 5. SNS連携の注意点 ─ モジュールF

```
・Meta App Reviewの審査が必要（数日〜数週間）
・アクセストークンの有効期限管理
・APIの利用制限（レートリミット）に注意
・プライバシーポリシーの整備が必須
・広告機能利用時はビジネス認証が必要
```

---

## ゴールドとの技術継承

### 100%活用される技術

```
【ブロンズ〜ゴールドで習得済み】
✓ Pydantic（データ検証 ← ブロンズから継続）
✓ Django + HTMX（UI構築）
✓ Supabase（PostgreSQL + JSONB + Realtime）
✓ Django ORM + JSONField（データ操作）
✓ CI/CD（GitHub Actions ← シルバーから継続）
✓ requests/httpx（外部API連携）
✓ Celery（バックグラウンド処理）
✓ LINE API, freee API等
✓ PWA（アプリ化の基礎）
✓ GitHub Codespaces + Copilot
✓ pytest + Playwright（テスト）

【プラチナで追加（選択モジュールに応じて）】
+ Google AI Studio（共通）
+ Stripe SDK（A）
+ Twilio/SendGrid SDK（B）
+ LIFF SDK（C）
+ AppSheet + Gemini（D-1）
+ Claude API / Gemini API + pgvector（D-2）
+ Service Worker 強化（E）
+ Meta Graph API（F）

→ 新しい言語やフレームワークの学び直しは不要
→ 追加するのは「顧客との接点」を作るSDK・APIのみ
→ すべてPythonで完結（LIFFの初期化のみ最小限JS）
→ 自社に必要なものだけを選んで学ぶ
```

---

## まとめ

### プラチナの本質

```
「顧客接点・顧客体験の強化」
〜 お客様がまた来たくなる仕組みを 〜

共通基盤:
・顧客データベース設計
・Google AI Studio でプロンプト設計

自社に合わせて選択:
・決済（Stripe）
・通知（Twilio / SendGrid）
・LINE（LIFF）
・AI（AppSheet + Gemini or Django + AI APIs）
・PWA強化
・SNS連携（Meta）
```

### ブロンズ〜ゴールドとの違い

```
ブロンズ〜ゴールド: 全員が全部学ぶ（基礎の土台）
プラチナ: 自社に必要なものを選んで学ぶ（実践の応用）

→ 業種・職種・顧客特性に応じた最適な組み合わせ
→ 不要なモジュールに時間を使わない
→ 「作ることを目的にしない」思想の体現
```

### 期待される成果

```
プラチナ修了者は:
・自社に必要な顧客接点の技術を選択・導入できる
・Google AI Studio でAIプロンプトを設計できる
・選択したモジュールを組み合わせた顧客向けアプリを構築できる
・本番環境の品質を監視・維持できる
・SNSとシステムを連携した集客ができる

→ 中小企業の「顧客体験」を変革できる人材
→ 「お客様がまた来たくなる」仕組みを構築できる
→ ダイヤモンドへの準備が整った状態
```

---

## ダイヤモンドへの接続

### プラチナ修了時点で蓄積されたデータ

```
【蓄積データ】
・売上、在庫、勤怠（シルバー・ゴールド）
・顧客データ、購買履歴、来店頻度（プラチナ共通）
・決済データ（モジュールA選択時）
・通知の開封率・効果（モジュールB選択時）
・LINE利用データ（モジュールC選択時）
・AI対応履歴（モジュールD選択時）
・SNSインサイト（モジュールF選択時）

→ 選択したモジュールに応じてデータが蓄積される
→ これらのデータが「宝の山」として眠っている
→ ダイヤモンドで分析力を加え、事業価値に変える
```

### 技術の積み上げ

```
【プラチナで習得】
・顧客データの設計と蓄積
・AI Studio でのプロンプト設計
・各種API連携のスキル

    ↓ そのまま活きる

【ダイヤモンド】
・scikit-learn（機械学習）
・Prophet（時系列予測）
・Streamlit（分析ダッシュボード）
・業種別のデータ活用パターン

→ ブロンズのPython + pandasが再び主力に
→ 蓄積データから「次の一手」を見つける
```

---

## 付録：プラチナ導入チェックリスト

### 事前準備（ゴールド修了後）
- [ ] 顧客向けアプリの要件整理
- [ ] 業種・顧客特性に基づくモジュール選定
- [ ] 選択フローチャートでモジュール確定

### 共通基盤
- [ ] 顧客データベースの設計（Django ORM）
- [ ] Google AI Studio でプロンプト設計の練習

### モジュールA（決済）選択時
- [ ] Stripeアカウント作成
- [ ] Checkout Sessionの実装
- [ ] Webhook（決済完了通知）の実装

### モジュールB（通知）選択時
- [ ] Twilioアカウント作成
- [ ] SMS/メール送信の実装
- [ ] 予約リマインドの自動化（Celery Beat）

### モジュールC（LINE）選択時
- [ ] LINE Developersアカウント作成
- [ ] LINE公式アカウント作成
- [ ] LIFFアプリの作成
- [ ] LIFF SDK導入（最小限JS）

### モジュールD-1（AI・ノーコード）選択時
- [ ] AppSheet + Gemini の連携設定
- [ ] AI機能の設定（画像分類、テキスト抽出等）
- [ ] Supabase との接続設定

### モジュールD-2（AI・コード）選択時
- [ ] Claude API / Gemini API の導入
- [ ] 顧客対応チャットボット
- [ ] おすすめ提案の実装
- [ ] pgvectorでFAQ検索

### モジュールE（PWA）選択時
- [ ] Service Workerの強化
- [ ] オフライン対応
- [ ] インストールバナーの最適化

### モジュールF（SNS）選択時
- [ ] Meta Business Suiteアカウント設定
- [ ] Metaアプリの作成とApp Review
- [ ] Instagram Graph API の連携

### 本番品質と監視
- [ ] Sentryの導入
- [ ] エラー通知の設定（Slack連携）
- [ ] 選択モジュールに応じたテスト
- [ ] セキュリティチェック

### 実践プロジェクト
- [ ] 選択モジュールを組み合わせたアプリ開発
- [ ] テスト運用
- [ ] 実際の顧客への提供開始
- [ ] 効果測定と改善

---

*本ドキュメントは技術選定の議論を経て作成されました。*
*最終更新: 2026年2月*
