import {
  LayoutDashboard,
  BarChart,
  Lightbulb,
  RefreshCcw,
  Package,
  Menu,
  Search,
  Sun,
  User,
  ArrowLeftRight,
  DollarSign,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectTrigger } from "@/components/ui/select";
import { MetricCard } from "@/components/metric-card";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export function Section() {
  return (
    <div className="flex w-full min-h-screen">
      <aside className="w-64 border-r bg-background p-6 flex-col hidden lg:flex">
        <div className="mb-8 flex items-center gap-2">
          <Badge size={20} className="text-primary fill-primary" />
          <h1 className="font-heading font-bold text-lg">Dashy</h1>
        </div>
        <nav className="space-y-2">
          <div className="flex items-center rounded-lg bg-primary/10 px-4 py-2 text-primary">
            <LayoutDashboard className="mr-3 h-4 w-4" />
            <span className="font-medium">Dashboard</span>
          </div>
          <div className="flex items-center px-4 py-2 text-muted-foreground hover:text-foreground">
            <BarChart className="mr-3 h-4 w-4" />
            <span className="font-medium">Analytics</span>
          </div>
          <div className="flex items-center px-4 py-2 text-muted-foreground hover:text-foreground">
            <Lightbulb className="mr-3 h-4 w-4" />
            <span className="font-medium">Insights</span>
          </div>
          <div className="flex items-center justify-between px-4 py-2 text-muted-foreground hover:text-foreground">
            <div className="flex items-center">
              <RefreshCcw className="mr-3 h-4 w-4" />
              <span className="font-medium">Updates</span>
            </div>
            <Badge className="bg-primary/20 text-primary">14</Badge>
          </div>
          <div className="flex items-center justify-between px-4 py-2 text-muted-foreground hover:text-foreground">
            <div className="flex items-center">
              <Package className="mr-3 h-4 w-4" />
              <span className="font-medium">Products</span>
            </div>
            <Badge className="bg-primary/20 text-primary">14+</Badge>
          </div>
        </nav>
        <Button className="mt-auto">Upgrade Plan</Button>
      </aside>
      <main className="flex-1 w-full">
        <div className="border-b px-6 py-3">
          <div className="flex items-center justify-between">
            <Button size="icon" variant="outline" className="border">
              <Menu size={16} />
            </Button>
            <div className="flex items-center space-x-4 ml-auto">
              <div className="relative hidden md:block">
                <Search
                  size={16}
                  className="absolute top-1/2 -translate-y-1/2 left-3 text-muted-foreground"
                />
                <Input placeholder="Search" className="w-64 pl-8" />
              </div>
              <Button size="icon" variant="outline" className="border">
                <Sun size={16} />
              </Button>
              <Avatar>
                <AvatarImage alt="avatar" src="/images/avatar.jpeg" className="object-cover" />
                <AvatarFallback>ML</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-5">
            <h2 className="font-heading font-semibold tracking-tight text-balance text-2xl sm:text-3xl">
              Dashboard
            </h2>
            <Button size="sm">New Invoice</Button>
          </div>
          <div className="flex mb-5 gap-3">
            <div className="relative flex-1 hidden md:block">
              <Search
                size={16}
                className="absolute top-1/2 -translate-y-1/2 left-3 text-muted-foreground"
              />
              <Input placeholder="Search" className="w-64 pl-8 w-full bg-card" />
            </div>
            <Select>
              <SelectTrigger className="w-40 bg-card flex-1 md:flex-none">
                <span>Last 3 Months</span>
              </SelectTrigger>
            </Select>
            <Select>
              <SelectTrigger className="w-40 bg-card flex-1 md:flex-auto">
                <span>Export</span>
              </SelectTrigger>
            </Select>
          </div>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
            <MetricCard icon={User} label="Total Users" value="18278" progress={48} />
            <MetricCard
              icon={ArrowLeftRight}
              label="Total Transactions"
              value="103578"
              progress={64}
            />
            <MetricCard
              icon={DollarSign}
              label="Volume Processed"
              value="$1,206,892"
              progress={30}
            />
          </div>
          <Card className="rounded-lg border bg-card text-card-foreground shadow-sm p-5 mt-5">
            <h2 className="font-heading font-semibold tracking-tight text-balance text-xl mb-3">
              Invoices
            </h2>
            <Table>
              <TableCaption>A list of your recent invoices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>07/12/2024</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV002</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell>Band Transfer</TableCell>
                  <TableCell>02/12/2024</TableCell>
                  <TableCell className="text-right">$280.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV003</TableCell>
                  <TableCell>Failed</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>28/11/2024</TableCell>
                  <TableCell className="text-right">$1500.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV003</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>23/11/2024</TableCell>
                  <TableCell className="text-right">$650.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV004</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell>Bank Transfer</TableCell>
                  <TableCell>22/11/2024</TableCell>
                  <TableCell className="text-right">$1035.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV004</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell>18/11/2024</TableCell>
                  <TableCell className="text-right">$105.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV006</TableCell>
                  <TableCell>Failed</TableCell>
                  <TableCell>Bank Transfer</TableCell>
                  <TableCell>98/11/2024</TableCell>
                  <TableCell className="text-right">$980.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>
      </main>
    </div>
  );
}
