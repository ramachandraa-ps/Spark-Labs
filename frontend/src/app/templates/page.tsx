import TemplateCard, { Template } from '@/components/TemplateCard';
import Link from 'next/link';

const templates: Template[] = [
    {
        id: 1,
        name: 'Outbound Sales Agent',
        description: 'An agent that reads from a CRM, makes follow-up calls, and logs the outcome.',
        tags: ['Sales', 'Voice', 'Twilio', 'Salesforce'],
    },
    {
        id: 2,
        name: 'Inbound Support Agent',
        description: 'A voice agent for handling inbound support queries with low-latency responses.',
        tags: ['Support', 'Voice', 'LiveKit', 'Real-time'],
    },
    {
        id: 3,
        name: 'Appointment Booker',
        description: 'Schedules appointments with leads and adds them to your calendar.',
        tags: ['Scheduling', 'Voice', 'Google Calendar'],
    },
];

export default function TemplatesPage() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-8">Agent Template Library</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {templates.map((template) => (
                    <TemplateCard key={template.id} template={template} />
                ))}
            </div>
            <div className="mt-12">
                <Link href="/dashboard" className="text-blue-500 hover:underline">
                    &larr; Back to Dashboard
                </Link>
            </div>
        </div>
    );
}
