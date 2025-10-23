"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusCircle } from "lucide-react";
import { GUIDE_CATEGORIES } from "@/data/guide-categories";

interface RequestGuideModalProps {
  trigger?: React.ReactNode;
}

export function RequestGuideModal({ trigger }: RequestGuideModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (topic.length < 5) {
      alert("Please describe your situation (at least 5 characters)");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/requests/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, category, email }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request");
      }

      alert("Request submitted! We'll review it and may reach out if we have questions.");
      setTopic("");
      setCategory("");
      setEmail("");
      setIsOpen(false);
    } catch (error) {
      console.error("Error submitting request:", error);
      alert("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" className="gap-2">
            <PlusCircle className="h-4 w-4" />
            Request a Guide
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Request a Guide</DialogTitle>
          <DialogDescription>
            Tell us what life situation you need help with. We'll consider creating a guide for it.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="topic" className="text-sm font-medium mb-1.5 block">
              Your situation
            </label>
            <Textarea
              id="topic"
              placeholder="E.g., 'Deciding whether to go back to school', 'Moving to a new city alone', 'Starting a side business'"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              rows={3}
              maxLength={200}
              required
            />
            <p className="text-xs text-muted-foreground mt-1">{topic.length}/200</p>
          </div>

          <div>
            <label htmlFor="category" className="text-sm font-medium mb-1.5 block">
              Category (optional)
            </label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Choose a category" />
              </SelectTrigger>
              <SelectContent>
                {GUIDE_CATEGORIES.map((cat) => (
                  <SelectItem key={cat.key} value={cat.key}>
                    {cat.emoji} {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium mb-1.5 block">
              Email (optional)
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="text-xs text-muted-foreground mt-1">
              We'll notify you if we create this guide
            </p>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="ghost" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit request"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
