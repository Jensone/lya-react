import { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import TrashIcon from '../components/icons/TrashIcon';
import { NavLink } from 'react-router-dom';
import Storage from '../functions/Storage';
import BookmarkIcon from '../components/icons/BookmarkIcon';

interface Chat {
    id: string;
    question: string;
    answer: string;
}

const store = new Storage();

export default function Messages() {
    const [chats, setChats] = useState<Chat[]>([]);

    const loadChats = () => {
        const chats = store.getChats();
        setChats(chats.map((c) => ({
            id: c,
            question: "",
            answer: ""
        })));
    };

    const handleDelete = (id: string) => {
        store.remove(id);
    };

    useEffect(() => {
        loadChats();
    }, []);

    return (
        <main className="bg-slate-50 p-5 flex flex-col items-center gap-4 min-w-full min-h-screen">
            <Nav />
            <div>
                <h1 className="text-6xl font-semibold mb-10 text-center">
                    Messages
                </h1>
                <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {chats.map((c) => (
                        <li
                            className="border h-46 p-5 rounded-xl bg-white hover:shadow-md"
                            key={c.id}
                        >
                            <div className="flex items-center justify-between text-sm uppercase text-slate-400">
                                <BookmarkIcon /> Le {new Date().toLocaleDateString()}
                            </div>
                            <hr className="my-4" />
                            <div className="italic text-slate-400">
                                {c.question}
                            </div>
                            <div className="mt-4 flex justify-between">
                                <button
                                    onClick={() => handleDelete(c.id)}
                                    className="rounded-full p-2 hover:bg-red-800">
                                    <TrashIcon />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}
