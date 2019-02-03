import React from 'react';
import {Header,Grid,Image} from 'semantic-ui-react';
import PIC1 from '../../assets/pic1.jpg';
import PIC2 from '../../assets/pic2.jpg';
import './landingpage.css';

export default class LandingPage extends React.Component{
    render(){
        return(
            <div className="app-content landing-page">
            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={8}>
                            <Image src={PIC1} fluid/>
                    </Grid.Column>
                    <Grid.Column width={8}>
                    <Header as='h2'>Collaborative Storytelling</Header>
                    <span className="article">
                    Civilization is built out of stories: mine, yours, his, hers. 
                    When we share our stories, our hopes our fears, we have a better chance
                     of understanding each other, of become more integrated and less separated.
                    I hope you will enjoy the stories you read here and most importantly, 
                    I hope this site will inspire you to share your stories. 
                    Happy stories, sad stories, stories you've heard.
                    In order to encourage sharing of more personal stories,
                     we have the concept of Pseudonyms. With these pseudonyms, 
                     you can share stories that you might not want to publicly admit to, 
                     but sometimes sharing our stories helps us put them in perspective and helps 
                     us find comfort as we learn that others have problems very similar to ours.
                     </span>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={8}>
                    <Header as="h2">Without Comments</Header>
                    <span className="article">
                    Too often people listen, not to understand, but to respond.
                     We don't want that here. We want understanding. 
                     So if a particular story moves you to express yourself, 
                     do it as a story inspired by another story. 
                     There won't be any back and forth in the comment section to take away from the story.
                    Too often you see comments on YouTube videos or Facebook posts that look 
                    just like drive by shootings. Where the hate and the division take over and all
                     valuable discourse is just buried in noise we decided to forgo comments so we don't 
                     have to worry about that.
                     </span>
                    </Grid.Column>
                    <Grid.Column width={8}>
                    <Image src={PIC2} fluid/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
        );
    }
}