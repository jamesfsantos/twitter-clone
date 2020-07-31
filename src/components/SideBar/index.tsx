import React from 'react'
import StickyBox from 'react-sticky-box'

import List from '../List'
import FollowSuggestion from '../FollowSuggestion'
import News from '../News'

import { Container, SearchWrapper, SearchInput, SearchIcon, Body} from './styles';

const SideBar: React.FC = () => {
    return (
        <Container>
            <SearchWrapper>
            <SearchInput placeholder="Buscar no Twitter" />
                <SearchIcon />
            </SearchWrapper>

            <StickyBox> 
                <Body>
                    <List 
                        title="Talvez você curta"
                        elements={[
                            <FollowSuggestion 
                                name="Gustavo Lima"
                                nickname="@gustavo_lima_ofc"
                            />,
                            <FollowSuggestion 
                                name="Gottino"
                                nickname="@gottino_oficial"
                            />,
                            <FollowSuggestion 
                                name="Luiz Gonzaga"
                                nickname="@gonzaga_oficial"
                            />
                        ]}
                    />

                    <List 
                        title="Talvez você curta"
                        elements={[
                        <News />,
                        <News />,
                        <News />,
                        ]}
                    />

                    <List 
                        title="Talvez você curta"
                        elements={[
                        <News />,
                        <News />,
                        <News />,
                        ]}
                    />

                    <List 
                        title="Talvez você curta"
                        elements={[
                        <News />,
                        <News />,
                        <News />,
                        ]}
                    />

                    <List 
                        title="Talvez você curta"
                        elements={[
                        <News />,
                        <News />,
                        <News />,
                        ]}
                    />
                    </Body>
            </StickyBox>

            
        </Container>
    );
}

export default SideBar;