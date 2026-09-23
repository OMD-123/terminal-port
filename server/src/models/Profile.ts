import mongoose, { type Model, Schema } from "mongoose";

const projectSchema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    impact: { type: String, required: true },
    stack: { type: [String], required: true },
    url: { type: String, required: true }
  },
  { _id: false }
);

const profileSchema = new Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    location: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    github: { type: String, required: true },
    linkedin: { type: String, required: true },
    npm: { type: String, required: true },
    headline: { type: String, required: true },
    summary: { type: String, required: true },
    metrics: { type: [String], required: true },
    focus: { type: [String], required: true },
    keywords: { type: [String], required: true },
    skills: { type: Schema.Types.Mixed, required: true },
    projects: { type: [projectSchema], required: true },
    education: {
      degree: { type: String, required: true },
      school: { type: String, required: true },
      university: { type: String, required: true },
      graduation: { type: String, required: true }
    },
    certifications: { type: [String], required: true },
    languages: { type: [String], required: true }
  },
  { timestamps: true }
);

export type PortfolioProfileDocument = typeof profileSchema.obj;

export const ProfileModel =
  (mongoose.models.Profile as Model<PortfolioProfileDocument> | undefined) ||
  mongoose.model<PortfolioProfileDocument>("Profile", profileSchema);
