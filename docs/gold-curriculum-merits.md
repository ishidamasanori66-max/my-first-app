# ゴールドカリキュラム：技術選定とメリット総括

## 概要

本ドキュメントは、中小企業向けAI伴走型開発教育「ゴールドカリキュラム」における技術選定の根拠と、各視点からのメリットをまとめたものです。

---

## 設計思想

```
【コンセプト】
「社内システムの統合と自動化」
〜 二重入力をゼロに、すべてをシームレスに 〜

・シルバーで作ったアプリと既存システムを連携
・手作業での転記・照合をなくす
・すべてのデータを一元管理
・自動で繋がる業務フロー
```

---

## 5ステージの一貫したストーリー

| ステージ | コンセプト | 改善対象 |
|---|---|---|
| ブロンズ | 「あなたの3時間を5分に」 | 個人の業務 |
| シルバー | 「Excelを送る業務をなくす」 | 組織の業務プロセス |
| **ゴールド** | **「二重入力をゼロに」** | **社内システム全体** |
| プラチナ | 「お客様がまた来たくなる仕組みを」 | 顧客接点・顧客体験 |
| ダイヤモンド | 「データが次の一手を教えてくれる」 | 事業価値の創出 |

```
【内から外へ、そしてデータから未来へ】
Bronze  → 自分の業務を効率化
Silver  → 社内の情報共有をデジタル化
Gold    → 社内システム同士を繋ぐ
Platinum → 顧客との接点を作る・強化する
Diamond → 蓄積データから次の一手を見つける
```

---

## カリキュラム全体における位置づけ

| ステージ | 技術スタック | 改善対象 | ゴール |
|---|---|---|---|
| ブロンズ | Python + Pandas + Pydantic + sqlite3 | 個人の業務 | Excel業務の自動化 + データ検証 |
| シルバー | AppSheet → Django + HTMX + Supabase (JSONB) + Realtime | 組織の業務プロセス | 業務アプリを構築 |
| **ゴールド** | **+ requests/httpx + Celery + 外部API + PWA** | **社内システム全体** | **システム統合と自動化** |
| プラチナ | + 選択モジュール（決済・LINE・AI等） | 顧客接点・顧客体験 | 顧客体験の強化 |
| ダイヤモンド | + scikit-learn + Prophet + Streamlit | 事業価値の創出 | データ駆動経営 |

---

## シルバーからゴールドへ

### シルバー修了時点の状況

```
【できていること】
・AppSheetでプロトタイプ → Djangoで本実装の流れが身についている
・Django + HTMXによる自作の業務アプリが動いている
・データはSupabase（PostgreSQL + JSONB）に蓄積
・Supabase Realtimeでリアルタイム同期
・Looker Studioで経営ダッシュボード
・CI/CD（GitHub Actions）で安全にデプロイ

【残っている課題】
・freee（会計）には別途手入力
・LINE通知は手動で送信
・既存システムとの照合は手作業
・定期レポートは手動で作成・送付
```

### ゴールドで解決

```
【After】
・freeeに自動連携（二重入力ゼロ）
・条件に応じてLINE自動通知
・システム間でデータ自動同期
・定期レポートを自動生成・配信

→ 「すべてが繋がって自動で回る」
```

---

## Before / After 事例

### 事例1：売上管理（小売・飲食）

```
【Before】
1. Djangoアプリに売上を入力
2. freeeにも同じ売上を手入力
3. 月末にExcelで照合
4. 差異があれば修正
→ 毎日15分の二重入力 + 月末2時間の照合

【After】
1. Djangoアプリに売上を入力（1回だけ）
2. → freeeに自動連携（requests + freee API）
3. → 差異があればSlackに自動通知
→ 二重入力ゼロ、月末照合ゼロ

【効果】
・毎日15分 × 20日 = 月5時間の削減
・月末2時間の照合がゼロ
・入力ミスによる差異がなくなる
```

### 事例2：予約管理（歯科・サービス業）

