# ブロンズカリキュラム：技術選定とメリット総括

## 概要

本ドキュメントは、中小企業向けAI伴走型開発教育「ブロンズカリキュラム」における技術選定の根拠と、各視点からのメリットをまとめたものです。

---

## 設計思想

```
【ねらい】
学習コスト最小 × 実務効果最大 → シルバーへの意欲向上

・最短で「業務が楽になった」を実感
・学んだことがシルバー以降でそのまま活きる
・経営者・従業員が効果を数字で確認できる
```

---

## カリキュラム全体における位置づけ

| ステージ | 技術スタック | 環境 | AI伴走 | ゴール |
|---|---|---|---|---|
| **ブロンズ** | **Python + Pandas + Pydantic + sqlite3** | **Google Colab** | **Gemini** | **Excel業務の自動化 + データ検証 + SQL基礎** |
| シルバー | AppSheet → Django + HTMX + Supabase (JSONB) | Codespaces | GitHub Copilot | 業務アプリ構築 |
| ゴールド | + requests/httpx + Celery + PWA | Codespaces | GitHub Copilot | システム統合と自動化 |
| プラチナ | + 選択モジュール（決済・LINE・AI等） | Codespaces | GitHub Copilot | 顧客体験の強化 |
| ダイヤモンド | + scikit-learn + Prophet + Streamlit | Codespaces | GitHub Copilot | データ駆動経営 |

**ブロンズは「プログラミング未経験者の最初の一歩」かつ「シルバーへの最短経路」**

---

## ブロンズの目標

```
「面倒なExcel業務を5分で終わらせる」
「SQLを覚えてシルバーへスムーズに移行」

・手作業のデータ処理を自動化
・SQLによるデータ操作の基礎習得
・定期レポートの自動生成
```

### 解決する現場の課題

```
【よくある状況】
・毎月同じExcel作業を繰り返している
・複数ファイルのデータを手作業で結合
・大量データでExcelが重くなる
・集計ミスが発生する

【ブロンズで解決】
・SQLで必要なデータを抽出・集計
・複数ファイルを一括で処理
・大量データも数秒で処理
・一度書いたコードは何度でも使える
```

---

## 技術スタック

### 確定構成

```
Python + Pandas（入出力） + Pydantic（データ検証） + sqlite3（処理） + Gemini（AI伴走）
```

### 各技術の役割

| 技術 | 役割 | 備考 |
|---|---|---|
| **Python** | プログラミング言語 | データ処理の標準 |
| **Pandas** | ファイル入出力 | Excel/CSV ↔ sqlite の橋渡し |
| **Pydantic** | データ検証 | 型チェック・バリデーション |
| **sqlite3** | データ処理（SQL） | Python標準ライブラリ |
| **Google Colab** | 実行環境 | ブラウザで完結 |
| **Gemini** | AI伴走 | Google環境との親和性 |

### オプション技術

| 技術 | 役割 | 用途 |
|---|---|---|
| **matplotlib** | データ可視化 | グラフ作成（ブロンズ完結の人向け） |
| **openpyxl** | 書式付きExcel出力 | 色・罫線・太字付きのExcel生成 |

※ シルバーに進む人は Looker Studio でグラフ作成、Django + CSS で表の装飾を行うため、オプション技術は不要

### 処理フローのイメージ

```
【入力】          【検証】        【処理】           【出力】
Excel/CSV  →  Pandas  →  Pydantic  →  sqlite3  →  Pandas  →  Excel/CSV
              (読込)     (型チェック)    (SQL)       (書出)
```

---

## なぜ Pandas ではなく SQL（sqlite3）で処理するのか

### 従来の構成との比較

| 観点 | Pandas で処理 | SQL（sqlite3）で処理 |
|---|---|---|
| 学習量 | 多い（Pandas独自の文法） | 少ない（SQL は汎用） |
| シルバーへの接続 | △（SQL を別途学ぶ） | ◎（同じ SQL が使える） |
| 汎用性 | Python のみ | あらゆる DB で使える |
| カリキュラムの一貫性 | △ | ◎（全ステージで SQL） |

### SQL に一本化するメリット

