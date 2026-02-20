# シルバーカリキュラム：技術選定とメリット総括

## 概要

本ドキュメントは、中小企業向けAI伴走型開発教育「シルバーカリキュラム」における技術選定の根拠と、各視点からのメリットをまとめたものです。

---

## 設計思想

```
【コンセプト】
「Excelを送る業務をなくす」
〜 組織の業務プロセスをデジタル化 〜

・データ収集からデジタル化
・Webアプリで業務フロー全体を改善
・リアルタイムでの情報共有・可視化
・プロトタイプで検証 → 本実装へ
```

### 学習の流れ

```
┌─────────────────────────────────────────────────────────────────┐
│                   シルバーの学習ステップ                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  【第1部】AppSheet でプロトタイピング                           │
│  ・ノーコードで素早くアプリを作成                               │
│  ・データ構造を視覚化して理解                                   │
│  ・現場で試用してフィードバック収集                             │
│                                                                 │
│      ↓ プロトタイプで要件が固まったら                          │
│                                                                 │
│  【第2部】ハイブリッドDB実装（Supabase RDB + JSONB）            │
│  ・リレーショナルDB + 柔軟なJSONB                               │
│  ・ブロンズで学んだPydanticでデータ検証                         │
│                                                                 │
│      ↓ データ基盤が整ったら                                    │
│                                                                 │
│  【第3部】Django + HTMX（Webアプリ実装）                        │
│  ・Pythonで本格的なWebアプリを開発                              │
│  ・AppSheetでは実現できない独自ロジック                         │
│                                                                 │
│      ↓ アプリが動いたら                                        │
│                                                                 │
│  【第4部】Supabase Realtime + Looker Studio                     │
│  ・リアルタイム同期でデータを即時反映                           │
│  ・経営ダッシュボードで可視化                                   │
│                                                                 │
│      ↓ 本番運用に向けて                                        │
│                                                                 │
│  【第5部】環境分離と自動化（CI/CD）                             │
│  ・開発・ステージング・本番の3層分離                            │
│  ・GitHub Actions で自動テスト・デプロイ                        │
│                                                                 │
│      ↓ 実践へ                                                  │
│                                                                 │
│  【第6部】実践プロジェクト                                      │
│  ・自社の業務課題を解決するアプリを完成                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## ブロンズとシルバーの違い

### 改善対象の違い

| ステージ | 改善対象 | キャッチコピー |
|---|---|---|
| **ブロンズ** | 個人の業務（Excel処理の効率化） | 「あなたの3時間を5分に」 |
| **シルバー** | 組織の業務プロセス（データ収集からデジタル化） | 「Excelを送る業務をなくす」 |

### 図解

```
【ブロンズ】個人の業務改善
                    ┌─────────────────┐
既存のExcel ───────→│ 集計・分析・可視化 │───→ レポート
                    └─────────────────┘
                         ↑
                    ここを効率化


【シルバー】組織の業務プロセス改善
┌─────────────┐      ┌─────────────┐      ┌─────────────┐
│ プロトタイプ  │ ──→ │  データベース  │ ──→ │ 本格Webアプリ │
│  （AppSheet） │      │  （Supabase） │      │ （Django）   │
└─────────────┘      └─────────────┘      └─────────────┘
    ↑                     ↑                     ↑
  素早く検証           JSONB + RDB          リアルタイム同期

    └───────────── 業務プロセス全体を改善 ─────────────┘
```

---

## カリキュラム全体における位置づけ

| ステージ | 技術スタック | 改善対象 | ゴール |
|---|---|---|---|
| ブロンズ | Python + Pandas + Pydantic + sqlite3 | 個人の業務 | Excel業務の自動化 + データ検証 |
| **シルバー** | **AppSheet → Django + HTMX + Supabase (JSONB) + Realtime** | **組織の業務プロセス** | **業務アプリを構築** |
| ゴールド | + 外部API連携 + Celery + PWA基礎 | 社内システム全体 | システム統合と自動化 |
| プラチナ | + 選択モジュール（決済・LINE・AI等） | 顧客接点・顧客体験 | 顧客体験の強化 |
| ダイヤモンド | + scikit-learn + Prophet + Streamlit | 事業価値の創出 | データ駆動経営 |

---

## ブロンズからの接続

### 言語とスキルの継続性

```
【ブロンズで習得】
・Python を使って Excel を自動処理
・sqlite3 で SQL の基礎を習得
・Pydantic でデータ検証（型チェック）
・JSON でデータ構造を理解

    ↓ すべてがシルバーで活きる！