```
【Before】
1. Djangoアプリで予約受付
2. Googleカレンダーに手動で転記
3. 前日にリマインドを手動でLINE送信
4. 来院後にDjangoアプリのステータスを更新
→ 毎日30分の転記・連絡作業

【After】
1. Djangoアプリで予約受付
2. → Googleカレンダーに自動登録（Google Calendar API）
3. → 前日にLINEで自動リマインド（Celery定期実行）
4. → 未来院者に自動フォローアップ
→ 予約以降すべて自動

【効果】
・転記作業ゼロ
・リマインド漏れゼロ
・来院率の向上（リマインド効果）
・スタッフは患者対応に集中できる
```

### 事例3：受発注管理（卸売・製造）

```
【Before】
1. Djangoアプリで受注入力
2. 在庫を確認して発注判断
3. 発注書をExcelで作成
4. メールで仕入先に送信
5. freeeに仕入れを手入力
→ 1件あたり30分、月50件で25時間

【After】
1. Djangoアプリで受注入力
2. → 在庫が閾値を下回ったら自動アラート
3. → 発注書をPDF自動生成（WeasyPrint）
4. → メール自動送信（承認後）
5. → freeeに自動連携
→ 承認ボタンを押すだけ

【効果】
・月25時間 → 月2時間（承認のみ）
・発注漏れゼロ
・仕入データの自動記帳
```

### 事例4：勤怠・給与連携（全業種）

```
【Before】
1. Djangoアプリで勤怠管理
2. 月末にCSV出力
3. freeeに勤怠データをインポート
4. 手動で確認・修正
5. 給与計算を実行
→ 月末に総務が3時間

【After】
1. Djangoアプリで勤怠管理
2. → 月末にfreeeへ自動連携（Celery定期実行）
3. → 異常値は自動検出・Slack通知
4. → 総務は確認・承認のみ
→ 月末の作業が30分に

【効果】
・月末3時間 → 30分
・転記ミスゼロ
・異常値の早期発見
```

### 事例5：日報→経営ダッシュボード（多店舗経営）

```
【Before】
1. 各店舗がDjangoアプリで日報入力（シルバーで実現済み）
2. 経営者はDjangoアプリのダッシュボードで確認
3. でも会計データ（freee）は別画面で確認
4. 天気・イベント情報も別途確認
5. 総合的な判断は経営者の頭の中
→ 複数画面を行き来、判断は感覚

【After】
1. 各店舗がDjangoアプリで日報入力
2. → freeeの会計データを自動取得
3. → 天気API、カレンダーAPIと連携
4. → 統合ダッシュボードで一画面表示
5. → 週次レポートを自動生成・メール配信
→ すべての情報が一画面に集約

【効果】
・情報収集の時間がゼロ
・データに基づいた意思決定
・週次レポートの自動化
```

---

## 職種別：ゴールドの恩恵

### 営業職

| Before（シルバー時点） | After（ゴールド） |
|---|---|
| Django CRMで顧客管理 | CRMから直接メール自動送信 |
| メール送信は別ツール | 見積書をアプリ内で自動生成 |
| 見積書はExcelで作成 | 商談ステータス変更→Slackに自動通知 |

### 事務職・経理

| Before（シルバー時点） | After（ゴールド） |
|---|---|
| Djangoアプリで申請管理 | 承認完了→freeeに自動連携 |
| freeeへの転記は手動 | 月次レポートを自動生成・配信 |
| 月次集計は手動でレポート | 異常値を自動検出・通知 |

### 店舗スタッフ

| Before（シルバー時点） | After（ゴールド） |
|---|---|
| Djangoアプリで日報入力 | 在庫アラートがLINEに自動通知 |
| LINEでの連絡は手動 | シフト変更→関係者に自動通知 |
| シフト変更は口頭連絡 | 日報入力→本部に自動サマリー送信 |

### 経営者・管理職

| Before（シルバー時点） | After（ゴールド） |
|---|---|
| Djangoダッシュボードで業務データ確認 | 全システムのデータを統合ダッシュボード |
| 会計データはfreeeで別画面 | 毎朝、主要KPIをSlack/メールに自動配信 |
| 複数ツールを行き来 | 異常値（売上急落、在庫不足等）は即座にアラート |

```
→ 「見に行く」から「届く」へ
→ データドリブン経営の実現
```

---

## 技術スタック

### コア構成

