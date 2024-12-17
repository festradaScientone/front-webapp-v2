'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const bots = [
    {
        id: 1,
        name: "Frank",
        description: "Cusco Lodge Hotel",
    },
    {
        id: 2,
        name: "Luis",
        description: "Arequipa Hotel",
    }
];

export default function SelectBot(/* { bots, selectedBot, setSelectedBot } */) {

    const [selectedBot, setSelectedBot] = useState(bots[0].id); 

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a bot" />
      </SelectTrigger>
      <SelectContent>
        {bots.map((bot) => (
          <SelectItem key={bot.id} value={bot.id} onClick={() => setSelectedBot(bot.id)}> <b>{bot.name}</b> <br /> {bot.description}</SelectItem>
        ))}        
      </SelectContent>
    </Select>
  );
}
