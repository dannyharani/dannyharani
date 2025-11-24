import type { PageServerLoad } from './$types';

interface GithubRepo {
    name: string;
    description: string;
    html_url: string;
    language: string;
    stargazers_count: number;
    topics: string[];
    fork: boolean;
    languages_url: string;
    pushed_at: string;
    homepage: string;
}

export const load: PageServerLoad = async ({ fetch }) => {
    try {
        const response = await fetch('https://api.github.com/users/dannyharani/repos?sort=updated&per_page=100');
        
        if (!response.ok) {
            throw new Error('Failed to fetch repositories');
        }

        const repos: GithubRepo[] = await response.json();

        // Filter out forks and only keep repos with "highlight" topic
        const highlightedRepos = repos.filter(repo => 
            !repo.fork && repo.topics?.includes('highlight')
        );

        const projects = await Promise.all(highlightedRepos.map(async (repo) => {
            // Fetch languages for each repo
            let languages: string[] = [];
            try {
                const langResponse = await fetch(repo.languages_url);
                if (langResponse.ok) {
                    const langData = await langResponse.json();
                    languages = Object.keys(langData);
                } else {
                    languages = [repo.language].filter(Boolean);
                }
            } catch (e) {
                console.error(`Failed to fetch languages for ${repo.name}`, e);
                languages = [repo.language].filter(Boolean);
            }

            return {
                title: repo.name,
                description: repo.description || 'No description available.',
                // Combine languages and topics, excluding "highlight"
                tags: [...languages, ...(repo.topics || []).filter(t => t !== 'highlight')],
                link: repo.html_url,
                stars: repo.stargazers_count,
                pushed_at: repo.pushed_at,
                deployment: repo.homepage
            };
        }));

        // Sort by most recent contribution (pushed_at)
        projects.sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());

        const futureProjects = [
            {
                title: "Amazigh Learning Platform",
                description: "A crowdsourced learning platform for the Amazigh (Berber) language. Educators can create and share lesson plans, quizzes, and other educational resources. Students can access these resources, provide feedback, and practice Amazigh. Games and activities are also planned to make learning more engaging.",
                tags: ["TypeScript", "Next.js", "Supabase", "Tailwind CSS", "Shadcn UI", "SvelteKit"],
                link: "#",
                stars: 0,
                deployment: undefined
            },
            {
                title: "MP3 to ChipTune Converter",
                description: "A web or python app that converts MP3 files to ChipTune audio. Research is needed to determine feasibility.",
                tags: ["Future", "ChipTune", "Python?", "Web Audio API?"],
                link: "#",
                stars: 0,
                deployment: undefined
            }
        ];

        return {
            projects,
            futureProjects
        };
    } catch (error) {
        console.error('Error fetching repos:', error);
        return {
            projects: [],
            futureProjects: []
        };
    }
};