```
1. 学習範囲の削減
   ・Pandas の groupby, merge, pivot_table 等を覚えなくて良い
   ・SQL の SELECT, WHERE, GROUP BY, JOIN に集中

2. シルバーへの直結
   ・ブロンズ: sqlite3 (SQL)
   ・シルバー: Supabase (PostgreSQL = SQL)
   → 構文がほぼ同じ、学び直し不要

3. 業務での汎用性
   ・SQL はどのデータベースでも使える
   ・Excel から脱却した後も一生使えるスキル
```

### Pandas の役割を限定

```
【Pandas の役割 = 入出力のみ】

# 入力
df = pd.read_excel('売上データ.xlsx')
df.to_sql('sales', conn, index=False)

# 出力
result = pd.read_sql(query, conn)
result.to_excel('集計結果.xlsx', index=False)

→ Pandas は「変換器」として使う
→ データ処理の本体は SQL
```

---

## sqlite3 を使う理由

### 特徴

```
・Python 標準ライブラリ（追加インストール不要）
・ファイルベース or メモリ上で動作
・SQL の学習に最適
・Colab で即座に使える
```

### 他の選択肢との比較

| 選択肢 | 評価 | 理由 |
|---|---|---|
| Pandas のみ | △ | SQL を学ばない、シルバーへの接続が弱い |
| MySQL / PostgreSQL | △ | 環境構築が必要 |
| **sqlite3** | **◎** | **標準ライブラリ、環境構築不要** |

### sqlite と Supabase（PostgreSQL）の互換性

```python
# ブロンズ（sqlite3）
SELECT 店舗名, SUM(売上) as 合計
FROM sales
WHERE 日付 >= '2024-01-01'
GROUP BY 店舗名
ORDER BY 合計 DESC

# シルバー（Supabase）
SELECT 店舗名, SUM(売上) as 合計
FROM sales
WHERE 日付 >= '2024-01-01'
GROUP BY 店舗名
ORDER BY 合計 DESC

→ まったく同じ！
```

---

## カリキュラム構成

### 第1部：Python + Colab 環境（8〜10時間）

```
・Google Colab の使い方
・Gemini への質問の仕方（プロンプトの書き方）
・変数、データ型、リスト
・条件分岐（if文）、繰り返し（for文）
・関数の基本

目標: Python の基本文法を理解する
```

### 第2部：Pandas 入出力（4〜6時間）

```
・DataFrame とは（表形式のデータ）
・Excel / CSV の読み込み
・Google Drive からのファイル読み込み
・sqlite3 への書き込み（to_sql）
・sqlite3 からの読み込み（read_sql）
・Excel / CSV への書き出し

目標: ファイル ↔ sqlite の変換ができる

【ポイント】
Pandas は入出力のみ。データ処理は第3部の SQL で行う。
```

### 第3部：SQL によるデータ処理（10〜12時間）

```
・SELECT 文の基本（データの取得）
・WHERE 句（条件指定）
・ORDER BY（並べ替え）
・GROUP BY + 集計関数（SUM, COUNT, AVG）
・JOIN（複数テーブルの結合 = VLOOKUP相当）
・サブクエリの基本

目標: SQL でデータ抽出・集計ができる

【Excel との対応】
| Excel の操作     | SQL での書き方           |
|-----------------|------------------------|
| フィルター       | WHERE                  |
| 並べ替え         | ORDER BY               |
| 合計・平均       | SUM(), AVG()           |
| ピボットテーブル  | GROUP BY               |
| VLOOKUP         | JOIN                   |
```

### 第4部：Pydantic + JSON（4〜6時間）

```
・Pydantic とは（データのお掃除ロボット）
・型の指定（str, int, float, list）
・バリデーション（不正データの検出）
・JSON の読み書き
・JSON とテーブルの違い
・実務での活用（CSV読み込み前のデータ検証）

目標: データの「正しさ」を自動でチェックできるようになる

【Pydantic のイメージ】
Excelデータ → Pydantic で検証 → 正しいデータだけ sqlite に保存
                ↓ エラー
            不正データをレポート

【なぜブロンズで学ぶか】
・シルバーのDjango + Supabase JSONB で必須
・データの品質管理は全ステージで重要
・「型」の考え方はプログラミングの基本
```

