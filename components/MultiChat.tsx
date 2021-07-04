import React, { useState } from 'react';
import { generateChatUrl } from '../pages/[...users]'

type Props = {
    users: string[];
}

const MultiChat = ({ users }: Props) => {
    const [currentChat, setCurrentChat] = useState(users[0]);

    return (
        <div>
            <select className="absolute rounded bg-[#18181B] text-white" onChange={(e) => setCurrentChat(e.target.value)}>
                {
                    users.map((u) => <option key={u} value={u}>{u}</option>)
                }
            </select>
            <iframe
                className="w-full h-full"
                id="chat_embed"
                src={generateChatUrl(currentChat)}
            />
        </div>)
}

export default MultiChat;