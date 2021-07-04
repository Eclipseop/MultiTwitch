import React from 'react';
import { useRouter } from 'next/router';

const generateStreamUrl = (name: string): string => {
    return `https://player.twitch.tv/?channel=${name}&parent=localhost`
}

// eslint-disable-next-line no-unused-vars
const generateChatUrl = (name: string): string => {
    return `https://www.twitch.tv/embed/${name}/chat?parent=localhost`
}

// change to getInitalProps for loading users
const Streams = () => {
    const router = useRouter();
    let { users } = router.query;
    if (!users) {
        return <p>Woah! How did you get here?</p>;
    }
    if (!Array.isArray(users)) {
        users = [users];
    }
    return (
        <div className="flex h-screen w-screen">{
            users.map((u) =>
                <div className="w-3/6" key={u}>
                    <iframe src={generateStreamUrl(u)} frameBorder="0" allowFullScreen={true} scrolling="no" className="w-full h-full" />
                </div>
            )
        }
        </div>
    )
}

export default Streams;