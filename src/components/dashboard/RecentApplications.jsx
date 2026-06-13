"use client";

import { Table } from "@heroui/react";

const applications = [
  {
    id: 1,
    name: "Julianne Moore",
    role: "Senior Product Designer",
    date: "Oct 24, 2023",
    experience: "6 years",
    status: "Interviewing",
  },
  {
    id: 2,
    name: "Robert Downey",
    role: "Backend Engineer",
    date: "Oct 23, 2023",
    experience: "4 years",
    status: "New",
  },
  {
    id: 3,
    name: "Emma Stone",
    role: "Marketing Lead",
    date: "Oct 22, 2023",
    experience: "8 years",
    status: "Reviewing",
  },
  {
    id: 4,
    name: "Chris Pratt",
    role: "Product Manager",
    date: "Oct 21, 2023",
    experience: "5 years",
    status: "Rejected",
  },
];

const getStatusClass = (status) => {
  switch (status) {
    case "Interviewing":
      return "bg-green-500/10 text-green-400 border border-green-500/30";

    case "Reviewing":
      return "bg-yellow-500/10 text-yellow-400 border border-yellow-500/30";

    case "Rejected":
      return "bg-red-500/10 text-red-400 border border-red-500/30";

    default:
      return "bg-zinc-500/10 text-zinc-300 border border-zinc-500/30";
  }
};

export default function RecentApplications() {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-[#111111] p-6">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-semibold text-white">
          Recent Applications
        </h2>

        <button className="text-zinc-400 hover:text-white">
          View all
        </button>
      </div>

      <Table>
        <Table.ScrollContainer>
          <Table.Content
            aria-label="Recent Applications"
            className="min-w-full"
          >
            <Table.Header>
              <Table.Column>Candidate Name</Table.Column>
              <Table.Column>Role</Table.Column>
              <Table.Column>Date Applied</Table.Column>
              <Table.Column>Experience</Table.Column>
              <Table.Column>Status</Table.Column>
            </Table.Header>

            <Table.Body>
              {applications.map((item) => (
                <Table.Row key={item.id} id={item.id}>
                  <Table.Cell>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full border border-zinc-700 bg-zinc-800" />

                      <span className="font-semibold text-white">
                        {item.name}
                      </span>
                    </div>
                  </Table.Cell>

                  <Table.Cell>{item.role}</Table.Cell>

                  <Table.Cell>{item.date}</Table.Cell>

                  <Table.Cell>{item.experience}</Table.Cell>

                  <Table.Cell>
                    <span
                      className={`rounded-full px-4 py-2 text-sm font-medium ${getStatusClass(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
}