'use client';

export interface Template {
    id: number;
    name: string;
    description: string;
    tags: string[];
}

interface TemplateCardProps {
    template: Template;
}

export default function TemplateCard({ template }: TemplateCardProps) {
    const handleDeploy = () => {
        // Placeholder functionality
        alert(`Deploying ${template.name}... (Not really)`);
    };

    return (
        <div className="border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow bg-gray-800 border-gray-700">
            <h3 className="text-xl font-bold mb-2">{template.name}</h3>
            <p className="text-gray-400 mb-4">{template.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {template.tags.map((tag) => (
                    <span key={tag} className="bg-gray-700 text-gray-300 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                        {tag}
                    </span>
                ))}
            </div>
            <button
                onClick={handleDeploy}
                className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-md"
            >
                Deploy
            </button>
        </div>
    );
}
