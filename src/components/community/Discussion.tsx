"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Comment } from "./Comment";
import { AddComment } from "./AddComment";
import { MessageSquare, ChevronDown, ChevronUp } from "lucide-react";

interface DiscussionProps {
  guideSlug: string;
}

export function Discussion({ guideSlug }: DiscussionProps) {
  const [comments, setComments] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState<"top" | "recent">("top");
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [isHidden, setIsHidden] = useState(false);

  const fetchComments = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/comments/list?guide=${guideSlug}&sort=${sort}`);
      const data = await response.json();
      setComments(data.comments || []);
    } catch (error) {
      console.error("Error fetching comments:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [guideSlug, sort]);

  const handleVote = async (id: string, delta: number) => {
    try {
      const response = await fetch("/api/comments/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, delta }),
      });

      if (response.ok) {
        fetchComments(); // Refresh to show new vote count
      }
    } catch (error) {
      console.error("Error voting:", error);
    }
  };

  const handleFlag = async (id: string) => {
    if (!confirm("Flag this comment as inappropriate?")) return;

    try {
      const response = await fetch("/api/comments/flag", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        alert("Comment flagged for review. Thank you.");
      }
    } catch (error) {
      console.error("Error flagging:", error);
    }
  };

  const handleReply = (parentId: string) => {
    setReplyTo(parentId);
  };

  const handleSuccess = () => {
    setReplyTo(null);
    fetchComments();
  };

  if (isHidden) {
    return (
      <div className="py-8">
        <Button
          variant="outline"
          onClick={() => setIsHidden(false)}
          className="gap-2"
        >
          <MessageSquare className="h-4 w-4" />
          Show Discussion ({comments.length})
        </Button>
      </div>
    );
  }

  return (
    <div className="py-8 space-y-6" id="discussion">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <MessageSquare className="h-6 w-6" />
          Discussion
        </h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsHidden(true)}
          className="gap-1"
        >
          Hide discussion
          <ChevronUp className="h-4 w-4" />
        </Button>
      </div>

      <Card className="p-6">
        <div className="space-y-6">
          <div className="p-4 bg-muted/50 rounded-lg text-sm">
            <p className="font-semibold mb-2">How to use this guide</p>
            <p className="text-muted-foreground">
              Work through the key questions, then review the decisions. Open Curated Reading for
              deeper context. Your answers auto-save locally—no account required.
            </p>
          </div>

          <AddComment guideSlug={guideSlug} onSuccess={handleSuccess} />

          <Tabs value={sort} onValueChange={(v) => setSort(v as "top" | "recent")}>
            <TabsList>
              <TabsTrigger value="top">Top</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
            </TabsList>

            <TabsContent value={sort} className="mt-6">
              {isLoading ? (
                <div className="text-center py-8 text-muted-foreground">Loading...</div>
              ) : comments.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <p className="font-semibold mb-2">Be the first to share how you approached this.</p>
                  <p className="text-sm">Kind, specific, and on-topic replies only.</p>
                </div>
              ) : (
                <div className="divide-y">
                  {comments.map((comment) => (
                    <div key={comment.id}>
                      <Comment
                        comment={comment}
                        onVote={handleVote}
                        onFlag={handleFlag}
                        onReply={handleReply}
                      />
                      {replyTo === comment.id && (
                        <div className="ml-8 mb-4">
                          <AddComment
                            guideSlug={guideSlug}
                            parentId={comment.id}
                            onSuccess={handleSuccess}
                            onCancel={() => setReplyTo(null)}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </Card>
    </div>
  );
}
