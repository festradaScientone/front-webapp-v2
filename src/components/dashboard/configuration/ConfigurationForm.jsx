"use client";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";

export const ConfigurationForm = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="col-span-2">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="name" className="text-[#001238] font-bold">Name</Label>
          <Input className="bg-[#f5f8ff] text-md font-semibold px-3 py-5" type="text" id="name" placeholder="Frank" />
        </div>
      </div>
      <div className="col-span-2">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="name" className="text-[#001238] font-bold">Avatar</Label>
          <Input className="bg-[#f5f8ff] text-md font-semibold px-3 py-5" type="text" id="Avatar" placeholder="img" />
        </div>
      </div>

      <div className="col-span-1"></div>

      <div className="col-span-1">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="name" className="text-[#001238] font-bold">Language</Label>
          <Input className="bg-[#f5f8ff] text-md font-semibold px-3 py-5" type="text" id="Language" placeholder="select" />
        </div>
      </div>
      <div className="col-span-1">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="name" className="text-[#001238] font-bold">Country</Label>
          <Input className="bg-[#f5f8ff] text-md font-semibold px-3 py-5" type="text" id="Country" placeholder="select" />
        </div>
      </div>
      <div className="col-span-2">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="name" className="text-[#001238] font-bold">Welcome Message</Label>
          <Input className="bg-[#f5f8ff] text-md font-semibold px-3 py-5 truncate overflow-hidden" type="text" id="Welcome Message" placeholder="Hi, my name is Frank and I’ll be your Virtual Assistant. Here are a few ideas for things you can ask me" />
        </div>
      </div>

      <div className="col-span-1"></div>

      <div className="col-span-1">
        <Button className="bg-[#d6f898] text-[#130e4b] text-md font-bold hover:bg-[#d7edaf]"> Save Changes </Button>
      </div>
    </div>
  );
};