```python
# Pydantic の基本例
from pydantic import BaseModel, field_validator

class 売上レコード(BaseModel):
    店舗名: str
    日付: str
    金額: int
    カテゴリ: str

    @field_validator('金額')
    @classmethod
    def 金額チェック(cls, v):
        if v < 0:
            raise ValueError('金額がマイナスです')
        return v

# 使い方
data = {"店舗名": "渋谷店", "日付": "2026-01-15", "金額": 5000, "カテゴリ": "飲食"}
record = 売上レコード(**data)  # OK

data_bad = {"店舗名": "渋谷店", "日付": "2026-01-15", "金額": -100, "カテゴリ": "飲食"}
record = 売上レコード(**data_bad)  # エラー！「金額がマイナスです」
```

### 第5部：実践プロジェクト（6〜8時間）

```
・自社データを使った実践
・Before / After の効果測定
・実務で使えるコードの完成
・コードの使い方マニュアル作成

目標: 実際の業務で使える自動化を1つ以上完成させる

【成果物】
・自分の業務で使える自動化コード 2〜3本
・コードの使い方マニュアル（自分用）
・Before / After の効果測定レポート
```

---

## 学習時間の目安

| 部 | 内容 | 目安時間 |
|---|---|---|
| 第1部 | Python + Colab 環境 | 8〜10時間 |
| 第2部 | Pandas 入出力 | 4〜6時間 |
| 第3部 | SQL によるデータ処理 | 10〜12時間 |
| 第4部 | Pydantic + JSON | 4〜6時間 |
| 第5部 | 実践プロジェクト | 6〜8時間 |
| **合計** | | **32〜42時間** |

```
週5時間ペース → 約6〜8週（1.5〜2ヶ月）
週10時間ペース → 約3〜4週（約1ヶ月）
```

### オプション

| 内容 | 目安時間 | 対象 |
|---|---|---|
| matplotlib（グラフ作成） | 4〜6時間 | ブロンズ完結の人 |
| openpyxl（書式付きExcel） | 2〜4時間 | Excel配布が必要な人 |

---

## 実務コスト削減効果

### 定量的な効果

| 業務例 | Before | After | 削減率 |
|---|---|---|---|
| 月次売上集計 | 3時間 | 5分 | 97% |
| 複数ファイル統合 | 1時間 | 3分 | 95% |
| データクレンジング | 2時間 | 10分 | 92% |
| 集計レポート作成 | 1時間 | 5分 | 92% |

### 月間効果の試算

```
【週5時間のExcel作業がある場合】
・月20時間 → 月2時間に削減
・年間216時間の削減
・時給2,000円換算で年間43万円相当

【投資対効果】
・学習時間: 約40時間
・年間削減: 約216時間
・ROI: 5倍以上（初年度）
```

---

## コード例

### 基本的なワークフロー

```python
import pandas as pd
import sqlite3

# 1. Excel を読み込み
df = pd.read_excel('売上データ.xlsx')

# 2. sqlite に保存
conn = sqlite3.connect(':memory:')
df.to_sql('sales', conn, index=False)

# 3. SQL で集計
query = '''
SELECT
    店舗名,
    SUM(売上) as 合計売上,
    COUNT(*) as 件数
FROM sales
GROUP BY 店舗名
ORDER BY 合計売上 DESC
'''
result = pd.read_sql(query, conn)

# 4. Excel に出力
result.to_excel('集計結果.xlsx', index=False)
```

### 【オプション】グラフ作成を追加する場合

```python
import matplotlib.pyplot as plt

# 上記の result を使ってグラフ作成
plt.figure(figsize=(10, 6))
plt.bar(result['店舗名'], result['合計売上'])
plt.title('店舗別売上')
plt.xlabel('店舗')
plt.ylabel('売上（円）')
plt.savefig('売上グラフ.png')
plt.show()
```

### 複数ファイルの統合

```python
import glob

# 複数CSVを読み込んで統合
files = glob.glob('店舗データ/*.csv')
dfs = [pd.read_csv(f) for f in files]
df_all = pd.concat(dfs, ignore_index=True)

# sqlite に保存
df_all.to_sql('all_sales', conn, index=False)

# SQL で分析
query = '''
SELECT
    店舗名,
    strftime('%Y-%m', 日付) as 月,
    SUM(売上) as 月別売上
FROM all_sales
GROUP BY 店舗名, 月
ORDER BY 店舗名, 月
'''
result = pd.read_sql(query, conn)
```

