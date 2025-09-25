'use client';

import React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useUserRecommendations } from "@/hooks/use-knowledge-graph"
import {
  Brain,
  Target,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Clock,
  Lightbulb,
  Heart,
  AlertCircle,
  Shield,
  Compass,
  Star
} from "lucide-react"

// Mock user profile - in real app, this would come from authentication/user context
const MOCK_USER_PROFILE = {
  age: 26,
  goals: ['career_focused', 'financial_independence', 'family_building'],
  completedTemplates: ['college-selection', 'job-search'],
  currentTemplates: ['personal-finance', 'apartment-hunting'],
  interests: ['entrepreneurship', 'home_ownership']
};

function WelcomeWidget({ userProfile }: { userProfile: typeof MOCK_USER_PROFILE }) {
  const lifeStage = userProfile.age <= 25 ? 'Early Career' :
                   userProfile.age <= 35 ? 'Career Building' :
                   userProfile.age <= 45 ? 'Peak Earning' : 'Pre-Retirement';

  return (
    <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <Compass className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <div className="text-xl">Your Life Journey</div>
            <div className="text-sm font-normal text-muted-foreground">
              {lifeStage} • Age {userProfile.age} • {userProfile.completedTemplates.length} templates completed
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{userProfile.completedTemplates.length}</div>
            <div className="text-xs text-muted-foreground">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{userProfile.currentTemplates.length}</div>
            <div className="text-xs text-muted-foreground">Active</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{userProfile.goals.length}</div>
            <div className="text-xs text-muted-foreground">Life Goals</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function LifeSequenceWidget({ recommendations, nextSteps }: {
  recommendations: any[],
  nextSteps: any[]
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="w-5 h-5 text-green-500" />
          Your Life Sequence Path
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-muted-foreground mb-4">
          Psychologically optimized progression for your age and goals
        </div>

        {/* Current Progress */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Career Foundation</span>
            <Badge variant="secondary" className="bg-green-100 text-green-700">Complete</Badge>
          </div>
          <Progress value={100} className="h-2" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Financial Independence</span>
            <Badge variant="secondary" className="bg-blue-100 text-blue-700">In Progress</Badge>
          </div>
          <Progress value={60} className="h-2" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Home Ownership</span>
            <Badge variant="outline">Next</Badge>
          </div>
          <Progress value={20} className="h-2" />
        </div>

        {/* Next Recommended Steps */}
        <div className="pt-4 border-t">
          <h4 className="font-medium text-sm mb-3">Recommended Next Steps:</h4>
          {nextSteps.slice(0, 3).map((step, i) => (
            <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium text-blue-600">
                {i + 1}
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">
                  {step.templateId.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                </div>
                <div className="text-xs text-muted-foreground">{step.reason}</div>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function PersonalizedRecommendationsWidget({ recommendations }: { recommendations: any[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-purple-500" />
          AI Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recommendations.slice(0, 4).map((rec, i) => {
            const priorityConfig = {
              high: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', icon: AlertCircle },
              medium: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', icon: Clock },
              sequence: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', icon: TrendingUp }
            };

            const config = priorityConfig[rec.priority as keyof typeof priorityConfig] || priorityConfig.medium;
            const Icon = config.icon;

            return (
              <div key={i} className={`p-3 rounded-lg border ${config.bg} ${config.border}`}>
                <div className="flex items-start gap-3">
                  <Icon className={`w-4 h-4 mt-0.5 ${config.text}`} />
                  <div className="flex-1">
                    <div className={`font-medium text-sm ${config.text}`}>
                      {rec.templateId.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {rec.reason}
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline" size="sm">
                        {rec.priority} priority
                      </Badge>
                      {rec.lifeStage && (
                        <Badge variant="secondary" size="sm">
                          {rec.lifeStage.replace('_', ' ')}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Button variant="outline" className="w-full mt-4">
          <Lightbulb className="w-4 h-4 mr-2" />
          View All Recommendations
        </Button>
      </CardContent>
    </Card>
  )
}

function QuickActionsWidget() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-500" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <Button variant="outline" className="w-full justify-start" size="sm">
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Complete Personal Finance Setup
          </Button>
          <Button variant="outline" className="w-full justify-start" size="sm">
            <Heart className="w-4 h-4 mr-2" />
            Explore Family Planning Templates
          </Button>
          <Button variant="outline" className="w-full justify-start" size="sm">
            <Shield className="w-4 h-4 mr-2" />
            Set Up Emergency Fund
          </Button>
          <Button variant="outline" className="w-full justify-start" size="sm">
            <TrendingUp className="w-4 h-4 mr-2" />
            Plan Career Advancement
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function ProgressOverviewWidget({ completedTemplates, activeTemplates }: {
  completedTemplates: string[],
  activeTemplates: string[]
}) {
  const totalStarted = completedTemplates.length + activeTemplates.length;
  const completionRate = completedTemplates.length / totalStarted * 100;

  return (
    <Card className="md:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-500" />
            Progress Overview
          </div>
          <Badge variant="secondary">
            {Math.round(completionRate)}% completion rate
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Completed Templates */}
          <div>
            <h4 className="font-medium text-green-600 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Completed Templates
            </h4>
            <div className="space-y-2">
              {completedTemplates.map(templateId => (
                <div key={templateId} className="flex items-center gap-3 p-2 rounded-lg bg-green-50">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-sm">
                    {templateId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Active Templates */}
          <div>
            <h4 className="font-medium text-blue-600 mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Currently Active
            </h4>
            <div className="space-y-2">
              {activeTemplates.map(templateId => (
                <div key={templateId} className="flex items-center gap-3 p-2 rounded-lg bg-blue-50">
                  <div className="w-4 h-4 rounded-full bg-blue-600 animate-pulse" />
                  <span className="text-sm">
                    {templateId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function DashboardPage() {
  // Get intelligent user recommendations
  const {
    personalizedRecommendations,
    ageAppropriateTemplates,
    nextInSequence,
    activeConflicts
  } = useUserRecommendations(MOCK_USER_PROFILE);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Your Life OS
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Intelligent Dashboard</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <div className="flex flex-1 flex-col gap-6 p-6">
          {/* Top Row - Welcome and Overview */}
          <div className="grid auto-rows-min gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <WelcomeWidget userProfile={MOCK_USER_PROFILE} />
            </div>
            <QuickActionsWidget />
          </div>

          {/* Middle Row - Life Sequence and AI Recommendations */}
          <div className="grid gap-6 md:grid-cols-2">
            <LifeSequenceWidget
              recommendations={personalizedRecommendations}
              nextSteps={nextInSequence}
            />
            <PersonalizedRecommendationsWidget
              recommendations={personalizedRecommendations}
            />
          </div>

          {/* Bottom Row - Progress Overview */}
          <div className="grid gap-6 md:grid-cols-3">
            <ProgressOverviewWidget
              completedTemplates={MOCK_USER_PROFILE.completedTemplates}
              activeTemplates={MOCK_USER_PROFILE.currentTemplates}
            />
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Life Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {MOCK_USER_PROFILE.goals.map(goal => (
                    <div key={goal} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-sm capitalize">
                        {goal.replace('_', ' ')}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
