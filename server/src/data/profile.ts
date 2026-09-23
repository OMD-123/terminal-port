export const portfolioProfile = {
  name: "Om Dandgavhal",
  role: "Software Engineer - Backend & Distributed Systems",
  location: "Nashik, Maharashtra, India",
  email: "omd4485@gmail.com",
  phone: "+91 9970055620",
  github: "https://github.com/OMD-123",
  linkedin: "https://www.linkedin.com/in/om-dandgavhal-352412347/",
  npm: "https://www.npmjs.com/package/agent-loop-guard-js",
  headline:
    "Backend-focused MERN TypeScript engineer building scalable APIs, real-time systems, and distributed-system primitives.",
  summary:
    "I build backend-heavy products and system-design projects across TypeScript, Node.js, Express, Fastify, GraphQL, MongoDB, Redis, BullMQ, Socket.IO, Docker, AWS, and React. My work focuses on the primitives behind data-heavy B2B SaaS and AdTech platforms: rate limiting, API gateways, authentication, async job queues, real-time notifications, DB sharding, replication, quorum reads, vector clocks, and conflict resolution.",
  metrics: [
    "Graduating in 2027",
    "MERN + TypeScript",
    "Redis + GraphQL",
    "Published npm package"
  ],
  focus: [
    "API gateways and backend architecture",
    "Redis-backed rate limiting, queues, locks, and pub/sub",
    "MongoDB data modelling and scalable service design",
    "React dashboards, real-time interfaces, payments, and product UI"
  ],
  keywords: [
    "TypeScript",
    "Node.js",
    "Express",
    "Fastify",
    "GraphQL",
    "MongoDB",
    "Mongoose",
    "Redis Lua",
    "BullMQ",
    "Socket.IO",
    "JWT",
    "RBAC",
    "Docker",
    "AWS",
    "Distributed rate limiting",
    "API gateways",
    "Sharding",
    "Replication",
    "Quorum reads",
    "Vector clocks",
    "Conflict resolution",
    "AdTech systems",
    "B2B SaaS",
    "React",
    "Vite",
    "Recharts",
    "Razorpay",
    "Cloudinary"
  ],
  skills: {
    languages: ["TypeScript", "JavaScript", "Python", "C++", "SQL"],
    backend: [
      "Node.js",
      "Express",
      "Fastify",
      "GraphQL",
      "REST APIs",
      "JWT",
      "RBAC"
    ],
    data: ["MongoDB", "Mongoose", "Redis Lua", "MySQL", "Vector clocks"],
    realtime: ["Socket.IO", "WebSocket", "Redis pub/sub", "Event-driven systems"],
    infrastructure: ["BullMQ", "Docker", "AWS", "GCP basics", "GitHub", "node:test", "Jest"],
    frontend: ["React", "Vite", "React Router", "Recharts", "Tailwind CSS", "Three Fiber"]
  },
  projects: [
    {
      name: "Multi-Elevator LOOK Scheduling System",
      category: "MERN + TypeScript",
      description:
        "Real-time multi-car elevator simulation with per-car LOOK sweep scheduling, cost-based dispatching, Socket.IO updates, and optional MongoDB run snapshots.",
      impact:
        "Models distributed worker coordination under changing load, similar to backend orchestration problems in AdTech systems.",
      stack: ["TypeScript", "React", "Node.js", "Socket.IO", "MongoDB"],
      url: "https://github.com/OMD-123/elevator-system"
    },
    {
      name: "DB Sharding & Replication",
      category: "System design",
      description:
        "Reference implementation of consistent-hash plus range sharding and single-leader replication with quorum reads, vector clocks, and conflict resolution.",
      impact:
        "Makes core distributed-data trade-offs readable through a zero-dependency, test-driven codebase.",
      stack: ["TypeScript", "Node.js", "node:test", "Distributed systems"],
      url: "https://github.com/OMD-123/db-sharding-replication"
    },
    {
      name: "Advanced Backend Series",
      category: "Backend primitives",
      description:
        "Daily advanced-backend projects covering Redis Lua rate limiting, JWT auth, GraphQL gateways, notification delivery, BullMQ queues, locks, and URL shortening.",
      impact:
        "Shows repeated practice with the backend pieces that support analytics, notifications, auth, and high-volume API traffic.",
      stack: ["TypeScript", "Express", "Redis", "GraphQL", "BullMQ"],
      url: "https://github.com/OMD-123"
    },
    {
      name: "agent-loop-guard-js",
      category: "npm package",
      description:
        "Zero-dependency TypeScript package that protects autonomous LLM agents from repeated tool calls, stagnant loops, cyclic execution, and call-budget overruns.",
      impact:
        "Published package with provider-independent agent safety logic in a small framework-agnostic library.",
      stack: ["TypeScript", "npm", "Agent safety"],
      url: "https://www.npmjs.com/package/agent-loop-guard-js"
    },
    {
      name: "Notification Dedup Backend",
      category: "Scalable notifications",
      description:
        "Email, SMS, and push notification deduplication backend with content-hash exact deduplication and sliding-window rate limiting.",
      impact:
        "Solves duplicate-alert problems for campaign, bid, and brand notification flows while staying MERN-ready.",
      stack: ["TypeScript", "Node.js", "Redis", "Rate limiting", "Adapters"],
      url: "https://github.com/OMD-123/notification-dedup"
    },
    {
      name: "GraphQL API Gateway",
      category: "Platform backend",
      description:
        "Schema stitching across multiple services with Redis caching, rate limiting, JWT auth, request coalescing, error masking, and query controls.",
      impact:
        "Creates one public GraphQL surface over heterogeneous backend services with production-style guardrails.",
      stack: ["TypeScript", "GraphQL", "Express", "Redis", "JWT"],
      url: "https://github.com/OMD-123/advance-backend-day3-graphql-gateway"
    },
    {
      name: "Distributed Job Queue",
      category: "Async backend",
      description:
        "BullMQ and Redis job queue with priority scheduling, retries, dead-letter queues, and a focused test suite.",
      impact:
        "Shows production-style async processing patterns for workloads that need reliability and clear failure handling.",
      stack: ["TypeScript", "BullMQ", "Redis", "Jest", "DLQ"],
      url: "https://github.com/OMD-123/advance-backend-day5-job-queue"
    },
    {
      name: "StudyNotion LMS",
      category: "Full-stack product",
      description:
        "Learning platform with OTP auth, media uploads, Razorpay payments, ratings, reviews, and complete React plus Node ownership.",
      impact:
        "Demonstrates end-to-end MERN delivery from API design through user-facing product workflows.",
      stack: ["React", "Node.js", "Express", "MongoDB", "Razorpay"],
      url: "https://github.com/OMD-123/StudyNotion-LMS"
    }
  ],
  education: {
    degree: "B.Tech, Information Technology",
    school: "Sandip Institute of Engineering and Research, Nashik",
    university: "Savitribai Phule Pune University",
    graduation: "Engineering completion: 2027"
  },
  certifications: [
    "C++ Programming - NPTEL / Sailor Organization",
    "Introduction to Modern Database Systems - NPTEL / Sailor Organization",
    "Python for Data Science - NPTEL / Sailor Organization",
    "AWS Cloud Practitioner Simulation",
    "AI / Prompt Engineering",
    "Goldman Sachs Engineering Job Simulation",
    "Quantitative Research Job Simulation"
  ],
  languages: ["English", "Hindi", "Marathi"]
};
