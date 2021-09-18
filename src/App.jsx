import React from 'react'
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChannelListContainer, ChannelContainer, Auth } from './components';
const apikey = "83924mre6spp";

const client = StreamChat.getInstance(apikey);
const App = () => {
    return (
        <div>
            <div className="app__wrapper">
                <Chat client={client} theme="team light">
                    <ChannelListContainer />
                    <ChannelContainer />
                </Chat>
            </div>
        </div>
    )
}

export default App
