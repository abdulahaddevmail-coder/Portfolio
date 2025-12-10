"use client";

import { useMediaQuery } from "@/hooks/media-query";

const Breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

// Extract exact keys as a union
type BreakpointKey = keyof typeof Breakpoints;

// ⚡ Fully typed media-query builders
const mq = {
  up: (key: BreakpointKey) => `(min-width: ${Breakpoints[key]}px)`,

  down: (key: BreakpointKey) => `(max-width: ${Breakpoints[key] - 0.05}px)`,

  between: (start: BreakpointKey, end: BreakpointKey) =>
    `(min-width: ${Breakpoints[start]}px) and (max-width: ${Breakpoints[end] - 0.05}px)`,

  only: (key: BreakpointKey) => {
    const keys = Object.keys(Breakpoints) as BreakpointKey[];
    const index = keys.indexOf(key);
    const next = keys[index + 1];

    return next
      ? `(min-width: ${Breakpoints[key]}px) and (max-width: ${Breakpoints[next] - 0.05}px)`
      : `(min-width: ${Breakpoints[key]}px)`; // last one = 2xl
  },
} as const;

// Create typed string patterns for all possible query commands
type UpQuery = `up.${BreakpointKey}`;
type DownQuery = `down.${BreakpointKey}`;
type OnlyQuery = `only.${BreakpointKey}`;
type BetweenQuery = `between.${BreakpointKey}.${BreakpointKey}`;

// FINAL union type
type QueryString = UpQuery | DownQuery | OnlyQuery | BetweenQuery;

//---------------------
//    ACTIVITY
//---------------------
export const Activity: React.FC<{
  query?: QueryString; // fully typed → AUTOCOMPLETE WORKS
  customQuery?: string; // fallback raw string query
  children: React.ReactNode;
}> = ({ query, customQuery, children }) => {
  let finalQuery = customQuery || "";

  if (query) {
    if (query.startsWith("up.")) {
      finalQuery = mq.up(query.split(".")[1] as BreakpointKey);
    } else if (query.startsWith("down.")) {
      finalQuery = mq.down(query.split(".")[1] as BreakpointKey);
    } else if (query.startsWith("only.")) {
      finalQuery = mq.only(query.split(".")[1] as BreakpointKey);
    } else if (query.startsWith("between.")) {
      const [, start, end] = query.split(".");
      finalQuery = mq.between(start as BreakpointKey, end as BreakpointKey);
    }
  }

  const matches = useMediaQuery(finalQuery);

  if (matches) return null;

  return <>{children}</>;
};
