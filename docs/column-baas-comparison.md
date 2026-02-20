# コラム：Backend as a Service（BaaS）の比較と選定

## 概要

本ドキュメントは、本カリキュラムにおけるBaaS（Backend as a Service）の選定理由と、比較検討した代替サービスについてまとめたものです。

---

## BaaS とは

```
Backend as a Service（BaaS）とは、
Webアプリやモバイルアプリのバックエンド機能を
クラウドサービスとして提供するもの。

【提供される機能】
・データベース
・認証（ログイン）
・ファイルストレージ
・リアルタイム同期
・API生成

【メリット】
・サーバー構築・運用が不要
・開発者はアプリ開発に集中できる
・スケーリングを自動で処理
```

---

## 本カリキュラムでの選定：Supabase

### Supabase の概要

| 項目 | 内容 |
|---|---|
| 提供元 | Supabase Inc.（米国） |
| データベース | PostgreSQL |
| ライセンス | オープンソース（Apache 2.0） |
| リアルタイム | PostgreSQL LISTEN/NOTIFY ベース |
| 認証 | メール、OAuth、MFA対応 |
| 料金 | 無料枠あり、Pro $25/月〜 |

### 選定理由

```
1. SQL継続性
   ブロンズ（sqlite3）→ シルバー（Supabase PostgreSQL）
   → 同じSQLが使える
   → 新しいクエリ言語を学ぶ必要がない

2. JSONB対応
   リレーショナルDB + ドキュメント型のハイブリッド
   → 柔軟なデータ構造に対応
   → 別途NoSQLを導入する必要がない

3. Realtime機能
   PostgreSQL の LISTEN/NOTIFY を活用
   → 追加サービス不要でリアルタイム同期
   → Firebaseを別途導入する必要がない

4. AppSheet接続
   Cloud Database（PostgreSQL）として直接接続可能
   → プロトタイプ段階からSupabaseにデータ蓄積
   → Django移行時にデータ移行不要

5. Django親和性
   Django ORMから直接PostgreSQLに接続
   → 特別なSDKやライブラリ不要
   → 標準的なPython開発フロー

6. 低ベンダーロックイン
   PostgreSQL標準
   → 他のPostgreSQLホスティングに移行可能
   → pg_dump/pg_restoreで丸ごとエクスポート可能
```

---

## 比較検討したサービス

### 1. Firebase（Google）

| 項目 | Firebase | Supabase |
|---|---|---|
| データベース | Firestore（NoSQL） | PostgreSQL（SQL） |
| クエリ言語 | 独自API | SQL（標準） |
| リアルタイム | ✓ | ✓ |
| 学習コスト | Firebase専用知識 | SQL知識が活きる |
| ベンダーロック | 高い | 低い |

```
【不採用の理由】
・NoSQLのため、ブロンズで学んだSQLが活きない
・独自のクエリ言語を新たに学ぶ必要がある
・Firestore → PostgreSQL への移行が困難
・AppSheetとの接続が直接できない
```

### 2. AWS Amplify

| 項目 | Amplify | Supabase |
|---|---|---|
| 提供元 | Amazon（AWS） | Supabase Inc. |
| データベース | DynamoDB / Aurora | PostgreSQL |
| API | AppSync（GraphQL） | REST / GraphQL |
| 難易度 | 高（AWS全体の知識必要） | 低 |
| 料金体系 | 複雑 | シンプル |

```
【不採用の理由】
・AWS全体の知識が必要（学習コストが高い）
・DynamoDB（NoSQL）がメインでSQL継続性がない
・料金体系が複雑で中小企業には把握しにくい
・中小企業にはオーバースペック
```

### 3. Hexabase（日本）

| 項目 | Hexabase | Supabase |
|---|---|---|
| 提供元 | 株式会社Hexabase（日本） | Supabase Inc.（米国） |
| データベース | 独自DB（NoSQL的） | PostgreSQL |
| 対象 | 大企業・エンタープライズ | スタートアップ〜中規模 |
| 日本語サポート | ◎ | △ |
| 料金 | 高い（要問合せ） | 無料枠あり |

