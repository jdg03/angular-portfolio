export type ArchitectureKind = 'cloud' | 'events' | 'agents';
export interface MessageRoute {
  id: string;
  path: string;
  start: number;
  duration: number;
}
export interface ModulePulse {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  start: number;
}
export interface ArchitectureFlow {
  title: string;
  description: string;
  accent: string;
  routes: MessageRoute[];
  modules: ModulePulse[];
}
const route = (id: string, path: string, start: number, duration = 0.9): MessageRoute => ({
  id,
  path,
  start,
  duration,
});
const module = (
  id: string,
  x: number,
  y: number,
  width: number,
  height: number,
  start: number,
): ModulePulse => ({ id, x, y, width, height, start });

export const ARCHITECTURE_FLOWS: Record<ArchitectureKind, ArchitectureFlow> = {
  cloud: {
    title: 'Cloud application architecture',
    description:
      'Requests travel through the edge, load balancer and APIs to the database. Background jobs pass through the queue and worker; telemetry reaches observability.',
    accent: '#28649a',
    routes: [
      route('client-edge', 'M153 111H179', 0.4, 0.8),
      route('edge-balancer', 'M292 111H314', 1.8, 0.8),
      route('api-a', 'M447 111H453Q458 111 458 106V93Q458 87 464 87H511', 3.2, 1.1),
      route('api-b', 'M447 111H453Q458 111 458 117V128Q458 134 464 134H511', 3.2, 1.1),
      route('api-a-data', 'M617 87H623Q629 87 629 94V105Q629 111 636 111H682', 5, 1.1),
      route('api-b-data', 'M617 134H623Q629 134 629 128V118Q629 111 636 111H682', 5, 1.1),
      route('cache', 'M556 162V175H336Q330 175 330 181V194', 6.8, 1.3),
      route('queue', 'M566 162V175H429Q423 175 423 181V194', 7.3, 1.1),
      route('worker', 'M463 237H482', 9.1, 0.8),
      route('storage', 'M557 237H572', 10.6, 0.8),
      route('telemetry', 'M519 274V280Q519 286 525 286H771Q777 286 777 280V274', 12.2, 1.8),
    ],
    modules: [
      module('client', 25, 61, 127, 92, 0),
      module('edge', 181, 61, 110, 92, 1.2),
      module('balancer', 315, 61, 131, 92, 2.6),
      module('api-a', 512, 70, 104, 40, 4.3),
      module('api-b', 512, 115, 104, 40, 4.3),
      module('database', 683, 61, 129, 92, 6.1),
      module('cache', 293, 195, 76, 76, 8.1),
      module('queue', 385, 195, 77, 76, 8.4),
      module('worker', 483, 195, 74, 76, 9.9),
      module('storage', 573, 195, 81, 76, 11.4),
      module('observability', 668, 196, 167, 76, 14),
    ],
  },
  events: {
    title: 'Event-driven architecture',
    description:
      'An event producer publishes to the event bus, which fans out to orders, payments and notifications. Consumers persist data and report telemetry; failed messages enter the dead letter queue.',
    accent: '#756296',
    routes: [
      route('client-gateway', 'M93 110H122', 0.4, 0.8),
      route('gateway-producer', 'M213 110H242', 1.8, 0.8),
      route('publish', 'M338 110H366', 3.2, 0.8),
      route('orders', 'M484 93H495Q501 93 501 87V65Q501 59 507 59H532', 4.6, 1.1),
      route('payments', 'M484 110H532', 4.6, 1.1),
      route('notifications', 'M484 131H495Q501 131 501 137V159Q501 165 507 165H532', 4.6, 1.1),
      route('orders-db', 'M649 59H718', 6.5, 1),
      route('payments-db', 'M649 111H718', 6.5, 1),
      route('email', 'M649 165H718', 6.5, 1),
      route('observability', 'M425 148V240', 8.3, 1.2),
      route(
        'failed-message',
        'M649 119H698Q708 119 708 129V212Q708 222 718 222H757Q766 222 766 231V240',
        10.2,
        2,
      ),
    ],
    modules: [
      module('client', 18, 84, 74, 59, 0),
      module('gateway', 123, 83, 89, 60, 1.2),
      module('producer', 243, 81, 94, 62, 2.6),
      module('bus', 368, 82, 115, 64, 4),
      module('orders', 534, 38, 114, 41, 5.7),
      module('payments', 534, 92, 114, 41, 5.7),
      module('notifications', 534, 145, 114, 40, 5.7),
      module('orders-db', 720, 38, 114, 41, 7.5),
      module('payments-db', 720, 91, 114, 42, 7.5),
      module('email', 720, 147, 114, 39, 7.5),
      module('observability', 325, 242, 207, 45, 9.5),
      module('dead-letter', 684, 243, 150, 42, 12.2),
    ],
  },
  agents: {
    title: 'AI agent architecture',
    description:
      'A user request reaches the agent. The agent exchanges context with memory, calls tools, requests model inference and returns a response through the frontend.',
    accent: '#3f7764',
    routes: [
      route('user-request', 'M104 100H130', 0.4, 0.8),
      route('frontend-agent', 'M235 100H297', 1.8, 1),
      route('memory-request', 'M464 79H494', 3.5, 0.8),
      route('memory-response', 'M494 112H463', 4.8, 0.8),
      route('agent-protocol', 'M464 159H494', 6.1, 0.8),
      route('protocol-tools', 'M643 159H674', 7.3, 0.8),
      route('tools-response', 'M674 159H643', 8.8, 0.8),
      route('protocol-agent', 'M494 159H464', 10, 0.8),
      route('inference-request', 'M352 176V219', 6.1, 1),
      route('inference-response', 'M383 219V177', 11.3, 1),
      route('frontend-response', 'M297 100H235', 13, 1),
      route('user-response', 'M130 100H104', 14.5, 0.8),
    ],
    modules: [
      module('users', 22, 72, 79, 61, 0),
      module('frontend', 134, 72, 100, 61, 1.2),
      module('agent', 301, 70, 134, 104, 2.8),
      module('memory', 498, 29, 159, 96, 4.3),
      module('protocol', 498, 140, 142, 42, 6.9),
      module('tools', 679, 81, 150, 149, 8.1),
      module('model', 275, 223, 186, 67, 7.1),
      module('agent-return', 301, 70, 134, 104, 12.3),
      module('frontend-return', 134, 72, 100, 61, 14),
      module('users-return', 22, 72, 79, 61, 15.3),
    ],
  },
};
