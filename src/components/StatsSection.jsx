import React from 'react';
import JobListingContainer from './jobs/JobListingContainer';
import { getJobs } from '@/lib/api/jobs';

const StatsSection = async() => {

    const jobs = await getJobs();

    return (
        <div>
            <JobListingContainer initialJobs={jobs || []} />
        </div>
    );
};

export default StatsSection;