# Switch Emoji 💃

[![Semoji](https://badgen.net/npm/v/switch-emoji)](https://www.npmjs.com/package/switch-emoji)
[![CI](https://github.com/MauricioRobayo/switch-emoji/actions/workflows/main.yml/badge.svg)](https://github.com/MauricioRobayo/switch-emoji/actions/workflows/main.yml)
[![codecov](https://codecov.io/gh/MauricioRobayo/switch-emoji/branch/main/graph/badge.svg?token=gkrRmHZHGB)](https://codecov.io/gh/MauricioRobayo/switch-emoji)
[![CodeFactor](https://www.codefactor.io/repository/github/mauriciorobayo/switch-emoji/badge)](https://www.codefactor.io/repository/github/mauriciorobayo/switch-emoji)
[![bundlephobia](https://badgen.net/bundlephobia/minzip/switch-emoji)](https://bundlephobia.com/package/switch-emoji)

**Switchable Twitter/GitHub emojis**.

| Source  | Emoji                                                                                                                             |
| ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| GitHub  | <img src="https://github.githubassets.com/images/icons/emoji/unicode/1f483.png?v8" height="16" width="auto" title="GitHub emoji"> |
| Twitter | <img src="https://twemoji.maxcdn.com/v/latest/svg/1f483.svg" height="16" width="auto" title="Twitter emoji">                      |

## Installation

```sh
npm install --save switch-emoji
```

## Usage

```js
import { Semoji } from "switch-emoji";

export default function Emoji(props) {
  return <Semoji {...props} source="GitHub" />;
}
```

Read the [Documentation 📘](https://www.mauriciorobayo.com/switch-emoji?nav=false).

## TypeScript

The component is written in TypeScript and type definitions are included.

## Contributing

All type of contributions are welcome!

## Show your support

Give a ⭐️ if you like this project!

## LICENSE

[MIT](LICENSE)
