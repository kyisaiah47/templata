'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Cell } from 'recharts';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Minus, Award, Calendar } from 'lucide-react';
import { getCategoryColor } from '@/lib/category-colors';
import { createAnalyticsEngine } from '@/lib/analytics-engine';
import { useWorkspaceStore } from '@/stores/workspace-store';
import { InsightDashboard } from '@/types/insight';

// Mock data for templates and reflections (will be replaced with real data from store)
const mockTemplates = [
  { id: '1', templateId: 't1', answers: {}, completion: 100, tags: ['Career'], lastStep: 5, startedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000) },
  { id: '2', templateId: 't2', answers: {}, completion: 75, tags: ['Finance'], lastStep: 3, startedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000), updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) },
  { id: '3', templateId: 't3', answers: {}, completion: 100, tags: ['Wellness'], lastStep: 4, startedAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000), updatedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000) },
  { id: '4', templateId: 't4', answers: {}, completion: 50, tags: ['Life Event'], lastStep: 2, startedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000) },
];

const mockReflections = [
  { id: '1', text: 'Feeling grateful for the progress made today. Growth mindset is key.', mood: 'happy' as const, tags: ['growth'], linkedTemplateIds: ['t1'], createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000) },
  { id: '2', text: 'Working on finding balance between work and personal life.', mood: 'neutral' as const, tags: ['balance'], linkedTemplateIds: ['t2'], createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) },
  { id: '3', text: 'Today was challenging but I maintained control and stayed focused.', mood: 'neutral' as const, tags: ['control'], linkedTemplateIds: ['t1'], createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000) },
  { id: '4', text: 'Feeling confident about the decisions I made. Clarity is emerging.', mood: 'happy' as const, tags: ['confidence', 'clarity'], linkedTemplateIds: ['t3'], createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000) },
  { id: '5', text: 'Building resilience through consistent effort and reflection.', mood: 'happy' as const, tags: ['resilience'], linkedTemplateIds: ['t1', 't3'], createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000) },
];

