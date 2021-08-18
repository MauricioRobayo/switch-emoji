import React, { memo } from "react";

const placeholder = "{unicode}";
const sources = {
  GitHub: `https://github.githubassets.com/images/icons/emoji/unicode/${placeholder}.png?v8`,
  Twitter: `https://twemoji.maxcdn.com/v/latest/svg/${placeholder}.svg`,
};

type Props = {
  emoji: string;
  height?: string;
  className?: string;
  source?: keyof typeof sources;
};
export function Semoji({
  emoji,
  className = "",
  height = "1em",
  source = "Twitter",
}: Props): JSX.Element | null {
  const unicode = emoji.codePointAt(0)?.toString(16);

  if (!unicode) {
    return null;
  }

  return (
    <div style={{ lineHeight: 0 }}>
      <img
        style={{ display: "inline-block", height }}
        alt={emoji}
        className={className}
        src={sources[source].replace(placeholder, unicode)}
      />
    </div>
  );
}

export default memo(Semoji);
