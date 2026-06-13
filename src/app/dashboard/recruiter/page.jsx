"use client";
import React from "react";
import { useSession } from "@/lib/auth-client";
import {
  Briefcase,
  Persons,
  Thunderbolt,
  CircleCheck,
} from "@gravity-ui/icons";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import RecentApplicationsPage from "@/components/dashboard/RecentApplications";
import TopCompanies from "@/components/dashboard/TopCompanies";

const RecruiterDashboardHomePage = () => {
  const { data: session, isPending } = useSession();
  if (isPending) {
    return <div>Loading...</div>;
  }

  const recruiterStats = [
    { title: "Total Job Posts", value: "48", icon: Briefcase },
    { title: "Total Applicants", value: "1,284", icon: Persons },
    { title: "Active Jobs", value: "18", icon: Thunderbolt },
    { title: "Jobs Closed", value: "32", icon: CircleCheck },
  ];

  const user = session?.user;

  return (
    <div className="mx-4">
      <h1 className="text-4xl p-4">Welcome back, {user?.name}</h1>
      <DashboardStats statsData={recruiterStats}></DashboardStats>
      <div className=" my-10 grid grid-cols-3">
        <div className="col-span-2">
          <RecentApplicationsPage></RecentApplicationsPage>
        </div>
        <div className="col-span-1">
          <TopCompanies></TopCompanies>
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboardHomePage;
