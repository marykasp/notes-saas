import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "../../components/ui/button";

export function Navbar() {
  return (
    <nav className="border-b bg-background h-[10vh] flex items-center">
      <div className="container flex items-center justify-between">
        <Link href={"/"} className="font-bold text-3xl">
          Notes.
        </Link>
        {/* buttons */}
        <div className="flex items-center gap-x-5">
          <ThemeToggle />
          <div className="flex items-center gap-x-5">
            <Button>Sign In</Button>
            <Button variant="secondary">Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
