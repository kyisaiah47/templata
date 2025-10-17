'use client';

import { useCallback, useState } from 'react';
import { ReactFlow, Node, Edge, Background, Controls, MiniMap, useNodesState, useEdgesState, addEdge, Connection, NodeProps } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { getCategoryColor, getCategoryStyles } from '@/lib/category-colors';
import { useWorkspaceStore } from '@/stores/workspace-store';
import { useSoundCues } from '@/hooks/useSoundCues';

// Define nodes with category information
const lifeEventColor = getCategoryColor('Life Event');
const careerColor = getCategoryColor('Career');
const financeColor = getCategoryColor('Finance');
const wellnessColor = getCategoryColor('Wellness');

const initialNodes: Node[] = [
  {
    id: '1',
    data: {
      label: 'Wedding Planning',
      category: 'Life Event',
      type: 'template',
      templateId: 'template-1'
    },
    position: { x: 250, y: 0 },
    style: {
      background: lifeEventColor.bg,
      color: lifeEventColor.text,
      border: `3px solid ${lifeEventColor.border}`,
      borderRadius: '8px',
      padding: '10px',
      fontWeight: '500',
      cursor: 'pointer'
    }
  },
  {
    id: '2',
    data: {
      label: 'Career Transition',
      category: 'Career',
      type: 'template',
      templateId: 'template-2'
    },
    position: { x: 100, y: 150 },
    style: {
      background: careerColor.bg,
      color: careerColor.text,
      border: `3px solid ${careerColor.border}`,
      borderRadius: '8px',
      padding: '10px',
      fontWeight: '500',
      cursor: 'pointer'
    }
  },
  {
    id: '3',
    data: {
      label: 'Financial Planning',
      category: 'Finance',
      type: 'template',
      templateId: 'template-3'
    },
    position: { x: 400, y: 150 },
    style: {
      background: financeColor.bg,
      color: financeColor.text,
      border: `3px solid ${financeColor.border}`,
      borderRadius: '8px',
      padding: '10px',
      fontWeight: '500',
      cursor: 'pointer'
    }
  },
  {
    id: '4',
    data: {
      label: 'Work-Life Balance',
      category: 'Wellness',
      type: 'reflection',
      reflectionId: 'reflection-1'
    },
    position: { x: 250, y: 300 },
    style: {
      background: wellnessColor.bg,
      color: wellnessColor.text,
      border: `3px solid ${wellnessColor.border}`,
      borderRadius: '8px',
      padding: '10px',
      fontWeight: '500',
      cursor: 'pointer'
    }
  },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', label: 'affects', animated: true },
  { id: 'e1-3', source: '1', target: '3', label: 'budget', animated: true },
  { id: 'e2-4', source: '2', target: '4', label: 'impacts' },
  { id: 'e3-4', source: '3', target: '4', label: 'relates' },
];

export function GraphView() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { openTemplate, openReflection } = useWorkspaceStore();
  const { playActivationClick } = useSoundCues();

  const onConnect = useCallback((params: Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const onNodeClick = useCallback((_event: React.MouseEvent, node: Node) => {
    playActivationClick();

    // Navigate to template or reflection
    if (node.data.type === 'template' && node.data.templateId) {
      openTemplate(node.data.templateId);
    } else if (node.data.type === 'reflection' && node.data.reflectionId) {
      openReflection(node.data.reflectionId);
    }
  }, [openTemplate, openReflection, playActivationClick]);

  const onNodeMouseEnter = useCallback((_event: React.MouseEvent, node: Node) => {
    setHoveredNode(node);
  }, []);

  const onNodeMouseLeave = useCallback(() => {
    setHoveredNode(null);
  }, []);

  const onNodeMouseMove = useCallback((event: React.MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  }, []);

  return (
    <div className="h-[600px] w-full">
      <div className="mb-4 p-6 pb-0">
        <h2 className="text-2xl font-bold mb-2">Connection Graph</h2>
        <p className="text-muted-foreground">See how your templates and reflections relate</p>
      </div>
      <div className="h-full relative">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          onNodeMouseEnter={onNodeMouseEnter}
          onNodeMouseLeave={onNodeMouseLeave}
          onNodeMouseMove={onNodeMouseMove}
          fitView
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>

        {/* Hover Preview Bubble */}
        <AnimatePresence>
          {hoveredNode && hoveredNode.data.category && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'fixed',
                left: mousePosition.x + 20,
                top: mousePosition.y - 60,
                pointerEvents: 'none',
                zIndex: 1000,
              }}
            >
              <Card className="p-4 shadow-xl border-2 max-w-xs">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-sm flex-1">{hoveredNode.data.label}</h4>
                  <Badge variant="outline" className="text-xs ml-2" style={getCategoryStyles(hoveredNode.data.category)}>
                    {hoveredNode.data.category}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  Last updated: 2 days ago
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  3 reflections • 5 connections
                </p>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