【シルバーで活用】
・Python（Django）を使って Web アプリ開発
・Supabase（PostgreSQL）で同じ SQL を活用
・Pydantic でAPIリクエスト/レスポンスを検証
・JSONB で柔軟なデータ構造を実現

→ 新しい言語を学ばなくてよい
→ ブロンズの知識が100%活きる
```

### Pydantic の継続活用

```python
# ブロンズで習得した Pydantic
from pydantic import BaseModel, field_validator

class 売上データ(BaseModel):
    店舗名: str
    日付: str
    金額: int

    @field_validator('金額')
    @classmethod
    def 金額は正の数(cls, v):
        if v < 0:
            raise ValueError('金額は0以上')
        return v

# シルバーでも同じように使える
# → Django REST API のリクエスト検証
# → Supabase に保存前のバリデーション
```

### SQLスキルの継続活用

```
【ブロンズ】sqlite3 で習得
SELECT 店舗名, SUM(売上) as 合計
FROM sales
WHERE 日付 >= '2024-01-01'
GROUP BY 店舗名

【シルバー】Django ORM + Supabase（PostgreSQL）
# SQLライクに書ける
Sales.objects.filter(日付__gte='2024-01-01') \
    .values('店舗名') \
    .annotate(合計=Sum('売上'))

# 生SQLも使える（慣れた書き方で）
Sales.objects.raw('''
    SELECT 店舗名, SUM(売上) as 合計
    FROM sales
    WHERE 日付 >= '2024-01-01'
    GROUP BY 店舗名
''')

→ ブロンズで学んだSQLがそのまま使える！
```

---

## 技術スタック

### 全体構成

```
【プロトタイピング】
AppSheet              ... ノーコードでプロトタイプ作成

【データベース】
Supabase              ... PostgreSQL + JSONB + Realtime
Pydantic              ... データ検証（ブロンズから継続）

【Webアプリ開発】
Django + HTMX         ... Webアプリケーション
GitHub Codespaces     ... ブラウザ開発環境
GitHub Copilot        ... AI伴走

【可視化】
Looker Studio         ... 経営ダッシュボード

【運用】
GitHub Actions        ... CI/CD（自動テスト・デプロイ）
Railway / Render      ... ホスティング
```

### 各技術の役割

| 技術 | 役割 | 特徴 |
|---|---|---|
| **AppSheet** | プロトタイピング | ノーコードで素早く検証 |
| **Supabase** | データベース | PostgreSQL + JSONB + Realtime |
| **Pydantic** | データ検証 | ブロンズから継続、型安全 |
| **Django** | Webフレームワーク | Python製、Admin自動生成 |
| **HTMX** | 動的UI | JSを書かずに動的処理 |
| **Looker Studio** | ダッシュボード | 経営者向け可視化 |
| **GitHub Actions** | CI/CD | 自動テスト・デプロイ |

---

## 第1部：AppSheet でプロトタイピング

### なぜプロトタイプから始めるか

```
【従来のアプローチ】
要件定義 → 設計 → 実装 → テスト → リリース
→ 「思っていたのと違う」が最後に発覚
→ 手戻りコストが大きい

【シルバーのアプローチ】
AppSheet でプロトタイプ → 現場で試用 → フィードバック → Django で本実装
→ 「思っていたのと違う」が早期に発覚
→ 本実装前に軌道修正できる
```

### AppSheet とは

```
Googleが提供するノーコード開発プラットフォーム
・コードを書かずにアプリを作成
・スマホでの入力に最適化
・バーコード読み取り、GPS、カメラが標準装備
・承認ワークフローも設定だけで実現
```

### AppSheet → Supabase 接続

```
【接続方式】
AppSheetのデータソース設定で「Cloud Database (PostgreSQL)」を選択し、
Supabaseの接続情報（ホスト名、ポート、ユーザー名、パスワード）を入力。

