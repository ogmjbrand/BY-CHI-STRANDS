import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  CalendarPlus,
  Camera,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Circle,
  CircleDot,
  CircleUserRound,
  Clock,
  Flower2,
  GraduationCap,
  Hand,
  Headset,
  Heart,
  Leaf,
  Lock,
  LockOpen,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  MoveRight,
  Music,
  Package,
  Play,
  Plus,
  ReceiptText,
  Search,
  Share2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
  User,
  Users,
  Video,
  X,
  XCircle,
  type LucideIcon,
} from "lucide-react";

/**
 * The site's icon set, keyed by the Material Symbols ligature names the
 * screens were originally exported with.
 *
 * Those names are kept deliberately as the public API. The markup used to be
 * `<span className="material-symbols-outlined text-[22px]">search</span>`,
 * which pulled a 1.1 MB variable icon font on every page for about
 * forty-five glyphs. Keeping the same keys made the swap mechanical and
 * reviewable; renaming them at the same time would have made every one of
 * the hundred-odd call sites a judgement call.
 *
 * Sizing is the other half of the swap. The font sized icons by `font-size`,
 * so call sites carry classes like `text-[22px]` or `text-3xl`. These render
 * at `1em`, which means those classes keep working unchanged and nothing had
 * to be re-measured.
 */
const ICONS: Record<string, LucideIcon> = {
  account_circle: CircleUserRound,
  add: Plus,
  arrow_back: ArrowLeft,
  arrow_downward: ArrowDown,
  arrow_forward: ArrowRight,
  auto_awesome: Sparkles,
  calendar_add_on: CalendarPlus,
  camera: Camera,
  cancel: XCircle,
  chat: MessageCircle,
  chat_bubble: MessageCircle,
  check: Check,
  check_circle: CheckCircle2,
  chevron_right: ChevronRight,
  close: X,
  diversity_1: Users,
  eco: Leaf,
  expand_more: ChevronDown,
  favorite: Heart,
  front_hand: Hand,
  local_shipping: Truck,
  location_on: MapPin,
  lock: Lock,
  lock_open: LockOpen,
  mail: Mail,
  menu: Menu,
  music_note: Music,
  north_east: ArrowUpRight,
  package_2: Package,
  person: User,
  photo_camera: Camera,
  play_arrow: Play,
  radio_button_checked: CircleDot,
  radio_button_unchecked: Circle,
  receipt_long: ReceiptText,
  remove: Minus,
  schedule: Clock,
  school: GraduationCap,
  search: Search,
  share: Share2,
  shopping_bag: ShoppingBag,
  spa: Flower2,
  star: Star,
  support_agent: Headset,
  trending_flat: MoveRight,
  verified: BadgeCheck,
  verified_user: ShieldCheck,
  videocam: Video,
};

export type IconName = keyof typeof ICONS;

export function Icon({
  name,
  className = "",
  /** Fill the glyph rather than stroke it — the wishlist heart when saved. */
  filled = false,
  strokeWidth = 1.5,
  ...rest
}: {
  name: string;
  className?: string;
  filled?: boolean;
  strokeWidth?: number;
} & Omit<React.SVGProps<SVGSVGElement>, "name" | "fill" | "strokeWidth">) {
  const Glyph = ICONS[name];
  if (!Glyph) {
    // A missing key should be visible in development rather than silently
    // rendering nothing where an affordance used to be.
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[Icon] no mapping for "${name}"`);
    }
    return null;
  }

  return (
    <Glyph
      aria-hidden="true"
      className={`inline-block h-[1em] w-[1em] shrink-0 align-[-0.125em] ${className}`}
      strokeWidth={strokeWidth}
      fill={filled ? "currentColor" : "none"}
      {...rest}
    />
  );
}
