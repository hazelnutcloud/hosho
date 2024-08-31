"use client";
import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

export default function Main() {
  const [isConnected, setIsConnected] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("lend");

  const connectWallet = () => {
    // Simulating wallet connection
    setIsConnected(true);
  };

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Hoshō</h1>
        {isConnected ? (
          <Badge variant="outline" className="py-2">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
            Connected
          </Badge>
        ) : (
          <Button onClick={connectWallet}>Connect Wallet</Button>
        )}
      </header>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Protocol Statistics</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Total Value Locked</p>
            <p className="text-2xl font-bold">$10,234,567</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Active Loans</p>
            <p className="text-2xl font-bold">1,234</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              Average Interest Rate
            </p>
            <p className="text-2xl font-bold">3.5%</p>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="lend">Lend</TabsTrigger>
          <TabsTrigger value="borrow">Borrow</TabsTrigger>
        </TabsList>
        <TabsContent value="lend">
          <Card>
            <CardHeader>
              <CardTitle>Lend Assets</CardTitle>
              <CardDescription>
                Provide liquidity and earn interest
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="lend-amount">Amount to Lend</Label>
                <Input id="lend-amount" placeholder="0.00" type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lend-asset">Asset</Label>
                <select id="lend-asset" className="w-full p-2 border rounded">
                  <option>ETH</option>
                  <option>USDC</option>
                  <option>DAI</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label>Estimated APY</Label>
                <p className="text-2xl font-bold">4.5%</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Lend Assets</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="borrow">
          <Card>
            <CardHeader>
              <CardTitle>Borrow Assets</CardTitle>
              <CardDescription>
                Access under-collateralised loans
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="borrow-amount">Amount to Borrow</Label>
                <Input id="borrow-amount" placeholder="0.00" type="number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="borrow-asset">Asset</Label>
                <select id="borrow-asset" className="w-full p-2 border rounded">
                  <option>ETH</option>
                  <option>USDC</option>
                  <option>DAI</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label>Collateral Ratio</Label>
                <Progress value={33} className="w-full" />
                <p className="text-sm text-muted-foreground">
                  33% (Under-collateralised)
                </p>
              </div>
              <div className="space-y-2">
                <Label>Interest Rate</Label>
                <p className="text-2xl font-bold">5.5%</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Borrow Assets</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Your Active Positions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="ETH"
                  />
                  <AvatarFallback>ETH</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Lending: 5 ETH</p>
                  <p className="text-sm text-muted-foreground">APY: 4.5%</p>
                </div>
              </div>
              <Button variant="outline">Withdraw</Button>
            </div>
            <div className="flex items-center justify-between p-4 border rounded">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="USDC"
                  />
                  <AvatarFallback>USDC</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Borrowing: 10,000 USDC</p>
                  <p className="text-sm text-muted-foreground">
                    Interest: 5.5%
                  </p>
                </div>
              </div>
              <Button variant="outline">Repay</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
