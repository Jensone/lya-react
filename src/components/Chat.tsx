import React, { useState } from "react";
import Bartender from "../functions/Bartender";
import Storage from "../functions/Storage";
import { v4 as uuidv4 } from 'uuid';
import SendIcon from "./icons/SendIcon";
import { ChatInterface } from "../interfaces/ChatInterface";

const store = new Storage();

export default function Chat() {
    const [isResponded, setIsResponded] = useState<boolean>(false);
    const [question, setQuestion] = useState<string>("");
    const [message, setMessage] = useState<ChatInterface | null>(null);
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const bartender = new Bartender();
        try {
            const res: string = await bartender.askOpenAI(question);
            const id = uuidv4();
            setMessage({
                id: id,
                question: question,
                answer: res,
            });
            store.set(id, {
                id: id,
                question: question,
                answer: res,
            });
            setIsResponded(true);
            setQuestion("");
        } catch (error) {
            console.error('Error fetching response:', error);
        }
    };

    return (
        <section className="py-10 w-full border-t">
            {isResponded && message ? (
                <section>
                    <h2 className="text-2xl text-center font-bold mb-4">
                        Réponse à ta question:
                    </h2>
                    <p>{message.answer}</p>
                </section>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    className="w-full flex items-center justify-center gap-4"
                >
                    <input
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        type="text"
                        name="question"
                        id="question"
                        className="border rounded-full px-5 h-9"
                        placeholder="Pose ta question"
                    />
                    <button type="submit" className="bg-neutral-900 rounded-full p-2">
                        <SendIcon />
                    </button>
                </form>
            )}
        </section>
    );
}
