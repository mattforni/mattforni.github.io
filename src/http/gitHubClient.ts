import axios, { AxiosResponse } from "axios";

const HEADERS = {
    'Accept': 'application/vnd.github.v3+json'
};

interface GitHubEvent {
    id: number;
    type: string;
    actor: {
        login: string;
        avatar_url: string;
    };
    repo: {
        name: string;
        url: string;
    };
    created_at: string;
}

// Exports all methods by default
const GitHubClient = {
    /**
     * Creates a GET request for the public events for my GitHub user (mattforni)
     */
    getPublicEvents(): Promise<AxiosResponse<GitHubEvent[]>> {
        return axios.get<GitHubEvent[]>(
            'https://api.github.com/users/mattforni/events/public',
            {
                headers: HEADERS
            }
        );
    }
};

export default GitHubClient;
