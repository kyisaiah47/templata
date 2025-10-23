"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThumbsUp, Flag, MessageSquare } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface CommentProps {
  comment: {
    id: string;
    user_handle?: string;
    body: string;
    upvotes: number;
    is_expert: boolean;
    created_at: string;
    replies?: any[];
  };
  onVote: (id: string, delta: number) => void;
  onFlag: (id: string) => void;
  onReply: (parentId: string) => void;
  level?: number;
}

export function Comment({ comment, onVote, onFlag, onReply, level = 0 }: CommentProps) {
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = () => {
    if (!hasVoted) {
      onVote(comment.id, 1);
      setHasVoted(true);
    }
  };

  return (
    <div className={`py-4 ${level > 0 ? 'ml-8 pl-4 border-l-2 border-muted' : ''}`}>
      <div className="flex items-start gap-3">
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold">
              {comment.user_handle || 'Anonymous'}
            </span>
            {comment.is_expert && (
              <span className="px-2 py-0.5 text-xs font-semibold bg-primary/10 text-primary rounded">
                Expert
              </span>
            )}
            <span className="text-muted-foreground">
              {formatDistanceToNow(new Date(comment.created_at), { addSuffix: true })}
            </span>
          </div>

          <p className="text-sm whitespace-pre-wrap">{comment.body}</p>

          <div className="flex items-center gap-4 text-sm">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleVote}
              disabled={hasVoted}
              className="h-8 gap-1.5"
            >
              <ThumbsUp className="h-3.5 w-3.5" />
              <span>{comment.upvotes}</span>
            </Button>

            {level === 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onReply(comment.id)}
                className="h-8 gap-1.5"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                Reply
              </Button>
            )}

            <Button
              variant="ghost"
              size="sm"
              onClick={() => onFlag(comment.id)}
              className="h-8 gap-1.5 text-muted-foreground hover:text-destructive"
            >
              <Flag className="h-3.5 w-3.5" />
              Flag
            </Button>
          </div>
        </div>
      </div>

      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-2 space-y-0">
          {comment.replies.map((reply: any) => (
            <Comment
              key={reply.id}
              comment={reply}
              onVote={onVote}
              onFlag={onFlag}
              onReply={onReply}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
