import React, { Component } from 'react';

import PostItem from './../PostItem/PostItem';

import './PostList.css';

class PostList extends Component {
    state = {
        posts: [
            {
                id: 1,
                author: {
                    name: 'João Silva',
                    avatar: 'https://i.pravatar.cc/150?img=12'
                },
                date: '05 fev 2020',
                content: 'Pessoal, estou estudando ReactJS',
                comments: [
                    {
                        id: 1,
                        author: {
                            name: 'Bruno Lisboa',
                            avatar: 'https://i.pravatar.cc/150?img=8'
                        },
                        content: 'Eu também!'
                    }
                ]
            },
            {
                id: 2,
                author: {
                    name: 'Julia Castro',
                    avatar: 'https://i.pravatar.cc/150?img=26'
                },
                date: '05 fev 2020',
                content: 'Desafio 04 do Bootcamp finalizado!',
                comments: [
                    {
                        id: 2,
                        author: {
                            name: 'Felipe Silva',
                            avatar: 'https://i.pravatar.cc/150?img=68'
                        },
                        content: 'Estou quase lá'
                    }
                ]
            }
        ]
    };

    render() {
        const { posts } = this.state;

        return (
            <div className="post-list">
                {posts.map(post => (
                    <PostItem key={post.id} {...post} />
                ))}
            </div>
        );
    }
}

export default PostList;
