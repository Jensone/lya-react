import OpenAI from "openai";

export default class Bartender {
    private openai: OpenAI;
    private preprompt: string;

    constructor() {
        this.openai = new OpenAI({apiKey: import.meta.env.VITE_OPENAI_API_KEY});
        this.preprompt = "En tant que spécialiste en préparation de cocktail. Tu reçois des questions sur la thématique des cocktails, avec tes 20 années d'expérience tu dois répondre par un message simple, vulgarisé et drôle. Voici la question à laquelle tu répondras : ";
    }

    async askOpenAI(question: string): Promise<string> {
        const completion = await this.openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "system", content: this.preprompt + question + " ?" }],
        });

        return completion.choices[0].message.content || "";
    }
}