```
Django + HTMX           ... Webアプリ（シルバーから継続）
Supabase                ... データベース（シルバーから継続）
requests / httpx        ... 外部API連携（Python標準的な方法）
Celery + Redis          ... バックグラウンド処理・定期実行
外部API                  ... LINE, Slack, freee, Google 等
GitHub Codespaces       ... 開発環境
GitHub Copilot          ... AI伴走開発
```

### 新たに習得する技術

| 技術 | 役割 | 学習時間目安 |
|---|---|---|
| **requests / httpx** | 外部API呼び出し | 4〜6時間 |
| **外部API連携** | LINE, freee, Google等との接続 | 10〜15時間 |
| **Webhook受信** | 外部サービスからの通知受け取り | 4〜6時間 |
| **Celery** | バックグラウンド処理・定期実行 | 6〜8時間 |
| **PWA** | アプリ化（ホーム画面追加） | 4〜6時間 |

### なぜ requests / Celery か

```
【シルバーとの一貫性】
シルバー: Python（Django）
ゴールド: Python（requests, Celery）
→ 新しい言語の学習不要

【他の選択肢との比較】
Supabase Edge Functions: JavaScript/TypeScript が必要
iPaaS (Zapier等): コードを書かない → 自律性が育たない

→ Python で一貫して「自分で作れる力」を育てる
```

---

## 外部API連携の実装例

### LINE Messaging API（Python）

```python
# views.py - LINE通知を送信
import requests

def send_line_notification(user_id, message):
    url = 'https://api.line.me/v2/bot/message/push'
    headers = {
        'Content-Type': 'application/json',
        'Authorization': f'Bearer {settings.LINE_CHANNEL_TOKEN}'
    }
    data = {
        'to': user_id,
        'messages': [{'type': 'text', 'text': message}]
    }
    response = requests.post(url, headers=headers, json=data)
    return response.status_code == 200
```

### freee API（会計連携）

```python
# tasks.py - Celeryタスクで売上をfreeeに連携
from celery import shared_task
import requests

@shared_task
def sync_sales_to_freee(sale_id):
    sale = Sale.objects.get(id=sale_id)

    # freee APIに売上を登録
    response = requests.post(
        'https://api.freee.co.jp/api/1/deals',
        headers={'Authorization': f'Bearer {get_freee_token()}'},
        json={
            'company_id': settings.FREEE_COMPANY_ID,
            'issue_date': sale.date.isoformat(),
            'type': 'income',
            'details': [{
                'account_item_id': 1,
                'amount': sale.amount,
                'description': sale.description
            }]
        }
    )
    return response.status_code == 201
```

### Celery 定期実行（月次レポート）

```python
# tasks.py - 毎月1日に自動実行
from celery import shared_task
from celery.schedules import crontab
from django.core.mail import send_mail

@shared_task
def generate_monthly_report():
    # 先月のデータを集計
    last_month = date.today().replace(day=1) - timedelta(days=1)
    sales = Sale.objects.filter(date__month=last_month.month)
    total = sales.aggregate(Sum('amount'))['amount__sum']

    # レポートをメール送信
    send_mail(
        subject=f'{last_month.strftime("%Y年%m月")} 月次レポート',
        message=f'売上合計: {total:,}円',
        from_email='system@example.com',
        recipient_list=['manager@example.com'],
    )

# celery.py - スケジュール設定
app.conf.beat_schedule = {
    'monthly-report': {
        'task': 'app.tasks.generate_monthly_report',
        'schedule': crontab(day_of_month='1', hour='9', minute='0'),
    },
}
```

---

## PWA（Progressive Web App）

### 概要

```
Webアプリを「アプリっぽく」する技術
・ホーム画面に追加できる
・オフラインでも動作可能（一部）
・プッシュ通知が送れる
・アプリストア不要
```

### Django での実装

```python
# settings.py
INSTALLED_APPS = [
    ...
    'pwa',
]

# manifest.json を static/ に配置
{
    "name": "業務アプリ",
    "short_name": "業務",
    "start_url": "/",
    "display": "standalone",
    "icons": [
        {"src": "/static/icon-192.png", "sizes": "192x192", "type": "image/png"}
    ]
}
```

```html
<!-- base.html -->
<head>
    <link rel="manifest" href="{% static 'manifest.json' %}">
    <meta name="theme-color" content="#4A90D9">
</head>
```

