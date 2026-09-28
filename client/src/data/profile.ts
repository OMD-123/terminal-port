export type Project = {
  name: string;
  category: string;
  description: string;
  impact: string;
  stack: string[];
  url: string;
  linkLabel?: string;
  highlight?: boolean;
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  portfolio: string;
  summary: string;
  skills: Record<string, string[]>;
  projects: Project[];
  education: {
    degree: string;
    school: string;
    university: string;
    graduation: string;
  };
  certifications: string[];
  languages: string[];
};

export const fallbackProfile: Profile = {
  name: "Om Dandagvhal",
  role: "Software Engineer · Backend & Platform Systems",
  location: "Nashik, Maharashtra, India",
  email: "omd4485@gmail.com",
  phone: "+91 99700 55620",
  github: "https://github.com/OMD-123",
  linkedin: "https://www.linkedin.com/in/om-dandgavhal-352412347/",
  portfolio: "https://portfolioomii.netlify.app/",
  summary:
    "B.Tech Information Technology student building backend-focused products and system-design projects with TypeScript and Node.js. I work on API design, Redis-backed reliability patterns, GraphQL gateways, queues, real-time services, and distributed-data trade-offs—with an emphasis on readable, testable implementations.",
  skills: {
    "Languages": ["TypeScript", "JavaScript", "Python", "C++", "SQL"],
    "Backend & APIs": ["Node.js", "Express", "Fastify", "REST APIs", "GraphQL", "Schema stitching", "JWT", "RBAC", "Token rotation"],
    "Data & distributed systems": ["MongoDB", "Mongoose", "Redis", "Redis Lua", "MySQL", "Sharding", "Replication", "Quorum reads", "Vector clocks"],
    "Reliability & infrastructure": ["BullMQ", "Retries & dead-letter queues", "Rate limiting", "Socket.IO", "WebSocket", "Docker", "AWS fundamentals", "GCP fundamentals", "Git", "Jest", "node:test"],
    "Frontend": ["React", "Vite", "React Router", "Recharts", "Tailwind CSS", "Three.js / React Three Fiber"]
  },
  projects: [
    {
      name: "ts-debounce",
      category: "TypeScript utility package",
      description:
        "Lightweight, zero-dependency utilities for debouncing, throttling, and string formatting, with typed options for leading/trailing calls and max wait.",
      impact:
        "A compact alternative for common timing and formatting needs; the repository documents Node.js, browser, Deno, and Bun support.",
      stack: ["TypeScript", "Zero dependencies", "Debounce", "Throttle", "Testing"],
      url: "https://github.com/OMD-123/ts-debounce",
      linkLabel: "Explore the package repository",
      highlight: true
    },
    {
      name: "Distributed Rate Limiter",
      category: "Backend reliability",
      description:
        "Express middleware implementing five rate-limiting strategies, backed by Redis Lua scripts for atomic counter updates.",
      impact:
        "Compares token bucket, sliding-window, fixed-window, leaky-bucket, and concurrency limiting behind a reusable API.",
      stack: ["TypeScript", "Redis", "Lua", "Express", "Rate limiting"],
      url: "https://github.com/OMD-123/advance-backend-day1-rate-limiter"
    },
    {
      name: "GraphQL API Gateway",
      category: "Platform architecture",
      description:
        "Schema-stitching gateway across backend services with Redis caching, rate limiting, JWT authentication, and request coalescing.",
      impact:
        "Explores how to expose one guarded GraphQL surface over multiple services, including error masking and query controls.",
      stack: ["TypeScript", "GraphQL", "Express", "Redis", "JWT"],
      url: "https://github.com/OMD-123/advance-backend-day3-graphql-gateway"
    },
    {
      name: "DB Sharding & Replication",
      category: "Distributed data",
      description:
        "Reference implementation of consistent-hash and range sharding, plus single-leader replication and quorum reads.",
      impact:
        "Makes eventual-consistency trade-offs concrete through vector clocks, conflict resolution, tests, and a zero-dependency design.",
      stack: ["TypeScript", "Node.js", "Sharding", "Replication", "node:test"],
      url: "https://github.com/OMD-123/db-sharding-replication"
    },
    {
      name: "Distributed Job Queue",
      category: "Asynchronous processing",
      description:
        "Redis and BullMQ-based job processing with priorities, retries, dead-letter handling, and automated cleanup policies.",
      impact:
        "The project README reports 45 passing tests around queue behavior and failure-handling paths.",
      stack: ["TypeScript", "BullMQ", "Redis", "Retries", "DLQ"],
      url: "https://github.com/OMD-123/advance-backend-day5-job-queue"
    },
    {
      name: "Multi-Elevator LOOK Scheduler",
      category: "Real-time systems",
      description:
        "Multi-car elevator simulation with a LOOK scheduling policy per car and a cost-based dispatcher for hall calls.",
      impact:
        "Separates the TypeScript scheduler for isolated testing and streams live simulation updates with Socket.IO.",
      stack: ["TypeScript", "Scheduling", "Socket.IO", "MongoDB", "MERN"],
      url: "https://github.com/OMD-123/elevator-system"
    }
  ],
  education: {
    degree: "B.Tech, Information Technology",
    school: "Sandip Institute of Engineering and Research, Nashik",
    university: "Savitribai Phule Pune University",
    graduation: "Expected 2027"
  },
  certifications: [
    "Introduction to Modern Database Systems · NPTEL / Sailor Organization",
    "Python for Data Science · NPTEL / Sailor Organization",
    "C++ Programming · NPTEL / Sailor Organization",
    "AWS Cloud Practitioner Simulation",
    "Goldman Sachs Engineering Job Simulation",
    "Quantitative Research Job Simulation",
    "AI / Prompt Engineering"
  ],
  languages: ["English (Fluent)", "Hindi (Native)", "Marathi (Native)"]
};