---

## 中小企業での活用例

### 1. 月次売上レポートの自動生成

```
【従来】
1. 各店舗からCSVを受け取る（メール）
2. Excelで1つずつ開いてコピペ
3. 関数で集計
4. グラフ作成
5. 体裁を整える
→ 毎月3時間

【ブロンズ】
1. CSVをフォルダに入れる
2. コードを実行（1クリック）
→ 5分で完成
```

### 2. 複数店舗データの分析

```python
-- 店舗別・月別の売上推移
SELECT
    店舗名,
    strftime('%Y-%m', 日付) as 月,
    SUM(売上) as 売上合計,
    AVG(売上) as 平均単価
FROM sales
GROUP BY 店舗名, 月
ORDER BY 店舗名, 月

-- 前月比の計算も SQL で可能
```

### 3. 在庫アラートの自動化

```python
-- 発注点を下回った商品を抽出
SELECT
    商品コード,
    商品名,
    現在在庫,
    発注点,
    (発注点 - 現在在庫) as 不足数
FROM inventory
WHERE 現在在庫 < 発注点
ORDER BY 不足数 DESC
```

### 4. 顧客データの重複チェック

```python
-- 重複している顧客を検出
SELECT
    電話番号,
    COUNT(*) as 件数,
    GROUP_CONCAT(顧客名) as 顧客名一覧
FROM customers
GROUP BY 電話番号
HAVING COUNT(*) > 1
```

---

## シルバーへの接続

### 技術の積み上げ

```
【ブロンズで習得】
・Python の基本文法
・SQL の基本（SELECT, WHERE, GROUP BY, JOIN）
・テーブル思考（行と列）
・AI への質問の仕方

    ↓ そのまま活きる

【シルバー】
・Supabase = PostgreSQL = 同じ SQL
・テーブル設計の考え方は同じ
・学び直しがほぼ不要
```

### シルバーへの自然な流れ

```
【ブロンズ修了時点の気づき】
「Excel作業は楽になった。でも...」

・毎回 Colab を開いて実行するのが面倒
・他の人も使えるようにしたい
・スマホからも見たい
・データを常に最新にしておきたい
・入力フォームも欲しい

→ 「Webアプリにすれば解決する」
→ シルバーへの自然な動機
```

---

## 初回で「感動」を与える設計

### 第1回の構成案

```
1. 受講者が持参した実際のExcelファイルを使う
2. その場でColabに読み込み
3. SQL で集計してみせる
4. Excelに出力
5. 「これが5分でできる」を体感

→ 初回で効果を実感 = 継続率向上
```

### 心理的な設計

```
【Before】
「プログラミングって難しそう...」

【After（初回終了時）】
「え、これだけで動くの？」
「私の仕事、これで楽になる！」

→ 成功体験が学習継続の原動力
```

---

## コスト構造

### ツール費用

| ツール | 料金 |
|---|---|
| Google Colab | 無料（Pro は $10/月） |
| Gemini | 無料枠あり |
| Python / sqlite3 / Pandas / Pydantic | 無料 |

**→ ブロンズは完全無料で受講可能**

### 外注との比較

```
【SIer に Excel 自動化を依頼した場合】
・初期開発: 50〜100万円
・仕様変更: 追加費用
・担当者が使い方を覚える必要あり

【ブロンズで内製した場合】
・教育費のみ
・自分で修正・拡張可能
・ノウハウが社内に蓄積

→ 長期的に圧倒的なコスト優位性
```

---

## 受講者のペルソナ

### 想定する受講者

```
・Excel は日常的に使っている
・プログラミングは未経験 or 挫折経験あり
・「もっと楽にできないか」と思っている
・データ処理に時間を取られている
・効率化したいが方法が分からない
```

### よくある業務

| 部門 | よくある業務 |
|---|---|
| 経理 | 請求書データの集計、経費精算の整理 |
| 営業 | 顧客リストの整理、売上レポート |
| 総務 | 勤怠データの処理、社員情報の管理 |
| 店舗 | 売上日報の集計、在庫確認 |
| 物流 | 配送データの処理、棚卸リストの作成 |

---

## 注意点・配慮事項

### プログラミング初心者への配慮

