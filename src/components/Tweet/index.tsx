import React from 'react';


import { 
    Container, 
    Retweeted,
    RocketseatIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
        <Retweeted>
            <RocketseatIcon />
            Você retweetou
        </Retweeted>

        <Body>
            <Avatar />
            <Content>
                <Header>
                    <strong>Fortnite Brasil</strong>
                    <span>@FortniteBrasil</span>
                    <Dot />
                    <time>29 de jul</time>
                </Header>

                <Description>Eu sou divertido!</Description>
           
                <ImageContent />

                <Icons>
                    <Status>
                        <CommentIcon />
                        5k
                    </Status>
                    <Status>
                        <RetweetIcon />
                        1k
                    </Status>
                    <Status>
                        <LikeIcon />
                        10k
                    </Status>
                </Icons>
            </Content>
        </Body>
    </Container>
  );
}

export default Tweet;