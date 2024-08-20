import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  CaptionsIcon,
  DramaIcon,
  MenuIcon,
  MessageSquareHeartIcon,
  MicIcon,
  WaypointsIcon,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="px-4 py-4 bg-background border-b flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <MicIcon className="h-6 w-6" />
        <span className="text-lg font-bold">Converse</span>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[80vw] max-w-xs">
          <div className="grid gap-4 p-4">
            <Link
              href="/transcript"
              className="flex items-center gap-2 text-lg font-medium"
              prefetch={false}
            >
              <CaptionsIcon className="h-5 w-5" />
              Live Transcript
            </Link>
            <Link
              href="/network"
              className="flex items-center gap-2 text-lg font-medium"
              prefetch={false}
            >
              <WaypointsIcon className="h-5 w-5" />
              Network Organizer
            </Link>
            <Link
              href="/role-play"
              className="flex items-center gap-2 text-lg font-medium"
              prefetch={false}
            >
              <DramaIcon className="h-5 w-5" />
              Conversation Role Play
            </Link>
            <Link
              href="/feedback"
              className="flex items-center gap-2 text-lg font-medium"
              prefetch={false}
            >
              <MessageSquareHeartIcon className="h-5 w-5" />
              Real-Time Conversation Feedback
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <Link
              href="/transcript"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              prefetch={false}
            >
              Live Transcript
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="/network"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              prefetch={false}
            >
              Network Organizer
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="/role-play"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              prefetch={false}
            >
              Conversation Role Play
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link
              href="/feedback"
              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              prefetch={false}
            >
              Real-Time Conversation Feedback
            </Link>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