### ゴールドでの位置づけ

```
【必須】PWA化（社内スタッフ向け）
・追加工数: 数時間
・効果: スマホでアプリっぽく使える
・用途: 営業の外出先入力、倉庫スタッフの在庫確認等
→ ゴールド修了の標準スキルに含める

※ 顧客向けアプリ（LIFF）はプラチナで扱う
```

---

## iPaaS との比較

### Edge Functions / iPaaS ではなく Python を選ぶ理由

| 観点 | Python (requests + Celery) | iPaaS |
|---|---|---|
| 言語の一貫性 | ◎ ブロンズからPython統一 | × 別ツールを学ぶ |
| 学習効果 | ◎ 仕組みを理解 | △ 使い方だけ |
| 自由度 | ◎ 何でも作れる | ○ 用意された範囲 |
| 構築速度 | △ 時間かかる | ◎ すぐできる |
| 運用コスト | ◎ ほぼ無料 | △ 月額課金 |
| 保守 | ○ 自社で対応 | △ ツール依存 |
| 独自ロジック | ◎ 対応可能 | △ 限界あり |

### Python を選ぶ理由

```
1. カリキュラムの一貫性
   ブロンズ: Python + Pydantic
   シルバー: Python（Django + JSONB + Realtime）
   ゴールド: Python（requests, Celery）
   → 全ステージで「Pythonで解決できる人」を育てる

2. 自律の実現
   iPaaS → ツールに依存する人が育つ
   Python → 自分で何でも作れる人が育つ

3. コスト優位性
   iPaaS → 月額費用が継続
   Celery → Railway / Render の無料〜低額プランで十分
```

---

## カリキュラム構成

### 第1部：外部API連携の基礎（8〜10時間）

```
・APIとは何か（REST APIの基本）
・認証の仕組み（APIキー、OAuth）
・requests / httpx の使い方
・エラーハンドリング・リトライ

目標: APIの基本概念を理解し、簡単な連携ができる
```

### 第2部：主要API連携（12〜16時間）

```
・LINE Messaging API（通知・リマインダー）
・Slack Webhook（チーム通知）
・Google Sheets API（データ連携）
・Google Calendar API（予定管理）
・OpenAI API / Claude API（AI機能統合）
・freee API（会計連携）

目標: 主要な外部サービスと連携できる
```

### 第3部：自動化とバックグラウンド処理（8〜10時間）

```
・Celery の仕組み（タスクキュー）
・定期実行（Celery Beat）
・Webhook の受信（Django View で対応）
・非同期処理の設計
・統合ダッシュボード構築

目標: 複数システムを繋いで自動化できる
```

### 第4部：PWA化（4〜6時間）

```
・PWAの概念と利点
・manifest.json の作成
・Service Worker の基礎
・オフライン対応
・ホーム画面追加の設定

目標: Webアプリをアプリっぽく配布できる
```

### 第5部：テスト強化と品質確保（4〜6時間）

```
・シルバーCI/CDの発展（GitHub Actions パイプライン拡張）
  → シルバーで構築した基盤を活用
・E2Eテストの基礎（Playwright）
  → 「ログイン→データ登録→確認」のシナリオテスト
  → AIにテストコードを書かせる
・API連携のテスト
  → モック / VCR パターンで外部API をテスト
・テスト計画の考え方
  → 何をテストすべきか（重要度ベース）
  → 自動テストと手動確認の使い分け

目標: API連携を含むシステム全体の品質を自動で担保する
```

### 第6部：実践プロジェクト（10〜15時間）

```
・自社システムの統合
・既存システムとの連携実装
・自動化フローの構築
・運用開始と改善

目標: 実際の業務システムを統合し、自動化を実現する
```

---

## 学習時間の目安

| 部 | 内容 | 目安時間 |
|---|---|---|
| 第1部 | 外部API連携の基礎 | 8〜10時間 |
| 第2部 | 主要API連携 | 12〜16時間 |
| 第3部 | 自動化とバックグラウンド処理 | 8〜10時間 |
| 第4部 | PWA化 | 4〜6時間 |
| 第5部 | テスト強化と品質確保 | 4〜6時間 |
| 第6部 | 実践プロジェクト | 10〜15時間 |
| **合計** | | **46〜63時間** |