【メリット】
・プロトタイプ段階からSupabaseにデータが蓄積
・Django移行時にデータ移行不要
・AppSheetとDjangoの並行運用も可能
```

### プロトタイピングで確認すること

```
✓ データ構造は適切か（テーブル設計の検証）
✓ 入力項目は過不足ないか
✓ 承認フローは業務に合っているか
✓ 現場スタッフが使いこなせるか
✓ 本当に必要な機能は何か

→ これらが明確になってからDjango実装へ
```

### 学習内容（8〜10時間）

```
・AppSheetアカウント作成
・Supabase（PostgreSQL）への接続設定
・日報入力アプリの作成
・バーコード読み取り、GPS、カメラの活用
・承認ワークフローの設定
・現場での試用とフィードバック収集

目標: 1日で現場に投入できるプロトタイプを作る
```

---

## 第2部：ハイブリッドDB実装（Supabase RDB + JSONB）

### なぜハイブリッドDBか

```
【従来の選択肢】
リレーショナルDB（PostgreSQL）: 構造が固定、変更が大変
ドキュメントDB（MongoDB等）: 柔軟だが集計が苦手

【ハイブリッドDB】
PostgreSQL の JSONB カラム
= リレーショナル + ドキュメントの良いとこ取り

・コアデータ: 通常カラム（厳格に管理）
・拡張データ: JSONB カラム（柔軟に対応）
```

### 具体例：顧客管理

```sql
-- テーブル設計
CREATE TABLE customers (
    -- コアデータ（変更されにくい、集計に使う）
    id UUID PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT,
    created_at TIMESTAMP DEFAULT NOW(),

    -- 拡張データ（業種により異なる、柔軟に追加）
    metadata JSONB DEFAULT '{}'
);

-- 歯科の場合
UPDATE customers SET metadata = '{
    "担当医": "山田",
    "次回予約": "2026-03-15",
    "治療履歴": ["虫歯治療", "クリーニング"]
}' WHERE id = '...';

-- 小売の場合
UPDATE customers SET metadata = '{
    "会員ランク": "ゴールド",
    "ポイント": 1500,
    "お気に入り": ["商品A", "商品B"]
}' WHERE id = '...';

-- コアデータは通常のSQLで集計
SELECT COUNT(*) FROM customers WHERE created_at > '2026-01-01';

-- 拡張データもSQLで検索可能
SELECT * FROM customers WHERE metadata->>'会員ランク' = 'ゴールド';
```

### Pydantic でデータ検証

```python
# ブロンズで学んだPydanticをそのまま活用
from pydantic import BaseModel
from typing import Optional, Any

class CustomerBase(BaseModel):
    """コアデータ（厳格に検証）"""
    name: str
    email: Optional[str] = None

class CustomerMetadata(BaseModel):
    """拡張データ（柔軟だが型チェック）"""
    担当医: Optional[str] = None
    会員ランク: Optional[str] = None
    ポイント: Optional[int] = None

class Customer(CustomerBase):
    metadata: CustomerMetadata = CustomerMetadata()

# Django views.py で使用
def create_customer(request):
    data = json.loads(request.body)

    # Pydantic でバリデーション
    customer = Customer(**data)  # 不正データはここでエラー

    # Supabase に保存
    Customer.objects.create(
        name=customer.name,
        email=customer.email,
        metadata=customer.metadata.model_dump()
    )
```

### 学習内容（6〜8時間）

```
・JSONB の概念と使い方
・コアデータと拡張データの設計判断
・Pydantic との組み合わせ（ブロンズ復習）
・JSONB の検索・更新クエリ
・インデックス設計

目標: 柔軟かつ堅牢なデータベースを設計できる
```

---

## 第3部：Django + HTMX（Webアプリ実装）

### Django + HTMX の威力

```
【従来のWebアプリ開発】
  フロントエンド: JavaScript（React, Vue等）
  バックエンド: Python or Node.js
  → 2つの言語を学ぶ必要

