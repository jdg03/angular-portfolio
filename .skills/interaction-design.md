# Interaction Design

Create engaging, intuitive interactions through motion, feedback, and thoughtful state transitions that enhance usability and delight users.

## When to Use This Skill
- Adding microinteractions to enhance user feedback
- Implementing smooth page and component transitions
- Designing loading states and skeleton screens
- Creating gesture-based interactions
- Building notification and toast systems
- Implementing drag-and-drop interfaces
- Adding scroll-triggered animations
- Designing hover and focus states

## Core Principles

### 1. Purposeful Motion
Motion should communicate, not decorate:
- **Feedback**: Confirm user actions occurred
- **Orientation**: Show where elements come from/go to
- **Focus**: Direct attention to important changes
- **Continuity**: Maintain context during transitions

### 2. Timing Guidelines
| Duration | Use Case |
| --------- | ----------------------------------------- |
| 100-150ms | Micro-feedback (hovers, clicks) |
| 200-300ms | Small transitions (toggles, dropdowns) |
| 300-500ms | Medium transitions (modals, page changes) |
| 500ms+ | Complex choreographed animations |

### 3. Easing Functions
- **Standard Ease**: `cubic-bezier(0.4, 0, 0.2, 1)` (equivalent to `ease-in-out` or `transition-all duration-200`) for standard UI state transitions.
- **Enter/Exit**: Use `ease-out` for entering elements (appearing fast, settling slowly) and `ease-in` for exiting elements (departing fast).
- **Spring motion**: Use springs for physical interactions (swipes, drag-and-drop) to make motion feel tactile.

## Interaction Patterns

### 1. Loading States
- **Skeleton Screens**: Preserve layout structure while loading to reduce perceived latency.
- **Progress Indicators**: Show determinate progress percentages or animated bars when task duration is known.

### 2. State Transitions
- **Toggles / Checkboxes**: Smooth toggle transitions using CSS transformations (e.g. `transition-transform duration-200`).
- **Dropdowns / Modals**: Transition both opacity and scale (e.g. `scale-95` to `scale-100`) to create depth.

### 3. Hover & Focus States
- Use transition timings of `100-150ms` for hovers.
- Add visible focus rings (`focus-visible:ring-2`) for keyboard navigability.
