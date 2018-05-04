import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card, Button } from './common';
import { auth } from '../config/firebase';

class Paragraph extends React.Component {
    render() {
        return (
            <Text style={styles.paragraph}>{this.props.children}</Text>
        );
    }
}

class Section extends React.Component {
    render() {
        return (
            <View style={styles.section}>
                <Text style={styles.sectionText}>{this.props.label}</Text>
                {this.props.children}
            </View>
        );
    }
}

class AboutUsScreen extends React.Component {

    static navigationOptions = {
        title: 'About Us'
    };

    render() {
        return (
            <ScrollView>
                <Section label="How it works">
                    <Paragraph>
                        MakeSoil matches people who make soil at home with neighbors who contribute their food scraps and waste.
                    </Paragraph>
                    <Paragraph>
                        Soil Makers are those who turn food scraps into living soil&mdash;or those who are learning to.
                    </Paragraph>
                    <Paragraph>
                        Soil Supporters are those who want to offer their food scraps to nearby heaps, which Soil Makers convert to soil.
                    </Paragraph>
                </Section>
                <Section label="Our Mission">
                    <Paragraph>
                        Earth has problems. Sprawling landfills are one. Topsoil depletion is another. Composting solves both.
                    </Paragraph>
                    <Paragraph>
                        When we compost our food waste and paper products, we keep valuable organic matter from needlessly filling up landfills and generate living, nourishing soil.
                    </Paragraph>
                    <Paragraph>
                        Very little of our food waste is composted. Few cities offer municipal composting services and few people make compost or understand what it really is. Most of the planet&#39;s 7.5 billion people send their food waste to landfills every day.
                    </Paragraph>
                    <Paragraph>
                        It&#39;s a mistake we can no longer afford to make.
                    </Paragraph>
                    <Paragraph>
                        The good news is that we don&#39;t need to wait for governments to change, or for global catastrophe to force us to change. We already know there is a more beautiful way.
                    </Paragraph>
                    <Paragraph>
                        Why treat the planet like garbage? Make soil.
                    </Paragraph>
                </Section>
                { auth.currentUser ?
                    undefined :
                    <Button label="Let's get started" onPress={() => this.props.navigation.navigate('Auth')}/>
                }
            </ScrollView>
        );
    }
}

const styles = {
    paragraph: {
        fontSize: 16,
        marginBottom: 16
    },
    sectionText: {
        fontSize: 24,
        color: '#396928',
        alignSelf: 'center'
    },
    section: {
        marginBottom: 16,
    }
};

export default AboutUsScreen;
