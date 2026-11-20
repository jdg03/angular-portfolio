export type DiagramVariant = 'css' | 'gsap' | 'native';
export interface FlowNode {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  es: string;
  en: string;
  icon: string;
  start: number;
}
export interface FlowEdge {
  id: string;
  d: string;
  start: number;
  duration: number;
  feedback?: boolean;
}
export interface FlowGraph {
  nodes: FlowNode[];
  edges: FlowEdge[];
}

const icons = {
  code: 'M8 6 2 12l6 6M16 6l6 6-6 6M14 3l-4 18',
  commit:
    'M6 8v8m0-4h7a5 5 0 0 0 5-5M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm12-15a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  test: 'm5 12 4 4 10-10M21 12a9 9 0 1 1-9-9',
  build: 'm12 2 10 5v10l-10 5-10-5V7Zm0 10v10M2 7l10 5 10-5',
  artifact: 'M3 7h18v14H3ZM2 3h20v4H2Zm7 8h6',
  deploy: 'M12 21V3m-7 7 7-7 7 7M3 18v4h18v-4',
  monitor: 'M3 21V11h4v10m3 0V3h4v18m3 0v-7h4v7',
};
const node = (
  id: string,
  x: number,
  y: number,
  es: string,
  en: string,
  start: number,
  icon: keyof typeof icons = 'test',
  width = 102,
  height = 90,
): FlowNode => ({ id, x, y, es, en, start, icon: icons[icon], width, height });

export function createGraph(variant: DiagramVariant): FlowGraph {
  if (variant === 'gsap') {
    return {
      nodes: [
        node('code', 22, 112, 'Código', 'Code', 0, 'code', 96, 90),
        node('build', 146, 112, 'Build', 'Build', 1.4, 'build', 96, 90),
        node('unit', 294, 30, 'Unitarias', 'Unit tests', 2.9, 'test', 112, 64),
        node('integration', 294, 125, 'Integración', 'Integration', 2.9, 'test', 112, 64),
        node('security', 294, 220, 'Seguridad', 'Security', 2.9, 'test', 112, 64),
        node('artifact', 458, 112, 'Artefacto', 'Artifact', 4.8, 'artifact', 100, 90),
        node('staging', 586, 112, 'Staging', 'Staging', 6.3, 'deploy', 100, 90),
        node('production', 714, 112, 'Producción', 'Production', 7.8, 'monitor', 112, 90),
      ],
      edges: [
        { id: 'commit', d: 'M118 157H146', start: 0.7, duration: 0.7 },
        ...[62, 157, 252].map((y, i) => ({
          id: 'test-' + i,
          d: 'M242 157H264V' + y + 'H294',
          start: 2,
          duration: 0.9,
        })),
        ...[62, 157, 252].map((y, i) => ({
          id: 'merge-' + i,
          d: 'M406 ' + y + 'H432V157H458',
          start: 3.7,
          duration: 1.1,
        })),
        { id: 'stage', d: 'M558 157H586', start: 5.5, duration: 0.8 },
        { id: 'release', d: 'M686 157H714', start: 7, duration: 0.8 },
      ],
    };
  }
  if (variant === 'native') {
    return {
      nodes: [
        node('code', 42, 48, 'Código', 'Code', 0, 'code', 122, 82),
        node('test', 257, 48, 'Pruebas', 'Tests', 1.7, 'test', 122, 82),
        node('build', 472, 48, 'Build', 'Build', 3.4, 'build', 122, 82),
        node('artifact', 687, 48, 'Artefacto', 'Artifact', 5.1, 'artifact', 122, 82),
        node('deploy', 687, 201, 'Despliegue', 'Deploy', 6.8, 'deploy', 122, 82),
        node('monitor', 472, 201, 'Monitoreo', 'Monitor', 8.5, 'monitor', 122, 82),
        node('feedback', 257, 201, 'Feedback', 'Feedback', 10.2, 'commit', 122, 82),
      ],
      edges: [
        { id: 'test', d: 'M164 89H257', start: 0.8, duration: 0.9 },
        { id: 'build', d: 'M379 89H472', start: 2.5, duration: 0.9 },
        { id: 'artifact', d: 'M594 89H687', start: 4.2, duration: 0.9 },
        { id: 'deploy', d: 'M748 130V201', start: 5.9, duration: 0.9 },
        { id: 'monitor', d: 'M687 242H594', start: 7.6, duration: 0.9 },
        { id: 'feedback', d: 'M472 242H379', start: 9.3, duration: 0.9 },
        { id: 'return', d: 'M257 242H103V130', start: 11, duration: 1.7, feedback: true },
      ],
    };
  }
  const labels = [
    ['code', 'Código', 'Code', 'code'],
    ['commit', 'Commit', 'Commit', 'commit'],
    ['test', 'Pruebas', 'Tests', 'test'],
    ['build', 'Build', 'Build', 'build'],
    ['artifact', 'Artefacto', 'Artifact', 'artifact'],
    ['deploy', 'Despliegue', 'Deploy', 'deploy'],
    ['monitor', 'Monitoreo', 'Monitor', 'monitor'],
  ] as const;
  return {
    nodes: labels.map(([id, es, en, icon], i) => node(id, 25 + i * 116, 92, es, en, i * 1.5, icon)),
    edges: [
      ...labels.slice(0, -1).map((_, i) => ({
        id: 'step-' + i,
        d: 'M' + (127 + i * 116) + ' 137H' + (141 + i * 116),
        start: 0.7 + i * 1.5,
        duration: 0.8,
      })),
      { id: 'feedback', d: 'M772 182V262H76V182', start: 10, duration: 2.2, feedback: true },
    ],
  };
}
