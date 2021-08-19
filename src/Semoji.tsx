import React from "react";

const placeholder = "{unicode}";
const sources = {
  GitHub: `https://github.githubassets.com/images/icons/emoji/unicode/${placeholder}.png?v8`,
  Twitter: `https://twemoji.maxcdn.com/v/latest/svg/${placeholder}.svg`,
};

type Props = {
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
}: Props): JSX.Element | null {
  const unicode = emoji.codePointAt(0)?.toString(16);

  if (!unicode) {
    return null;
  }

  return (
    <span style={{ lineHeight: 0 }}>
      <img
        alt={emoji}
        className={className}
        src={sources[source].replace(placeholder, unicode)}
        style={{ display: "inline-block", height }}
      />
    </span>
  );
}

export default Semoji;