export function InsightsView() {
  const [dashboard, setDashboard] = useState<InsightDashboard | null>(null);
  const [period, setPeriod] = useState<'week' | 'month' | 'quarter' | 'year' | 'all-time'>('month');

  useEffect(() => {
    // Generate insights using analytics engine
    // TODO: Replace mock data with actual data from Zustand store or API
    const engine = createAnalyticsEngine(mockTemplates, mockReflections);
    const insights = engine.generateDashboard({
      period,
      types: ['category-usage', 'mood-trend', 'completion-rate', 'reflection-frequency', 'recurring-theme', 'streak'],
    });
    setDashboard(insights);
  }, [period]);

  if (!dashboard) {
    return (
      <div className="p-6">
        <p className="text-muted-foreground">Loading insights...</p>
      </div>
    );
  }

  // Find specific insights
  const categoryInsight = dashboard.insights.find((i) => i.type === 'category-usage');
  const moodInsight = dashboard.insights.find((i) => i.type === 'mood-trend');
  const completionInsight = dashboard.insights.find((i) => i.type === 'completion-rate');
  const frequencyInsight = dashboard.insights.find((i) => i.type === 'reflection-frequency');
  const themeInsight = dashboard.insights.find((i) => i.type === 'recurring-theme');
  const streakInsight = dashboard.insights.find((i) => i.type === 'streak');

  const getTrendIcon = (trend: 'up' | 'down' | 'stable' | 'improving' | 'declining') => {
    if (trend === 'up' || trend === 'improving') return <TrendingUp className="h-4 w-4 text-green-500" />;
    if (trend === 'down' || trend === 'declining') return <TrendingDown className="h-4 w-4 text-red-500" />;
    return <Minus className="h-4 w-4 text-muted-foreground" />;
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Insights & Analytics</h2>
          <p className="text-muted-foreground">Data-driven view of your growth patterns</p>
        </div>

        {/* Period selector */}
        <div className="flex gap-2">
          {(['week', 'month', 'quarter', 'year'] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                period === p
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80'
              }`}
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{dashboard.summary.totalTemplates}</div>
            <p className="text-xs text-muted-foreground">Templates Started</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{dashboard.summary.totalReflections}</div>
            <p className="text-xs text-muted-foreground">Reflections Written</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold flex items-center gap-2">
              {dashboard.summary.currentStreak}
              <Award className="h-5 w-5 text-yellow-500" />
            </div>
            <p className="text-xs text-muted-foreground">Day Streak</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{dashboard.summary.activeDays}</div>
            <p className="text-xs text-muted-foreground">Active Days</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Insights */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Category Usage */}
        {categoryInsight && categoryInsight.type === 'category-usage' && (
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle>{categoryInsight.title}</CardTitle>
                  <CardDescription>{categoryInsight.description}</CardDescription>
                </div>
                <Badge variant={categoryInsight.severity === 'success' ? 'default' : 'secondary'}>
                  {categoryInsight.severity}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={categoryInsight.data.categories}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count">
                    {categoryInsight.data.categories.map((entry, index) => {
                      const color = getCategoryColor(entry.name);
                      return <Cell key={`cell-${index}`} fill={color.border} />;
                    })}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        )}

        {/* Mood Trend */}
        {moodInsight && moodInsight.type === 'mood-trend' && (
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    {moodInsight.title}
                    {getTrendIcon(moodInsight.data.trend)}
                  </CardTitle>
                  <CardDescription>{moodInsight.description}</CardDescription>
                </div>
                <Badge variant={moodInsight.severity === 'success' ? 'default' : moodInsight.severity === 'warning' ? 'destructive' : 'secondary'}>
                  {moodInsight.data.trend}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={moodInsight.data.timeline}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="date"
                    tickFormatter={(date) => new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  />
                  <YAxis domain={[-1, 1]} />
                  <Tooltip
                    labelFormatter={(date) => new Date(date).toLocaleDateString()}
                    formatter={(value: number) => [value.toFixed(2), 'Mood']}
                  />
                  <Line type="monotone" dataKey="mood" stroke="hsl(var(--primary))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        )}

        {/* Completion Rate */}
        {completionInsight && completionInsight.type === 'completion-rate' && (
          <Card>
            <CardHeader>
              <CardTitle>{completionInsight.title}</CardTitle>
              <CardDescription>{completionInsight.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Completion Rate</span>
                <span className="text-2xl font-bold">{completionInsight.data.completionRate.toFixed(0)}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all"
                  style={{ width: `${completionInsight.data.completionRate}%` }}
                />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Started</p>
                  <p className="font-semibold">{completionInsight.data.totalStarted}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Completed</p>
                  <p className="font-semibold">{completionInsight.data.totalCompleted}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Reflection Frequency */}
        {frequencyInsight && frequencyInsight.type === 'reflection-frequency' && (
          <Card>
            <CardHeader>
              <CardTitle>{frequencyInsight.title}</CardTitle>
              <CardDescription>{frequencyInsight.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Current Streak</p>
                  <p className="text-2xl font-bold">{frequencyInsight.data.currentStreak} days</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Longest Streak</p>
                  <p className="text-2xl font-bold">{frequencyInsight.data.longestStreak} days</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Time of Day</p>
                <div className="grid grid-cols-4 gap-2 text-xs">
                  {Object.entries(frequencyInsight.data.timeOfDay).map(([time, count]) => (
                    <div key={time} className="text-center">
                      <div className="font-semibold">{count}</div>
                      <div className="text-muted-foreground capitalize">{time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Recurring Themes */}
      {themeInsight && themeInsight.type === 'recurring-theme' && (
        <Card>
          <CardHeader>
            <CardTitle>{themeInsight.title}</CardTitle>
            <CardDescription>{themeInsight.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {themeInsight.data.topThemes.map((theme, i) => (
                <div
                  key={theme}
                  className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                  style={{ fontSize: `${14 + Math.min(i, 3) * 2}px` }}
                >
                  {theme}
                </div>
              ))}
            </div>
            {themeInsight.data.emergingThemes.length > 0 && (
              <div className="mt-4">
                <p className="text-sm text-muted-foreground mb-2">Emerging Themes</p>
                <div className="flex flex-wrap gap-2">
                  {themeInsight.data.emergingThemes.map((theme) => (
                    <Badge key={theme} variant="outline" className="text-xs">
                      {theme} <TrendingUp className="h-3 w-3 ml-1 text-green-500" />
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Streak Achievement */}
      {streakInsight && streakInsight.type === 'streak' && streakInsight.data.currentStreak >= 3 && (
        <Card className="border-yellow-500/50 bg-yellow-500/5">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <Award className="h-12 w-12 text-yellow-500" />
              <div>
                <h3 className="text-lg font-bold">{streakInsight.title}</h3>
                <p className="text-sm text-muted-foreground">{streakInsight.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
