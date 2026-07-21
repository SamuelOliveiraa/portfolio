"use client";

import Link from "next/link";
import React from "react";
import { Link as ReactScrollLink } from "react-scroll";

interface ScrollLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  targetId: string;
  children: React.ReactNode;
}

export function ScrollLink({ targetId, children, className }: ScrollLinkProps) {
  const isExternalLink = targetId.startsWith("/");

  if (isExternalLink) {
    return (
      <Link href={targetId} className={className} style={{ cursor: "pointer" }}>
        {children}
      </Link>
    );
  }
  return (
    <ReactScrollLink
      to={targetId}
      smooth="easeOutQuad"
      duration={100}
      offset={-90}
      spy={false}
      className={className}
      style={{ cursor: "pointer" }}
    >
      {children}
    </ReactScrollLink>
  );
}
