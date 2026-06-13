"use client";

import { useState } from "react";
import { Card } from "@heroui/react";
import { Briefcase } from "@gravity-ui/icons";

const companies = [
  {
    id: 1,
    name: "Google Inc.",
    industry: "Technology",
    location: "Mountain View",
    activeJobs: 24,
    icon: "G",
    color: "#1a73e8",
    bg: "#1e2a3a",
  },
  {
    id: 2,
    name: "Meta Platforms",
    industry: "Social Media",
    location: "Menlo Park",
    activeJobs: 18,
    icon: "M",
    color: "#0082fb",
    bg: "#1a2233",
  },
  {
    id: 3,
    name: "Stripe",
    industry: "Fintech",
    location: "San Francisco",
    activeJobs: 12,
    icon: "S",
    color: "#635bff",
    bg: "#1e1e2e",
  },
  {
    id: 4,
    name: "Tesla",
    industry: "Automotive",
    location: "Austin",
    activeJobs: 31,
    icon: "T",
    color: "#e82127",
    bg: "#2a1a1a",
  },
];

function CompanyRow({ company }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer"
      style={{
        background: hovered ? "rgba(255,255,255,0.05)" : "transparent",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Company Icon */}
      <div
        className="flex items-center justify-center rounded-xl shrink-0"
        style={{
          width: 48,
          height: 48,
          background: company.bg,
          border: `1px solid rgba(255,255,255,0.08)`,
        }}
      >
        <span
          style={{
            color: company.color,
            fontWeight: 700,
            fontSize: 18,
            fontFamily: "monospace",
          }}
        >
          {company.icon}
        </span>
      </div>

      {/* Company Info */}
      <div className="flex-1 min-w-0">
        <p
          className="font-semibold truncate"
          style={{ color: "#f0f0f0", fontSize: 15 }}
        >
          {company.name}
        </p>
        <p style={{ color: "#888", fontSize: 12, marginTop: 2 }}>
          {company.industry} • {company.location}
        </p>
      </div>

      {/* Active Jobs */}
      <div className="flex flex-col items-end shrink-0">
        <span
          style={{
            color: "#f0f0f0",
            fontWeight: 700,
            fontSize: 20,
            lineHeight: 1,
          }}
        >
          {company.activeJobs}
        </span>
        <span
          style={{
            color: "#666",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "0.06em",
            marginTop: 2,
            textTransform: "uppercase",
          }}
        >
          Active Jobs
        </span>
      </div>
    </div>
  );
}

export default function TopCompanies() {
  return (
    <div
      className="flex items-center justify-center "
    //   style={{ background: "#0f0f0f" }}
    >
      <Card
        className="w-full max-w-sm"
        style={{
          background: "#1a1a1a",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 20,
          boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
        }}
      >
        <div className="p-5">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2
              style={{
                color: "#f0f0f0",
                fontWeight: 700,
                fontSize: 20,
              }}
            >
              My Top Companies
            </h2>
            <button
              style={{
                color: "#888",
                fontSize: 13,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            >
              View all
            </button>
          </div>

          {/* Company List */}
          <div className="flex flex-col gap-1">
            {companies.map((company) => (
              <CompanyRow key={company.id} company={company} />
            ))}
          </div>

          {/* Divider */}
          <div
            style={{
              height: 1,
              background: "rgba(255,255,255,0.07)",
              margin: "16px 0 12px",
            }}
          />

          {/* View All Button */}
          <button
            className="w-full flex items-center justify-center gap-2 rounded-xl transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#ccc",
              fontSize: 14,
              fontWeight: 500,
              padding: "12px 0",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.09)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            }}
          >
            <Briefcase width={15} height={15} />
            View All Companies
          </button>
        </div>
      </Card>
    </div>
  );
}