```
【不採用の理由】
・独自APIでSQL継続性がない
・料金が高い（中小企業の予算に合わない）
・ベンダーロックインが強い
・日本語サポートは魅力だが、コストが見合わない
```

### 4. Back4app（Parse Server）

| 項目 | Back4app | Supabase |
|---|---|---|
| ベース技術 | Parse Server（OSS） | PostgreSQL（OSS） |
| データベース | MongoDB（NoSQL） | PostgreSQL |
| ロックイン | 低め（Parse OSS） | 低い（PostgreSQL標準） |
| 日本での情報 | 少ない | やや少ない |

```
【不採用の理由】
・MongoDB（NoSQL）でSQL継続性がない
・Parse独自のクエリ言語を学ぶ必要がある
・AppSheet接続ができない
・日本での情報・コミュニティが少ない
```

### 5. PlanetScale / Neon / Railway

| サービス | DB | 特徴 |
|---|---|---|
| PlanetScale | MySQL | ブランチ機能が強力 |
| Neon | PostgreSQL | サーバーレスPostgreSQL |
| Railway | PostgreSQL | シンプルなホスティング |

```
【不採用の理由】
・リアルタイム同期機能がない（別途実装が必要）
・認証機能がない（別途実装が必要）
・「DBホスティング」であり「BaaS」ではない
・Supabaseの方がオールインワンで学習効率が良い
```

---

## 比較まとめ

| サービス | DB | SQL | Realtime | AppSheet | ロックイン | コスト | 採用 |
|---|---|---|---|---|---|---|---|
| **Supabase** | PostgreSQL | ✓ | ✓ | ✓ | 低 | 低 | **◎** |
| Firebase | NoSQL | × | ✓ | × | 高 | 中 | × |
| AWS Amplify | DynamoDB等 | △ | ✓ | × | 高 | 高 | × |
| Hexabase | 独自 | × | △ | × | 高 | 高 | × |
| Back4app | MongoDB | × | ✓ | × | 低 | 低 | × |
| PlanetScale | MySQL | ✓ | × | × | 低 | 低 | × |

---

## ベンダーロックインについて

### ベンダーロックインとは

```
特定のサービスや技術に依存しすぎて、
他に乗り換えることが困難になる状態。

【ロックインが起きるパターン】
・独自言語・独自API（Firestore、DynamoDB等）
・独自データ形式（NoSQL独自形式）
・専用認証基盤
・サーバーレス関数への依存
```

### Firebase でロックインが起きる例

```
【開発時】
・Firestoreの独自クエリ言語で開発
・Firebase Authで認証を構築
・Cloud Functionsでロジック実装

    ↓ 数年後、料金値上げや機能変更があっても…

【移行時の問題】
・別サービスに移行するには全て書き直し
・データ移行も大変（NoSQL→SQLの変換）
・「仕方なく使い続ける」しかない
```

### Supabase がロックインしにくい理由

```
1. 標準SQL（PostgreSQL）
   → 他のPostgreSQLホスティングに移行可能
   → Azure, AWS, GCP, 自前サーバーどこでも動く

2. Django ORMで接続
   → Supabase固有のSDKに依存しない
   → 接続先を変えるだけで移行完了

3. データ移行が容易
   → pg_dump / pg_restore で丸ごとエクスポート
   → 標準ツールで対応可能
```

---

## オープンソースとセキュリティ

### よくある誤解

```
「オープンソース = セキュリティが弱い」は誤解。
むしろ逆のケースが多い。
```

### オープンソースのセキュリティ上のメリット

```
【クローズドソース】
・コードが非公開
・脆弱性が発見されにくい（見つかっても報告されない）
・ベンダー内部でのみ監査

【オープンソース】
・コードが公開
・世界中の開発者が監査
・脆弱性が発見されやすく、修正も早い
・「多くの目で見れば、バグは浅い」（Linus の法則）
```