【Django + HTMX】
  フロントエンド: Django テンプレート + HTMX（HTML属性）
  バックエンド: Django（Python）
  → Python だけで完結！
```

### HTMXとは

```html
<!-- 従来のJavaScript -->
<button onclick="fetchData()">取得</button>
<script>
async function fetchData() {
  const res = await fetch('/api/data');
  const html = await res.text();
  document.getElementById('result').innerHTML = html;
}
</script>

<!-- HTMX（JavaScriptを書かない）-->
<button hx-get="/api/data" hx-target="#result">取得</button>

→ HTML属性だけで動的処理が書ける
→ JavaScriptの学習が不要
```

### Django Admin の威力

```python
# models.py
class Order(models.Model):
    顧客名 = models.CharField(max_length=100)
    商品 = models.CharField(max_length=200)
    数量 = models.IntegerField()
    金額 = models.IntegerField()
    metadata = models.JSONField(default=dict)  # JSONB
    作成日 = models.DateTimeField(auto_now_add=True)

# admin.py
from django.contrib import admin
from .models import Order

admin.site.register(Order)

# これだけで管理画面が完成！
# /admin にアクセスすると:
# - 注文一覧の表示
# - 検索・フィルタ
# - 新規追加・編集・削除
# - すべて自動生成
```

### 学習内容（12〜16時間）

```
・GitHubアカウント・リポジトリ作成
・Codespacesの起動と操作
・GitHub Copilot の有効化と使い方
・Django プロジェクトの作成
・Supabase（PostgreSQL + JSONB）への接続
・モデル設計（Django ORM + JSONField）
・CRUD操作（作成・読取・更新・削除）
・Django Admin の活用
・Django 標準認証（ログイン・ログアウト）
・フォーム作成（入力、バリデーション）
・HTMX で動的UI

目標: AppSheetでは実現できない機能をDjangoで作る
```

---

## 第4部：Supabase Realtime + Looker Studio

### Supabase Realtime とは

```
PostgreSQL の LISTEN/NOTIFY を活用したリアルタイム同期機能

【できること】
・データ変更を即座に全クライアントに反映
・複数ユーザー間でのリアルタイム共有
・ダッシュボードの自動更新

【Firebaseとの違い】
・Firebase: 別途NoSQLを導入（データが分散）
・Supabase Realtime: PostgreSQL内で完結（データ一元管理）
```

### Realtime の仕組み

```
┌─────────────────────────────────────────────────────────────────┐
│                      Supabase                                    │
│  ┌─────────────┐     ┌─────────────┐     ┌─────────────┐       │
│  │ PostgreSQL  │ ──→ │  Realtime   │ ──→ │ WebSocket   │       │
│  │ (データ変更) │     │  (検知)     │     │ (配信)      │       │
│  └─────────────┘     └─────────────┘     └─────────────┘       │
└─────────────────────────────────────────────────────────────────┘
        ↑                                         │
   Django で更新                                  ↓
                                           ブラウザに即時反映
```

### Django + Supabase Realtime

```python
# views.py - データ更新
def update_order_status(request, order_id):
    order = Order.objects.get(id=order_id)
    order.status = 'completed'
    order.save()

    # Supabase Realtime が自動で検知
    # → 他のユーザーの画面も即座に更新

    return JsonResponse({'status': 'ok'})
```

```html
<!-- templates/dashboard.html -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>
<script>
const supabase = createClient('{{ supabase_url }}', '{{ supabase_anon_key }}');

// リアルタイム購読
supabase
  .channel('orders')
  .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' },
    (payload) => {
      // データ変更を検知 → HTMXで該当部分を再取得
      htmx.trigger('#order-list', 'refresh');
    }
  )
  .subscribe();
</script>

<div id="order-list" hx-get="/orders/" hx-trigger="refresh">
  <!-- 注文一覧 -->
</div>
```

### Looker Studio との連携

```
【構成】
Supabase（PostgreSQL）
    ↓ 直接接続
Looker Studio
    ↓
経営ダッシュボード（自動更新）

