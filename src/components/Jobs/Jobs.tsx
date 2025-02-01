import React from "react";
import JobCard from "./JobCard";

export default function Jobs() {
  return (
    <div className="container max-w-full" style={{ justifyItems: "center" }}>
      <div className="pt-3">
        <h1 className="lg:text-3xl text-2xl mb-5 text-center">Find your perfect Position</h1>
      </div>
      <JobCard />
    </div>
  );
}
