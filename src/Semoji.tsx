import React from "react";

const placeholder = "{unicode}";
const sources = {
  GitHub: {
    src: `https://github.githubassets.com/images/icons/emoji/unicode/${placeholder}.png?v8`,
    upperCase: false,
  },
  Twitter: {
    src: `https://twemoji.maxcdn.com/v/latest/svg/${placeholder}.svg`,
    upperCase: false,
  },
  OpenMoji: {
    src: `https://www.openmoji.org/data/color/svg/${placeholder}.svg`,
    upperCase: true,
  },
};

export type SemojiProps = {
  className?: string;
  emoji: string;
  height?: string;
  source: keyof typeof sources;
};
export function Semoji({
  className = "",
  emoji,
  height = "1em",
  source,
}: SemojiProps): JSX.Element | null {
  const unicode = emoji.codePointAt(0)?.toString(16);

  if (!unicode) {
    return null;
  }

  const { src, upperCase } = sources[source];

  return (
    <span style={{ lineHeight: 0 }}>
      <img
        alt={emoji}
        className={className}
        src={src.replace(
          placeholder,
          upperCase ? unicode.toUpperCase() : unicode
        )}
        style={{ display: "inline-block", height }}
      />
    </span>
  );
}

export default Semoji;