【作れるもの】
・日別/月別売上推移（折れ線グラフ）
・店舗別売上比較（棒グラフ）
・商品カテゴリ構成比（円グラフ）
・在庫状況一覧（テーブル + アラート）
・KPI表示（数値カード）
```

### 学習内容（8〜10時間）

```
・Supabase Realtime の設定
・リアルタイム購読の実装
・HTMX との組み合わせ
・Looker Studio アカウント作成
・Supabase（PostgreSQL）への接続
・売上推移、在庫状況のダッシュボード
・フィルタ、日付範囲の設定
・共有設定（経営者への公開）

目標: リアルタイムで更新されるダッシュボードを構築する
```

---

## 第5部：環境分離と自動化（CI/CD）

### なぜ環境分離が必要か

```
【環境分離なしの問題】
・開発中の変更が本番に影響
・テストなしでデプロイ → 障害発生
・「私のPCでは動く」問題

【3層環境分離】
開発環境（Development）: 開発者が自由に試す
ステージング環境（Staging）: 本番同等で最終確認
本番環境（Production）: 顧客が使う
```

### 環境構成

```
┌─────────────────────────────────────────────────────────────────┐
│  開発環境（Codespaces）                                         │
│  ・ローカルDB or Supabase開発プロジェクト                       │
│  ・自由に実験・デバッグ                                         │
└─────────────────────────────────────────────────────────────────┘
        │ git push (feature branch)
        ↓
┌─────────────────────────────────────────────────────────────────┐
│  GitHub Actions                                                  │
│  ・自動テスト（pytest）                                         │
│  ・コード品質チェック                                           │
└─────────────────────────────────────────────────────────────────┘
        │ merge to main
        ↓
┌─────────────────────────────────────────────────────────────────┐
│  ステージング環境（Railway/Render）                              │
│  ・本番同等のデータ構造                                         │
│  ・関係者が最終確認                                             │
└─────────────────────────────────────────────────────────────────┘
        │ 承認後デプロイ
        ↓
┌─────────────────────────────────────────────────────────────────┐
│  本番環境（Railway/Render）                                      │
│  ・顧客が使用                                                   │
│  ・Supabase本番プロジェクト                                     │
└─────────────────────────────────────────────────────────────────┘
```

### GitHub Actions 設定例

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.12'

      - name: Install dependencies
        run: pip install -r requirements.txt

      - name: Run tests
        run: pytest

      - name: Run linter
        run: ruff check .
```

### 学習内容（6〜8時間）

```
・環境変数による設定切り替え
・.env ファイルの管理（.gitignore）
・GitHub Actions の基本
・pytest での自動テスト
・Railway / Render へのデプロイ設定
・ステージング → 本番のワークフロー
・ロールバック手順

目標: 安全にデプロイできる仕組みを構築する
```

---

## 第6部：実践プロジェクト

### プロジェクトの流れ

```
1. 業務課題の分析
   ・解決したい課題は何か
   ・誰が使うシステムか
   ・現状のフローはどうなっているか

2. AppSheet でプロトタイプ
   ・データ構造を設計
   ・現場で試用
   ・フィードバック収集

3. Django + HTMX で本実装
   ・AppSheetでは難しい機能を実装
   ・Pydantic でデータ検証
   ・Supabase JSONB で柔軟に対応

4. Realtime + Looker Studio
   ・リアルタイム同期設定
   ・経営ダッシュボード作成

5. CI/CD 設定
   ・自動テスト
   ・ステージング → 本番デプロイ

6. 運用開始
   ・効果測定
   ・改善サイクル
```

### プロジェクト例

```
【例1：日報システム】
・店舗スタッフがスマホから入力
・売上、来客数、特記事項を登録
・本部はダッシュボードでリアルタイム確認
・日別・週別・月別の集計グラフ

【例2：在庫管理】
・バーコードで入出庫登録
・在庫数をリアルタイム表示
・発注点を下回ったらアラート
・店舗間の在庫移動

【例3：承認ワークフロー】
・経費申請をWebフォームで提出
・上長が承認・却下
・ステータスをリアルタイム表示
・月次集計をダッシュボード化
```

### 学習内容（15〜20時間）