```
1. エラーへの恐怖を取り除く
   「エラーは友達、直せば動く」

2. Gemini を頼る文化
   「分からなかったらAIに聞く」が当たり前

3. コピペOKの姿勢
   まず動かす → 後から理解

4. 完璧を目指さない
   「動けばOK」からスタート

5. 小さな成功体験
   最初の1行が動いた喜び
```

### SQL 学習のポイント

```
1. 最初は SELECT * FROM だけ
   → 「全部取得」から始める

2. WHERE を追加
   → 「条件で絞る」を覚える

3. GROUP BY を追加
   → 「集計する」を覚える

4. JOIN は後回し
   → 必要になってから学ぶ

→ 段階的に、必要な時に必要なだけ
```

### Excel への敬意

```
1. 「Excel はダメ」と言わない
   Excel でやってきたことを否定しない

2. Excel でできることは認める
   適材適所の考え方

3. 最終出力は Excel でも良い
   SQL は処理担当、Excel は見せる担当
```

---

## まとめ

### ブロンズの本質

```
「Excel業務の自動化」を入口に
「SQL という一生使えるスキル」を身につける

・学習コスト最小（約40時間、完全無料）
・実務効果最大（90%以上の時間削減）
・シルバーへ直結（SQL がそのまま使える）
```

### 技術スタック

```
Python + Pandas（入出力） + Pydantic（検証） + sqlite3（SQL処理） + Gemini

・環境構築ゼロ
・完全無料
・SQL に一本化してシルバーへの最短経路
・Pydantic はシルバー以降でそのまま活用
・プラチナまで繋がる Python
・グラフ・書式設定はオプション（シルバー進学者は不要）
```

### 期待される成果

```
ブロンズ修了者は:
・Python の基本文法を理解している
・SQL でデータ抽出・集計ができる
・Pydantic でデータ検証ができる
・JSON の読み書きができる
・定型業務を自動化できる
・AIに質問しながら問題解決できる
・Before / After で効果を説明できる

→ シルバーへの準備が整った状態
→ 日々の業務が楽になっている状態
→ 「もっとやりたい」という意欲がある状態
```

---

## 付録：ブロンズ導入チェックリスト

### 事前準備
- [ ] Google アカウントの作成
- [ ] Google Colab へのアクセス確認
- [ ] Gemini の利用開始
- [ ] 自動化したい業務の洗い出し

### 学習開始
- [ ] 第1部: Python + Colab 環境の完了
- [ ] 第2部: Pandas 入出力の完了
- [ ] 第3部: SQL によるデータ処理の完了
- [ ] 第4部: Pydantic + JSON の完了
- [ ] 第5部: 実践プロジェクトの完了

### オプション（必要に応じて）
- [ ] matplotlib によるグラフ作成
- [ ] openpyxl による書式付きExcel出力

### 実践
- [ ] 自社データでの実践課題
- [ ] 1つ以上の業務自動化を実現
- [ ] Before / After の効果測定
- [ ] 定期的に使えるコードの完成

### シルバーへの準備
- [ ] SQL の基本構文を習得
- [ ] Pydantic でデータ検証ができる
- [ ] JSON の読み書きができる
- [ ] テーブル思考を習得
- [ ] AIに質問する習慣がついている
- [ ] 「Webアプリにしたい」という動機がある

---

## 付録：Excel関数のSQL置き換え

Excel集計で使用する関数の多くは、SQLで置き換えることが可能です。

### 基本集計関数

| Excel関数 | SQL | 用途 |
|---|---|---|
| `SUM(A:A)` | `SELECT SUM(column) FROM table` | 合計 |
| `AVERAGE(A:A)` | `SELECT AVG(column) FROM table` | 平均 |
| `COUNT(A:A)` | `SELECT COUNT(column) FROM table` | 件数 |
| `MAX(A:A)` | `SELECT MAX(column) FROM table` | 最大値 |
| `MIN(A:A)` | `SELECT MIN(column) FROM table` | 最小値 |

### 条件付き集計

| Excel関数 | SQL |
|---|---|
| `SUMIF(B:B,"東京",A:A)` | `SELECT SUM(amount) FROM orders WHERE branch='東京'` |
| `COUNTIF(B:B,"東京")` | `SELECT COUNT(*) FROM orders WHERE branch='東京'` |
| `AVERAGEIF(B:B,"東京",A:A)` | `SELECT AVG(amount) FROM orders WHERE branch='東京'` |
| `SUMIFS(複数条件)` | `SELECT SUM(amount) FROM orders WHERE branch='東京' AND amount>=1000` |

