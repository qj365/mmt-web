import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical';

export type JobItem = {
    id: string | number;
    jobTitle: string;
    slug: string;
    applicationDeadline: string;
    location: string;
    content: string;
    position: string;
    education: string;
    experience: string;
    workType: string;
    gender: string;
    ageRange: string;
    salary: string;
    employmentType: string;
    featuredImage: {
        url: string;
        alt: string;
    };
    description: SerializedEditorState;
    requirements: SerializedEditorState;
    benefits: SerializedEditorState;
    application: SerializedEditorState;
};
