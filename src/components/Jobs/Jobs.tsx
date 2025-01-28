import React from "react";
import JobCard from "./JobCard";

export default function Jobs() {
  return (
    <div className="container max-w-full" style={{ justifyItems: "center" }}>
      <div className="pt-3">
        <h1 className="text-4xl mb-6 text-center">Find your perfect Position</h1>
      </div>
      <JobCard />
    </div>
  );
}