### 検索・参照

| Excel関数 | SQL |
|---|---|
| `VLOOKUP(値,範囲,列,FALSE)` | `SELECT b.name FROM orders a JOIN customers b ON a.customer_id=b.id` |
| `INDEX(MATCH(...))` | `SELECT ... FROM ... JOIN ... WHERE ...` |

### グループ集計（ピボットテーブル相当）

```
【Excel：ピボットテーブル】
行：支店名
値：売上合計、件数

【SQL】
SELECT
    branch,
    SUM(amount) AS total_sales,
    COUNT(*) AS order_count
FROM orders
GROUP BY branch
ORDER BY total_sales DESC;
```

### 条件分岐

| Excel関数 | SQL |
|---|---|
| `IF(A1>=100,"大口","小口")` | `CASE WHEN amount>=100 THEN '大口' ELSE '小口' END` |
| ネストIF | `CASE WHEN ... THEN ... WHEN ... THEN ... ELSE ... END` |

### 日付・期間集計

```
【Excel：月別集計をSUMIFSで実現】
=SUMIFS(金額, 日付, ">="&月初, 日付, "<="&月末)

【SQL：GROUP BYで一括取得】
SELECT
    strftime('%Y-%m', order_date) AS month,
    SUM(amount) AS monthly_total
FROM orders
GROUP BY strftime('%Y-%m', order_date)
ORDER BY month;
```

### 文字列操作

| Excel関数 | SQL（SQLite） |
|---|---|
| `LEFT(A1,3)` | `SUBSTR(column, 1, 3)` |
| `LEN(A1)` | `LENGTH(column)` |
| `CONCATENATE(A1,B1)` | `column1 \|\| column2` |
| `TRIM(A1)` | `TRIM(column)` |
| `UPPER(A1)` | `UPPER(column)` |

### 重複・ユニーク

| Excel操作 | SQL |
|---|---|
| 重複の削除 | `SELECT DISTINCT column FROM table` |
| 重複の検出 | `SELECT column, COUNT(*) FROM table GROUP BY column HAVING COUNT(*)>1` |

### SQLの方が優れている点

```
【Excelの限界】
・行数制限（約100万行）
・ファイルが大きくなると重い
・複数シート間の集計が複雑
・VLOOKUPのネストは可読性が低い
・同時編集の制約

【SQLの利点】
・数百万〜数億行でも処理可能
・JOINで複数テーブルを簡潔に結合
・GROUP BYで集計が一発
・クエリを保存・再利用できる
・複数人が同時にアクセス可能
```

### Excelの方が適している場面

```
・1回限りの簡易計算
・視覚的なグラフ作成（その場で確認）
・非エンジニアへの共有
・手動での微調整が必要な作業
```

### ブロンズでの実践例

```
【想定シナリオ：売上管理】

Excel での作業：
1. 月別売上をSUMIFSで集計
2. VLOOKUPで顧客名を取得
3. ピボットテーブルで支店別集計
4. 手動でグラフ作成

SQL での置き換え：
1. GROUP BY + SUM で月別集計
2. JOIN で顧客テーブルを結合
3. GROUP BY で支店別集計
4. → Looker Studio で自動グラフ化（ゴールド以降）
```

---

## 付録：Excel書式設定の実現方法

### ブロンズで「できること」と「できないこと」

Excel集計では、セルに色をつけたり、枠線の太さを変えたり、文字を太字にしたりといった書式設定を行います。これらの機能は本カリキュラムの技術セットでどこまで対応できるでしょうか。

```
【ブロンズ本編（Python + sqlite3）】
・データ取得・集計 → できる（SQLで実現）
・VLOOKUP相当 → できる（JOINで実現）
・ピボットテーブル相当 → できる（GROUP BYで実現）
・書式設定（色・罫線・太字）→ できない

【シルバー以降（Django + HTMX）】
・HTML/CSSでの書式設定 → できる
・条件付き書式 → できる（テンプレート + CSS）
・グラフ表示 → できる（Looker Studio連携）
```