```
週5時間ペース → 約2.5〜3ヶ月
週10時間ペース → 約1〜1.5ヶ月
```

---

## コスト構造

### ツール費用（ゴールド）

| 項目 | 月額 |
|---|---|
| Railway / Render（Django + Celery） | $5〜15 |
| Supabase（PostgreSQL） | 無料〜$25 |
| Redis（Celery用） | Railway / Render に含む |
| 外部API | 従量課金（少額） |
| **合計** | **$10〜50程度** |

### iPaaSとの比較

| ツール | 月額 |
|---|---|
| JENKA | 要問合せ（数万円〜） |
| Zapier | $20〜$100+ |
| Make | $10〜$50+ |

**→ Python で自作することで長期的なコスト優位性**

---

## プラチナへの接続

### ゴールド修了時点の状況

```
【できていること】
・Djangoアプリと既存システムが連携
・データの自動同期
・定期レポートの自動配信
・PWA化でスマホ対応（社内スタッフ向け）

【次の課題】
・顧客との接点がまだアナログ（電話、店頭のみ）
・顧客向けアプリ・サービスがない
・リピート促進が人手頼み
・顧客体験の向上が必要

→ これがプラチナで解決する
```

### 技術の積み上げ

```
【ゴールドで習得】
・requests / httpx（外部API連携）
・Celery（バックグラウンド処理・定期実行）
・Webhook受信
・PWA（アプリ化の基礎）

    ↓ そのまま活きる（Python のまま！）

【プラチナ】
・Stripe（決済）
・LINE Messaging API（本格活用）
・LIFF（LINEミニアプリ ← 最小限のJS）
・Claude API（AIパーソナライズ）

→ 顧客接点・顧客体験を強化
```

---

## まとめ

### ゴールドの本質

```
「社内システムの統合と自動化」

・二重入力をゼロにする
・すべてのシステムをシームレスに繋ぐ
・手作業の転記・照合をなくす
・データドリブン経営の基盤を作る
```

### 技術スタック

```
Django + HTMX + Supabase (JSONB + Realtime) + requests + Celery + PWA

・シルバーの技術（Python + JSONB + Realtime + CI/CD）をすべて継続活用
・追加するのは「繋ぐ技術」と「自動化」のみ
・PWAで社内スタッフ向けモバイル対応
・プラチナで顧客向けアプリへ発展
```

### 期待される成果

```
ゴールド修了者は:
・外部システムとの連携ができる（Python で）
・業務の自動化ができる（Celery で）
・データの統合・一元管理ができる
・PWAでアプリ配布ができる
・CI/CDで品質を自動で担保できる
・iPaaSに頼らず自力で解決できる

→ 中小企業のDXを推進できる人材
→ 「すべてが繋がる」システムを構築できる
→ プラチナへの準備が整った状態
```

---

## 付録：ゴールド導入チェックリスト

### 事前準備（シルバー修了後）
- [ ] 連携したい外部システムの洗い出し
- [ ] 各サービスのAPI仕様書確認
- [ ] APIキー・認証情報の取得
- [ ] 自動化したい業務フローの整理

### 第1〜3部（API連携・自動化）
- [ ] requests / httpx の基本操作習得
- [ ] 主要API連携の実装（LINE, freee等）
- [ ] Celery のセットアップ
- [ ] 定期実行タスクの実装
- [ ] 統合ダッシュボードの構築

### 第4部（PWA化）
- [ ] manifest.json の作成
- [ ] Service Worker の設定
- [ ] アイコンの作成
- [ ] 動作確認（ホーム画面追加）

### 第5部（テスト強化と品質確保）
- [ ] シルバーCI/CDパイプラインの拡張
- [ ] E2Eテスト（Playwright）の導入
- [ ] API連携テスト（モック / VCR）
- [ ] テスト計画の作成

### 実践プロジェクト
- [ ] 既存システムとの連携実装
- [ ] 自動化フローの構築
- [ ] 運用開始
- [ ] フィードバック収集・改善
- [ ] プラチナへの要件検討（顧客向けアプリの必要性）

---

*本ドキュメントは技術選定の議論を経て作成されました。*
*最終更新: 2026年2月*
