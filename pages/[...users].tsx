import React, { useState } from 'react';
import { useRouter } from 'next/router';

const generateStreamUrl = (name: string): string => {
    return `https://player.twitch.tv/?channel=${name}&parent=localhost`
}

const generateChatUrl = (name: string): string => {
    return `https://www.twitch.tv/embed/${name}/chat?darkpopout&parent=localhost`
}

const Streams = () => {
    const [showChat, setShowChat] = useState(false);

    const router = useRouter();
    let { users } = router.query;

    if (!users) {
        return <p>Woah! How did you get here?</p>;
    }
    if (!Array.isArray(users)) {
        users = [users];
    }

    return (
        <div className="">
            <button className="absolute text-white" onClick={() => setShowChat(!showChat)}>Toggle Chat</button>
            <div className="grid grid-cols-2 grid-flow-row h-screen w-screen">
                {
                    users.map((u) =>
                        <div className="flex flex-col" key={u}>
                            <iframe
                                src={generateStreamUrl(u)}
                                frameBorder="0"
                                allowFullScreen={true}
                                scrolling="no"
                                className={`w-full ${showChat ? 'h-1/2' : 'h-full'}`}
                            />
                            {
                                showChat ?
                                    <iframe
                                        id="chat_embed"
                                        src={generateChatUrl(u)}
                                        className="h-1/2"
                                    /> :
                                    null
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Streams;