ブロンズ本編は「データ処理」に集中し、「見た目の装飾」はシルバー以降で段階的に実現する設計です。

### オプション：openpyxl でExcel書式設定

ただし、**openpyxl** ライブラリを使えば、ブロンズの技術セット（Python + sqlite3）のままExcel書式設定が可能です。

#### openpyxl でできること

```
・Excelファイル(.xlsx)の生成
・セル背景色
・罫線（線種、太さ、色）
・フォント（太字、色、サイズ）
・数値フォーマット（カンマ区切り、通貨）
・条件付き書式
・セル結合
・列幅・行高の調整
```

#### 実装例

```python
import sqlite3
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Border, Side

# 1. SQLiteからデータ取得
conn = sqlite3.connect('sales.db')
cursor = conn.cursor()
cursor.execute('''
    SELECT branch, SUM(amount) as total, COUNT(*) as count
    FROM orders
    GROUP BY branch
    ORDER BY total DESC
''')
rows = cursor.fetchall()

# 2. Excelファイル作成
wb = Workbook()
ws = wb.active
ws.title = "売上集計"

# 3. スタイル定義
header_font = Font(bold=True, color="FFFFFF")
header_fill = PatternFill("solid", fgColor="4472C4")
border = Border(
    left=Side(style='thin'),
    right=Side(style='thin'),
    top=Side(style='thin'),
    bottom=Side(style='thin')
)
achieved_fill = PatternFill("solid", fgColor="C6EFCE")  # 緑
not_achieved_fill = PatternFill("solid", fgColor="FFC7CE")  # 赤

# 4. ヘッダー行（青背景・白太字）
headers = ["支店", "売上合計", "件数"]
for col, header in enumerate(headers, 1):
    cell = ws.cell(row=1, column=col, value=header)
    cell.font = header_font
    cell.fill = header_fill
    cell.border = border

# 5. データ行（条件付き書式付き）
for row_idx, (branch, total, count) in enumerate(rows, 2):
    ws.cell(row=row_idx, column=1, value=branch).border = border

    total_cell = ws.cell(row=row_idx, column=2, value=total)
    total_cell.number_format = '#,##0"円"'
    total_cell.border = border
    # 条件付き書式：100万以上なら緑、未満なら赤
    if total >= 1000000:
        total_cell.fill = achieved_fill
    else:
        total_cell.fill = not_achieved_fill

    ws.cell(row=row_idx, column=3, value=count).border = border

# 6. 列幅調整
ws.column_dimensions['A'].width = 15
ws.column_dimensions['B'].width = 18
ws.column_dimensions['C'].width = 10

# 7. 保存
wb.save('sales_report.xlsx')
conn.close()

print("sales_report.xlsx を出力しました")
```

#### 出力されるExcelファイルのイメージ

```
┌──────────┬────────────────┬────────┐
│ 支店     │    売上合計     │  件数  │  ← 青背景・白太字
├──────────┼────────────────┼────────┤
│ 東京     │  1,250,000円   │   45   │  ← 緑背景（100万以上）
├──────────┼────────────────┼────────┤
│ 名古屋   │  1,100,000円   │   38   │  ← 緑背景
├──────────┼────────────────┼────────┤
│ 大阪     │    980,000円   │   32   │  ← 赤背景（100万未満）
└──────────┴────────────────┴────────┘
```

#### ブロンズ・オプションとしての位置づけ

```
【本編】SQLでデータを取得・集計
    ↓
【オプション】openpyxlで書式付きExcel出力

・Excel操作に慣れた人への橋渡し
・「見慣れた形式」で出力できる安心感
・印刷・配布用途に対応
・シルバー（Django）に進まなくても完結可能
```

### 各レベルでの「見た目」対応まとめ

| レベル | 技術 | 対応内容 |
|---|---|---|
| ブロンズ本編 | Python + sqlite3 | なし（データ処理のみ） |
| ブロンズ・オプション | + matplotlib | グラフ作成 |
| ブロンズ・オプション | + openpyxl | Excel書式（色・罫線・太字） |
| シルバー | Django + HTMX | HTML/CSS（Web画面） |
| ゴールド | + Looker Studio | グラフ・ダッシュボード |

---

*本ドキュメントは技術選定の議論を経て作成されました。*
*最終更新: 2026年2月*
