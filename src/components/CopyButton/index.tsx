"use client";

import { Check, Copy } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "../ui/tooltip";

export default function CopyButton({ text }: { text: string }) {
  const [isClicked, setIsClicked] = useState(false);
  const t = useTranslations("CopyButton");

  async function handleClipboardCopy() {
    await navigator.clipboard.writeText(text);
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2000);
  }

  return (
    <TooltipProvider>
      <Tooltip open={isClicked}>
        <TooltipTrigger asChild>
          <div
            className="hover:bg-gray-200 p-2 rounded-md hover:cursor-pointer transition-colors duration-200"
            onClick={handleClipboardCopy}
          >
            {isClicked ? (
              <Check className="text-green-500 transition-all duration-200" />
            ) : (
              <Copy className="text-gray-600 transition-all duration-200" />
            )}
          </div>
        </TooltipTrigger>

        <TooltipContent className="p-2 bg-gray-200 ">
          <p className="text-gray-900 text-sm">{t("text")}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