```
・自社の業務課題を分析
・AppSheet でプロトタイプ作成
・Django + HTMX で本実装
・Supabase Realtime 設定
・Looker Studio でダッシュボード
・CI/CD 設定
・効果測定とフィードバック

目標: 実際に業務効果を出すシステムを完成させる
```

---

## 職種別：シルバーで得られる恩恵

### 営業職

| 課題 | シルバーで解決 |
|---|---|
| 訪問記録を紙→Excelに転記 | スマホから直接入力→DB蓄積 |
| 顧客情報がExcel属人化 | 全員がアクセスできるWebアプリ |
| 商談状況が見えない | ダッシュボードでリアルタイム共有 |

```
Before: 訪問 → 帰社 → Excel入力 → 週報作成
After:  訪問先でスマホ入力 → 自動で週報・ダッシュボード反映
→ 「入力のための帰社」がなくなる
→ 直行直帰が可能に
```

### 事務職・経理

| 課題 | シルバーで解決 |
|---|---|
| 申請書が紙 or Excel添付 | Djangoフォームで申請→自動集計 |
| 承認待ちの確認が面倒 | ステータス管理 + リアルタイム通知 |
| 月末にデータが届かない | リアルタイムで蓄積済み |

```
Before: 各部署からExcelが届く → 集計 → 突合 → 修正依頼
After:  Webフォームから入力 → 自動バリデーション → 即座に集計
→ 「催促」「修正依頼」の業務がなくなる
```

### 店舗スタッフ

| 課題 | シルバーで解決 |
|---|---|
| 日報をExcelで本部に送信 | 入力した瞬間に本部で見える |
| 在庫確認を電話で問い合わせ | 他店舗の在庫もリアルタイム表示 |
| シフト調整がLINE + 紙 | Webアプリでシフト管理 |

```
Before: 閉店 → Excel日報作成 → メール送信 → 本部で集計
After:  レジ締め → フォーム入力 → 本部は自動集計済み
→ 「日報を送る」という業務がなくなる
```

---

## 経営者・管理職が得られる恩恵

### 組織的な効果

| 観点 | 効果 |
|---|---|
| **可視化** | 売上・在庫・進捗がリアルタイムで見える |
| **意思決定** | データに基づいた判断が即座にできる |
| **属人化解消** | 担当者が休んでも業務が止まらない |
| **引き継ぎ** | 退職時のダメージが最小化 |
| **スケーラビリティ** | 店舗・人員が増えても仕組みが回る |

### 具体例：多店舗経営

```
Before:
・各店舗の売上は翌日にならないと分からない
・在庫状況は電話で確認
・店長の感覚に依存した発注

After:
・全店舗の売上をリアルタイムで把握
・在庫ダッシュボードで一目で確認
・データに基づいた発注判断

→ 「現場に行かないと分からない」がなくなる
→ データドリブン経営の第一歩
```

---

## 技術選定の根拠

### 1. AppSheet → Django の流れを選択した理由

```
【従来】
「ノーコード or コード」の二者択一
→ ノーコードで始めたらコードに移行できない
→ コードで始めたらプロトタイプに時間がかかる

【シルバーのアプローチ】
AppSheet でプロトタイプ → Django で本実装
→ 両方のメリットを活かす
→ データはSupabaseに一元化（移行不要）
```

### 2. Supabase JSONB を選択した理由

| 比較対象 | 選択理由 |
|---|---|
| Firebase | NoSQLはSQL継続性がない、リアルタイムのためだけに導入するのは過剰 |
| 通常RDBのみ | スキーマ変更が頻繁だと運用が大変 |

**Supabase JSONB の優位性:**
- SQL（PostgreSQL）ベースで **ブロンズのSQL がそのまま使える**
- JSONB で柔軟なデータ構造に対応
- Realtime 機能も PostgreSQL 内で完結
- 1つのデータベースで全て管理

### 3. GitHub Copilot を選択した理由

| 比較対象 | 選択理由 |
|---|---|
| Claude Code | CLI のみ、初心者にはハードル高い |
| その他CLI | Codespaces との統合性が低い |

