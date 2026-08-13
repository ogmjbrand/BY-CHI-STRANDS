"use client";

import * as React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/*
 * Registered here, at module scope, and not inside the component.
 *
 * It used to be registered in a useEffect while the timeline was built in
 * useGSAP — and useGSAP runs in a layout effect, which fires first. So every
 * timeline was created before the plugin existed, and GSAP rejected the
 * option outright, warning "Invalid property scrollTrigger set to ...".
 *
 * Nothing pinned, nothing scrubbed, and each accordion was left as a plain
 * box the height of its container with the questions sitting at the top —
 * about 12,600px of empty scrolling on the FAQ page with the answers never
 * opening on the way down.
 */
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface ScrollFAQAccordionProps {
  data: FAQItem[];
  className?: string;
  questionClassName?: string;
  answerClassName?: string;
}

export default function ScrollFAQAccordion({
  data,
  className,
  questionClassName,
  answerClassName,
}: ScrollFAQAccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const contentRefs = React.useRef<Map<string, HTMLDivElement>>(new Map());

  useGSAP(() => {
    if (!containerRef.current || data.length === 0) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${data.length * 200}`,
        scrub: 0.3,
        pin: true,
        markers: false,
      },
    });

    data.forEach((item, index) => {
      const contentRef = contentRefs.current.get(item.id.toString());
      if (contentRef) {
        tl.add(() => {
          setOpenItem(item.id.toString());
        }, index * 2);
      }
    });

    // Kill only this instance's timeline/trigger — several accordions can
    // share a page (one per FAQ category), and a global
    // `ScrollTrigger.getAll().kill()` here would tear down the others.
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [data]);

  /*
   * No height here at all. ScrollTrigger inserts its own pin-spacer worth the
   * pin duration, so the scroll distance is already accounted for; anything
   * set here is added on top of it. The original flat `h-[300vh]` reserved
   * 2,700px per category whether it held two questions or six — five of those
   * on one page, with the pin silently disabled, is where the FAQ's ~12,600px
   * of empty scrolling came from.
   */
  return (
    <div
      ref={containerRef}
      className={cn("max-w-4xl mx-auto py-16", className)}
    >
      <Accordion.Root type="single" collapsible value={openItem || ""}>
        {data.map((item) => (
          <Accordion.Item value={item.id.toString()} key={item.id} className="mb-6">
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full items-center justify-start gap-x-4 cursor-default text-left">
                <div
                  className={cn(
                    "relative flex-1 rounded-xl p-4 transition-colors",
                    openItem === item.id.toString()
                      ? "bg-primary/10 text-primary"
                      : "bg-surface-container-low text-on-surface",
                    questionClassName
                  )}
                >
                  <span className="font-headline-lg font-medium">{item.question}</span>
                </div>
                <span
                  className={cn(
                    "text-on-surface-variant shrink-0",
                    openItem === item.id.toString() && "text-primary"
                  )}
                >
                  {openItem === item.id.toString() ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </span>
              </Accordion.Trigger>
            </Accordion.Header>

            <Accordion.Content asChild forceMount>
              <motion.div
                ref={(el) => {
                  if (el) contentRefs.current.set(item.id.toString(), el);
                }}
                initial="collapsed"
                animate={openItem === item.id.toString() ? "open" : "collapsed"}
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="mt-4 mr-7 md:mr-16 flex justify-end">
                  <div
                    className={cn(
                      "max-w-md rounded-2xl bg-primary px-4 py-3 font-body-md text-body-sm text-on-primary",
                      answerClassName
                    )}
                  >
                    {item.answer}
                  </div>
                </div>
              </motion.div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
