<div align="center">
<samp>

# Yumemi-Front

## Code checking of front-end

</samp>
</div>

## Technology

- Next.js
- Highcharts
- SCSS
- Jotai
- zod
- ESLint
- Prettier
- Storybook
- Vitest

## Directory Structure

### app

Next.js v13 から追加された`App Directory`のためのディレクトリ

### components

BCD Design をもとに考えた BF(Base - Feature) Design を採用

単一的なものが atoms で、複合的なものが molecules

#### base

基礎的な機能を表すコンポーネント

#### feature

機能を表すまとまり。コンポーネントや`hook`などが含まれる

#### functional

どの要素にも属さない、特定の処理を行うだけのコンポーネント

#### page

ページを表すコンポーネント。`app/page`はこれのみを扱う

### styles

汎用的な Style を定義するディレクトリ

### types

汎用的な型を定義するディレクトリ

### libs

ライブラリの設定を行うディレクトリ

### stores

`jotai`を用いた状態管理を行うディレクトリ

## Author

- Github: [airRnot1106](https://github.com/airRnot1106)
- NPM: [airrnot1106](https://www.npmjs.com/~airrnot1106)
- Mastodon: [@airRnot@mstdn.jp](https://mstdn.jp/@airRnot)
- Misskey: [@bot@misskey.dev](https://misskey.dev/@bot)
- Nostr: npub168ecu95z2r6phu9m89xcegmm6sp8mdal2twdxkm4uzua5u97jnzspnu2ku

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/airRnot1106/yumemi-front/blob/main/LICENSE) file for details.
