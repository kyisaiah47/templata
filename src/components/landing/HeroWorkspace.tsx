export function HeroWorkspace() {
  return (
    <div className="w-full bg-muted/10 rounded-2xl overflow-hidden shadow-[0_20px_70px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_70px_-10px_rgba(0,0,0,0.8)] ring-1 ring-black/10">
      {/* Browser Chrome */}
      <div className="h-11 bg-gradient-to-b from-muted/60 to-muted/40 border-b border-border/60 flex items-center px-4 gap-3">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28CA42]" />
        </div>
        <div className="flex-1 flex justify-center -ml-16">
          <div className="w-[420px] h-7 px-4 bg-background/50 rounded-md border border-border/40 flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-sm bg-muted-foreground/20" />
            <span className="text-xs text-muted-foreground/80">templata.org/app</span>
          </div>
        </div>
      </div>
      <div className="flex h-[500px] bg-background">
        {/* Left Panel - Guide */}
        <div className="w-5/12 border-r border-border/40 bg-muted/20 p-6 overflow-y-auto">
          <div className="space-y-6">
            {/* Guide Header */}
            <div className="space-y-2">
              <div className="inline-block px-2 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs rounded font-medium">
                Career & Work
              </div>
              <h2 className="text-2xl font-semibold tracking-tight">Career Transition</h2>
              <p className="text-sm text-muted-foreground">12 questions · 8 readings</p>
            </div>

            {/* Questions Preview */}
            <div className="space-y-3">
              <div className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                Core Questions
              </div>
              {[
                "What aspects of your current role energize you?",
                "What would your ideal workday look like?",
                "What skills do you want to develop next?"
              ].map((q, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-lg border transition-colors ${
                    i === 0
                      ? 'bg-blue-500/5 border border-blue-500/30'
                      : 'bg-background/50 border border-border/60'
                  }`}
                >
                  <p className="text-sm">{q}</p>
                </div>
              ))}
            </div>

            {/* Articles Preview */}
            <div className="space-y-3">
              <div className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                Recommended Reading
              </div>
              {[
                { title: "The Dip: When to Quit", time: "8 min" },
                { title: "Career Capital Theory", time: "12 min" }
              ].map((article, i) => (
                <div
                  key={i}
                  className="p-3 rounded-lg bg-background/50 border border-border/60 hover:border-foreground/20 transition-colors"
                >
                  <p className="text-sm font-medium">{article.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{article.time} read</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel - Workspace */}
        <div className="w-7/12 p-6 bg-background overflow-y-auto">
          <div className="space-y-6">
            {/* Workspace Header */}
            <div className="flex items-center justify-between pb-4 border-b border-border/40">
              <h3 className="font-semibold">Your Workspace</h3>
              <div className="text-xs text-muted-foreground">Auto-saved</div>
            </div>

            {/* Active Question */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  What aspects of your current role energize you?
                </label>
                <div className="min-h-[120px] p-4 rounded-lg border border-border/60 bg-muted/10">
                  <p className="text-sm text-foreground/80">
                    Working with cross-functional teams and solving complex problems. I especially
                    enjoy the mentorship aspect and helping junior teammates grow...
                  </p>
                  <div className="mt-2 h-px w-4 bg-foreground/40 animate-pulse" />
                </div>
              </div>

              {/* Completed Questions */}
              <div className="space-y-3 pt-4">
                {[
                  "What would your ideal workday look like?",
                  "What skills do you want to develop next?"
                ].map((q, i) => (
                  <div key={i} className="p-3 rounded-lg bg-muted/30 border border-border/40">
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-blue-500/60" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-muted-foreground line-clamp-1">{q}</p>
                        <p className="text-xs text-muted-foreground/60 mt-1">Answered</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