**GitHub Copilot の優位性:**
- Codespaces に公式統合（設定不要）
- インライン補完 + チャット + Agent モード
- Claude, Gemini, GPT 等のモデルを切り替え可能
- 料金が安い（Pro $10/月 vs Claude Pro $20/月）

### 4. なぜ React を採用しないか

```
【React採用時の学習負荷】
・JavaScript の文法
・JSX の書き方
・React のコンポーネント、state、props、hooks
・非同期処理（async/await）
・npm, Vite などのビルドツール

→ ブロンズで学んだ Python の知識が活きない
→ 「新しい言語」という大きな壁

【Django + HTMX】
・Python（ブロンズで習得済み）
・Django テンプレート（HTML + 少しの構文）
・HTMX（HTML属性を数個覚えるだけ）

→ 実質的に「新しい言語」がゼロ
```

---

## セキュリティ面の優位性

### Django の組み込みセキュリティ

```
【Djangoに標準装備】
・CSRF対策 → トークン自動生成・検証
・XSS対策 → テンプレートで自動エスケープ
・SQLインジェクション対策 → ORM で安全にクエリ
・クリックジャッキング対策 → X-Frame-Options
・パスワードハッシュ → bcrypt/argon2

【React + Supabase の場合】
・RLS（Row Level Security）の設計ミスでデータ漏洩リスク
・クライアントサイドに API キーが露出
・CSRF対策は自分で実装

→ 非エンジニアが作っても Django は「安全側」に倒れる
```

---

## 学習時間の目安

| 部 | 内容 | 目安時間 |
|---|---|---|
| 第1部 | AppSheet でプロトタイピング | 8〜10時間 |
| 第2部 | ハイブリッドDB実装（RDB + JSONB） | 6〜8時間 |
| 第3部 | Django + HTMX（Webアプリ実装） | 12〜16時間 |
| 第4部 | Supabase Realtime + Looker Studio | 8〜10時間 |
| 第5部 | 環境分離と自動化（CI/CD） | 6〜8時間 |
| 第6部 | 実践プロジェクト | 15〜20時間 |
| **合計** | | **55〜72時間** |

```
週5時間ペース → 約2.5〜3.5ヶ月
週10時間ペース → 約1.5〜2ヶ月
```

### 学習の流れ

```
【前半】プロトタイプで価値を体験（第1〜2部）
・AppSheetで素早くアプリ作成
・JSONB + Pydantic でデータ基盤構築
→ 短期間で「業務効果」を実感

【中盤】開発力を習得（第3〜4部）
・Django + HTMXでコード開発
・Realtime + Looker Studio で可視化
→ 「作れる力」を身につける

【後半】運用力を獲得（第5〜6部）
・CI/CD で安全にデプロイ
・実プロジェクトで成果を出す
→ 「運用できる力」を習得
```

---

## コスト構造

### ツール費用

| ツール | 無料枠 | 有料の場合 |
|---|---|---|
| **Supabase** | 2プロジェクト、500MB | $25/月〜 |
| **AppSheet** | 10ユーザーまで無料 | $5/ユーザー/月〜 |
| **Looker Studio** | 無料 | - |
| GitHub | 無制限（Public）/ 制限あり（Private） | $4/月〜 |
| Codespaces | 月60時間 | $0.18/時間〜 |
| GitHub Copilot | Free（50リクエスト/月） | Pro $10/月推奨 |
| Railway/Render | 無料枠あり | $5〜7/月 |

```
【学習・小規模運用の場合】
→ 月額 $15〜40 程度（Copilot Pro + ホスティング）

【本格運用の場合】
→ 月額 $50〜80 程度（Supabase Pro 含む）
```

### 外注との比較

| 項目 | SIer発注 | この構成 |
|---|---|---|
| 初期開発 | 300万円〜 | 教育費 + 自社工数 |
| 月額保守 | 5〜10万円 | ほぼゼロ（ツール費のみ） |
| 追加開発 | 都度見積もり | 自社で対応可能 |
| 導入スピード | 3〜6ヶ月 | プロトタイプなら即日 |
| 依存度 | 高い | 自律可能 |

---

## ゴールドへの接続

