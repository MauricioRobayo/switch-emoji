import React, { memo } from "react";

const sources = {
  GitHub:
    "https://github.githubassets.com/images/icons/emoji/unicode/{unicode}.png?v8",
  Twitter: "https://twemoji.maxcdn.com/v/latest/svg/{unicode}.svg",
};

type Props = {
  emoji: string;
  height?: string;
  width?: string;
  className?: string;
  source?: keyof typeof sources;
};
export function Semoji({
  emoji,
  className = "",
  height = "1em",
  width = "auto",
  source = "Twitter",
}: Props): JSX.Element | null {
  const unicode = emoji.codePointAt(0)?.toString(16);

  if (!unicode) {
    return null;
  }

  return (
    <div style={{ lineHeight: 0 }}>
      <img
        style={{ display: "inline-block", height, width }}
        alt={emoji}
        className={className}
        height={height}
        src={sources[source].replace("{unicode}", unicode)}
        width={width}
      />
    </div>
  );
}

export default memo(Semoji);