### Supabase のセキュリティ機能

| 機能 | 内容 |
|---|---|
| RLS | Row Level Security（行単位のアクセス制御） |
| SSL/TLS | 通信の暗号化（標準対応） |
| 認証 | メール、OAuth、MFA対応 |
| 暗号化 | 保存データの暗号化 |
| 監査ログ | アクセスログの記録 |
| SOC2 Type II | マネージドサービスは認証取得済み |

### 実際に注意すべきこと

```
【Supabaseで問題になりにくいこと】
・PostgreSQL自体は25年以上の実績
・金融機関でも採用されるDB

【運用上の注意点】
・RLS設定ミス → データ漏洩
・APIキーの露出 → 不正アクセス
・バックアップ未設定 → データ消失

→ これらは「Supabaseだから」ではなく
  「どのBaaSでも起きる運用上の課題」
→ シルバーカリキュラムで適切な設計・運用を学習
```

---

## その他の考慮点

### 1. データ所在地（リージョン）

```
【Supabaseの現状】
・東京リージョンあり（ap-northeast-1）
・日本国内にデータを置ける

【業種別の考慮】
・医療系など規制業種 → データ国内保存が望ましい
・一般的な業務アプリ → 海外リージョンでも問題ない場合が多い
```

### 2. 長期的なサービス継続性

```
【リスク】
・BaaSベンダーのサービス終了
・料金体系の大幅変更

【Supabaseの強み】
・OSSベースのため、最悪自社ホストに移行可能
・PostgreSQL標準 → 他サービスへの移行も容易
・2024年にシリーズC調達（$80M）で財務基盤も安定
```

### 3. バックアップと災害復旧

```
【Supabase Pro以上】
・日次バックアップ
・Point-in-Time Recovery（任意時点への復元）

【無料プラン】
・自動バックアップなし
・pg_dumpで手動バックアップを推奨
・シルバーカリキュラムでバックアップ手順を学習
```

### 4. 料金シミュレーション

| 規模 | プラン | 月額目安 |
|---|---|---|
| 学習・検証 | Free | $0 |
| 小規模運用（〜10人） | Free | $0 |
| 中規模運用（〜50人） | Pro | $25 |
| 大規模運用（100人〜） | Pro + 追加 | $50〜100 |

---

## 結論

### 本カリキュラムでSupabaseを採用する理由

```
1. SQL一貫性
   ブロンズで学んだSQLがそのまま使える

2. ハイブリッドDB
   JSONB で柔軟なデータ構造に対応

3. オールインワン
   DB + Realtime + 認証 が1サービスで完結

4. AppSheet接続
   プロトタイプ→本実装のシームレスな移行

5. 低ロックイン
   PostgreSQL標準で将来の選択肢を狭めない

6. 低コスト
   無料枠で学習・小規模運用が可能

→ 中小企業向けDX教育に最適なBaaS
```

### 代替サービスを採用しない理由

```
【Firebase / Amplify / Hexabase / Back4app】
・SQL継続性がない（独自言語の学習が必要）
・AppSheet接続ができない
・ベンダーロックインが高い
・コストが高い、または学習コストが高い

→ 「中小企業の非エンジニアがDXを推進する」
  という本カリキュラムの目的に合わない
```

---

## 参考情報

### 公式ドキュメント

- [Supabase Docs](https://supabase.com/docs)
- [Firebase Docs](https://firebase.google.com/docs)
- [AWS Amplify Docs](https://docs.amplify.aws/)

### 関連カリキュラム

- シルバー第2部：ハイブリッドDB実装（Supabase RDB + JSONB）
- シルバー第4部：Supabase Realtime + Looker Studio
- シルバー第5部：環境分離と自動化（CI/CD）

---

*本ドキュメントは技術選定の議論を経て作成されました。*
*最終更新: 2026年2月*
