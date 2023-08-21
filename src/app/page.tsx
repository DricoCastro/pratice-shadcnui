"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
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
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  return (
    <div
      className={`
      w-full
      min-h-screen
      flex
      flex-col
      items-center
      justify-center
    `}
    >
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Form Naldin</CardTitle>
          <CardDescription>
            Enter the information required to complete the form.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Phone</Label>
                <Input id="name" placeholder="Your phone" />
              </div>
            </div>
            <div className="mt-5 flex items-center space-x-2">
              <Checkbox id="terms2" />
              <label
                htmlFor="terms2"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            className={`
      w-full
    `}
          >
            Deploy
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
