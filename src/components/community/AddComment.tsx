"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface AddCommentProps {
  guideSlug: string;
  parentId?: string | null;
  onSuccess: () => void;
  onCancel?: () => void;
}

export function AddComment({ guideSlug, parentId, onSuccess, onCancel }: AddCommentProps) {
  const [body, setBody] = useState("");
  const [handle, setHandle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (body.length < 10) {
      alert("Comment must be at least 10 characters");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/comments/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          guide_slug: guideSlug,
          body,
          user_handle: handle || "Anonymous",
          parent_id: parentId,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add comment");
      }

      setBody("");
      setHandle("");
      onSuccess();
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("Failed to add comment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <Input
          placeholder="Your name (optional)"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
          maxLength={50}
          className="max-w-xs"
        />
      </div>

      <Textarea
        placeholder="Share how you approached this (kind, specific, on-topic)"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={4}
        maxLength={5000}
        className="resize-none"
      />

      <div className="flex items-center gap-2">
        <Button type="submit" disabled={isSubmitting || body.length < 10}>
          {isSubmitting ? "Posting..." : parentId ? "Post Reply" : "Post Comment"}
        </Button>
        {onCancel && (
          <Button type="button" variant="ghost" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <span className="text-xs text-muted-foreground ml-auto">
          {body.length}/5000
        </span>
      </div>
    </form>
  );
}
