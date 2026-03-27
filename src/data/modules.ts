export interface UserStory {
    role: string;
    story: string;
}

export interface FeatureGroup {
    groupName: string;
    stories: UserStory[];
}

export interface Module {
    slug: string;
    moduleNumber: number;
    title: string;
    shortTitle: string;
    objective: string;
    description: string;
    features: string[];
    featureGroups: FeatureGroup[];
    icon: string; // react-icons icon name key
    category: "functional" | "platform";
}

export const modules: Module[] = [
    {
        slug: "ai-agent-builder",
        moduleNumber: 1,
        title: "AI Agent Builder & Orchestration",
        shortTitle: "AI Agents",
        objective:
            "To provide an intuitive environment for designing, training, and deploying custom AI agents tailored to specific business workflows.",
        description:
            "Drag-and-drop agent designer, pre-built agent templates, multi-step reasoning chains, automated fine-tuning, and real-time agent performance monitoring.",
        features: [
            "Visual Agent Designer (Drag & Drop)",
            "Pre-Built Agent Templates Library",
            "Multi-Step Reasoning Chain Builder",
            "Automated Fine-Tuning Pipelines",
            "Agent Performance Monitoring & Analytics",
        ],
        featureGroups: [
            {
                groupName: "Agent Design",
                stories: [
                    {
                        role: "AI Engineer",
                        story:
                            "I can design custom AI agents using a visual drag-and-drop interface.",
                    },
                    {
                        role: "AI Engineer",
                        story:
                            "I can define custom reasoning chains and tool integrations for each agent.",
                    },
                    {
                        role: "Business User",
                        story: "I can browse and deploy pre-built agent templates for common tasks.",
                    },
                ],
            },
            {
                groupName: "Agent Training",
                stories: [
                    {
                        role: "ML Engineer",
                        story:
                            "I can upload training data and fine-tune agent models for domain-specific tasks.",
                    },
                    {
                        role: "ML Engineer",
                        story:
                            "I can set evaluation benchmarks and track model accuracy over training iterations.",
                    },
                ],
            },
            {
                groupName: "Deployment & Monitoring",
                stories: [
                    {
                        role: "AI Engineer",
                        story:
                            "I can deploy agents to production with one-click and monitor their real-time performance.",
                    },
                    {
                        role: "Operations Lead",
                        story:
                            "I can view dashboards showing agent response times, accuracy, and error rates.",
                    },
                ],
            },
            {
                groupName: "Alerts & Notifications",
                stories: [
                    {
                        role: "AI Engineer",
                        story:
                            "I want to receive an alert when an agent's accuracy drops below a defined threshold.",
                    },
                ],
            },
        ],
        icon: "users",
        category: "functional",
    },
    {
        slug: "knowledge-vault",
        moduleNumber: 2,
        title: "Knowledge Vault (AI Knowledge Base)",
        shortTitle: "Knowledge Vault",
        objective:
            "To provide a secure, AI-powered repository for organizing and retrieving enterprise knowledge using vector search and semantic indexing.",
        description:
            "Intelligent document ingestion with auto-tagging, semantic search powered by embeddings, role-based access control, and automated knowledge graph generation.",
        features: [
            "Intelligent Document Ingestion & Auto-Tagging",
            "Semantic Search (Vector Embeddings)",
            "Role-Based Access Control (RBAC)",
            "Knowledge Graph Visualization",
        ],
        featureGroups: [
            {
                groupName: "Document Ingestion & Indexing",
                stories: [
                    {
                        role: "Data Engineer",
                        story:
                            "I can upload documents (PDF, DOCX, TXT, HTML) and they are automatically indexed with AI-generated tags.",
                    },
                    {
                        role: "Business User",
                        story: "I can search knowledge using natural language queries.",
                    },
                ],
            },
            {
                groupName: "Role-Based Access Control (RBAC)",
                stories: [
                    {
                        role: "Admin",
                        story: "I can set permissions for each knowledge category and document.",
                    },
                    {
                        role: "Team Lead",
                        story:
                            "I can access knowledge bases relevant to my team's domain.",
                    },
                    {
                        role: "User",
                        story:
                            "I can only access documents within my authorized knowledge spaces.",
                    },
                ],
            },
        ],
        icon: "shield",
        category: "functional",
    },
    {
        slug: "workflow-automator",
        moduleNumber: 3,
        title: "Workflow Automator",
        shortTitle: "Workflows",
        objective:
            "To automate complex business processes using AI-driven decision-making and intelligent routing.",
        description:
            "Visual workflow builder, conditional branching with AI decisions, event-triggered automations, parallel execution paths, and comprehensive audit logging.",
        features: [
            "Visual Workflow Builder",
            "AI-Powered Conditional Branching",
            "Event-Triggered Automations",
            "Parallel Execution Paths",
            "Comprehensive Audit Logging",
        ],
        featureGroups: [
            {
                groupName: "Workflow Design",
                stories: [
                    {
                        role: "Operations Lead",
                        story:
                            "I can design multi-step workflows with conditional AI decision points.",
                    },
                ],
            },
            {
                groupName: "Trigger & Execution",
                stories: [
                    {
                        role: "Business User",
                        story:
                            "I can trigger a workflow manually or set it to run on a schedule or event.",
                    },
                    {
                        role: "Admin",
                        story:
                            "I will receive a notification when a workflow fails and can view the error log.",
                    },
                    {
                        role: "Operations Lead",
                        story: "I can approve or override AI decisions at designated checkpoints.",
                    },
                ],
            },
            {
                groupName: "Monitoring & Logs",
                stories: [
                    {
                        role: "Admin",
                        story:
                            "I can see a timeline view of all workflow executions and their statuses.",
                    },
                    {
                        role: "Business User",
                        story:
                            "I can view a log of all automations that affected my tasks.",
                    },
                ],
            },
        ],
        icon: "calendar",
        category: "functional",
    },
    {
        slug: "insights-dashboard",
        moduleNumber: 4,
        title: "Insights Dashboard (Self-Service Analytics)",
        shortTitle: "Insights Dashboard",
        objective:
            "To empower teams with real-time, AI-generated insights from their data without requiring data science expertise.",
        description:
            "Personalized AI dashboards, natural language querying, automated anomaly detection, visual data explorer, and one-click report generation.",
        features: [
            "Personalized AI Dashboards",
            "Natural Language Data Querying",
            "Automated Anomaly Detection",
            "Visual Data Explorer",
            "One-Click Report Generation",
        ],
        featureGroups: [
            {
                groupName: "Dashboard & Visualization",
                stories: [
                    {
                        role: "Business User",
                        story:
                            "I can see a personalized dashboard with key metrics, AI-generated insights, and anomaly alerts.",
                    },
                ],
            },
            {
                groupName: "Natural Language Queries",
                stories: [
                    {
                        role: "Business User",
                        story:
                            "I can ask questions about my data in plain English and get instant visual answers.",
                    },
                ],
            },
            {
                groupName: "Report Generation",
                stories: [
                    {
                        role: "Admin",
                        story: "I can generate and schedule automated reports.",
                    },
                    {
                        role: "Business User",
                        story:
                            "I can export dashboard views as PDF or CSV reports.",
                    },
                ],
            },
            {
                groupName: "Data Explorer",
                stories: [
                    {
                        role: "Data Analyst",
                        story:
                            "I can explore datasets with interactive charts and drill-down capabilities.",
                    },
                ],
            },
        ],
        icon: "layout",
        category: "functional",
    },
    {
        slug: "predictive-analytics",
        moduleNumber: 5,
        title: "Predictive Analytics Engine",
        shortTitle: "Predictive Analytics",
        objective:
            "To leverage machine learning for forecasting trends, identifying patterns, and enabling data-driven decision making.",
        description:
            "Time series forecasting, churn prediction, demand planning, what-if scenario modeling, and automated model retraining pipelines.",
        features: [
            "Time Series Forecasting",
            "Churn & Risk Prediction",
            "Demand Planning & Optimization",
            "What-If Scenario Modeling",
            "Automated Model Retraining",
        ],
        featureGroups: [
            {
                groupName: "Forecasting",
                stories: [
                    {
                        role: "Data Scientist",
                        story: "I can build and deploy time series forecasting models.",
                    },
                    {
                        role: "Business User",
                        story: "I can view AI-generated forecasts and trend predictions.",
                    },
                ],
            },
            {
                groupName: "Scenario Modeling",
                stories: [
                    {
                        role: "Operations Lead",
                        story:
                            "I can run what-if scenarios to evaluate different business strategies.",
                    },
                    {
                        role: "Data Scientist",
                        story: "I can compare model accuracy across different approaches.",
                    },
                    {
                        role: "Business User",
                        story: "I can view predictions with confidence intervals.",
                    },
                ],
            },
        ],
        icon: "chart",
        category: "functional",
    },
    {
        slug: "data-pipeline-manager",
        moduleNumber: 6,
        title: "Data Pipeline Manager",
        shortTitle: "Data Pipelines",
        objective:
            "To simplify the process of ingesting, transforming, and routing data across systems with AI-assisted ETL.",
        description:
            "Visual pipeline builder, 100+ pre-built connectors, AI-assisted data transformation, real-time streaming support, and comprehensive data quality monitoring.",
        features: [
            "Visual Pipeline Builder",
            "100+ Pre-Built Data Connectors",
            "AI-Assisted Data Transformation",
            "Real-Time Streaming Support",
            "Data Quality Monitoring & Alerts",
        ],
        featureGroups: [
            {
                groupName: "Pipeline Design",
                stories: [
                    {
                        role: "Data Engineer",
                        story:
                            "I can build data pipelines visually and connect to 100+ data sources.",
                    },
                ],
            },
            {
                groupName: "Monitoring & Alerts",
                stories: [
                    {
                        role: "Data Engineer",
                        story:
                            "I can monitor pipeline health, throughput, and receive alerts on failures or data quality issues.",
                    },
                ],
            },
        ],
        icon: "receipt",
        category: "functional",
    },
    {
        slug: "model-training-studio",
        moduleNumber: 7,
        title: "Model Training Studio",
        shortTitle: "Model Studio",
        objective:
            "To provide a comprehensive environment for training, evaluating, and deploying machine learning models at scale.",
        description:
            "Experiment tracking, hyperparameter optimization, distributed training, model versioning, A/B testing, and one-click deployment to production endpoints.",
        features: [
            "Experiment Tracking & Comparison",
            "Automated Hyperparameter Optimization",
            "Distributed Training Support",
            "Model Versioning & Registry",
            "One-Click Deployment & A/B Testing",
        ],
        featureGroups: [
            {
                groupName: "Training Configuration",
                stories: [
                    {
                        role: "ML Engineer",
                        story:
                            "I can configure training jobs with custom datasets, hyperparameters, and compute resources.",
                    },
                ],
            },
            {
                groupName: "Training & Evaluation",
                stories: [
                    {
                        role: "ML Engineer",
                        story:
                            "I can run training experiments, track metrics in real-time, and compare results across runs.",
                    },
                ],
            },
            {
                groupName: "Deployment",
                stories: [
                    {
                        role: "System",
                        story:
                            "Models are automatically versioned, registered, and deployed to scalable production endpoints.",
                    },
                ],
            },
        ],
        icon: "dollar",
        category: "functional",
    },
    {
        slug: "admin-console",
        moduleNumber: 8,
        title: "Admin Console (For Client Organization)",
        shortTitle: "Admin Console",
        objective:
            "To provide the client's admin team with the tools to manage their organization's instance of the AI platform.",
        description:
            "User & role management, organization profile customization, API key management, usage quotas, and comprehensive audit logs.",
        features: [
            "User & Role Management",
            "Organization Profile Customization",
            "API Key & Integration Management",
            "Usage Quotas & Rate Limiting",
            "Audit Logs & Activity Tracking",
        ],
        featureGroups: [
            {
                groupName: "User Management",
                stories: [
                    {
                        role: "Admin",
                        story:
                            "I can invite new team members, assign roles, and deactivate users.",
                    },
                ],
            },
            {
                groupName: "Organization Settings",
                stories: [
                    {
                        role: "Admin",
                        story:
                            "I can customize the platform with our organization's branding, manage API keys, and configure integrations.",
                    },
                ],
            },
            {
                groupName: "Usage & Governance",
                stories: [
                    {
                        role: "Admin",
                        story:
                            "I can set usage quotas, monitor API consumption, and review audit logs for compliance.",
                    },
                ],
            },
        ],
        icon: "settings",
        category: "platform",
    },
    {
        slug: "super-admin",
        moduleNumber: 9,
        title: "Super Admin Module (For NeuralOps)",
        shortTitle: "Super Admin",
        objective:
            "To give NeuralOps complete control over the SaaS platform, its clients, and subscriptions.",
        description:
            "Client account management, subscription plan & billing integration, platform-wide analytics, feature flagging per plan, and system announcements.",
        features: [
            "Client Account Management (Onboarding, Suspension)",
            "Subscription Plan & Billing Integration (e.g., Stripe)",
            "Platform-Wide Analytics & Health Monitoring",
            "Feature Flagging / Module Management per Plan",
            "System Announcements",
        ],
        featureGroups: [
            {
                groupName: "Client Management",
                stories: [
                    {
                        role: "Super Admin",
                        story:
                            "I can create a new, isolated instance for a new client organization.",
                    },
                ],
            },
            {
                groupName: "Subscription & Billing",
                stories: [
                    {
                        role: "Super Admin",
                        story:
                            "I can manage client subscription plans and view payment status.",
                    },
                ],
            },
            {
                groupName: "Platform Analytics",
                stories: [
                    {
                        role: "Super Admin",
                        story:
                            "I can view a dashboard with platform-wide metrics (active clients, total users, revenue, compute usage).",
                    },
                ],
            },
            {
                groupName: "Feature Flagging",
                stories: [
                    {
                        role: "Super Admin",
                        story:
                            "I can enable or disable specific modules for a given client based on their subscription plan.",
                    },
                ],
            },
        ],
        icon: "server",
        category: "platform",
    },
];

export function getModuleBySlug(slug: string): Module | undefined {
    return modules.find((m) => m.slug === slug);
}

export function getFunctionalModules(): Module[] {
    return modules.filter((m) => m.category === "functional");
}

export function getPlatformModules(): Module[] {
    return modules.filter((m) => m.category === "platform");
}
