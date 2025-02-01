import { LucideProps } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string;
  progress: number;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  className?: string;
}

export function MetricCard({ label, value, progress, icon: Icon, className }: MetricCardProps) {
  return (
    <Card className={cn("rounded-lg border bg-card text-card-foreground shadow-sm p-5", className)}>
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">{label}</p>
        <Icon size={16} className="text-primary" />
      </div>
      <h3 className="text-2xl font-semibold leading-none tracking-tight mt-3">{value}</h3>
      <Progress value={progress} className="mt-4 bg-accent h-2.5" />
    </Card>
  );
}
