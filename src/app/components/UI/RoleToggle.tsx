import { Button } from "./Button";
import { cn } from "@/lib/utils";

interface RoleToggleProps {
  activeRole: "creator" | "developer";
  onRoleChange: (role: "creator" | "developer") => void;
}

const RoleToggle = ({ activeRole, onRoleChange }: RoleToggleProps) => {
  return (
    <div className="flex items-center gap-2 p-1 bg-muted rounded-lg">
      <Button
        variant={activeRole === "creator" ? "default" : "ghost"}
        size="sm"
        onClick={() => onRoleChange("creator")}
        className={cn(
          "transition-smooth",
          activeRole === "creator" && "bg-navy text-white shadow-md"
        )}
      >
        Creator
      </Button>
      <Button
        variant={activeRole === "developer" ? "default" : "ghost"}
        size="sm"
        onClick={() => onRoleChange("developer")}
        className={cn(
          "transition-smooth",
          activeRole === "developer" && "bg-navy text-white shadow-md"
        )}
      >
        Developer
      </Button>
    </div>
  );
};

export default RoleToggle;