import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MoreVertical, Send } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between border-b px-6 py-3">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700" />
          <div>
            <h2 className="font-semibold">Chat User</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">online</p>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-5 w-5" />
        </Button>
      </header>
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {/* Placeholder for messages */}
          <ReceivedMessage />
          <SentMessage />
          <ReceivedMessage />
          <SentMessage />
        </div>
      </ScrollArea>
      <footer className="border-t p-4">
        <div className="flex items-center gap-2">
          <Input
            className="flex-1"
            placeholder="Type a message..."
            type="text"
          />
          <Button size="icon">
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </footer>
    </div>
  );
};

const ReceivedMessage = () => (
  <div className="flex items-start gap-2.5">
    <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700" />
    <div className="rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
      <p className="text-sm">This is a received message.</p>
    </div>
  </div>
);

const SentMessage = () => (
  <div className="flex items-start justify-end gap-2.5">
    <div className="rounded-lg bg-blue-500 p-3 text-white">
      <p className="text-sm">This is a sent message.</p>
    </div>
  </div>
);

export default Index;