### シルバー修了時点での課題

```
「業務アプリができた。でも...」

・会計ソフト（freee）と連携したい
・LINEで通知を送りたい
・定期的にレポートを自動送信したい
・複数のシステムのデータを統合したい

→ これがゴールドで解決する
```

### 技術の積み上げ

```
【シルバーで習得】
・AppSheet → Django への流れ
・Supabase（PostgreSQL + JSONB + Realtime）
・Pydantic によるデータ検証
・Django + HTMX によるWebアプリ開発
・CI/CD（GitHub Actions）
・AI伴走（Copilot）での開発スキル

    ↓ そのまま活きる（Python のまま！）

【ゴールド】
・requests / httpx で外部API連携
・Celery でバックグラウンド処理
・Webhook 受信
・PWA 化（基礎）
```

---

## まとめ

### シルバーの本質

```
「組織の業務プロセス改善」
〜 Excelを送る業務をなくす 〜

・プロトタイプで素早く検証
・ハイブリッドDBで柔軟に対応
・Django + HTMX で本格実装
・リアルタイムで情報共有
・CI/CD で安全に運用
```

### 技術スタック

```
【プロトタイピング】
AppSheet            ... ノーコードで素早く検証

【データベース】
Supabase            ... PostgreSQL + JSONB + Realtime
Pydantic            ... データ検証（ブロンズから継続）

【Webアプリ】
Django + HTMX       ... Python統一、JS不要
Codespaces          ... ブラウザ開発環境
Copilot             ... AI伴走

【可視化】
Looker Studio       ... 経営ダッシュボード

【運用】
GitHub Actions      ... CI/CD
Railway / Render    ... ホスティング
```

### 期待される成果

```
シルバー修了者は:
・AppSheetでプロトタイプを素早く作れる
・Supabase（JSONB + Realtime）を設計・運用できる
・Pydanticでデータ検証ができる
・Django + HTMXで独自アプリを開発できる
・Looker Studioで経営ダッシュボードを作れる
・CI/CDで安全にデプロイできる
・AIを活用した開発ができる

→ 組織の業務プロセスを改善できる人材
→ 「作ること」ではなく「効果を出すこと」を重視
→ ゴールドへの準備が整った状態
```

---

## 付録：シルバー導入チェックリスト

### 事前準備（ブロンズ修了後）
- [ ] Googleアカウント確認（AppSheet, Looker Studio用）
- [ ] Supabaseアカウント作成
- [ ] GitHubアカウント作成
- [ ] 解決したい業務課題の洗い出し

### 第1部：AppSheet でプロトタイピング
- [ ] AppSheetアカウント作成
- [ ] Supabase プロジェクト作成
- [ ] AppSheet → Supabase 接続設定
- [ ] プロトタイプアプリの作成
- [ ] 現場での試用とフィードバック収集

### 第2部：ハイブリッドDB実装
- [ ] JSONB カラムの設計
- [ ] Pydantic モデルの作成（ブロンズ復習）
- [ ] コアデータと拡張データの分離

### 第3部：Django + HTMX
- [ ] Codespacesの起動確認
- [ ] GitHub Copilot の有効化
- [ ] Django プロジェクト作成
- [ ] Supabase PostgreSQL 接続
- [ ] Django Admin の活用
- [ ] HTMX で動的UI

### 第4部：Realtime + Looker Studio
- [ ] Supabase Realtime 設定
- [ ] リアルタイム購読の実装
- [ ] Looker Studio でダッシュボード作成
- [ ] 経営者への共有

### 第5部：環境分離と自動化
- [ ] 環境変数の設定（.env）
- [ ] GitHub Actions の設定
- [ ] pytest でテスト作成
- [ ] Railway / Render へデプロイ
- [ ] ステージング → 本番のワークフロー確認

### 第6部：実践プロジェクト
- [ ] 業務課題の分析
- [ ] プロトタイプ作成
- [ ] 本実装
- [ ] 運用開始
- [ ] 効果測定
- [ ] ゴールドで取り組む課題の特定

---

*本ドキュメントは技術選定の議論を経て作成されました。*
*最終更新: 2026年2月*
